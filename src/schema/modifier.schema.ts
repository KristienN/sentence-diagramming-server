import { z } from 'zod';

const ModifierSchema = z.object({
  word: z.string(),
  type: z.string(),
  modifier: z.array(
    z
      .object({
        word: z.string(),
        type: z.string(),
        modifier: z.array(z.any().nullable()),
      })
      .nullable()
  ),
});

export default ModifierSchema;
