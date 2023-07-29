
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface CreateBookInput {
    name: string;
    price: number;
}

export interface UpdateBookInput {
    name: string;
    price: number;
}

export interface Book {
    id: string;
    name: string;
    price: number;
}

export interface IQuery {
    books(): Book[] | Promise<Book[]>;
    bookById(id: string): Book | Promise<Book>;
}

export interface IMutation {
    createBook(createBookInput: CreateBookInput): string | Promise<string>;
    deleteBookById(id: string): string | Promise<string>;
    updateBookById(id: string, updateBookInput: UpdateBookInput): string | Promise<string>;
}

type Nullable<T> = T | null;
