import { BookInterface } from './interface/book.interface';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Book } from './schema/book.schema';
import { BookService } from './book.service';
import { CreateBookInput } from './dtos/createBook.input.type';
import { UpdateBookInput } from './dtos/updateBook.input.type';

@Resolver(of => Book)
export class BookResolver implements BookInterface {

    constructor(private readonly bookService: BookService) { }

    @Query(returns => [Book], { name: "books" })
    findAll() {
        return this.bookService.findAll();
    }

    @Query(returns => Book, { name: "bookById" })
    findById(@Args({ name: 'id', type: () => String }) id: string) {
        return this.bookService.findById(id);
    }

    @Mutation(returns => String, { name: "createBook" })
    create(@Args({ name: 'createBookInput' }) createBookInput: CreateBookInput) {
        return this.bookService.create(createBookInput);
    }

    @Mutation(returns => String, { name: "deleteBookById" })
    deleteById(@Args({ name: 'id', type: () => String }) id: string) {
        return this.bookService.deleteById(id);
    }


    @Mutation(returns => String, { name: "updateBookById" })
    updateById(@Args({ name: 'id', type: () => String }) id: string, @Args({ name: 'updateBookInput' }) updateBookInput: UpdateBookInput) {
        return this.bookService.updateById(id, updateBookInput);
    }
}
