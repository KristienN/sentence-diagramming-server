import { Request, Response } from 'express';
import logger from '../utils/logger';
import { createSimple, deleteSimple, getAllSimpleSentences, getSimple, updateSimple } from '../service/simple.service';
import mongoose, { ObjectId } from 'mongoose';
import {cacheStoreSimples } from '../middleware/cache';

export const createSimpleSentenceHandler = async (req: Request, res: Response) => {
  let doc: any = {
    sentence: req.body.sentence,
    type: req.body.type,
    structure: req.body.structure,
  };

  try {
    const simple = await createSimple(doc);
    return res.send(simple);
  } catch (error: any) {
    logger.error(error);
    res.send(error.message);
  }
};

export const getAllSimpleSentenceHandler = async (req: Request, res: Response) => {
  try {
    const simple = await getAllSimpleSentences();
    cacheStoreSimples(simple);
    return res.send(simple).status(200);
  } catch (error: any) {
    logger.error(error);
    res.send(error.message);
  }
};

export const getSimpleSentenceHandler = async (req: Request, res: Response) => {
  let id: string = req.params.id;
  try {
    const simple = await getSimple(id);
    if (!simple) {
      res.status(404);
    }
    res.send(simple).status(200);
  } catch (error: any) {
    logger.error(error);
    res.send(error.message).status(404);
  }
};

export const updateSimpleSentenceHandler = async (req: Request, res: Response) => {
  let doc: any = {
    sentence: req.body.sentence,
    type: req.body.type,
    structure: req.body.structure,
  };

  let id = req.params.id;

  try {
    const simple = await updateSimple(id, doc);
    return res.send(simple);
  } catch (error: any) {
    res.send(error.message);
  }
};

export const deleteSimpleSentenceHandler = async (req: Request, res: Response) => {
  let id = req.params.id;
  try {
    const simple = await deleteSimple(id);
    return res.send(simple).status(200);
  } catch (error: any) {
    logger.error(error);
    res.send(error.message);
  }
};
