import { Express, Request, Response } from 'express';
import { createSimpleSentenceHandler, deleteSimpleSentenceHandler, getAllSimpleSentenceHandler, getSimpleSentenceHandler, updateSimpleSentenceHandler } from '../controllers/simple.controller';
import { validateId } from '../middleware/validate';
const simpleRoutes = (app: Express) => {
  /**
   * @openapi
   * /api/healthcheck:
   *  get:
   *    description: Responds with 200 when application is live
   *    tag:
   *      - Healthcheck
   *    responses:
   *      200:
   *        description: Success
   */
  app.get('/api/healthcheck', (req: Request, res: Response) => res.sendStatus(200));

  /**
   * @openapi
   * /api/simple:
   *  post:
   *    description: Endpoint for Simple Sentences
   *    tag:
   *      - Simple Sentence
   *    responses:
   *      200:
   *        description: Success
   */
  app.post('/api/simple', createSimpleSentenceHandler);

  /**
   * @openapi
   * /api/simple:
   *  get:
   *    description: Endpoint for Simple Sentences
   *    tag:
   *      - Simple Sentence
   *    responses:
   *      200:
   *        description: Success
   */
  app.get('/api/simple', getAllSimpleSentenceHandler);

  /**
   * @openapi
   * /api/simple/{id}:
   *  get:
   *    description: Endpoint for Simple Sentences
   *    tag:
   *      - Simple Sentence
   *    responses:
   *      200:
   *        description: Success
   */
  app.get('/api/simple/:id', validateId, getSimpleSentenceHandler);

  /**
   * @openapi
   * /api/simple/{id}:
   *  put:
   *    description: Endpoint for Simple Sentences
   *    tag:
   *      - Simple Sentence
   *    responses:
   *      200:
   *        description: Success
   */
  app.put('/api/simple/:id', validateId, updateSimpleSentenceHandler);

  /**
   * @openapi
   * /api/simple/{id}:
   *  delete:
   *    description: Endpoint for Simple Sentences
   *    tag:
   *      - Simple Sentence
   *    responses:
   *      200:
   *        description: Success
   */
  app.delete('/api/simple/:id', validateId, deleteSimpleSentenceHandler);
};

export default simpleRoutes;
