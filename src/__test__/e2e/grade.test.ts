import supertest from 'supertest';
import * as GradeService from '../../service/grade.service';
import createServer from '../../utils/server';
import { badfakeGrade, fakeGrade } from '../fixtures/fake';
import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';

const app = createServer();
describe('Grades', () => {
  describe('GET grades', () => {
    describe('given the request is correct', () => {
      it('should return status 200', async () => {
        // @ts-ignore
        const gradeServiceMock = jest.spyOn(GradeService, 'getAllGrades').mockImplementation();
        const { statusCode } = await supertest(app).get('/api/grade');
        expect(statusCode).toBe(200);
        expect(gradeServiceMock).toBeCalled();
      });
    });
  });

  describe('POST grades', () => {
    describe('given the request is correct', () => {
      it('should return status 200', async () => {
        // @ts-ignore
        const gradeServiceMock = jest.spyOn(GradeService, 'createGrade').mockReturnValue(fakeGrade);
        const { body, statusCode } = await supertest(app).post('/api/grade').send(fakeGrade);
        expect(statusCode).toBe(200);
        // @ts-ignore
        expect(gradeServiceMock).toBeCalled();
      });
    });
  });
});
