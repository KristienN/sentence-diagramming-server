import { ObjectId } from 'mongoose';
import SimpleModel, { Simple } from '../models/simple.model';
import logger from '../utils/logger';

export const createSimple = async (input: Partial<Simple>) => {
  try {
    return await SimpleModel.create(input);
  } catch (error: any) {
    logger.error(error.message);
  }
};

export const getAllSimpleSentences = async () => {
  try {
    return await SimpleModel.find();
  } catch (error: any) {
    logger.error(error.message);
  }
};

export const getSimple = async (id: string) => {
  try {
    const simple = await SimpleModel.findById(id);
    if (!simple) {
      throw new Error(`Record not found for ID ${id}`);
    }
    return simple;
  } catch (error: any) {
    logger.error(error.message);
  }
};

export const updateSimple = async (id: string, input: Partial<Simple>) => {
  logger.info('here');
  try {
    return await SimpleModel.findByIdAndUpdate({ _id: id }, input);
  } catch (error: any) {
    logger.error(error.message);
  }
};

export const deleteSimple = async (id: string) => {
  try {
    return await SimpleModel.findByIdAndDelete({ _id: id });
  } catch (error: any) {
    logger.error(error.message);
  }
};
