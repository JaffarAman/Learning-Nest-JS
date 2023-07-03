import { Module } from "@nestjs/common";
import { ChatModule } from './chat/chat.module';

@Module({
    imports : [ChatModule],
    providers : [],
    controllers :[]
})
export class OrderModule{
    constructor(){
        console.log("Order Module")
    }
}