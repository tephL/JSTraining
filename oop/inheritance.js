/* INHERITANCE - another class that also has the properties | methods of the Parent class. Also is capable of making unique ones just for the children itself
    * class Children extends Parent{...} 
    * this - still works
    * super() | super.method() - calls the parent's  constructor | method
*/

class Foods{ // all properties && methods are inherited by the classes inherited from this class
    isHot = true;
    
    constructor(name){
        this.name = name;
    }
    
    eat(){
        console.log(`im eating ${this.name} and it is ${this.isHot ? 'hot' : 'not hot'}`);
    }
    
    utensils(){
        console.log('im preparing utensils now');
    }
}

class Pastry extends Foods{
    constructor(name, sweetLvl){
        super(name); // calls the parent's contructor since its also required to be filled in
        this.sweetLvl = sweetLvl;
    }
    
    bake(){ // unique method to Children
        console.log(`im baking ${this.name} with lvl ${this.sweetLvl} sweetness`);
    }
}

class Soup extends Foods{
    boil(){ // unique method to Children
        console.log(`im boiling ${this.name}`);
        super.utensils(); // calls the parent's method after calling this method
    }
}

const f = new Foods('hotdog');
f.eat();

const pastry = new Pastry('Crinkles', 10);
pastry.bake();
pastry.eat();

const pastry2 = new Pastry('Brownies', 20);
pastry2.bake(); 
pastry2.eat();


const soup = new Soup('Sinigang');
soup.boil();
soup.eat();