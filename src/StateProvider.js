import React from "react";

// Prepare the Data Layer
export const StateContext = React.createContext();

// Wrap our App with. It provides the app access to the Data Layer
export const StateProvider = ({ reducer, initialState, children }) => {
	<StateContext.Provider value={React.useReducer(reducer, initialState)}>
		{children}
	</StateContext.Provider>;
};

// This function helps pull information from the data layer.
export const useStateValue = () => React.useContext(StateContext);
