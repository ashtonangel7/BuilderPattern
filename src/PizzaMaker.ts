import PizzaBuilder = require("./PizzaBuilder");
import Pizza = require("./Pizza");

class PizzaMaker {
    private readonly _builder: PizzaBuilder;
    
    constructor(builder: PizzaBuilder) {
        this._builder = builder;
    }

    MakePizza() : void { 
        this._builder.BuildPart();
    }
    GetPizza(): Pizza {
        return this._builder.GetResult();
    }
}

export = PizzaMaker;