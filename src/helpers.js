export function calculateTotal(quantity, term) {
	//Quantity
	//0 a 1000 = 25%
	//1001 a 5000 = 20%
	//5001 a 10000 = 15%
	// +10001 = 10%

	let totalQuantity;

	if (quantity <= 1000) {
		totalQuantity = quantity * 0.25;
	} else if (quantity > 1000 && quantity <= 5000) {
		totalQuantity = quantity * 0.2;
	} else if (quantity > 5000 && quantity <= 10000) {
		totalQuantity = quantity * 0.15;
	} else {
		totalQuantity = quantity * 0.1;
	}

	//Months
	//3 = 5%
	//6 = 10%
	//12 = 15%
	//24 = 20%

	let totalTerm;

	switch (term) {
		case 3:
			totalTerm = quantity * 0.05;
			break;
		case 6:
			totalTerm = quantity * 0.1;
			break;
		case 12:
			totalTerm = quantity * 0.15;
			break;
		case 24:
			totalTerm = quantity * 0.2;
			break;
		default:
			break;
	}

	return quantity + totalTerm + totalQuantity;
}
