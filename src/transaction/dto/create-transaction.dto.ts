import { ApiProperty } from '@nestjs/swagger';
import { 
  IsEnum, 
  IsNotEmpty, 
  IsNumber, 
  IsDate, 
  Min,
  IsPositive
} from 'class-validator';
import { Type } from 'class-transformer';

export enum TransactionStatus {
  PENDING = 'PENDING',
  COMPLETED = 'COMPLETED',
  FAILED = 'FAILED',
  CANCELLED = 'CANCELLED'
}

export enum TransactionType {
  CREDIT = 'CREDIT',
  DEBIT = 'DEBIT',
  TRANSFER = 'TRANSFER'
}

export class CreateTransactionDto {
  @ApiProperty({
    description: 'Montant de la transaction',
    example: 1500,
    type: Number,
    required: true,
    minimum: 50,
    maximum: 1000000
  })
  @IsNumber({ maxDecimalPlaces: 2 }, { 
    message: 'Le montant doit être un nombre (max 2 décimales)' 
  })
  @IsPositive({ message: 'Le montant doit être positif' })
  @Min(50, { message: 'Le montant minimum est de 50 F' })
  montant: number;

  @ApiProperty({
    description: 'Statut de la transaction',
    enum: TransactionStatus,
    example: TransactionStatus.PENDING,
    default: TransactionStatus.PENDING,
    required: true
  })
  @IsEnum(TransactionStatus, { 
    message: `Le statut doit être l'une des valeurs suivantes: ${Object.values(TransactionStatus).join(', ')}` 
  })
  @IsNotEmpty({ message: 'Le statut est obligatoire' })
  status: TransactionStatus;

  @ApiProperty({
    description: 'Type de la transaction',
    enum: TransactionType,
    example: TransactionType.DEBIT,
    default: TransactionType.DEBIT, 
    required: true
  })
  @IsEnum(TransactionType, { 
    message: `Le type de la transaction doit être l'une des valeurs suivantes: ${Object.values(TransactionType).join(', ')}` 
  })
  @IsNotEmpty({ message: 'Le type est obligatoire' })
  type: TransactionType; 
  @ApiProperty({
    description: 'Date de la transaction',
    example: '2024-01-15T10:30:00.000Z',
    type: Date,
    required: true
  })
  @Type(() => Date)
  @IsDate({ message: 'La date doit être une date valide' })
  date: Date;
}