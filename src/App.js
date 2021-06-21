import React, { useEffect } from "react";
import styled from "styled-components";
import Header from "./components/Header";
import Home from "./components/Home";
import CheckoutPage from "./components/CheckoutPage";
import LoginPage from "./components/LoginPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import PaymentPage from "./components/PaymentPage";

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
	"pk_test_51I6jWzDVX6oCzanssO5ta9P1Mx0XIeax2wbFVxDKCvGa9w1BxaaP2Zo9VBj2hQBBx5qtx3hUrAfuxj0NZykob9HA00GO8FdBXb"
);

function App() {
	const [store, dispatch] = useStateValue();

	useEffect(() => {
		auth.onAuthStateChanged((authUser) => {
			console.log("THE USER IS >>>>>>>", authUser);

			if (authUser) {
				// dispatch him into the data layer and set user
				dispatch({
					type: "SET_USER",
					payload: {
						user: authUser,
					},
				});
			} else {
				// set the user to null in data layer
				dispatch({
					type: "SET_USER",
					payload: {
						user: null,
					},
				});
			}
		});
	}, [dispatch]);

	return (
		<Router>
			<AppWrapper>
				<Switch>
					<Route path="/login">
						<LoginPage />
					</Route>
					<Route path="/checkout">
						<Header />
						<CheckoutPage />
					</Route>

					<Route path="/payment">
						<Header />

						<Elements stripe={promise}>
							<PaymentPage />
						</Elements>
					</Route>

					<Route path="/">
						<Header />
						<Home />
					</Route>
				</Switch>
			</AppWrapper>
		</Router>
	);
}

export default App;

const AppWrapper = styled.div`
	height: auto;
	width: 100vw;

	display: flex;
	flex-direction: column;
	justify-content: flex-start;
`;
