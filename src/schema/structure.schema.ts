import { z } from 'zod';
import ModifierSchema from './modifier.schema';

const StructureSchema = z.object({
  subject: ModifierSchema,
  predicate: ModifierSchema,
  object: ModifierSchema,
});

export default StructureSchema;
