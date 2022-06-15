// console.log("Hello")

class Animal {

    private static animal:Animal;
    private readonly id:number;

    private constructor() {
        this.id = Math.random();
    }

    public static createAnimal():Animal{
        return this.animal ??= new Animal();

    }

    public toString():string{
        return `Animal Id is ${this.id}`;
    }

    // move(distanceInMeters: number = 0) {
    //     console.log(`Animal moved ${distanceInMeters}m.`);
    // }
}

let animal1 = Animal.createAnimal();
console.log(`${animal1}`)

let animal = Animal.createAnimal();
console.log(`${animal}`)




