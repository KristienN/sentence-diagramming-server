import { Request, Response } from 'express';
import { createGrade, getAllGrades } from '../service/grade.service';
import logger from '../utils/logger';
import { cacheStoreGrades } from '../middleware/cache';

export const getAllGradesHandler = async (req: Request, res: Response) => {
  try {
    let grades = await getAllGrades();
    cacheStoreGrades(grades);
    return res.send(grades);
  } catch (error: any) {
    logger.error(error.message);
  }
};

export const createGradesHandler = async (req: Request, res: Response) => {
  let doc: any = {
    score: req.body.score,
    user: req.body.user,
    date: req.body.date,
  };

  try {
    let grade = await createGrade(doc);
    res.send(grade);
  } catch (error: any) {
    logger.error(error.message);
  }
};
