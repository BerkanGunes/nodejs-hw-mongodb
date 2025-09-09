import express from 'express';
import cors from 'cors';
import pino from 'pino';
import contactsRoutes from './routes/contacts.js';

const logger = pino();

export const setupServer = () => {
  const app = express();

  // Middleware
  app.use(cors());
  app.use(express.json());

  // Routes
  app.use('/contacts', contactsRoutes);

  // 404 handler
  app.use((req, res) => {
    res.status(404).json({
      message: 'Not found',
    });
  });

  const PORT = process.env.PORT || 3000;

  app.listen(PORT, () => {
    logger.info(`Server is running on port ${PORT}`);
  });

  return app;
};
