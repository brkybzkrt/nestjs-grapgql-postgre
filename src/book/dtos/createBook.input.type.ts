import { Field, InputType, Int } from "@nestjs/graphql";



@InputType()
export class CreateBookInput {

    @Field()
    name: string;

    @Field((type)=> Int)
    price: number;

}