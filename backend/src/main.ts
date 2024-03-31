import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as session from 'express-session';
const RedisStore = require("connect-redis").default
import {createClient} from "redis"

 let redisClient = createClient()
 redisClient.connect().catch(console.error)

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.use(
    session({
      secret: 'pamonhas-quentinas',
      resave: false,
      saveUninitialized: false,
      store: new RedisStore({ client: redisClient, prefix: "pbapp" }),
      cookie: {
        maxAge: 24 * 60 * 60 * 1000,
        httpOnly: true,
        sameSite: 'lax',
      },
    }),
  );  
  await app.listen(3000);
}
bootstrap();
