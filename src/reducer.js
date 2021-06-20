import _ from "lodash";

export const initialState = {
	basket: {},
	user: null
};

// Selectors
export const totalBasketItems = (basket) => {
	return _.values(basket)?.reduce((acc, currentItem) => currentItem.amount + acc, 0)
}

export const totalBasketPrice = (basket) => {
 	return _.values(basket).reduce((acc, currentItem) => (currentItem.price * currentItem.amount) + acc, 0);
}



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

		case "REMOVE_ITEM":
			const id = Number(action.payload.id);

		

			return {
				...state,
				basket: {
					...state.basket,
					[id]: {
						...state.basket[id],
						amount: state.basket[id].amount - 1
					}
				}
			}

		case "SET_USER":
			return {
				...state,
				user: action.payload.user
			}

		default:
			return state;
	}
};

export default reducer;
