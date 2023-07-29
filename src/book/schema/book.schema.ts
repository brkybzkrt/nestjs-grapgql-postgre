import { Field, Int, ObjectType } from "@nestjs/graphql";


@ObjectType()
export class Book {

    @Field()
    id: string;

    @Field()
    name: string;

    @Field(()=> Int)
    price: number;

}