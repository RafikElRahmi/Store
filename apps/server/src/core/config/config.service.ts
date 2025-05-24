import { Injectable } from '@nestjs/common';
import { config } from 'dotenv';
import { resolve } from 'path';
import { loadEnvVars } from 'src/common/loaders/env.loader';
import { EnvConfigType } from './env.types';

@Injectable()
@Injectable()
class EnvConfigService implements EnvConfigType {
  public readonly server: EnvConfigType['server'];
  public readonly database: EnvConfigType['database'];
  public readonly jwt: EnvConfigType['jwt'];
  constructor() {
    config({
      path: resolve(process.cwd(), process.env.NODE_ENV === 'production' ? '.env.prod' : '.env'),
    });
    const env = loadEnvVars(process.env);
    this.server = env.server;
    this.database = env.database;
    this.jwt = env.jwt;
  }
}

export default EnvConfigService;
