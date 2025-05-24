import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { resolve } from 'path';
import EnvConfigService from 'src/core/config/config.service';

export const initDB = (
  database: EnvConfigService['database'],
  name: string = 'default',
): TypeOrmModuleOptions => {
  if (!database) {
    throw new Error('Database configuration is missing');
  }
  return {
    name,
    type: 'postgres',
    ...database,
    metadataTableName: 'typeorm_metadata',
    entities: [resolve(process.cwd(), 'dist/**/*.entity{.js,.ts}')],
    // autoLoadEntities: true,
    synchronize: true,
    logging: false,
    subscribers: [],
    migrations: [],
  };
};
