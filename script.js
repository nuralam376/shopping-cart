// iphone Plus event handler
const iphonePlus = document.getElementById("iphonePlus");

const iphoneCurrentTotalPrice = document.getElementById("iphoneTotalPrice")
	.innerText;
const iphoneCurrentTotalPriceNumber = parseFloat(iphoneCurrentTotalPrice);

iphonePlus.addEventListener("click", function () {
	const iphoneCountNumber = productCount("iphoneCount", 1);

	const iphoneTotalPrice = productTotalPrice(
		"iphoneTotalPrice",
		iphoneCountNumber
	);
});

// iPhone Minus event handler
const iphoneMinus = document.getElementById("iphoneMinus");

iphoneMinus.addEventListener("click", function () {
	const iphoneCountNumber = productCount("iphoneCount", -1);

	const iphoneTotalPrice = productTotalPrice(
		"iphoneTotalPrice",
		iphoneCountNumber
	);
});

function productTotalPrice(id, iphoneCountNumber) {
	const totalPrice = iphoneCurrentTotalPriceNumber * iphoneCountNumber;
	document.getElementById(id).innerText = totalPrice;
	return totalPrice;
}

function productCount(id, count) {
	const iphoneCount = document.getElementById("iphoneCount").value;
	let iphoneCountNumber = parseInt(iphoneCount);
	iphoneCountNumber = iphoneCountNumber + count;
	iphoneCountNumber = iphoneCountNumber >= 0 ? iphoneCountNumber : 0;
	document.getElementById(id).value = iphoneCountNumber;
	return iphoneCountNumber;
}
