import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  BadRequestException,
  NotFoundException,
  HttpCode,
} from '@nestjs/common';
import { randomUUID } from 'crypto';

type User = {
  id: string;
  name: string;
  email?: string;
  createdAt: string;
};

class CreateUserDto {
  name!: string;
  email?: string;
}

class UpdateUserDto {
  name?: string;
  email?: string;
}

const store = new Map<string, User>();

@Controller('users')
export class UsersController {
  @Post()
  @HttpCode(201)
  create(@Body() body: CreateUserDto) {
    const { name, email } = body ?? {};
    if (!name || typeof name !== 'string') {
      throw new BadRequestException('name is required');
    }

    const id = randomUUID();
    const user: User = { id, name, email, createdAt: new Date().toISOString() };
    store.set(id, user);
    return user;
  }

  @Get()
  findAll() {
    return Array.from(store.values());
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    const user = store.get(id);
    if (!user) throw new NotFoundException('User not found');
    return user;
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() body: UpdateUserDto) {
    const existing = store.get(id);
    if (!existing) throw new NotFoundException('User not found');

    const { name, email } = body ?? {};
    const updated: User = {
      ...existing,
      name: typeof name === 'string' ? name : existing.name,
      email: typeof email === 'string' ? email : existing.email,
    };
    store.set(id, updated);
    return updated;
  }

  @Delete(':id')
  @HttpCode(204)
  remove(@Param('id') id: string) {
    if (!store.has(id)) throw new NotFoundException('User not found');
    store.delete(id);
    return;
  }
}
