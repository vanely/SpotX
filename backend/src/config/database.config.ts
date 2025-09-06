import { PrismaClient } from '../../prisma/client';

declare global {
  // eslint-disable-next-line no-var
  var __db: PrismaClient | undefined;
}

let db: PrismaClient;

if (process.env.NODE_ENV === 'production') {
  db = new PrismaClient({
    log: ['error', 'warn'],
  });
} else {
  if (!global.__db) {
    global.__db = new PrismaClient({
      log: ['query', 'info', 'warn', 'error'],
    });
  }
  db = global.__db;
}

// Enable PostGIS extension
db.$executeRaw`CREATE EXTENSION IF NOT EXISTS postgis`.catch(() => {
  // Extension may already exist
});

export { db };
