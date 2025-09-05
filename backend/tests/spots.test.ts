import request from 'supertest';
import App from '../src/app';
import { testDb, createTestUser, createTestCategory } from './setup';
import { generateToken } from '../src/utils/jwt.util';

const app = new App().getApp();

describe('Spots', () => {
  let user: any;
  let category: any;
  let authToken: string;

  beforeEach(async () => {
    user = await createTestUser();
    category = await createTestCategory();
    authToken = generateToken({ userId: user.id, email: user.email });
  });

  describe('POST /api/spots', () => {
    it('should create a new spot', async () => {
      const spotData = {
        title: 'Awesome Skate Spot',
        description: 'Great place for skateboarding',
        categoryId: category.id,
        latitude: 42.3601,
        longitude: -71.0589,
        address: '123 Test St',
        city: 'Boston',
        country: 'USA',
      };

      const response = await request(app)
        .post('/api/spots')
        .set('Authorization', `Bearer ${authToken}`)
        .send(spotData);

      expect(response.status).toBe(201);
      expect(response.body.success).toBe(true);
      expect(response.body.data.spot.title).toBe(spotData.title);
      expect(response.body.data.spot.latitude).toBe(spotData.latitude);
      expect(response.body.data.spot.longitude).toBe(spotData.longitude);
      expect(response.body.data.spot.user.id).toBe(user.id);
      expect(response.body.data.spot.category.id).toBe(category.id);
    });

    it('should reject spot with invalid coordinates', async () => {
      const spotData = {
        title: 'Invalid Spot',
        categoryId: category.id,
        latitude: 200, // Invalid latitude
        longitude: -71.0589,
      };

      const response = await request(app)
        .post('/api/spots')
        .set('Authorization', `Bearer ${authToken}`)
        .send(spotData);

      expect(response.status).toBe(400);
      expect(response.body.success).toBe(false);
    });

    it('should reject spot with non-existent category', async () => {
      const spotData = {
        title: 'Test Spot',
        categoryId: '00000000-0000-0000-0000-000000000000',
        latitude: 42.3601,
        longitude: -71.0589,
      };

      const response = await request(app)
        .post('/api/spots')
        .set('Authorization', `Bearer ${authToken}`)
        .send(spotData);

      expect(response.status).toBe(400);
      expect(response.body.success).toBe(false);
    });

    it('should require authentication', async () => {
      const spotData = {
        title: 'Test Spot',
        categoryId: category.id,
        latitude: 42.3601,
        longitude: -71.0589,
      };

      const response = await request(app)
        .post('/api/spots')
        .send(spotData);

      expect(response.status).toBe(401);
      expect(response.body.success).toBe(false);
    });
  });

  describe('GET /api/spots/:spotId', () => {
    it('should get spot by ID', async () => {
      // Create a spot first
      const spot = await testDb.spot.create({
        data: {
          title: 'Test Spot',
          description: 'Test description',
          latitude: 42.3601,
          longitude: -71.0589,
          userId: user.id,
          categoryId: category.id,
          location: testDb.$queryRaw`ST_SetSRID(ST_MakePoint(-71.0589, 42.3601), 4326)`,
        },
      });

      const response = await request(app)
        .get(`/api/spots/${spot.id}`);

      expect(response.status).toBe(200);
      expect(response.body.success).toBe(true);
      expect(response.body.data.spot.id).toBe(spot.id);
      expect(response.body.data.spot.title).toBe(spot.title);
    });

    it('should return 404 for non-existent spot', async () => {
      const response = await request(app)
        .get('/api/spots/00000000-0000-0000-0000-000000000000');

      expect(response.status).toBe(404);
      expect(response.body.success).toBe(false);
    });
  });

  describe('GET /api/spots/search', () => {
    beforeEach(async () => {
      // Create test spots
      await testDb.spot.createMany({
        data: [
          {
            title: 'Boston Skate Park',
            description: 'Great skate park',
            latitude: 42.3601,
            longitude: -71.0589,
            userId: user.id,
            categoryId: category.id,
            location: testDb.$queryRaw`ST_SetSRID(ST_MakePoint(-71.0589, 42.3601), 4326)`,
          },
          {
            title: 'Cambridge Bowl',
            description: 'Awesome bowl',
            latitude: 42.3736,
            longitude: -71.1097,
            userId: user.id,
            categoryId: category.id,
            location: testDb.$queryRaw`ST_SetSRID(ST_MakePoint(-71.1097, 42.3736), 4326)`,
          },
        ],
      });
    });

    it('should search spots by location', async () => {
      const response = await request(app)
        .get('/api/spots/search')
        .query({
          latitude: 42.3601,
          longitude: -71.0589,
          radius: 50, // 50km radius
        });

      expect(response.status).toBe(200);
      expect(response.body.success).toBe(true);
      expect(response.body.data.spots).toHaveLength(2);
      expect(response.body.data.pagination).toBeDefined();
    });

    it('should search spots by category', async () => {
      const response = await request(app)
        .get('/api/spots/search')
        .query({
          categoryId: category.id,
        });

      expect(response.status).toBe(200);
      expect(response.body.success).toBe(true);
      expect(response.body.data.spots).toHaveLength(2);
    });

    it('should search spots by text', async () => {
      const response = await request(app)
        .get('/api/spots/search')
        .query({
          search: 'Boston',
        });

      expect(response.status).toBe(200);
      expect(response.body.success).toBe(true);
      expect(response.body.data.spots.length).toBeGreaterThan(0);
    });
  });

  describe('GET /api/spots/nearby', () => {
    it('should get nearby spots', async () => {
      // Create a test spot
      await testDb.spot.create({
        data: {
          title: 'Nearby Spot',
          latitude: 42.3601,
          longitude: -71.0589,
          userId: user.id,
          categoryId: category.id,
          location: testDb.$queryRaw`ST_SetSRID(ST_MakePoint(-71.0589, 42.3601), 4326)`,
        },
      });

      const response = await request(app)
        .get('/api/spots/nearby')
        .query({
          latitude: 42.3601,
          longitude: -71.0589,
          radius: 10,
        });

      expect(response.status).toBe(200);
      expect(response.body.success).toBe(true);
      expect(response.body.data.spots).toHaveLength(1);
      expect(response.body.data.spots[0].distance).toBeDefined();
    });

    it('should require latitude and longitude', async () => {
      const response = await request(app)
        .get('/api/spots/nearby')
        .query({
          radius: 10,
        });

      expect(response.status).toBe(400);
      expect(response.body.success).toBe(false);
    });
  });

  describe('PUT /api/spots/:spotId', () => {
    it('should update spot by owner', async () => {
      // Create a spot
      const spot = await testDb.spot.create({
        data: {
          title: 'Original Title',
          latitude: 42.3601,
          longitude: -71.0589,
          userId: user.id,
          categoryId: category.id,
          location: testDb.$queryRaw`ST_SetSRID(ST_MakePoint(-71.0589, 42.3601), 4326)`,
        },
      });

      const updateData = {
        title: 'Updated Title',
        description: 'Updated description',
      };

      const response = await request(app)
        .put(`/api/spots/${spot.id}`)
        .set('Authorization', `Bearer ${authToken}`)
        .send(updateData);

      expect(response.status).toBe(200);
      expect(response.body.success).toBe(true);
      expect(response.body.data.spot.title).toBe(updateData.title);
      expect(response.body.data.spot.description).toBe(updateData.description);
    });

    it('should reject update by non-owner', async () => {
      const otherUser = await createTestUser({
        email: 'other@example.com',
        username: 'otheruser',
      });

      // Create spot owned by other user
      const spot = await testDb.spot.create({
        data: {
          title: 'Other User Spot',
          latitude: 42.3601,
          longitude: -71.0589,
          userId: otherUser.id,
          categoryId: category.id,
          location: testDb.$queryRaw`ST_SetSRID(ST_MakePoint(-71.0589, 42.3601), 4326)`,
        },
      });

      const response = await request(app)
        .put(`/api/spots/${spot.id}`)
        .set('Authorization', `Bearer ${authToken}`)
        .send({ title: 'Hacked Title' });

      expect(response.status).toBe(403);
      expect(response.body.success).toBe(false);
    });
  });

  describe('DELETE /api/spots/:spotId', () => {
    it('should delete spot by owner', async () => {
      const spot = await testDb.spot.create({
        data: {
          title: 'To Delete',
          latitude: 42.3601,
          longitude: -71.0589,
          userId: user.id,
          categoryId: category.id,
          location: testDb.$queryRaw`ST_SetSRID(ST_MakePoint(-71.0589, 42.3601), 4326)`,
        },
      });

      const response = await request(app)
        .delete(`/api/spots/${spot.id}`)
        .set('Authorization', `Bearer ${authToken}`);

      expect(response.status).toBe(200);
      expect(response.body.success).toBe(true);

      // Verify spot is deleted
      const deletedSpot = await testDb.spot.findUnique({
        where: { id: spot.id },
      });
      expect(deletedSpot).toBeNull();
    });

    it('should reject deletion by non-owner', async () => {
      const otherUser = await createTestUser({
        email: 'other@example.com',
        username: 'otheruser',
      });

      const spot = await testDb.spot.create({
        data: {
          title: 'Protected Spot',
          latitude: 42.3601,
          longitude: -71.0589,
          userId: otherUser.id,
          categoryId: category.id,
          location: testDb.$queryRaw`ST_SetSRID(ST_MakePoint(-71.0589, 42.3601), 4326)`,
        },
      });

      const response = await request(app)
        .delete(`/api/spots/${spot.id}`)
        .set('Authorization', `Bearer ${authToken}`);

      expect(response.status).toBe(403);
      expect(response.body.success).toBe(false);
    });
  });

  describe('POST /api/spots/rate', () => {
    it('should rate a spot', async () => {
      const spot = await testDb.spot.create({
        data: {
          title: 'To Rate',
          latitude: 42.3601,
          longitude: -71.0589,
          userId: user.id,
          categoryId: category.id,
          location: testDb.$queryRaw`ST_SetSRID(ST_MakePoint(-71.0589, 42.3601), 4326)`,
        },
      });

      const response = await request(app)
        .post('/api/spots/rate')
        .set('Authorization', `Bearer ${authToken}`)
        .send({
          spotId: spot.id,
          isPositive: true,
          comment: 'Great spot!',
        });

      expect(response.status).toBe(200);
      expect(response.body.success).toBe(true);

      // Verify rating was created
      const rating = await testDb.spotRating.findUnique({
        where: {
          userId_spotId: {
            userId: user.id,
            spotId: spot.id,
          },
        },
      });
      expect(rating).toBeTruthy();
      expect(rating?.isPositive).toBe(true);
    });

    it('should update existing rating', async () => {
      const spot = await testDb.spot.create({
        data: {
          title: 'To Rate',
          latitude: 42.3601,
          longitude: -71.0589,
          userId: user.id,
          categoryId: category.id,
          location: testDb.$queryRaw`ST_SetSRID(ST_MakePoint(-71.0589, 42.3601), 4326)`,
        },
      });

      // Create initial rating
      await testDb.spotRating.create({
        data: {
          userId: user.id,
          spotId: spot.id,
          isPositive: true,
        },
      });

      // Update rating
      const response = await request(app)
        .post('/api/spots/rate')
        .set('Authorization', `Bearer ${authToken}`)
        .send({
          spotId: spot.id,
          isPositive: false,
          comment: 'Changed my mind',
        });

      expect(response.status).toBe(200);
      expect(response.body.success).toBe(true);

      // Verify rating was updated
      const rating = await testDb.spotRating.findUnique({
        where: {
          userId_spotId: {
            userId: user.id,
            spotId: spot.id,
          },
        },
      });
      expect(rating?.isPositive).toBe(false);
      expect(rating?.comment).toBe('Changed my mind');
    });
  });

  describe('GET /api/spots/stats', () => {
    it('should get spots statistics', async () => {
      const response = await request(app)
        .get('/api/spots/stats');

      expect(response.status).toBe(200);
      expect(response.body.success).toBe(true);
      expect(response.body.data.stats).toBeDefined();
      expect(response.body.data.stats.totalSpots).toBeDefined();
      expect(response.body.data.stats.spotsByCategory).toBeDefined();
      expect(response.body.data.stats.recentSpots).toBeDefined();
      expect(response.body.data.stats.topContributors).toBeDefined();
    });
  });
});
