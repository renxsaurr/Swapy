import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { DatabaseModule } from './db/db.module.js';
import { HealthController } from './health/health.controller.js';
import { UsersModule } from './users/users.module.js';

function validateEnv(config: Record<string, unknown>) {
  if (
    typeof config.DATABASE_URL !== 'string' ||
    !config.DATABASE_URL.startsWith('postgres')
  ) {
    throw new Error(
      'DATABASE_URL is missing or invalid. Copy apps/api/.env.example to apps/api/.env.',
    );
  }

  const port = Number(config.PORT ?? 3001);
  if (Number.isNaN(port)) {
    throw new Error('PORT must be a number.');
  }

  return { ...config, PORT: port };
}

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, validate: validateEnv }),
    DatabaseModule,
    UsersModule,
  ],
  controllers: [AppController, HealthController],
  providers: [AppService],
})
export class AppModule {}