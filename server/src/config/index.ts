import z from "zod";

const env = z.object({
  DATABASE_URL: z.string(),

  PORT: z.string().default("8000"),
});

export const config = env.parse(process.env);
