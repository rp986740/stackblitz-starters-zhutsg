import { z } from 'zod';

export const searchFormSchema = z.object({
  q: z.string().optional(),
  start_date: z.date(),
  end_date: z.date(),
  media_type: z.string(),
});
export type SearchFormType = z.infer<typeof searchFormSchema>;
