import {
  Column,
  Entity,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm'

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column({
    unique: true,
  })
  email: string

  @Column({
    unique: true,
  })
  username: string

  @Column({
    select: false,
  })
  password: string
}
