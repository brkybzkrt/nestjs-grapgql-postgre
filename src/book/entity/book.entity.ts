import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity({name:"book"})
export  class BookEntity {
    @PrimaryGeneratedColumn("uuid")
    id:string;

    @Column()
    name:string;

    @Column()
    price:number;
}