import { TypeOf, object, string } from 'zod';
import StructureSchema from './structure.schema';

export const createSimpleSchema = object({
  body: object({
    sentence: string({
      required_error: 'Sentence is required',
    }),
    type: string({
      required_error: 'Type is required',
    }),
    structure: StructureSchema,
  }),
});

export type CreateSimpleInput = TypeOf<typeof createSimpleSchema>['body'];
