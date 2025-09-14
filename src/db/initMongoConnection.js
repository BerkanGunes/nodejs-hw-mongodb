import mongoose from 'mongoose';
import pino from 'pino';

const logger = pino();

export const initMongoConnection = async () => {
  try {
    const { MONGODB_USER, MONGODB_PASSWORD, MONGODB_URL, MONGODB_DB } =
      process.env;

    const mongoUri = `mongodb+srv://${MONGODB_USER}:${MONGODB_PASSWORD}@${MONGODB_URL}/${MONGODB_DB}?retryWrites=true&w=majority`;

    await mongoose.connect(mongoUri);
    logger.info('Mongo connection successfully established!');
  } catch (error) {
    logger.error('MongoDB connection error:', error.message);
    logger.error('Full error:', error);
    process.exit(1);
  }
};
