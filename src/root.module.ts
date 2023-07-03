import { Module } from '@nestjs/common';
import { UserModule } from './user.module';
import { OrderModule } from './orders.module';
import { BookController } from './book.controller';
import { BookServices } from './book.services';

@Module({
  imports: [UserModule, OrderModule],
  controllers: [BookController],
  providers: [BookServices],
})
export class RootModule {
  constructor() {
    console.log("ROOT MODULE")
  }
}
