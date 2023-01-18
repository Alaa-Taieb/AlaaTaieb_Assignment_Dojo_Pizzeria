function pizzaOven(crustType , sauceType, cheeses, toppings){
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}

const pizza_1 = pizzaOven('deep dish' , 'traditional' , ['mozzarella'] , ['pepperoni' , 'sausage']);
const pizza_2 = pizzaOven('hand tossed' , 'marinara' , ["mozzarella", "feta"] , ["mushrooms", "olives", "onions"]);
const pizza_3 = pizzaOven('Stuffed Crust' , 'BBQ sauce' , ['Provolone' , 'Gouda'] , ['Onions' , 'Chicken']);
const pizza_4 = pizzaOven('Cracker Crust' , 'Tomato sauce' , ['Ricotta' , 'Mozzarella'] , ['Bacon' , 'Mushrooms']);

function RandomPizza(){
    var custom = {};
    custom.crustTypes = ['Stuffed Crust' , 'Cracker Crust', 'Flat Bread Crust', 'Thin Crust', 'Cheese Crust Pizza', 'Thick Crust Pizza', 'deep dish','hand tossed'];
    custom.sauceTypes = ['White sauce' , 'Tomato sauce' , 'Sweet pizza sauce' , 'Pepper sauce' , 'Pesto sauce' , 'BBQ sauce' , 'Béchamel sauce' , 'Pasta sauce', 'marinara'];
    custom.cheeses = ['Mozzarella Cheese' , 'Provolone Cheese' , 'Cheddar Cheese' , 'Parmesan Cheese' , 'Gouda' , 'Goat Cheese' , 'Gruyere' , 'Ricotta'];
    custom.toppings = ['Pepperoni' , 'Sausage', 'Mushrooms', 'Bacon', 'Onions', 'Peppers', 'Chicken'];
    var pizza = {};
    pizza.crustType = custom.crustTypes[Math.floor(Math.random()*custom.crustTypes.length)];
    pizza.sauceType = custom.sauceTypes[Math.floor(Math.random()*custom.sauceTypes.length)];
    pizza.cheeses = [];
    pizza.toppings = [];
    var number_of_cheeses = Math.ceil(Math.random()*3);
    var number_of_toppings = Math.ceil(Math.random()*5);
    for(var i = 0; i<number_of_cheeses; i++)
        pizza.cheeses.push(custom.cheeses[Math.floor(Math.random() * custom.cheeses.length)]);
    for(var i = 0; i<number_of_toppings; i++)
        pizza.toppings.push(custom.toppings[Math.floor(Math.random() * custom.toppings.length)]);
    console.log(pizza);
}

RandomPizza();