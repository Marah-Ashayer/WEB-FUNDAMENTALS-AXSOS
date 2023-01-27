function pizzaOven(crustType1, sauceType1, cheeses1,toppings1){
    var pizza={};
    pizza.crustType=crustType1;
    pizza.sauceType=sauceType1;
    pizza.cheeses=cheeses1;
    pizza.toppings=toppings1;
    return pizza;
}
var a=pizzaOven("deep dish", "traditional", ["mozzarella"],  ["pepperoni", "sausage"]);
var b=pizzaOven("hand tossed", "marinara", ["mozzarella","feta"], ["mushrooms","olives", "onions"]);
var c=pizzaOven("hand tossed", "no-marinara", ["mozzarella"], ["no-olives", "onions"]);
var d=pizzaOven(" tossed", "marinara", ["feta"], ["mushrooms"]);
console.log(c);


