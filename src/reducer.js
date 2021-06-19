export const initialState = {
	basket: {},
};

const reducer = (state, action) => {
	switch (action.type) {
		case "ADD_TO_BASKET":
			const key = action.item.id;
			const value = action.item;

			return {
				...state,
				basket: {
					...state.basket,
					key: value,
				},
			};

		default:
			return state;
	}
};

export default reducer;
