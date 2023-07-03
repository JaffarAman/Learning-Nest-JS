import { Module } from "@nestjs/common";



@Module({
    imports: [],
    controllers: [],
    providers: []
})

export class UserModule {
    constructor() {
        console.log("USER MODULE")
    }
}