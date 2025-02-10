require('dotenv').config();

module.exports = {
  dbUser: process.env.DB_USER || 'default_user',
  dbHost: process.env.DB_HOST || 'localhost',
  dbName: process.env.DB_NAME || 'testdb',
  dbPass: process.env.DB_PASS || '',
  dbPort: process.env.DB_PORT || 5432,
};
