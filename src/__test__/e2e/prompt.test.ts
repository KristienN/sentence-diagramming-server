import supertest from 'supertest';
import createServer from '../../utils/server';
import * as PromptController from '../../controllers/prompt.controller';

const app = createServer();

describe('Prompt', () => {
  describe('GET requests', () => {
    describe('given a prompt', () => {
      it('should return 200', async () => {
        // @ts-ignore
        const testPrompt = 'test prompt';
        const PromptControllerMock = await jest.spyOn(PromptController, 'getPromptFromOpenAI').mockImplementation();
        const { statusCode } = await supertest(app).post(`/api/prompt/${testPrompt}`);
        expect(statusCode).toBe(200);
      });
    });
  });
});
