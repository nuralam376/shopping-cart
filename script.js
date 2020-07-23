// iphone event handler
const iphoneQuantityAdd = document.getElementById("iphoneQuantityAdd");
const iphoneQuantity = document.getElementById("iphoneQuantity").value;
let iphoneQuantityNumber = parseInt(iphoneQuantity);
const iphoneCurrentTotalPrice = document.getElementById("iphoneTotalPrice")
	.innerText;
const iphoneCurrentTotalPriceNumber = parseFloat(iphoneCurrentTotalPrice);

iphoneQuantityAdd.addEventListener("click", function () {
	let modifiedIphoneQuantity = iphoneQuantityNumber++;
	document.getElementById("iphoneQuantity").value = modifiedIphoneQuantity;

	const iphoneTotalPrice =
		iphoneCurrentTotalPriceNumber * modifiedIphoneQuantity;
	document.getElementById("iphoneTotalPrice").innerText = iphoneTotalPrice;
});
