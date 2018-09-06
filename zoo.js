const run = () => {
    sleep("Tigger");
};

let favoriteFood = "bacon";
const sleep = (name) => {
    console.log(name + " sleeps for 8 hours");
};

const eat = (name, food) => {
    console.log(name + " eats " + food);
    food===favoriteFood ? console.log("YUM!!! " + name + " wants more " + food) : sleep(name);
};