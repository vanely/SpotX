import App from './app';
import { APP_CONFIG } from '@/utils/constants';
import { db } from '@/config/database.config';

// Handle uncaught exceptions
process.on('uncaughtException', (error: Error) => {
  console.error('Uncaught Exception:', error);
  process.exit(1);
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (reason: unknown, promise: Promise<any>) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
  process.exit(1);
});

// Graceful shutdown function
const gracefulShutdown = async (signal: string) => {
  console.log(`\n📤 Received ${signal}. Starting graceful shutdown...`);
  
  try {
    // Close database connection
    await db.$disconnect();
    console.log('📊 Database connection closed');
    
    console.log('✅ Graceful shutdown completed');
    process.exit(0);
  } catch (error) {
    console.error('❌ Error during shutdown:', error);
    process.exit(1);
  }
};

// Handle graceful shutdown signals
process.on('SIGTERM', () => gracefulShutdown('SIGTERM'));
process.on('SIGINT', () => gracefulShutdown('SIGINT'));

// Start the server
const startServer = async () => {
  try {
    // Test database connection
    await db.$connect();
    console.log('📊 Database connected successfully');

    // Create and start the app
    const app = new App();
    app.listen(APP_CONFIG.PORT);

  } catch (error) {
    console.error('❌ Failed to start server:', error);
    process.exit(1);
  }
};

// Start the application
startServer();
