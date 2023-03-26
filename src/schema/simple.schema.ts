import { TypeOf, object, string } from 'zod';

export const createSimpleSchema = object({
  body: object({
    sentence: string({
      required_error: 'Sentence is required',
    }),
    type: string({
      required_error: 'Type is required',
    }),
  }),
});

export type CreateSimpleInput = TypeOf<typeof createSimpleSchema>['body'];
