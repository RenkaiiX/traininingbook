import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import serverlessExpress from '@vendia/serverless-express';
import * as express from 'express';

const expressApp = express();

const createNestServer = async (expressInstance) => {
  const app = await NestFactory.create(
    AppModule,
    new ExpressAdapter(expressInstance),
  );
  await app.init();
};

// Tunggu hingga createNestServer selesai
await createNestServer(expressApp); 

// Sekarang Anda dapat mengekspor handler dengan aman
export const handler = serverlessExpress({ app: expressApp });