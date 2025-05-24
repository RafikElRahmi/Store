import { NestFactory } from '@nestjs/core';
import cookieParser from 'cookie-parser';
import { AppModule } from './app.module';
import EnvConfigService from './core/config/config.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const env = app.get(EnvConfigService);
  app.setGlobalPrefix('api');
  app.use(cookieParser());
  await app.listen(env.server.port);
}
bootstrap();
