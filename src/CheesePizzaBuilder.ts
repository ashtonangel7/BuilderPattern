import Pizza = require("./Pizza");
import PizzaBuilder = require("./PizzaBuilder");

class CheesePizzaBuilder implements PizzaBuilder {

    private _pizza: Pizza;

    BuildPart(): void {
        this._pizza = new Pizza();
        this._pizza.Toppings = ["Peppers,Capers,Ham"];
        this._pizza.HasCheese = true;
    }
    GetResult(): Pizza {
        return this._pizza;
    }
}

export = CheesePizzaBuilder;