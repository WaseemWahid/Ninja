class Ninja {
    constructor(name){
        this.name = name
        this.health = 100
        this.speed = 3
        this.strength = 3
    }
    sayName(){
        console.log(this.name)
        return this
    }
    showStats(){
        console.log(`Name is ${this.name}` )
        console.log(`Health is ${this.health}`)
        console.log(`Speed is ${this.speed}`) 
        console.log(`Strength is ${this.strength}`) 
        return this
    }
    drinkSake(){
        this.health += 10;
        console.log(`Health is ${this.health}`)
        return this
    }
}

const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();

console.log('==========================')

const ninja2 = new Ninja("Mike");
ninja2.sayName().showStats().drinkSake().showStats();
