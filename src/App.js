import styled from "styled-components";
import Header from "./components/Header";
import Home from "./components/Home";

function App() {
	return (
		<AppWrapper>
			{/* Header */}
			<Header />
			{/* Home */}
			<Home />
		</AppWrapper>
	);
}

export default App;

const AppWrapper = styled.div`
	height: 100vh;
	width: 100vw;
	display: flex;
	flex-direction: column;

	background-color: yellow;
`;
