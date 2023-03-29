import { AnyZodObject } from 'zod';
import { Request, Response, NextFunction } from 'express';
import logger from '../utils/logger';
import mongoose from 'mongoose';

export const validateRequest = (schema: AnyZodObject) => (req: Request, res: Response, next: NextFunction) => {
  try {
    schema.parse({ body: req.body, query: req.query, params: req.params });
    next();
  } catch (e: any) {
    logger.error(e.errors);
    return res.status(400).send(e.erorrs);
  }
};

export const validateId = (req: Request, res: Response, next: NextFunction) => {
  if (mongoose.Types.ObjectId.isValid(req.params.id)) {
    next();
  } else {
    return res.status(400).send('Not valid ID type');
  }
};
