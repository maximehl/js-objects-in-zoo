const run = () => {
    let tigger = new Tiger("Tigger");
    tigger.eat("meat");
    tigger.eat("kibble");

    let pooh = new Bear("Pooh");
    pooh.eat("fish");
    pooh.eat("meat");
};

// const sleep = (name) => {
//     console.log(name + " sleeps for 8 hours");
// };
//
// const eat = (name, food) => {
//     console.log(name + " eats " + food);
//     food===favoriteFood ? console.log("YUM!!! " + name + " wants more " + food) : sleep(name);
// };

class Tiger{
    constructor(name){
        this.name = name;
        this.favoriteFood = "meat";
    }

    sleep(){
        console.log(this.name + " sleeps for 8 hours");
    };

    eat(food){
        console.log(this.name + " eats " + food);
        food===this.favoriteFood ? console.log("YUM!!! " + this.name + " wants more " + food) : this.sleep();
    };
}

class Bear{
    constructor(name){
        this.name = name;
        this.favoriteFood = "fish";
    }

    sleep(){
        console.log(this.name + " hibernates for 4 months");
    };

    eat(food){
        console.log(this.name + " eats " + food);
        food===this.favoriteFood ? console.log("YUM!!! " + this.name + " wants more " + food) : this.sleep();
    }
}