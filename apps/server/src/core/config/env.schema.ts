import { EnvEnum } from './env.types';
import { z } from 'zod';

export const configSchema = z.object({
  NODE_ENV: z.nativeEnum(EnvEnum),
  PORT: z.coerce.number(),
  ORIGIN: z.string(),
});

export const databaseSchema = z.object({
  DB_HOST: z.string(),
  DB_PORT: z.coerce.number(),
  DB_NAME: z.string(),
  DB_USER: z.string(),
  DB_PASSWORD: z.string(),
});
export const jwtSchema = z.object({
  ACCESS_SECRET: z.string(),
  REFRESH_SECRET: z.string(),
});

export const envSchema = z.object({
  ...configSchema.shape,
  ...databaseSchema.shape,
  ...jwtSchema.shape,
});
