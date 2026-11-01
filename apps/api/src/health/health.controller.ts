import { Controller, Get, Inject } from '@nestjs/common';
import { sql } from 'drizzle-orm';
import type { NodePgDatabase } from 'drizzle-orm/node-postgres';
import { DB } from '../db/db.module.js';
import type * as schema from '../db/schema.js';

@Controller('health')
export class HealthController {
  constructor(
    @Inject(DB) private readonly db: NodePgDatabase<typeof schema>,
  ) {}

  @Get()
  async check() {
    await this.db.execute(sql`select 1`);
    return { status: 'ok', db: 'ok' };
  }
}