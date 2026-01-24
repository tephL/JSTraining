//  manual way to create an object with child object
const Hostiles = {
    name: 'hostiles',
    hp: 20,
    atk: 25,
    mobs: ['enderman', 'zombie', 'skeleton'],
    weakness: {
        mob: 'iron_golem',
        potion: 'healing_potion',
    }
}

const mobTypes = [Hostiles];

mobTypes.forEach(element => {
    // use a ~ for(x in .property){key[property]} ~ to iterate through a child object
    for(const property in element.weakness){
        console.log(element.name + ' is weak to ' + element.weakness[property]);
    }
    });
    


// making a child object for classes
class MobType{
    // using rest parameters to get the args as a batch
    constructor(name, hp, atk, [], ...weakness){
        this.name = name,
        this.hp = hp,
        this.atk = atk,
        this.mobs = [],
        // using spread operator to split the values from rest param ...weakness and assign it to their corresponding attributes of the child obj
        this.weakness = new Weaknesses(...weakness)
    }
}

class Weaknesses{
    constructor(mob, potion){
        this.mob = mob,
        this.potion = potion
    }
}

let p = new MobType('Animal', 10, 0, ['sheep', 'cow', 'pig'], 'wolf', 'poison_potion');

console.log(p);

for(const property in p.weakness){
    console.log(p.name + ' is weak to: ' + p.weakness[property]);
}

let a = 'bruh';

for(const property in a){
    console.log(a[property]);
}