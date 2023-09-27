import { Lot } from "./Lot.ts";

export class Message{
    constructor(public MessageId: string, public PopReceipt: string, public Lot: Lot){}
}
