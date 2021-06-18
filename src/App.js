import styled from "styled-components";
import Header from "./components/Header";
import Home from "./components/Home";
import CheckoutPage from "./components/CheckoutPage";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
	return (
		<Router>
			<AppWrapper>
				<Header />
				<Switch>
					<Route path="/checkout">
						<CheckoutPage />
					</Route>

					<Route path="/">
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
