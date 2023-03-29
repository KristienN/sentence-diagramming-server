import { Express } from 'express';
import { createGradesHandler, getAllGradesHandler } from '../controllers/grade.controller';
import { cacheGetGrades } from '../middleware/cache';
import { validateRequest } from '../middleware/validate';
import { createGradeSchema } from '../schema/grades.schema';
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
  app.post('/api/grade', validateRequest(createGradeSchema), createGradesHandler);

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
  app.get('/api/grade', cacheGetGrades, getAllGradesHandler);

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
