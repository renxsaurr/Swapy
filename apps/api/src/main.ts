import { BadRequestException, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api');
  app.enableCors({ origin: process.env.WEB_ORIGIN ?? 'http://localhost:3000' });
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      exceptionFactory: (errors) => {
        const fieldErrors: Record<string, string> = {};

        for (const error of errors) {
          const firstMessage = Object.values(error.constraints ?? {})[0];

          if (firstMessage) {
            fieldErrors[error.property] = firstMessage;
          }
        }

        return new BadRequestException({
          message: 'Please fix the highlighted fields.',
          fieldErrors,
        });
      },
    }),
  );

  await app.listen(process.env.PORT ?? 3001);
}
await bootstrap();
