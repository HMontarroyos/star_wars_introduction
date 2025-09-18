import { z } from "zod";

export const filmSchema = z.object({
  title: z.string().min(3, "Título deve ter pelo menos 3 caracteres"),
  opening_crawl: z
    .string()
    .min(20, "O texto deve ter pelo menos 20 caracteres"),
  image: z
    .any()
    .refine(
      (files) => !files || files?.length === 0 || files[0] instanceof File,
      "Deve ser um arquivo de imagem"
    )
    .optional(),
});

export type FilmFormData = z.infer<typeof filmSchema>;
