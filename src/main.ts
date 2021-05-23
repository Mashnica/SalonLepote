/* eslint-disable prettier/prettier */
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
 

  app.useGlobalPipes(new ValidationPipe());

  //komunikacija sa api-jem
  app.enableCors();

  await app.listen(3000);


 /* app.useStaticAssets(StorageConfig.photo.destination,{
    prefix:StorageConfig.photo.urlPrefix,
    maxAge: 1000* 60*60*24*7, //slikaa nece promeniti 7dana
    index:false,


  });*/
}
bootstrap();
