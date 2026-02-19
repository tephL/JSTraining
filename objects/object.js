// OBJECT - a set of attributes/methods which values could be 
//          called with its objName.keyName
//        - key : value | method/function

const objName = {
    key1 : 'value1',
    key2 : 'value2',
    keyMethod(){console.log('keyMethod called!');
                return true;
               },     
    printValues(){
        console.log(`this object has the values of ${this.key1} and ${this.key2}`);
        return true;
    }
}

console.log(objName.printValues());
console.log(objName.keyMethod());