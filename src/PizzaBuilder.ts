import Pizza = require("./Pizza");

abstract class PizzaBuilder {
    constructor(parameters) {

    }
    abstract BuildPart(): void;
    abstract GetResult(): Pizza;
}

export = PizzaBuilder;