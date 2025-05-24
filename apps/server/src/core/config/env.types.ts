export enum EnvEnum {
  Production = 'production',
  Development = 'development',
  Test = 'test',
}

export interface EnvConfigType {
  server: {
    origin: string;
    port: number;
    node_env: string;
  };
  database: {
    host: string;
    port: number;
    database: string;
    username: string;
    password: string;
  };
  jwt: {
    access_secret: string;
    refresh_secret: string;
  };
}

export interface EnvVars {
  // Server
  ORIGIN: string;
  PORT: number;
  NODE_ENV: string;

  // Database
  DB_HOST: string;
  DB_PORT: number;
  DB_NAME: string;
  DB_USER: string;
  DB_PASSWORD: string;

  // JWT
  ACCESS_SECRET: string;
  REFRESH_SECRET: string;
}
