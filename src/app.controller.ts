import { Controller, Get, Post, Param, Body, Delete } from '@nestjs/common';
import { AppService } from './app.service';
import { User } from './entities/users';

@Controller('users')
export class AppController {
  constructor(private readonly yourService: AppService) {}

  // Rute untuk mendapatkan semua pengguna
  @Get()
  findAll(): Promise<User[]> {
    return this.yourService.findAll();
  }

  // Rute untuk membuat pengguna baru
  @Post()
  create(@Body() createUserDto: Partial<User>): Promise<User> {
    return this.yourService.create(createUserDto);
  }

  // Rute untuk mendapatkan pengguna berdasarkan ID
  @Get(':id')
  findOne(@Param('id') id: number): Promise<User> {
    return this.yourService.findOne(id);
  }

  // Rute untuk menghapus pengguna berdasarkan ID
  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.yourService.remove(id);
  }
}
