-- SpotX Database Initialization Script

-- This script runs after PostgreSQL Docker image has created:
-- 1. spotx_user (from POSTGRES_USER)
-- 2. spotx_db (from POSTGRES_DB) 
-- 3. Set the password (from POSTGRES_PASSWORD)

-- We're already connected to spotx_db as spotx_user at this point
-- No need to create database or user - they already exist

-- Enable required extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pg_stat_statements";

-- Set timezone
SET timezone = 'UTC';

-- Performance tuning
ALTER SYSTEM SET work_mem = '256MB';
ALTER SYSTEM SET maintenance_work_mem = '256MB';
ALTER SYSTEM SET effective_cache_size = '1GB';

-- Connection settings
ALTER SYSTEM SET max_connections = 200;
ALTER SYSTEM SET shared_buffers = '256MB';

-- Logging for debugging
ALTER SYSTEM SET log_statement = 'all';
ALTER SYSTEM SET log_min_duration_statement = '1000';

-- Note: pg_stat_statements configuration must be set in postgres.conf
-- These settings are already configured in the postgres.conf file
-- and will take effect on container restart

-- Reload configuration (this will apply the non-restart-required settings)
SELECT pg_reload_conf();

-- Grant all privileges on the schema to spotx_user
GRANT ALL PRIVILEGES ON SCHEMA public TO spotx_user;
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO spotx_user;
GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA public TO spotx_user;
GRANT ALL PRIVILEGES ON ALL FUNCTIONS IN SCHEMA public TO spotx_user;

-- -- Create a function to clean up old financial snapshots (optional)
-- CREATE OR REPLACE FUNCTION cleanup_old_financials()
-- RETURNS void AS $$
-- BEGIN
--   -- Delete financial snapshots older than 2 years
--   DELETE FROM "ProjectFinancials" 
--   WHERE "snapshotDate" < NOW() - INTERVAL '2 years';
  
--   DELETE FROM "OrgFinancials" 
--   WHERE "snapshotDate" < NOW() - INTERVAL '2 years';
  
--   RAISE NOTICE 'Cleaned up old financial snapshots';
-- END;
-- $$ LANGUAGE plpgsql;

-- -- Grant execute permission on the function to spotx_user
-- GRANT EXECUTE ON FUNCTION cleanup_old_financials() TO spotx_user;

-- -- Create a scheduled job to run cleanup (requires pg_cron extension)
-- -- Uncomment if you install pg_cron extension
-- -- SELECT cron.schedule('cleanup-financials', '0 2 * * 0', 'SELECT cleanup_old_financials();');

COMMIT; 