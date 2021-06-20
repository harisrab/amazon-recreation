import styled from "styled-components";
import Header from "./components/Header";
import Home from "./components/Home";
import CheckoutPage from "./components/CheckoutPage";
import LoginPage from './components/LoginPage';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
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
