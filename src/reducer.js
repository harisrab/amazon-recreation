export const initialState = {
	basket: {},
};

const reducer = (state, action) => {
	switch (action.type) {
		case "ADD_TO_BASKET":
			const ItemKey = action.item.id;
			const value = action.item;



			// if the item exists then append the amount
			if (ItemKey in state.basket) {

				return {
					...state,
					basket: {
						...state.basket,
						[ItemKey]: {
							...value,
							amount: state.basket[ItemKey].amount + 1
						},
					},
				};
			} else {				
				// otherwise simply append new object
	
				return {
					...state,
					basket: {
						...state.basket,
						[ItemKey]: value,
					},
				};
			}

		default:
			return state;
	}
};

export default reducer;
