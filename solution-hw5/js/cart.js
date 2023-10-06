// Object class to store product information
class Roll {

    constructor(rollType, rollGlazing, packSize, basePrice) {
        this.type = rollType;
        this.glazing =  rollGlazing;
        this.size = packSize;
        this.basePrice = basePrice;
    }

}

// Hardcoding roll objects
let original = new Roll("Original", "Sugar milk", 1, 2.49);
let walnut = new Roll("Walnut", "Vanilla milk", 12, 3.49);
let raisin = new Roll("Raisin", "Sugar milk", 3, 2.99);
let apple = new Roll("Apple", "Keep original", 3, 3.49);

// Global variable to update price across functions
let totalPrice = 0;

// Create a set to store cart elements, add them all to DOM
const cartSet = new Set([original, walnut, raisin, apple]);
cartSet.forEach(addItem);


// Function to add rolls to DOM
function addItem(roll) {

    // Access template, clone it, and connect it to the roll instance
    let template = document.querySelector(".cart-item");
    let clone = template.content.cloneNode(true);
    roll.element = clone.querySelector(".roll");

    // Update image path
    const productImage = roll.element.querySelector(".cart-image");
    productImage.src = "../images/" + rolls[roll.type].imageFile;
    productImage.alt = roll.type + " cinnamon roll";

    // Update product info
    roll.element.querySelector("#cart-item-title").innerHTML = roll.type + " Cinnamon Roll";
    roll.element.querySelector("#cart-item-glazing").innerHTML = "Glazing: " + roll.glazing;
    roll.element.querySelector("#cart-item-packsize"),innerHTML = "Pack size: " + roll.size;

    // Update item price
    let price = calculatePrice(roll);
    let itemPrice = roll.element.querySelector(".cart-price");
    itemPrice.innerHTML = "$ " + price.toFixed(2);

    // Update total price and display on page
    totalPrice += price;
    updateTotalPrice();

    // Add clickability to the remove buttons
    roll.element.querySelector("#remove").addEventListener("click", () => {removeItem(roll)});

    // Add this new cart element to DOM
    document.getElementById("cart-list").appendChild(roll.element);

}

// Function to remove items from cart
function removeItem(roll) {

    // Remove from set
    cartSet.delete(roll);

    // Remove from DOM
    roll.element.remove();

    // Update total cose
    totalPrice -= calculatePrice(roll);
    updateTotalPrice();

}

// Function to calculate the price of an individual roll
function calculatePrice(roll) {

    // For loop iterating through each glazing type, matching selected type to respective price
    let selectedGlazing = 0;
    for (let i in glazingTypes) {
        if (glazingTypes[i].glazing === roll.glazing) {
            selectedGlazing = glazingTypes[i].price;
            break;
        }
    }

    // For loop iterating through each pack size option, matching selected size to respective price multiplier
    let selectedPackSize = 1;
    for (let j in packSize) {
        if (packSize[j].size === roll.size) {
            selectedPackSize = packSize[j].multiplier;
            break;
        }
    }

    let price = ((roll.basePrice + selectedGlazing) * selectedPackSize).toFixed(2);

    return parseFloat(price);

}

// Function to update total price on the page
function updateTotalPrice() {

    let cartPrice = document.getElementById("total-price");
    cartPrice.innerHTML = "$ " + Math.abs(totalPrice).toFixed(2);

}