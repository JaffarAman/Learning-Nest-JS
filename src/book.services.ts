
import { Injectable } from "@nestjs/common"

// Dependencies injection
@Injectable()
export class BookServices {

    addBook(): string {
        return "this will add book"
    }
    updateBook(): string {
        return "this will update the book"
    }
    deleteBook(): string {
        return "this is for deleting book"
    }
    findAllBook(): string {
        return "This will find all books"
    }

}