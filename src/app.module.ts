
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { join } from 'path';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppResolver } from './app.resolver';
import { BookModule } from './book/book.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: true,
      autoSchemaFile: join(process.cwd(), 'src/schema.graphql'),
      definitions:{
        path:join(process.cwd(), 'src/graphql.ts')
      }
    }),
    TypeOrmModule.forRoot({
 
       type:"postgres",
       host: "localhost",
       port: 5432,
       username: "postgres",
       password: "deneme123",
       database: "deneme123",
       synchronize: true,
       entities:[__dirname+'/**/*.entity{.ts,.js}']

      }),
    BookModule,



  ],
  controllers: [AppController],
  providers: [AppService, AppResolver],
})
export class AppModule {}
