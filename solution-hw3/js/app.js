// Object class to store product information
class CinnamonRoll {

    constructor(basePrice, glazingPrice, packSize) {
        this.basePrice = basePrice;
        this.glazingPrice = glazingPrice; // 0 default
        this.packSize = packSize; // 1 default
    }

}

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

// Onload function to populate dropdowns when the window is loaded
window.onload = function() {

    populateGlazing();
    populatePackSize();

}

// Function to dynamically populate glazing dropdown
function populateGlazing() {

    // Retrieve glazing dropdown 
    let glazingDropdown = document.getElementById("glazing");
    
    // Iterate through all glazing types, create a dropdown option for each
    for (let i = 0; i < glazingTypes.length; i++) {
        let option = document.createElement("option");
        option.value = glazingTypes[i].glazing;
        option.text = glazingTypes[i].glazing;
        glazingDropdown.appendChild(option);
    }

}

// Function to dynamically populate pack size dropdown
function populatePackSize() {

    // Retrieve pack size dropdown
    let packDropdown = document.getElementById("pack-size");

    // Iterate through all pack sizes, create a dropdown option for each 
    for (let i = 0; i < packSize.length; i++) {
        let option = document.createElement("option");
        option.value = packSize[i].size;
        option.text = packSize[i].size;
        packDropdown.appendChild(option);
    }

}

// Function to calculate and update total cost based on dropdown selections
// Function ran on change/when a new option is selected in dropdown
function calculateTotal() {

    // Retrieve glazing and pack size dropdowns
    let glazingDropdown = document.getElementById("glazing");
    let packSizeDropdown = document.getElementById("pack-size");
    
    // Store selected values from each dropdown
    let selectedGlazing = glazingDropdown.value;
    let selectedPackSize = packSizeDropdown.value;

    // Create new object instance for current product
    let cinnamonRoll = new CinnamonRoll(2.49, 0, 1);

    // For loop iterating through each glazing type, matching selected type to respective price
    for (let i = 0; i < glazingTypes.length; i++) {
        if (glazingTypes[i].glazing === selectedGlazing) {
            cinnamonRoll.glazingPrice = glazingTypes[i].price;
            break;
        }
    }

    // For loop iterating through each pack size option, matching selected size to respective price multiplier
    for (let i = 0; i < packSize.length; i++) {
        if (packSize[i].size.toString() === selectedPackSize) {
            cinnamonRoll.packPrice = packSize[i].multiplier;
            break;
        }
    }

    // Calculate the total price and update the displayed item price
    let total = (cinnamonRoll.basePrice + cinnamonRoll.glazingPrice) * cinnamonRoll.packPrice;
    let displayedPrice = document.getElementById("item-price");
    displayedPrice.innerHTML = "$ " + total.toFixed(2);

}