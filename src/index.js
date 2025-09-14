import dotenv from 'dotenv';
import { setupServer } from './server.js';
import { initMongoConnection } from './db/initMongoConnection.js';

// Load environment variables
dotenv.config();

// Initialize MongoDB connection first
await initMongoConnection();

// Start the server
setupServer();
