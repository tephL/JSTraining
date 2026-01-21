/* CLASS - an easier more optimal way for handling objects

    * constructor - takes in args for the object to be created
    * static -  a variable/property | method thats owned by the class itself 
    * this. -  a reference to the current object's property
*/

class Foods{
    static stock = 0;

    constructor(name, amt, price){
        this.name = name,
        this.amt = amt,
        this.price = price,
        this.total = price * amt;
        Foods.stock += amt;
    }

    static stockAmt(){
        console.log(Foods.stock);
    }

    orderSummary(){
        console.log(`You have ordered ${this.amt} pcs of ${this.name} for ${this.total} PHP`)
    }
}

const order1 = new Foods('Crinkles', 12, 10);
order1.orderSummary();

console.log(Foods.stock);