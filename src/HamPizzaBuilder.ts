import Pizza = require("./Pizza");
import PizzaBuilder = require("./PizzaBuilder");

class HamPizzaBuilder implements PizzaBuilder {

    private _pizza: Pizza;

    BuildPart(): void {
        this._pizza = new Pizza();
        this._pizza.Toppings = ["Ham,Mushroom"];
        this._pizza.HasCheese = true;
    }
    GetResult(): Pizza {
        return this._pizza;
    }
}

export = HamPizzaBuilder;