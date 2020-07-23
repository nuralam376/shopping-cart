// iphone Plus event handler
const iphonePlus = document.getElementById("iphonePlus");

const iphoneCurrentTotalPrice = document.getElementById("iphoneTotalPrice")
	.innerText;
const iphoneCurrentTotalPriceNumber = parseFloat(iphoneCurrentTotalPrice);
let iphoneTotalPrice = iphoneCurrentTotalPriceNumber;

iphonePlus.addEventListener("click", function () {
	const iphoneCountNumber = productCount("iphoneCount", 1);

	iphoneTotalPrice = productTotalPrice(
		"iphoneTotalPrice",
		iphoneCountNumber,
		iphoneCurrentTotalPriceNumber
	);

	calculateSubtotal();
});

// iPhone Minus event handler
const iphoneMinus = document.getElementById("iphoneMinus");

iphoneMinus.addEventListener("click", function () {
	const iphoneCountNumber = productCount("iphoneCount", -1);

	iphoneTotalPrice = productTotalPrice(
		"iphoneTotalPrice",
		iphoneCountNumber,
		iphoneCurrentTotalPriceNumber
	);

	calculateSubtotal();
});

// iphone Case Plus event handler
const iphoneCasePlus = document.getElementById("iphoneCasePlus");

const iphoneCaseTotalPrice = document.getElementById("iphoneCaseTotalPrice")
	.innerText;
const iphoneCaseTotalPriceNumber = parseFloat(iphoneCaseTotalPrice);
let iphoneCaseNewTotalPrice = iphoneCaseTotalPriceNumber;

iphoneCasePlus.addEventListener("click", function () {
	const iphonecaseCount = productCount("iphoneCaseCount", 1);

	iphoneCaseNewTotalPrice = productTotalPrice(
		"iphoneCaseTotalPrice",
		iphonecaseCount,
		iphoneCaseTotalPriceNumber
	);
	calculateSubtotal();
});

// iphone Case Minus event handler
const iphoneCaseMinus = document.getElementById("iphoneCaseMinus");

iphoneCaseMinus.addEventListener("click", function () {
	const iphoneCaseMinusCount = productCount("iphoneCaseCount", -1);

	iphoneCaseNewTotalPrice = productTotalPrice(
		"iphoneCaseTotalPrice",
		iphoneCaseMinusCount,
		iphoneCaseTotalPriceNumber
	);

	calculateSubtotal();
});

function calculateSubtotal() {
	const subtotal = document.getElementById("subtotal").innerText;
	const subtotalNumber = parseFloat(subtotal);
	const newSubtotal = iphoneCaseNewTotalPrice + iphoneTotalPrice;
	document.getElementById("subtotal").innerText = newSubtotal;
	calculateTax(newSubtotal);
}

function calculateTax(subtotal) {
	const tax = (subtotal + 5) / 100;
	document.getElementById("tax").innerText = tax;
	calculateTotal(subtotal, tax);
}

function calculateTotal(subtotal, tax) {
	const total = subtotal + tax;
	document.getElementById("total").innerText = total;
}

function productTotalPrice(id, iphoneCountNumber, productPriceNumber) {
	const totalPrice = productPriceNumber * iphoneCountNumber;
	document.getElementById(id).innerText = totalPrice;
	return totalPrice;
}

function productCount(id, count) {
	const iphoneCount = document.getElementById(id).value;
	let iphoneCountNumber = parseInt(iphoneCount);
	iphoneCountNumber = iphoneCountNumber + count;
	iphoneCountNumber = iphoneCountNumber >= 0 ? iphoneCountNumber : 0;
	document.getElementById(id).value = iphoneCountNumber;
	return iphoneCountNumber;
}
