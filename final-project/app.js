const drinks = {
    "espresso": {
        "name": "Espresso",
        "image": "espresso-deets.png",
        "alt": "Cartoon cup with 1 ounce of espresso",
        "description": "A small but mighty drink made by pushing hot steam through ground coffee beans.",
        "pairing": "A sweet treat like a chocolate",
        "fact": "Espresso is usually measured in terms of shots, each shot being 1 ounce. Cheers!"
    },
    "cappuccino": {
        "name": "Cappuccino",
        "image": "cappuccino-deets.png",
        "alt": "Cartoon cup with 2 ounces espresso, 2 ounces steamed milk, and 2 ounces foamed milk.",
        "description": "An Italian breakfast staple made with equal parts espresso, steamed milk, and foam.",
        "pairing": "Your favorite breakfast food or snack",
        "fact": "Cappuccino, from capuchin, means little hood or something that covers the head. No cap!"
    },
    "latte": {
        "name": "Latte",
        "image": "latte-deets.png",
        "alt": "Cartoon cup with 2 ounces espresso, 4 ounces steamed milk, and a half ounce of foamed milk.",
        "description": "The go-to coffee order made with a 2:1 ratio of steamed milk to espresso, topped off with foam.",
        "pairing": "French toast or avocado toast... or your favorite toast",
        "fact": "Don't be surprised to be handed a glass of warm milk if you order this in Italy, because latte means milk!"
    },
    "americano": {
        "name": "Americano",
        "image": "americano-deets.png",
        "alt": "Cartoon cup with 2 ounces espresso and 3 ounces hot water.",
        "description": "A shot of espresso diluted with hot water.",
        "pairing": "Refreshing fruits, citruses, and mint",
        "fact": "In WWII, the americano was created by American soldiers who didn't like the strong espresso in Italy."
    },
    "macchiato": {
        "name": "Macchiato",
        "image": "macchiato-deets.png",
        "alt": "Cartoon cup with 2 ounces espresso and a dollop of foamed milk.",
        "description": "A small cup with a shot of espresso topped with a dollop of foam.",
        "pairing": "Flaky pastry like a cornetto or croissant",
        "fact": "Foamed milk in the drink gives a spotted look, as macchiato translates to stained or spotted."
    },
    "mocha": {
        "name": "Mocha",
        "image": "mocha-deets.png",
        "alt": "Cartoon cup with 2 ounces espresso, 2 ounce chocolate, and 1 ounce of steamed milk.",
        "description": "An espresso drink sweetened with chocolate.",
        "pairing": "Orange or strawberry flavored sweets or fruits",
        "fact": "This drink originates from a port city in Yemen called Mocha, famous for mixing coffee with chocolate."
    },
    "flat-white": {
        "name": "Flat White",
        "image": "flat-white-deets.png",
        "alt": "Cartoon cup with 2 ounces espresso and 4 ounces steamed milk",
        "description": "A foamless drink with 2 parts steamed milk and 1 part espresso.",
        "pairing": "Belgian waffles",
        "fact": "Said to originate in Sydney, Australia, appealing to a thinner beverage compared to a fluffy cappuccino."
    },
    "black-coffee": {
        "name": "Black Coffee",
        "image": "black-coffee-deets.png",
        "alt": "Cartoon cup with 2 ounces espresso and 4 ounces steamed milk",
        "description": "Coffee in its purest form.",
        "pairing": "Anything! It is so plain",
        "fact": "The healthiest of all, contains no fat, no carbs, and just 2.4 calories per serving!"
    }
};

const ratios = {
    "Espresso": {

    },
    "Cappuccino": {
    },
    "Latte": {
    },
    "Americano": {
    },
    "Macchiato": {
    },
    "Mocha": {
    },
    "Flat-white": {
    },
    "Black-coffee": {
    }
}

let modal = document.getElementById("modal-background");

function openModal(title) {
    populateModal(title);
    modal.style.display = "block";
}

let closebutton = document.getElementById("close");
let modalcard = document.getElementById("modal");

closebutton.onclick = function() {
    modal.style.display = "none";
}

let image = document.getElementById("modal-img");
let coffee = document.getElementById("coffee-type");
let description = document.getElementById("coffee-description");
let pairing = document.getElementById("enjoyed-with");
let fact = document.getElementById("fun-fact");

function populateModal(title) {
    image.src = "images/" + drinks[title].image;
    coffee.innerHTML = drinks[title].name;
    description.innerHTML = drinks[title].description;
    pairing.innerHTML = "Enjoy with: " + drinks[title].pairing;
    fact.innerHTML = "Fun fact: " + drinks[title].fact;
}