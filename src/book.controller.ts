import { Controller, Get, Post, Put, Delete } from "@nestjs/common"
import { BookServices } from "./book.services"

@Controller("book")
export class BookController {

    // fallback: every request create new instance
    // public bookServices: BookServices = new BookServices()

    constructor(private bookServices: BookServices) { }



    @Get("/findAll")
    findAllBook(): string {
        return this.bookServices.findAllBook()
    }

    @Post("/create")
    addBook(): string {
        return "this will create book"
    }

    @Put("/update")
    updateBook(): string {
        return "this will update the book"
    }

    @Delete("/delete")
    deleteBook(): string {
        return "this is for deleting book"
    }


}