import { Inject, Injectable } from '@nestjs/common';
import type { NodePgDatabase } from 'drizzle-orm/node-postgres';
import { DB } from '../db/db.module.js';
import type * as schema from '../db/schema.js';
import { users } from '../db/schema.js';

@Injectable()
export class UsersService {
  constructor(
    @Inject(DB) private readonly db: NodePgDatabase<typeof schema>,
  ) {}

  findAll() {
    return this.db.select().from(users);
  }
}