import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { BookEntity } from './entity/book.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { BookInterface } from './interface/book.interface';
import { UpdateBookInput } from './dtos/updateBook.input.type';
import { CreateBookInput } from './dtos/createBook.input.type';

@Injectable()
export class BookService implements BookInterface {

    constructor(@InjectRepository(BookEntity) private readonly bookRepository: Repository<BookEntity>) {

    }

    async findAll() {
        try {
            let books = await this.bookRepository.find();
            return books;
        } catch (error) {
            throw new Error(error);
        }
    }

    async findById(id: string) {
        try {
            let book = await this.bookRepository.findBy({ id });
            return book[0];
        } catch (error) {
            throw new Error(error);
        }
    }

    async create(data: CreateBookInput) {
        try {
            let book = await this.bookRepository.create(data);
            this.bookRepository.save(book);
            return "Book created"
        } catch (error) {
            throw new Error(error);
        }
    }

    async deleteById(id: string) {
        try {
            let book = await this.bookRepository.findBy({ id });

            if (book) {
                await this.bookRepository.delete({ id });
                return "Book deleted successfully"
            }
            else {
                return "not deleted";
            }

        } catch (error) {
            throw new Error(error);
        }
    }

    async updateById(id: string, data: UpdateBookInput) {
        try {
            let book = await this.bookRepository.findBy({ id });
            if (book){
                await this.bookRepository.update({ id }, data);
                return "Book updated successfully"
            } 
       
        } catch (error) {
            throw new Error(error);
        }
    }
}
