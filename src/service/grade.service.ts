import GradeModel, { Grade } from '../models/grades.model';
import logger from '../utils/logger';

export const createGrade = async (input: Partial<Grade>) => {
  try {
    return await GradeModel.create(input);
  } catch (error: any) {
    logger.error(error.message);
  }
};

export const getAllGrades = async () => {
  try {
    return await GradeModel.find();
  } catch (error: any) {
    logger.error(error.message);
  }
};
