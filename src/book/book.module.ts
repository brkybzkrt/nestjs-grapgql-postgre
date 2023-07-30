import { Module } from '@nestjs/common';
import { BookResolver } from './book.resolver';
import { BookService } from './book.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookEntity } from './entity/book.entity';
import { BookController } from './controller/book.controller';

@Module({
  imports:[TypeOrmModule.forFeature([BookEntity])],
  providers: [BookResolver, BookService],
  controllers: [BookController]
})
export class BookModule {}
