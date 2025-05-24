import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { initDB } from './common/factories/db.factory';
import { ConfigModule } from './core/config/config.module';
import EnvConfigService from './core/config/config.service';
import { ConfigService } from './utilities/config/config.service';

@Module({
  imports: [
    ConfigModule,
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (env: EnvConfigService) => initDB(env.database),
      inject: [EnvConfigService],
    }),
  ],
  controllers: [],
  providers: [ConfigService],
})
export class AppModule {}
