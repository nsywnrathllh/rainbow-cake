let choosecake = document.getElementById("cupcake");
let price = document.getElementById("price");
let destination = document.getElementById("tujuan");
let deliveryCost = document.getElementById("cost");
let amount = document.getElementById("amount");
let subTotal = document.getElementById("total");
let disc = document.getElementById("disc");
let member = document.getElementById("member");
let discValue = document.getElementById("value");
let grandTotal = document.getElementById("grandtotal");

function getPrice() {
    if (choosecake.value == "durian") {
        price.value = 6000;
    } else if (choosecake.value == "mangga") {
        price.value = 4000;
    } else if (choosecake.value == "strawberry") {
        price.value = 5000;
    } else {
        price.value = 0;
    }
    return price.value;
}

choosecake.onchange = function () {
    price.value = getPrice();
    subTotal.value = getSubTotal();
    discValue.value = getDiscValue();
};

function getShippingCost() {
    if (destination.value == "bogor") {
        deliveryCost.value = 5000;
    } else if (destination.value == "cibinong") {
        deliveryCost.value = 10000;
    } else if (destination.value == "depok") {
        deliveryCost.value = 12000;
    } else {
        deliveryCost.value = 0;
    }
    return deliveryCost.value;
}

destination.onchange = function () {
    deliveryCost.value = getShippingCost();
};

member.onclick = function () {
    if (member.checked) {
        disc.value = "15%";
        discValue.value = getDiscValue();
        grandTotal.value = getGrandTotal() - discValue.value;
    } else {
        disc.value = "0%";
        discValue.value = 0;
        grandTotal.value = getGrandTotal();
    }
};

function getSubTotal() {
    subTotal.value = amount.value * price.value;
    return subTotal.value;
}

amount.onkeyup = function () {
    subTotal.value = getSubTotal();
    grandTotal.value = getGrandTotal() - discValue.value;
};

function getDiscValue() {
    discValue.value = subTotal.value * 0.15;
    return discValue.value;
}

function getGrandTotal() {
    if (amount.value == 0) {
        grandTotal.value = 0;
    } else {
        let grandTotalDiscount =
            parseInt(subTotal.value) + parseInt(deliveryCost.value);
        grandTotal.value = grandTotalDiscount;
        return grandTotal.value;
    }
}

// =======================================================