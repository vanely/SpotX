import { PrismaClient } from '@prisma/client';
import dotenv from 'dotenv';

// Load test environment variables
dotenv.config({ path: '.env.test' });

// Create test database instance
export const testDb = new PrismaClient({
  datasources: {
    db: {
      url: process.env.DATABASE_URL_TEST || process.env.DATABASE_URL,
    },
  },
});

// Global test setup
beforeAll(async () => {
  // Connect to test database
  await testDb.$connect();
  
  // Clear all data
  await clearDatabase();
  
  // Run migrations
  // Note: In a real app, you'd use Prisma migrate commands
  console.log('Test database connected and cleaned');
});

// Cleanup after all tests
afterAll(async () => {
  await clearDatabase();
  await testDb.$disconnect();
});

// Clear database between tests
afterEach(async () => {
  await clearDatabase();
});

// Helper function to clear all database tables
async function clearDatabase() {
  const tablenames = await testDb.$queryRaw<Array<{ tablename: string }>>`
    SELECT tablename FROM pg_tables WHERE schemaname='public'
  `;

  const tables = tablenames
    .map(({ tablename }) => tablename)
    .filter((name) => name !== '_prisma_migrations')
    .map((name) => `"public"."${name}"`)
    .join(', ');

  try {
    if (tables.length > 0) {
      await testDb.$executeRawUnsafe(`TRUNCATE TABLE ${tables} CASCADE;`);
    }
  } catch (error) {
    console.log('Error clearing database:', error);
  }
}

// Test helper functions
export const createTestUser = async (overrides = {}) => {
  return await testDb.user.create({
    data: {
      email: 'test@example.com',
      emailVerified: true,
      username: 'testuser',
      displayName: 'Test User',
      ...overrides,
    },
  });
};

export const createTestCategory = async (overrides = {}) => {
  return await testDb.category.create({
    data: {
      name: 'Test Category',
      slug: 'test-category',
      description: 'A test category',
      isOfficial: true,
      ...overrides,
    },
  });
};

export const createTestMagicLink = async (email: string, overrides = {}) => {
  return await testDb.magicLink.create({
    data: {
      email,
      token: 'test-token-' + Date.now(),
      expiresAt: new Date(Date.now() + 15 * 60 * 1000), // 15 minutes
      ...overrides,
    },
  });
};
