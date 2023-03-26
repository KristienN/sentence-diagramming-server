import supertest from 'supertest';
import createServer from '../../utils/server';
import mongoose from 'mongoose';
import { fakeSimpleWithId } from '../fixtures/fake';
import * as SimpleService from '../../service/simple.service';
import { MongoMemoryServer } from 'mongodb-memory-server';

const app = createServer();

describe('Test for simple sentences', () => {
  describe('GET Requests', () => {
    describe('given the get all simple request is correct', () => {
      it('should return status 200', async () => {
        // @ts-ignore
        const getSimpleServiceMock = jest.spyOn(SimpleService, 'getAllSimpleSentences').mockReturnValueOnce(fakeSimpleWithId);
        const { body, statusCode } = await supertest(app).get('/api/simple');
        expect(statusCode).toBe(200);
        //@ts-ignore
        expect(body).toEqual(fakeSimpleWithId);
        expect(getSimpleServiceMock).toHaveBeenCalled();
      });
    });

    describe('given the simple id is not valid', () => {
      it('should return status 400', async () => {
        const simpleId = 'simpleId';
        // @ts-ignore
        const getSimpleServiceMock = jest.spyOn(SimpleService, 'getSimple').mockImplementation();
        const { body, statusCode } = await supertest(app).get(`/api/simple/${simpleId}`);
        //@ts-ignore
        expect(statusCode).toBe(400);
        expect(getSimpleServiceMock).toHaveBeenCalledTimes(0);
      });
    });

    describe('given the simple object does not exist', () => {
      it('should return status 404', async () => {
        const mongod = await MongoMemoryServer.create();
        await mongoose.connect(mongod.getUri());

        const simpleId = new mongoose.Types.ObjectId();

        const { statusCode } = await supertest(app).get(`/api/simple/${simpleId}`);
        expect(statusCode).toBe(404);

        mongoose.disconnect();
        mongoose.connection.close();
        mongod.stop();
      });
    });

    describe('given the simple info does exist', () => {
      it('should return status 200', async () => {
        // @ts-ignore
        const getSimpleServiceMock = jest.spyOn(SimpleService, 'getSimple').mockReturnValueOnce(fakeSimpleWithId);
        const { body, statusCode } = await supertest(app).get(`/api/simple/${fakeSimpleWithId._id}`);

        expect(statusCode).toBe(200);
        expect(body).toEqual(fakeSimpleWithId);
        //@ts-ignore
        expect(getSimpleServiceMock).toHaveBeenCalledWith(fakeSimpleWithId._id);
      });
    });
  });
});
