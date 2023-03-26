import { Express, Request, Response } from 'express';
import { getPromptFromOpenAI } from '../controllers/prompt.controller';

const promptRoutes = (app: Express) => {
  app.post('/api/prompt/:prompt', getPromptFromOpenAI);
};

export default promptRoutes;
