import { Express, Request, Response } from 'express';
import { createSimpleSentenceHandler, deleteSimpleSentenceHandler, getAllSimpleSentenceHandler, getSimpleSentenceHandler, updateSimpleSentenceHandler } from '../controllers/simple.controller';
import { createGradesHandler, getAllGradesHandler } from '../controllers/grade.controller';
const gradesRoutes = (app: Express) => {
  /**
   * @openapi
   * /api/grade:
   *  post:
   *    description: Endpoint for Grades
   *    tag:
   *      - Grades
   *    responses:
   *      200:
   *        description: Success
   */
  app.post('/api/grade', createGradesHandler);

  /**
   * @openapi
   * /api/grade:
   *  get:
   *    description: Endpoint for Grades
   *    tag:
   *      - Grades
   *    responses:
   *      200:
   *        description: Success
   */
  app.get('/api/grade', getAllGradesHandler);

  /**
   * /api/grade/{id}:
   *  delete:
   *    description: Endpoint for Simple Sentences
   *    tag:
   *      - Simple Sentence
   *    responses:
   *      200:
   *        description: Success
   */
  //   app.delete('/api/grade/:id', deleteSimpleSentenceHandler);
};

export default gradesRoutes;
