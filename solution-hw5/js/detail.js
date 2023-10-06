let cart = [];

// Retrieving current roll type info from URL | Source: HW4 Instructions Document
const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const rollType = params.get('roll');

// Object class to store product information
class Roll {

    constructor(rollType, rollGlazing, packSize, basePrice) {
        this.type = rollType;
        this.glazing =  rollGlazing;
        this.size = packSize;
        this.basePrice = basePrice;
    }

}

// Instance of the roll class to be accessed and updated globally
let rollInfo = new Roll;
rollInfo.type = rollType;
rollInfo.basePrice = rolls[rollType].basePrice;

// Onload function to populate dropdowns when the window is loaded
window.onload = function() {

    updatePage();
    populateGlazing();
    populatePackSize();

}

// Function to update the page based on roll type
function updatePage() {

    // Update header name
    const pageHeader = document.getElementById("page-header");
    pageHeader.innerText = rollType + " cinnamon roll";

    // Update base price
    const productPrice = document.getElementById("item-price");
    productPrice.innerText = "$ " + rollInfo.basePrice;

    // Update image path
    const productImage = document.getElementById("detail-image");
    productImage.src = "../images/" + rolls[rollType].imageFile;
    productImage.alt = rollInfo.type + " cinnamon roll";

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

    rollInfo.glazing = glazingDropdown.value;
    rollInfo.size = packSizeDropdown.value;
    
    // Store selected values from each dropdown
    let selectedGlazing = 0;
    let selectedPackSize = 1;

    // For loop iterating through each glazing type, matching selected type to respective price
    for (let i = 0; i < glazingTypes.length; i++) {
        if (glazingTypes[i].glazing === glazingDropdown.value) {
            selectedGlazing = glazingTypes[i].price;
            break;
        }
    }

    // For loop iterating through each pack size option, matching selected size to respective price multiplier
    for (let i = 0; i < packSize.length; i++) {
        if (packSize[i].size.toString() === packSizeDropdown.value) {
            selectedPackSize = packSize[i].multiplier;
            break;
        }
    }

    // Calculate the total price and update the displayed item price
    let total = (rollInfo.basePrice + selectedGlazing) * selectedPackSize;
    let displayedPrice = document.getElementById("item-price");
    displayedPrice.innerHTML = "$ " + total.toFixed(2);

}

// Event listener for when add to cart is clicked
document.getElementById("add-to-cart").addEventListener('click', addToCart);

// Function to add items to cart (here, an array) 
function addToCart() {

    // Retrieve final selection from dropdowns
    let glazingDropdown = document.getElementById("glazing");
    let packSizeDropdown = document.getElementById("pack-size");

    // Store final selection information in information storage object
    // Set here instead of calculateTotal() to account for edge case where
    // user does not select any options other than defaults
    rollInfo.glazing = glazingDropdown.value;
    rollInfo.size = packSizeDropdown.value;

    let duplicateRoll = new Roll(rollInfo.type, rollInfo.glazing, rollInfo.size, rollInfo.basePrice);

    cart.push(duplicateRoll);
    console.log(cart);

}