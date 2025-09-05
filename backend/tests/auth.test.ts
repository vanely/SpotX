import request from 'supertest';
import App from '../src/app';
import { testDb, createTestUser, createTestMagicLink } from './setup';
import { generateToken } from '../src/utils/jwt.util';

const app = new App().getApp();

describe('Authentication', () => {
  describe('POST /api/auth/send-magic-link', () => {
    it('should send magic link to valid email', async () => {
      const response = await request(app)
        .post('/api/auth/send-magic-link')
        .send({
          email: 'test@example.com',
        });

      expect(response.status).toBe(200);
      expect(response.body.success).toBe(true);
      expect(response.body.message).toContain('Magic link sent');

      // Verify magic link was created in database
      const magicLink = await testDb.magicLink.findFirst({
        where: { email: 'test@example.com' },
      });
      expect(magicLink).toBeTruthy();
      expect(magicLink?.used).toBe(false);
    });

    it('should reject invalid email format', async () => {
      const response = await request(app)
        .post('/api/auth/send-magic-link')
        .send({
          email: 'invalid-email',
        });

      expect(response.status).toBe(400);
      expect(response.body.success).toBe(false);
    });

    it('should handle missing email', async () => {
      const response = await request(app)
        .post('/api/auth/send-magic-link')
        .send({});

      expect(response.status).toBe(400);
      expect(response.body.success).toBe(false);
    });
  });

  describe('POST /api/auth/verify-magic-link', () => {
    it('should verify valid magic link for existing user', async () => {
      const user = await createTestUser({
        email: 'existing@example.com',
      });

      const magicLink = await createTestMagicLink('existing@example.com', {
        userId: user.id,
      });

      const response = await request(app)
        .post('/api/auth/verify-magic-link')
        .send({
          token: magicLink.token,
        });

      expect(response.status).toBe(200);
      expect(response.body.success).toBe(true);
      expect(response.body.data.user.email).toBe('existing@example.com');
      expect(response.body.data.accessToken).toBeTruthy();
      expect(response.body.data.isNewUser).toBe(false);

      // Verify magic link is marked as used
      const updatedMagicLink = await testDb.magicLink.findUnique({
        where: { id: magicLink.id },
      });
      expect(updatedMagicLink?.used).toBe(true);
    });

    it('should create new user for new email', async () => {
      const magicLink = await createTestMagicLink('new@example.com');

      const response = await request(app)
        .post('/api/auth/verify-magic-link')
        .send({
          token: magicLink.token,
        });

      expect(response.status).toBe(200);
      expect(response.body.success).toBe(true);
      expect(response.body.data.user.email).toBe('new@example.com');
      expect(response.body.data.isNewUser).toBe(true);

      // Verify user was created
      const newUser = await testDb.user.findUnique({
        where: { email: 'new@example.com' },
      });
      expect(newUser).toBeTruthy();
      expect(newUser?.emailVerified).toBe(true);
    });

    it('should reject invalid token', async () => {
      const response = await request(app)
        .post('/api/auth/verify-magic-link')
        .send({
          token: 'invalid-token',
        });

      expect(response.status).toBe(400);
      expect(response.body.success).toBe(false);
    });

    it('should reject expired magic link', async () => {
      const expiredMagicLink = await createTestMagicLink('test@example.com', {
        expiresAt: new Date(Date.now() - 1000), // 1 second ago
      });

      const response = await request(app)
        .post('/api/auth/verify-magic-link')
        .send({
          token: expiredMagicLink.token,
        });

      expect(response.status).toBe(400);
      expect(response.body.success).toBe(false);
    });

    it('should reject already used magic link', async () => {
      const usedMagicLink = await createTestMagicLink('test@example.com', {
        used: true,
      });

      const response = await request(app)
        .post('/api/auth/verify-magic-link')
        .send({
          token: usedMagicLink.token,
        });

      expect(response.status).toBe(400);
      expect(response.body.success).toBe(false);
    });
  });

  describe('GET /api/auth/profile', () => {
    it('should return user profile for authenticated user', async () => {
      const user = await createTestUser();
      const token = generateToken({ userId: user.id, email: user.email });

      const response = await request(app)
        .get('/api/auth/profile')
        .set('Authorization', `Bearer ${token}`);

      expect(response.status).toBe(200);
      expect(response.body.success).toBe(true);
      expect(response.body.data.user.id).toBe(user.id);
      expect(response.body.data.stats).toBeTruthy();
    });

    it('should reject unauthenticated request', async () => {
      const response = await request(app)
        .get('/api/auth/profile');

      expect(response.status).toBe(401);
      expect(response.body.success).toBe(false);
    });

    it('should reject invalid token', async () => {
      const response = await request(app)
        .get('/api/auth/profile')
        .set('Authorization', 'Bearer invalid-token');

      expect(response.status).toBe(401);
      expect(response.body.success).toBe(false);
    });
  });

  describe('PUT /api/auth/profile', () => {
    it('should update user profile', async () => {
      const user = await createTestUser();
      const token = generateToken({ userId: user.id, email: user.email });

      const response = await request(app)
        .put('/api/auth/profile')
        .set('Authorization', `Bearer ${token}`)
        .send({
          username: 'newusername',
          displayName: 'New Display Name',
          bio: 'Updated bio',
        });

      expect(response.status).toBe(200);
      expect(response.body.success).toBe(true);
      expect(response.body.data.user.username).toBe('newusername');
      expect(response.body.data.user.displayName).toBe('New Display Name');
      expect(response.body.data.user.bio).toBe('Updated bio');
    });

    it('should reject duplicate username', async () => {
      const user1 = await createTestUser({ username: 'existing' });
      const user2 = await createTestUser({ 
        email: 'user2@example.com',
        username: 'user2' 
      });

      const token = generateToken({ userId: user2.id, email: user2.email });

      const response = await request(app)
        .put('/api/auth/profile')
        .set('Authorization', `Bearer ${token}`)
        .send({
          username: 'existing', // Try to use existing username
        });

      expect(response.status).toBe(400);
      expect(response.body.success).toBe(false);
    });

    it('should validate input fields', async () => {
      const user = await createTestUser();
      const token = generateToken({ userId: user.id, email: user.email });

      const response = await request(app)
        .put('/api/auth/profile')
        .set('Authorization', `Bearer ${token}`)
        .send({
          username: 'ab', // Too short
          bio: 'x'.repeat(1000), // Too long
        });

      expect(response.status).toBe(400);
      expect(response.body.success).toBe(false);
    });
  });

  describe('GET /api/auth/validate', () => {
    it('should validate valid token', async () => {
      const user = await createTestUser();
      const token = generateToken({ userId: user.id, email: user.email });

      const response = await request(app)
        .get('/api/auth/validate')
        .set('Authorization', `Bearer ${token}`);

      expect(response.status).toBe(200);
      expect(response.body.success).toBe(true);
      expect(response.body.data.isValid).toBe(true);
      expect(response.body.data.user.id).toBe(user.id);
    });

    it('should reject invalid token', async () => {
      const response = await request(app)
        .get('/api/auth/validate')
        .set('Authorization', 'Bearer invalid-token');

      expect(response.status).toBe(401);
      expect(response.body.success).toBe(false);
    });
  });
});
