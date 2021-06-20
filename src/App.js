import React, {useEffect} from 'react';
import styled from "styled-components";
import Header from "./components/Header";
import Home from "./components/Home";
import CheckoutPage from "./components/CheckoutPage";
import LoginPage from './components/LoginPage';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {auth} from './firebase';
import {useStateValue} from './StateProvider';
import PaymentPage from './components/PaymentPage';

function App() {

		const [store, dispatch] = useStateValue();

	useEffect(() => {
		auth.onAuthStateChanged(authUser => {
			console.log("THE USER IS >>>>>>>", authUser);
			
			if (authUser) {
				// dispatch him into the data layer and set user
				dispatch({
					type: "SET_USER",
					payload: {
						user: authUser
					}
				})
			} else {
				// set the user to null in data layer
				dispatch({
					type: "SET_USER",
					payload: {
						user: null
					}
				})
			}
		})
	}, [dispatch])

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
				<PaymentPage />
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
	height: 100vh;
	width: 100vw;

	display: flex;
	flex-direction: column;
	justify-content: flex-start;
`;
