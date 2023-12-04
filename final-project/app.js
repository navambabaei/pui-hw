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

let modal = document.getElementById("modal-background");

function openModal(title) {
    populateModal(title);
    modal.style.display = "block";
}

let closebutton = document.getElementById("close");

closebutton.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
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


const ratios = {
    "Cappuccino": {
        "ing1": [2, "Espresso"],
        "ing2": [2, "Steamed Milk"],
        "ing3": [2, "Foamed Milk"],
        "img": "cappuccino.png"
    },
    "Latte": {
        "ing1": [2, "Espresso"],
        "ing2": [4, "Steamed Milk"],
        "ing3": [0.5, "Foamed Milk"],
        "img": "latte.png"
    },
    "Americano": {
        "ing1": [2, "Espresso"],
        "ing2": [3, "Hot Water"],
        "ing3": ["--", "----------"],
        "img": "americano.png"
    },
    "Macchiato": {
        "ing1": [2, "Espresso"],
        "ing2": [0.5, "Foamed Milk"],
        "ing3": ["--", "----------"],
        "img": "macchiato.png"
    },
    "Mocha": {
        "ing1": [2, "Espresso"],
        "ing2": [2, "Chocolate"],
        "ing3": [1, "Steamed Milk"],
        "img": "mocha.png"
    },
    "Flat White": {
        "ing1": [2, "Espresso"],
        "ing2": [4, "Steamed Milk"],
        "ing3": ["--", "----------"],
        "img": "flat-white.png"
    }
};

let button1 = document.getElementById("1");
let button2 = document.getElementById("2");
let button3 = document.getElementById("3");

let meas1 = document.getElementById("meas1");
let meas2 = document.getElementById("meas2");
let meas3 = document.getElementById("meas3");

let ing1 = document.getElementById("ing1");
let ing2 = document.getElementById("ing2");
let ing3 = document.getElementById("ing3");

let dropdown = document.getElementById("coffee-dropdown");
let caffiene = document.getElementById("caffiene");
let scaleimage = document.getElementById("servings-image");

function scale1() {
    button1.style.backgroundColor = "#B0D1FF";
    button2.style.backgroundColor = "#FFFFFA";
    button3.style.backgroundColor = "#FFFFFA";

    meas1.innerHTML = ratios[dropdown.value].ing1[0] + " oz";
    meas2.innerHTML = ratios[dropdown.value].ing2[0] + " oz";
    meas3.innerHTML = ratios[dropdown.value].ing3[0] + " oz";

    ing1.innerHTML = ratios[dropdown.value].ing1[1];
    ing2.innerHTML = ratios[dropdown.value].ing2[1];
    ing3.innerHTML = ratios[dropdown.value].ing3[1];

    caffiene.innerHTML = "Caffiene: " + ratios[dropdown.value].ing1[0]*64 + " mg";
}

function scale2() {
    button2.style.backgroundColor = "#B0D1FF";
    button1.style.backgroundColor = "#FFFFFA";
    button3.style.backgroundColor = "#FFFFFA";

    meas1.innerHTML = ratios[dropdown.value].ing1[0]*2 + " oz";
    meas2.innerHTML = ratios[dropdown.value].ing2[0]*2 + " oz";

    ing1.innerHTML = ratios[dropdown.value].ing1[1];
    ing2.innerHTML = ratios[dropdown.value].ing2[1];

    if (ratios[dropdown.value].ing3[0] != "--") {
        meas3.innerHTML = ratios[dropdown.value].ing3[0]*2 + " oz";
        ing3.innerHTML = ratios[dropdown.value].ing3[1];
    }

    caffiene.innerHTML = "Caffiene: " + ratios[dropdown.value].ing1[0]*2*64 + " mg";
}

function scale3() {
    button3.style.backgroundColor = "#B0D1FF";
    button1.style.backgroundColor = "#FFFFFA";
    button2.style.backgroundColor = "#FFFFFA";

    meas1.innerHTML = ratios[dropdown.value].ing1[0]*3 + " oz";
    meas2.innerHTML = ratios[dropdown.value].ing2[0]*3 + " oz";

    ing1.innerHTML = ratios[dropdown.value].ing1[1];
    ing2.innerHTML = ratios[dropdown.value].ing2[1];

    if (ratios[dropdown.value].ing3[0] != "--") {
        meas3.innerHTML = ratios[dropdown.value].ing3[0]*3 + " oz";
        ing3.innerHTML = ratios[dropdown.value].ing3[1];
    }

    caffiene.innerHTML = "Caffiene: " + ratios[dropdown.value].ing1[0]*3*64 + " mg";
}

function scale() {
    scale1();

    scaleimage.src = "images/" + ratios[dropdown.value].img;
}