import { TypeOf, date, object, string } from 'zod';
import StructureSchema from './structure.schema';

export const createGradeSchema = object({
  body: object({
    user: string({
      required_error: 'User is required',
    }),
    score: string({
      required_error: 'Score is required',
    }),
    date: date({
      required_error: 'Date is required',
    }),
  }),
});

export type GradeInput = TypeOf<typeof createGradeSchema>['body'];
