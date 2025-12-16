import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  MinLength,
  Matches,
} from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    example: 'User Lambda',
    description: 'Nom complet de l’utilisateur',
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    example: 'userlambda@example.com',
    description: 'Adresse email unique de l’utilisateur',
  })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    example: '+2250701020304',
    description: 'Numéro de téléphone (format international)',
  })
  @IsString()
  @MinLength(10)
  @Matches(/^\+?[0-9]{10,15}$/, {
    message: 'Le numéro de téléphone doit être valide',
  })
  telephone: string;
}
