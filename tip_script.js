function percentCost (baseCost, tPcent) {
	return ((baseCost * tPcent)/100);
}

function tipCost () {

	var base = parseFloat(document.getElementById("baseCost").value);
	var taxP = parseFloat(document.getElementById("taxPercent").value) || 8.25;
	var tipP = parseFloat(document.getElementById("tipPercent").value) || 15.0;

	var tip = percentCost(base, tipP);
	var tax = percentCost(base, taxP);

	var subTotal = base + tax;
	var total = subTotal + tip;

	var oTax = document.getElementById("oTax");
	oTax.value = tax;
	
	var oSubTotal = document.getElementById("oSubTotal");
	oSubTotal.value = subTotal;
	
	var oTotal = document.getElementById("oTotal");
	oTotal.value = total;
}