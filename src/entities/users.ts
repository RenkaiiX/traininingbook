import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users') // Nama tabel di database
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({ type: 'varchar', length: 255, unique: true })
  username: string;

  @Column({ type: 'varchar', length: 255, unique: true })
  email: string;

  @Column({ type: 'varchar', length: 10 })
  phone_code: string;

  @Column({ type: 'varchar', length: 20 })
  phone: string;

  @Column({ type: 'varchar', length: 255 })
  password: string;

  @Column({ type: 'varchar', length: 255 })
  userable: string;

  @Column({ type: 'varchar', length: 50 })
  type: string; // manager, admin, customer
}
