import PizzaMaker = require("./PizzaMaker");
import CheesePizzaBuilder = require("./CheesePizzaBuilder");
import HamPizzaBuilder = require("./HamPizzaBuilder");

let cheesePizzaBuilder = new CheesePizzaBuilder();
let hamPizzaBuilder = new HamPizzaBuilder();

let pizzaMaker: PizzaMaker = new PizzaMaker(cheesePizzaBuilder);
pizzaMaker.MakePizza();
let pizza = pizzaMaker.GetPizza();

console.log(`Pizza Toppings :  ${pizza.Toppings.join(",")}`);

pizzaMaker = new PizzaMaker(hamPizzaBuilder);
pizzaMaker.MakePizza();
pizza = pizzaMaker.GetPizza();

console.log(`Pizza Toppings :  ${pizza.Toppings.join(",")}`);