import {assortment} from "./pizza.js";
import {toppings} from "./pizza.js";
import {size} from "./pizza.js";

let peperoni = document.getElementById("peperoni");
let margarita = document.getElementById("margarita");
let bavarian = document.getElementById("bavarian");
let small = document.getElementById("smallButton");
let big = document.getElementById("bigButton");
let price = document.getElementById("price");
let cheese = document.getElementById("cheese");
let mozzarella = document.getElementById("mozzarella");
let chedder = document.getElementById("chedder");

let pizza = assortment.margarita;

peperoni.onclick = function () {
    pizza = assortment.pepperoni;
}

margarita.onclick = function () {
    pizza = assortment.margarita;
}

bavarian.onclick = function () {
    pizza = assortment.bavarian;
}

small.onclick = function () {
    pizza.setSize(size.small);
}

big.onclick = function () {
    pizza.setSize(size.big);
}

cheese.onclick = function (){
    if(pizza.getToppings().includes(toppings.cheese_board)){
        pizza.removeTopping(toppings.cheese_board);
    } else
        pizza.addTopping(toppings.cheese_board);
}

mozzarella.onclick = function (){
    if(pizza.getToppings().includes(toppings.creamy_mozzarella)){
        pizza.removeTopping(toppings.creamy_mozzarella);
    } else
        pizza.addTopping(toppings.creamy_mozzarella);
}

chedder.onclick = function (){
    if(pizza.getToppings().includes(toppings.cheddar_parmesan)){
        pizza.removeTopping(toppings.cheddar_parmesan);
    } else
        pizza.addTopping(toppings.cheddar_parmesan);
}

price.onclick = function () {
    price.textContent = "Цена "+pizza.calculatePrice()+" Каллории "+pizza.calculateCalories();
/*    alert(pizza.getStuffing());
    alert(pizza.getSize());*/
}





