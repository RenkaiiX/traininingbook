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

(async () => {
  await createNestServer(expressApp); 
  module.exports.handler = serverlessExpress({ app: expressApp }); 
})();