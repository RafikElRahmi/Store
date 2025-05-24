import { envSchema } from "src/core/config/env.schema";
import { EnvConfigType, EnvVars } from 'src/core/config/env.types';
import { EnvVarsMapper } from "../mappers/env.mapper";
import { ZodError } from "zod";

export function loadEnvVars(data: EnvVars): EnvConfigType {
  try {
    const envVars = envSchema.parse(data);
    return EnvVarsMapper(envVars);
  } catch (error) {
    if (error instanceof ZodError) {
      throw new Error(`Validation failed: ${error.errors.map(e => e.message).join(', ')}`);
    }
    throw error;
  }
}
