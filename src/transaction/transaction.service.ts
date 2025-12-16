import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Transaction } from './entities/transaction.entity';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';

@Injectable()
export class TransactionService {
  constructor(
    @InjectRepository(Transaction)
    private transactionRepository: Repository<Transaction>,
  ) {}

  async create(createTransactionDto: CreateTransactionDto): Promise<Transaction> {
    const transaction = this.transactionRepository.create(createTransactionDto);
    return await this.transactionRepository.save(transaction);
  }

  async findAll(): Promise<Transaction[]> {
    return await this.transactionRepository.find();
  }

  async update(id: number, updateTransactionDto: UpdateTransactionDto): Promise<Transaction> {
    const transaction = await this.transactionRepository.findOne({ where: { id: id.toString() } });

    if (!transaction) {
      throw new NotFoundException(`Transaction avec ID ${id} non trouvée`);
    }

    if (updateTransactionDto.montant !== undefined) {
      transaction.montant = updateTransactionDto.montant;
    }

    if (updateTransactionDto.status !== undefined) {
      transaction.status = updateTransactionDto.status;
    }

    if (updateTransactionDto.type !== undefined) {
      transaction.type = updateTransactionDto.type;
    }

    if (updateTransactionDto.date !== undefined) {
      transaction.date = updateTransactionDto.date;
    }

    return await this.transactionRepository.save(transaction);
  }
}