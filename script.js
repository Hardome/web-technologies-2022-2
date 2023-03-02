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
let cheesePrice = document.getElementById("cheesePrice");
let mozzarellaPrice = document.getElementById("mozzarellaPrice");
let chedderPrice = document.getElementById("chedderPrice");

let pizza = assortment.margarita;

peperoni.onclick = function () {
    changePizza(assortment.pepperoni)
}

margarita.onclick = function () {
    changePizza(assortment.margarita)
}

bavarian.onclick = function () {
    changePizza(assortment.bavarian)
}

function changePizza(pizzaType){
    pizza = pizzaType;
    pizza.toppingsArray =[];
    calculate();
}

small.onclick = function () {
    pizza.setSize(size.small);
    changeCostTopings(size.small);
    calculate();
}

big.onclick = function () {
    pizza.setSize(size.big);
    changeCostTopings(size.big);
    calculate();
}

cheese.onclick = function (){
    changeTopping(toppings.cheese_board);
}

mozzarella.onclick = function (){
    changeTopping(toppings.creamy_mozzarella);
}

chedder.onclick = function (){
    changeTopping(toppings.cheddar_parmesan);
}

 function changeTopping (topping) {
     if(pizza.getToppings().includes(topping)){
         pizza.removeTopping(topping);
         calculate();
     } else{
         pizza.addTopping(topping);
         calculate();
     }
}

function calculate(){
    price.textContent = "Добавить в корзину за "+pizza.calculatePrice()+"  ("+ pizza.calculateCalories()+"ккал)";
}

function changeCostTopings(newSize){
    if(newSize===size.small){
        chedderPrice.textContent = "150";
        mozzarellaPrice.textContent = "50";
        cheesePrice.textContent = "150";
    } else {
        chedderPrice.textContent = "300";
        mozzarellaPrice.textContent = "100";
        cheesePrice.textContent = "300";
    }
}




