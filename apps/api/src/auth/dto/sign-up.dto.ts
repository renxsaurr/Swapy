import {Transform} from 'class-transformer';
import {
    IsEmail,
    IsNotEmpty,
    IsString,
    MaxLength,
    MinLength,
} from 'class-validator';

export class SignUpDto {
    @Transform(({ value}) =>
     typeof value === 'string' ? value.trim().toLowerCase() :  value,
)
@IsEmail()
@MaxLength(254)
email!: string;

@Transform(({ value}) => 
    typeof value === 'string' ? value.trim() : value,
)
@IsString()
@IsNotEmpty()
@MaxLength(80)
displayName!:string;

@IsString()
@MinLength(15)
@MaxLength(128)
password!: string;

@IsString()
@MinLength(15)
@MaxLength(128)
confirmPassword!: string;
}