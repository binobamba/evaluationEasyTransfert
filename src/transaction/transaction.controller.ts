import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus, ParseIntPipe } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiBody, ApiCreatedResponse, ApiOkResponse, ApiBadRequestResponse, ApiNotFoundResponse } from '@nestjs/swagger';
import { TransactionService } from './transaction.service';
import { CreateTransactionDto, TransactionStatus, TransactionType } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';

@ApiTags('transactions')
@Controller('transactions')
export class TransactionController {
  constructor(private readonly transactionService: TransactionService) {}

  @Post()
  @ApiOperation({ 
    summary: 'Créer une nouvelle transaction',
    description: 'Crée une nouvelle transaction avec les informations fournies.'
  })
  @ApiBody({ 
    type: CreateTransactionDto,
    description: 'Données de création de transaction',
    examples: {
      transactionDebit: {
        summary: 'Transaction de débit',
        value: {
          montant: 1500,
          status: TransactionStatus.PENDING,
          type: TransactionType.DEBIT,
          date: '2024-01-15T10:30:00.000Z'
        }
      },
      transactionCredit: {
        summary: 'Transaction de crédit',
        value: {
          montant: 2500,
          status: TransactionStatus.COMPLETED,
          type: TransactionType.CREDIT,
          date: '2024-01-16T14:45:00.000Z'
        }
      },
      transactionTransfer: {
        summary: 'Transaction de transfert',
        value: {
          montant: 5000,
          status: TransactionStatus.PENDING,
          type: TransactionType.TRANSFER,
          date: '2024-01-17T09:15:00.000Z'
        }
      }
    }
  })
  @ApiCreatedResponse({ 
    description: 'Transaction créée avec succès',
    schema: {
      example: {
        id: 1,
        montant: 1500,
        status: 'PENDING',
        type: 'DEBIT',
        date: '2024-01-15T10:30:00.000Z',
        createdAt: '2024-01-15T10:30:05.123Z',
        updatedAt: '2024-01-15T10:30:05.123Z'
      }
    }
  })
  @ApiBadRequestResponse({ 
    description: 'Données de la transaction invalides',
    schema: {
      example: {
        statusCode: 400,
        message: [
          'Le montant doit être un nombre entier',
          'Le montant minimum est de 50 F',
          'Le statut est obligatoire',
          'Le type est obligatoire',
          'La date doit être une date valide'
        ],
        error: 'Bad Request'
      }
    }
  })
  create(@Body() createTransactionDto: CreateTransactionDto) {
    return this.transactionService.create(createTransactionDto);
  }

  @Get()
  @ApiOperation({ 
    summary: 'Récupérer toutes les transactions',
    description: 'Retourne la liste complète des transactions.'
  })
  @ApiOkResponse({ 
    description: 'Liste des transactions récupérée avec succès',
    schema: {
      example: [
        {
          id: 1,
          montant: 1500,
          status: 'PENDING',
          type: 'DEBIT',
          date: '2024-01-15T10:30:00.000Z'
        },
        {
          id: 2,
          montant: 2500,
          status: 'COMPLETED',
          type: 'CREDIT',
          date: '2024-01-16T14:45:00.000Z'
        }
      ]
    }
  })
  findAll() {
    return this.transactionService.findAll();
  }

  @Patch(':id')
  @ApiOperation({ 
    summary: 'Mettre à jour une transaction',
    description: 'Met à jour partiellement une transaction existante.'
  })
  @ApiParam({
    name: 'id',
    required: true,
    type: Number,
    description: 'ID de la transaction à mettre à jour',
    example: 1
  })
  @ApiBody({ 
    type: UpdateTransactionDto,
    description: 'Données de mise à jour de la transaction',
    examples: {
      updateStatus: {
        summary: 'Mettre à jour le statut',
        value: {
          status: TransactionStatus.COMPLETED
        }
      },
      updateMontant: {
        summary: 'Mettre à jour le montant',
        value: {
          montant: 2000
        }
      },
      updateMultiple: {
        summary: 'Mettre à jour plusieurs champs',
        value: {
          montant: 2000,
          status: TransactionStatus.COMPLETED,
          type: TransactionType.CREDIT
        }
      }
    }
  })
  @ApiOkResponse({ 
    description: 'Transaction mise à jour avec succès',
    schema: {
      example: {
        id: 1,
        montant: 2000,
        status: 'COMPLETED',
        type: 'DEBIT',
        date: '2024-01-15T10:30:00.000Z',
        updatedAt: '2024-01-15T11:00:00.000Z'
      }
    }
  })
  @ApiNotFoundResponse({ 
    description: 'Transaction non trouvée',
    schema: {
      example: {
        statusCode: 404,
        message: 'Transaction avec ID 999 non trouvée',
        error: 'Not Found'
      }
    }
  })
  @ApiBadRequestResponse({ 
    description: 'Données de mise à jour invalides',
    schema: {
      example: {
        statusCode: 400,
        message: 'Le montant doit être un nombre entier',
        error: 'Bad Request'
      }
    }
  })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateTransactionDto: UpdateTransactionDto
  ) {
    return this.transactionService.update(id, updateTransactionDto);
  }
}