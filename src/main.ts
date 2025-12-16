import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { swaggerConfig } from './core/config/swagger.config';
import { SwaggerModule } from '@nestjs/swagger';
import { appConfig } from './core/config/app.config';

async function bootstrap() {

  const app = await NestFactory.create(AppModule);

  const document = SwaggerModule.createDocument(app, swaggerConfig());
  SwaggerModule.setup('api', app, document);

  await app.listen(appConfig.port);
  
  console.log(`Le serveur a démarré sur le port : ${appConfig.port}`);
  console.log(`Cliquez sur le lien pour visualiser Swagger: http://localhost:${appConfig.port}/api`);
}

bootstrap();
