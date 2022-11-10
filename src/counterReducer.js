const counterReducer = (counter = 0, action) => {
	switch (action.type) {
		case "increment":
			return counter + 1;
		case "decrement":
			if (counter) {
				return counter - 1;
			}
			return counter;
		default:
			return counter;
	}
};

export default counterReducer;
