const rolls = {
    "Original": {
        "basePrice": 2.49,
        "imageFile": "original-cinnamon-roll.jpg"
    },
    "Apple": {
        "basePrice": 3.49,
        "imageFile": "apple-cinnamon-roll.jpg"
    },
    "Raisin": {
        "basePrice": 2.99,
        "imageFile": "raisin-cinnamon-roll.jpg"
    },
    "Walnut": {
        "basePrice": 3.49,
        "imageFile": "walnut-cinnamon-roll.jpg"
    },
    "Double-Chocolate": {
        "basePrice": 3.99,
        "imageFile": "double-chocolate-cinnamon-roll.jpg"
    },
    "Strawberry": {
        "basePrice": 3.99,
        "imageFile": "strawberry-cinnamon-roll.jpg"
    }    
};

// Dictionary style array to store associated prices to glazing types
let glazingTypes = [
    {
        glazing: "Keep original",
        price: 0,
    },
    {
        glazing: "Sugar milk",
        price: 0,
    },
    {
        glazing: "Vanilla milk",
        price: 0.5,
    },
    {
        glazing: "Double chocolate",
        price: 1.50,
    },
];

// Dictionary style array to store associated price multipliers to pack sizes
let packSize = [
    {
        size: 1,
        multiplier: 1,
    },
    {
        size: 3,
        multiplier: 3,
    },
    {
        size: 6,
        multiplier: 5,
    },
    {
        size: 12,
        multiplier: 10,
    }
];