const run = () => {
    let tigger = new Tiger("Tigger");
    tigger.eat("meat");
    //tigger.eat("kibble");

    let pooh = new Bear("Pooh");
    pooh.eat("fish");
    pooh.eat("meat");

    let rarity = new Unicorn("Rarity");
    rarity.eat("marshmallows");
    rarity.sleep();

    let gemma = new Giraffe("Gemma");
    gemma.eat("meat");
    gemma.eat("leaves");

    let stinger = new Bee("Stinger");
    stinger.eat("ice cream");
    stinger.eat("pollen");

    let zoebot = new Zookeper("ZoeBot");
    zoebot.feedAnimals([tigger, pooh, rarity, gemma, stinger], "grilled veggies");

    Animal.getPopulation();
};

// const sleep = (name) => {
//     console.log(name + " sleeps for 8 hours");
// };
//
// const eat = (name, food) => {
//     console.log(name + " eats " + food);
//     food===favoriteFood ? console.log("YUM!!! " + name + " wants more " + food) : sleep(name);
// };

let animalPopulation = 0;
class Animal{
    constructor(name, favoriteFood){
        this.name = name;
        this.favoriteFood = favoriteFood;
        animalPopulation++;
    }

    sleep(){
        console.log(this.name + " sleeps for 8 hours");
    }

    eat(food){
        console.log(this.name + " eats " + food);
        food===this.favoriteFood ? console.log("YUM!!! " + this.name + " wants more " + food) : this.sleep();
    }

    static getPopulation(){
        return animalPopulation;
    }
}

class Tiger extends Animal{
    constructor(name){
        super(name, "meat");
    }
}

class Bear extends Animal{
    constructor(name){
        super(name, "fish");
    }

    sleep(){
        console.log(this.name + " hibernates for 4 months");
    };
}

class Unicorn extends Animal{
    constructor(name){
        super(name, "marshmallows");
    }

    sleep(){
        console.log(this.name + " sleeps in a cloud");
    }
}

class Giraffe extends Animal{
    constructor(name){
        super(name, "leaves");
    }

    eat(food){
        if(food===this.favoriteFood){
            super.eat(food);
            this.sleep();
        }else{
            console.log("YUCK!!! " + this.name + " will not eat " + food);
        }
    }
}

class Bee extends Animal{
    constructor(name){
        super(name, "pollen");
    }

    sleep(){
        console.log(this.name + " never sleeps");
    }

    eat(food){
        if(food===this.favoriteFood){
            super.eat(food);
            this.sleep();
        }else{
            console.log("YUCK!!! " + this.name + " will not eat " + food);
        }
    }
}

class Zookeper{
    constructor(name){
        this.name = name;
    }

    feedAnimals(animals, food){
        console.log(this.name + " is feeding " + food + " to " + animals.length + " of "
            + Animal.getPopulation() + " total animals");
        for(let n of animals){
            n.eat(food);
        }
    }
}