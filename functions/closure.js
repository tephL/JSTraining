function Bakery(){
    let pastriesMade = 0;
    let bakers = 0; // cant be accessed since its not in the return statement

    function addBaker(){
        bakers++;
    }

    function removeBaker(){
        bakers -= 1;
    }

    function getBakers(){
        return bakers;
    }

    return {addBaker, getBakers}; 
    // only whats in this return statement could be accessed outside this scope, giving 
    // us encapsulation
}

const b = new Bakery();
b.addBaker();
b.addBaker();
b.addBaker();
b.addBaker();

console.log(b.getBakers());