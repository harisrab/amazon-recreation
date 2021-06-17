import React from "react";
import styled from "styled-components";

function Header() {
	return (
		<HeaderWrapper>
			<ImageWrapper>
				<img src="/amazonLogo.png" alt="" />
			</ImageWrapper>

			<SearchBox>
				<input type="text" />
				{/* Icon */}
			</SearchBox>

			<HeaderNav></HeaderNav>
		</HeaderWrapper>
	);
}

export default Header;

const HeaderWrapper = styled.div`
	height: 50px;
	width: 100%;
	background-color: whitesmoke;

	display: flex;
	flex-direction: row;
	align-items: stretch;
	justify-content: flex-start;
`;

const ImageWrapper = styled.div`
	height: 100%;
	display: flex;
	align-items: center;
	margin-left: 20px;
	img {
		height: 20px;
	}
`;

const SearchBox = styled.div``;

const HeaderNav = styled.div``;
