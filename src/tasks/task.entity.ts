import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { UserEntity } from '../users/user.entity';
import { PriorityEnum } from './priority.enum';

@Entity()
export class TaskEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => UserEntity, (user) => user.tasks, {
    eager: true,
  })
  createdBy: UserEntity;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @ManyToOne(() => UserEntity, (user) => user.assignedTasks, {
    eager: true,
  })
  assignee: UserEntity;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column({
    type: 'enum',
    enum: PriorityEnum,
    default: PriorityEnum.NO_PRIORITY,
  })
  priority: PriorityEnum;

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  dueDate: Date;

  @Column({ default: false })
  isCompleted: boolean;

  @Column({ type: 'text', array: true, default: [] })
  tags: string[];
}