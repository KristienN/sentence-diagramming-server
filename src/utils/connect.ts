import mongoose from 'mongoose';
import dotenv from 'dotenv';
import logger from './logger';
dotenv.config();

const connect = () => {
  const dbUri: string = process.env.MONGO_URI!;
  mongoose.set('strictQuery', false);
  return mongoose
    .connect(dbUri)
    .then(() => {
      logger.info('Connected to Mongo DB');
    })
    .catch((e: any) => {
      logger.error('Failed to Connect to Mongo DB: ', e);
    });
};

export default connect;
