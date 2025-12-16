import { DocumentBuilder } from '@nestjs/swagger';

export const swaggerConfig = () => {
  return new DocumentBuilder()
    .setTitle('API DU TESTE EVALUATION EASY TRANSFERT')
    .setDescription('Documentation des endpoints')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
};
