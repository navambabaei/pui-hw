class CinnamonRoll {

    constructor(basePrice, glazingPrice, packSize) {
        this.basePrice = basePrice;
        this.glazingPrice = glazingPrice; // 0 default
        this.packSize = packSize; // 1 default
    }

}

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

window.onload = function() {
    populateGlazing();
    populatePackSize();
}

function populateGlazing() {
    let glazingDropdown = document.getElementById("glazing");
    
    for (let i = 0; i < glazingTypes.length; i++) {
        let option = document.createElement("option");
        option.value = glazingTypes[i].glazing;
        option.text = glazingTypes[i].glazing;
        glazingDropdown.appendChild(option);
    }
}

function populatePackSize() {
    let packDropdown = document.getElementById("pack-size");

    for (let i = 0; i < packSize.length; i++) {
        let option = document.createElement("option");
        option.value = packSize[i].size;
        option.text = packSize[i].size;
        packDropdown.appendChild(option);
    }
}

function calculateTotal() {
    let glazingDropdown = document.getElementById("glazing");
    let packSizeDropdown = document.getElementById("pack-size");
    
    let selectedGlazing = glazingDropdown.value;
    let selectedPackSize = packSizeDropdown.value;

    let cinnamonRoll = new CinnamonRoll(2.49, 0, 1);

    for (let i = 0; i < glazingTypes.length; i++) {
        if (glazingTypes[i].glazing === selectedGlazing) {
            cinnamonRoll.glazingPrice = glazingTypes[i].price;
            break;
        }
    }

    for (let i = 0; i < packSize.length; i++) {
        if (packSize[i].size.toString() === selectedPackSize) {
            cinnamonRoll.packPrice = packSize[i].multiplier;
            break;
        }
    }

    let total = (cinnamonRoll.basePrice + cinnamonRoll.glazingPrice) * cinnamonRoll.packPrice;
    let displayedPrice = document.getElementById("item-price");
    displayedPrice.innerHTML = "$ " + total.toFixed(2);
}