import {assortment} from "./pizza.js";
import {toppings} from "./pizza.js";
import {size} from "./pizza.js";

let pizza = assortment.margarita;
console.log(pizza.toppingsArray)
console.log(pizza);
console.log(pizza.getSize())
console.log(pizza.calculatePrice())
console.log("calories "+pizza.calculateCalories())
pizza.addTopping(toppings.creamy_mozzarella)
pizza.addTopping(toppings.cheddar_parmesan)
pizza.addTopping(toppings.cheese_board)
console.log(pizza.toppingsArray)
console.log(pizza.calculatePrice())
console.log("calories "+pizza.calculateCalories())
pizza.setSize(size.big);
console.log(pizza.getSize())
console.log(pizza.calculatePrice())
console.log("calories "+pizza.calculateCalories())
console.log(pizza.getStuffing())
console.log("GET TOPINGS 1")
console.log(pizza.getToppings())
pizza.removeTopping(toppings.creamy_mozzarella)
pizza.removeTopping(toppings.cheddar_parmesan)
console.log("GET TOPINGS")
console.log(pizza.getToppings())
console.log(pizza.calculatePrice())
console.log("calories "+pizza.calculateCalories())
console.log(pizza.removeTopping(toppings.cheese_board))
console.log(pizza.removeTopping(toppings.cheese_board))
console.log(pizza.removeTopping(toppings.cheese_board))
console.log("GET TOPINGS")
console.log(pizza.getToppings())
console.log(pizza.toppingsArray)
console.log("calories "+pizza.calculateCalories())

