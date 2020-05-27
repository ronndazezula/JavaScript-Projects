function getReceipt() {
    var text1 = "<h3></h3>";
    var runningTotal = 0;
    var sizeTotal = 0;
    var sizeArray = document.getElementsByClassName("size");
    for (var i = 0; i < sizeArray.length; i++) {
		if (sizeArray[i].checked) {
            var selectedSize = sizeArray[i].value;
            text1 = text1+selectedSize+"<br>";
		}
    }
    if (selectedSize === "Kid's (6 inch)") {
        sizeTotal = 6;
    } else if (selectedSize === "Personal (10 inch)") {
        sizeTotal = 10;
    } else if (selectedSize === "Small (12 inch)") {
        sizeTotal = 12;
    } else if (selectedSize === "Medium (14 inch)") {
        sizeTotal = 14;
    } else if (selectedSize === "Large (16 inch)") {
        sizeTotal = 16;
    } else if (selectedSize === "Extra Large (18 inch)") {
        sizeTotal = 18;
    }
    runningTotal = sizeTotal;
    getMeat(runningTotal, text1);
};
function getMeat (runningTotal, text1) {
    var meatTotal = 0;
	var selectedMeat = [];
	var meatArray = document.getElementsByClassName("meats");
	for (var j = 0; j < meatArray.length; j++) {
		if (meatArray[j].checked) {
            selectedMeat.push(meatArray[j].value);
			text1 = text1+meatArray[j].value+"<br>";
		}
	}
	var meatCount = selectedMeat.length;
	if (meatCount >= 1) {
		meatTotal = (meatCount - 1);
	} else {
		meatTotal = 0;
	}
	runningTotal = (runningTotal + meatTotal);
    getVeg(runningTotal, text1);
};
function getVeg (runningTotal, text1) {
    var vegTotal = 0;
	var selectedVeg = [];
	var vegArray = document.getElementsByClassName("veg");
	for (var k = 0; k < vegArray.length; k++) {
		if (vegArray[k].checked) {
            selectedVeg.push(vegArray[k].value);
			text1 = text1+vegArray[k].value+"<br>";
		}
	}
	var vegCount = selectedVeg.length;
	if (vegCount >= 2) {
		vegTotal = (vegCount - 1);
	} else {
		vegTotal = 0;
	}
	runningTotal = (runningTotal + vegTotal);
    getSauce(runningTotal, text1);
};
function getSauce (runningTotal, text1) {
    var sauceTotal = 0;
	var selectedSauce = [];
	var sauceArray = document.getElementsByClassName("sauce");
	for (var l = 0; l < sauceArray.length; l++) {
		if (sauceArray[l].checked) {
            selectedSauce.push(sauceArray[l].value);
			text1 = text1+sauceArray[l].value+"<br>";
		}
	}
	runningTotal = (runningTotal - 1);
    getCheese(runningTotal, text1);
};
function getCheese(runningTotal, text1) {
    var cheeseTotal = 0;
    var cheeseArray = document.getElementsByClassName("cheese");
    for (var m = 0; m < cheeseArray.length; m++) {
		if (cheeseArray[m].checked) {
            var selectedCheese = cheeseArray[m].value;
            text1 = text1+selectedCheese+"<br>";
		}
    }
    if (selectedCheese === "No Cheese (no charge)") {
        cheeseTotal = 0;
    } else if (selectedCheese === "Regular Mozzarella (no charge)") {
        cheeseTotal = 0;
    } else if (selectedCheese === "Extra Mozzarella") {
        cheeseTotal = 2;
    } else if (selectedCheese === "Shaved Parmesan Cheese") {
        cheeseTotal = 1;
    } else if (selectedCheese === "Blue Cheese") {
        cheeseTotal = 1;
    } else if (selectedCheese === "Feta Cheese") {
        cheeseTotal = 1;
    }
    runningTotal = (runningTotal + cheeseTotal);
    getCrust(runningTotal, text1);
};
function getCrust(runningTotal, text1) {
    var crustTotal = 0;
    var crustArray = document.getElementsByClassName("crust");
    for (var m = 0; m < crustArray.length; m++) {
		if (crustArray[m].checked) {
            var selectedCrust = crustArray[m].value;
            text1 = text1+selectedCrust+"<br>";
		}
    }
    if (selectedCrust === "Gluten Free Crust") {
        crustTotal = 1;
    } else if (selectedCrust === "Cauliflower Crust") {
        crustTotal = 0;
    } else if (selectedCrust === "Thin Crust") {
        crustTotal = 0;
    } else if (selectedCrust === "New York Style Crust") {
        crustTotal = 0;
    } else if (selectedCrust === "Chicago Style Crust") {
        crustTotal = 1;
    } else if (selectedCrust === "Focaccia Crust") {
        crustTotal = 1;
    }
    runningTotal = (runningTotal + crustTotal);
    document.getElementById("showText").innerHTML = text1+"* one Meat | two Fruit & Veggie selections - no charge (additional $1 each)";
    document.getElementById("totalPrice").innerHTML = "<h4><strong>Total: $"+runningTotal+".00</strong></h4>";
};