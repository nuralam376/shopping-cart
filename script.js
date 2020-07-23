// iphone Plus event handler
const iphonePlus = document.getElementById("iphonePlus");

const iphoneCurrentTotalPrice = document.getElementById("iphoneTotalPrice")
	.innerText;
const iphoneCurrentTotalPriceNumber = parseFloat(iphoneCurrentTotalPrice);

iphonePlus.addEventListener("click", function () {
	const iphoneCountNumber = productCount("iphoneCount", 1);

	const iphoneTotalPrice = productTotalPrice(
		"iphoneTotalPrice",
		iphoneCountNumber,
		iphoneCurrentTotalPriceNumber
	);
});

// iPhone Minus event handler
const iphoneMinus = document.getElementById("iphoneMinus");

iphoneMinus.addEventListener("click", function () {
	const iphoneCountNumber = productCount("iphoneCount", -1);

	const iphoneTotalPrice = productTotalPrice(
		"iphoneTotalPrice",
		iphoneCountNumber,
		iphoneCurrentTotalPriceNumber
	);
});

// iphone Case Plus event handler
const iphoneCasePlus = document.getElementById("iphoneCasePlus");

const iphoneCaseTotalPrice = document.getElementById("iphoneCaseTotalPrice")
	.innerText;
const iphoneCaseTotalPriceNumber = parseFloat(iphoneCaseTotalPrice);

iphoneCasePlus.addEventListener("click", function () {
	const iphonecaseCount = productCount("iphoneCaseCount", 1);

	const iphoneCaseTotalPrice = productTotalPrice(
		"iphoneCaseTotalPrice",
		iphonecaseCount,
		iphoneCaseTotalPriceNumber
	);
});

// iphone Case Minus event handler
const iphoneCaseMinus = document.getElementById("iphoneCaseMinus");

iphoneCaseMinus.addEventListener("click", function () {
	const iphoneCaseMinusCount = productCount("iphoneCaseCount", -1);

	const iphoneCaseTotalPrice = productTotalPrice(
		"iphoneCaseTotalPrice",
		iphoneCaseMinusCount,
		iphoneCaseTotalPriceNumber
	);
});

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
