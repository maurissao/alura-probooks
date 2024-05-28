import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as session from 'express-session';
const RedisStore = require("connect-redis").default
import IORedis from 'ioredis';
import { useContainer } from 'class-validator';

const redisClient = new IORedis();

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['error']
  });
  app.useGlobalPipes(new ValidationPipe());
  app.use(
    session({
      secret: 'pamonhas-quentinas',
      resave: false,
      saveUninitialized: false,
      store: new RedisStore({ client: redisClient, prefix: "pbapp" }),
      cookie: {
        maxAge: 1000 * 60 * 60 * 6,
        httpOnly: true,
        sameSite: 'lax',
      },
    }),
  );  
  useContainer(app.select(AppModule), { fallbackOnErrors: true });
  app.enableCors();
  await app.listen(3000);
}
bootstrap();
