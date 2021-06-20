import React from "react";
import styled from "styled-components";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import {totalBasketItems} from '../reducer';

import _ from "lodash";
import {auth} from '../firebase';

function Header() {
	const [{ basket, user }, dispatch] = useStateValue();

	const handleSignOut = () => {
		auth.signOut();

	}

	return (
		<HeaderWrapper>
			<Link to="/">
				<ImageWrapper>
					<img src="/amazonLogo.png" alt="" />
				</ImageWrapper>
			</Link>

			<SearchBox>
				<input type="text" />
				<SearchIcon className="searchLogo" />
			</SearchBox>

			<HeaderNav>
				<Link className="headerLink" to={!user && '/login'}>
					<HeaderOption onClick={handleSignOut}>
						<span className="lineOne">Hello {user === null ? "Guest" : user.email}</span>
						<span className="lineTwo">Sign {user === null ? "in" : "out"}</span>
					</HeaderOption>
				</Link>
				<HeaderOption>
					<span className="lineOne">Returns</span>
					<span className="lineTwo">& Orders</span>
				</HeaderOption>
				<HeaderOption>
					<span className="lineOne">Your</span>
					<span className="lineTwo">Prime</span>
				</HeaderOption>

				<Link to="/checkout">
					<CartHeaderOption>
						<ShoppingBasketIcon />
						<div className="basketCircle">
						<p>{totalBasketItems(basket)}</p>
					
						</div>
					</CartHeaderOption>
				</Link>
			</HeaderNav>
		</HeaderWrapper>
	);
}

export default Header;

const HeaderWrapper = styled.div`
	min-height: 60px;
	width: 100%;
	background-color: #131921;

	display: flex;
	flex-direction: row;
	align-items: stretch;
	justify-content: space-evenly;
`;

const ImageWrapper = styled.div`
	height: 100%;
	display: flex;
	align-items: center;
	margin-left: 20px;
	margin-right: 20px;

	img {
		width: 80px;
		position: relative;
		top: 4px;
	}
`;

const SearchBox = styled.div`
	height: 100%;

	display: flex;
	align-items: center;
	flex: 1;

	input {
		width: 100%;
		border-bottom-left-radius: 5px;
		border-top-left-radius: 5px;
		height: 30px;

		border: none;

		padding-left: 15px;

		&:focus {
			border: solid 1px;
			border-color: #ffffff;
			outline: none;
		}
	}

	.searchLogo {
		padding: 5px;

		background-color: #d18420;
		height: 30px !important;
		width: 35px;

		border-top-right-radius: 2px;
		border-bottom-right-radius: 2px;

		&:hover {
			cursor: pointer;
			background-color: #e4942c;
		}
	}
`;

const HeaderNav = styled.div`
	height: 100%;
	display: flex;
	justify-content: space-evenly;

	margin-right: 15px;

	.headerLink {
		display: flex;
		align-items: center;
		justify-content: center;

		text-decoration: none;
	}

	
`;

const HeaderOption = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
	color: white;

	margin-left: 20px;

	font-family: "Segoe UI";

	.lineOne {
		font-size: 10px;
		color: gray;
	}

	.lineTwo {
		font-weight: 700;
		font-size: 13px;
	}
`;

const CartHeaderOption = styled.div`
	height: 100%;

	display: flex;
	align-items: center;

	color: white;
	width: 30px;

	margin-left: 25px;
	margin-right: 10px;

	position: relative;

	.basketCircle {
		box-shadow: rgba(0, 0, 0) 0px 5px 15px;
		position: absolute;
		background-color: red;
		border-radius: 50%;
		display: flex;
		justify-content: center;
		align-items: center;

		height: 20px;
		width: 20px;

		right: 1px;
		top: 16px;

		p {
			font-size: 10px;
		}
	}
`;
