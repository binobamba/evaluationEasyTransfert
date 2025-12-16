import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { TransactionStatus, TransactionType } from '../dto/create-transaction.dto';


@Entity('transactions')
export class Transaction {


  @PrimaryGeneratedColumn('uuid')
  id: string;


  @Column({
    type: 'decimal',
    precision: 12,
    scale: 2,
    nullable: false,
  })
  montant: number;


  @Column({
    type: 'enum',
    enum: TransactionStatus,
    default: TransactionStatus.PENDING,
  })
  status: TransactionStatus;

 
  @Column({
    type: 'enum',
    enum: TransactionType,
  })
  type: TransactionType;


  @Column({
    type: 'timestamp',
    nullable: false,
  })
  date: Date;


  @CreateDateColumn()
  createdAt: Date;


  @UpdateDateColumn()
  updatedAt: Date;
}
