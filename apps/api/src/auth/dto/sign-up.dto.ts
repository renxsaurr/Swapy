// VALIDATE SIGN-UP DATA
import { Transform } from 'class-transformer';
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class SignUpDto {
  @Transform(({ value }) =>
    typeof value === 'string' ? value.trim().toLowerCase() : value,
  )
  @IsEmail()
  @MaxLength(254)
  email!: string;

  @Transform(({ value }) => (typeof value === 'string' ? value.trim() : value))
  @IsString()
  @IsNotEmpty()
  @MaxLength(80)
  displayName!: string;

  @IsString()
  @MinLength(15, {
    message: 'Password must be at least 15 characters.',
  })
  @MaxLength(128, {
    message: 'Password cannot be longer than 128 characters.',
  })
  password!: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(128)
  confirmPassword!: string;
}
// VALIDATE SIGN-UP DATA END
