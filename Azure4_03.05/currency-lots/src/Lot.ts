 enum Currency{
    PLN = "PLN",
    USD="USD",
    UAH="UAH",
    RUB="RUB",
    EUR="EUR",
    CAD="CAD",
    CNY="CNY",
    SEK="CNY"
}
 class Lot{
    constructor(public OwnerCurrency: Currency,public RequiredCurrency:Currency, public Price:number, public OwnerName:string){}
}
type Currencies = keyof Currency;
export {Currency,Lot,Currencies};