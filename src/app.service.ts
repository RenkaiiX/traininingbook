import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/users';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  // Contoh: Mendapatkan semua pengguna
  findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  // Contoh: Membuat pengguna baru
  create(data: Partial<User>): Promise<User> {
    const newUser = this.userRepository.create(data);
    return this.userRepository.save(newUser);
  }

  // Contoh: Mencari pengguna berdasarkan ID
  findOne(id: number): Promise<User> {
    return this.userRepository.findOneBy({ id });
  }

  // Contoh: Menghapus pengguna berdasarkan ID
  async remove(id: number): Promise<void> {
    await this.userRepository.delete(id);
  }
}
