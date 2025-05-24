import { EnvConfigType, EnvVars } from 'src/core/config/env.types';

export function EnvVarsMapper(env: EnvVars): EnvConfigType {
  return {
    server: {
      node_env: env.NODE_ENV,
      port: env.PORT,
      origin: env.ORIGIN,
    },
    database: {
      host: env.DB_HOST,
      port: env.DB_PORT,
      database: env.DB_NAME,
      username: env.DB_USER,
      password: env.DB_PASSWORD,
    },
    jwt: {
      access_secret: env.ACCESS_SECRET,
      refresh_secret: env.REFRESH_SECRET,
    },
  };
}
