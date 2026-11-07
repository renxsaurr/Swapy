import {
  BadRequestException,
  ConflictException,
  Inject,
  Injectable,
} from '@nestjs/common';
import * as argon2 from 'argon2';
import type { NodePgDatabase } from 'drizzle-orm/node-postgres';
import { DB } from '../db/db.module.js';
import type * as schema from '../db/schema.js';
import { userCredentials, users } from '../db/schema.js';
import type { SignUpDto } from './dto/sign-up.dto.js';

@Injectable()
export class AuthService {
  constructor(@Inject(DB) private readonly db: NodePgDatabase<typeof schema>) {}

  async signUp(dto: SignUpDto) {
    if (dto.password !== dto.confirmPassword) {
      throw new BadRequestException({
        message: 'Please fix the highlighted field.',
        fieldErrors: {
          confirmPassword: 'Confirm password must match the password.',
        },
      });
    }

    const passwordHash = await argon2.hash(dto.password);

    try {
      return await this.db.transaction(async (tx) => {
        const [user] = await tx
          .insert(users)
          .values({
            email: dto.email,
            displayName: dto.displayName,
          })
          .returning({
            id: users.id,
            email: users.email,
            displayName: users.displayName,
            createdAt: users.createdAt,
          });

        await tx.insert(userCredentials).values({
          userId: user.id,
          passwordHash,
        });

        return user;
      });
    } catch (error) {
      if (
        typeof error === 'object' &&
        error !== null &&
        'code' in error &&
        error.code === '23505'
      ) {
        throw new ConflictException(
          'An account with this email already exists.',
        );
      }

      throw error;
    }
  }
}
