import React, {useEffect, useState} from "react";
import styled from "styled-components";
import Item from "./Item";
import Currency from "react-currency-formatter";
import { useStateValue } from "../StateProvider";
import { totalBasketItems, totalBasketPrice } from "../reducer";
import _ from 'lodash';



function CheckoutPage() {
	const [{ basket }, dispatch] = useStateValue();

	useEffect(() => {

	}, [])


	return (
		<CheckoutPageWrapper>
			<LeftSide>
				<img
					className="banner"
					src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
					alt=""
				/>

				<h1>Your Shopping Basket</h1>

				<ItemsStack>
	
				{totalBasketItems(basket) !== 0 ? _.values(basket).map((eachItem, i) => (
					eachItem.amount !== 0 ? 
						<Item 
							image={eachItem.image}
							rating={eachItem.rating}
							title={eachItem.title}
							price={eachItem.price}
							amount={eachItem.amount}
							id={eachItem.id}
							key={i}

						/> 
					: <></> 
				)) : <EmptyCartBanner><h1>Cart Empty</h1></EmptyCartBanner>}

				
				</ItemsStack>
			</LeftSide>

			<RightSide>
				<CheckoutSummary>
					<Info>
						<p className="checkOut__heading">
							Subtotal ({totalBasketItems(basket)} items):{" "}
						</p>
						<Currency quantity={totalBasketPrice(basket)} />
					</Info>

					<div className="giftInput">
						<input type="checkBox" />{" "}
						<p>This order contains a gift</p>
					</div>
					<CheckOutButton>
						<button className="checkOut">
							Proceed to Checkout
						</button>
					</CheckOutButton>
				</CheckoutSummary>
			</RightSide>
		</CheckoutPageWrapper>
	);
}

export default CheckoutPage;

const CheckoutPageWrapper = styled.div`
	width: 100%;
	height: 100%;

	display: flex;
	flex-direction: row;
`;

const RightSide = styled.div`
	height: 100%;
	width: 30%;

	padding-right: 8px;
	padding-top: 10px;
`;

const CheckoutSummary = styled.div`
	width: 100%;
	height: 180px;
	background-color: white;

	box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
		rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;

	padding: 20px;

	border-radius: 5px;

	p {
	}

	font-size: 15px;
	font-weight: 700;

	.giftInput {
		display: flex;
		font-weight: 400;
		align-items: center;
		margin-top: 10px;

		p {
		}

		input {
			margin-right: 10px;
		}
	}

	.checkOut__heading {
		font-weight: 400;
		margin-right: 10px;
	}
`;

const CheckOutButton = styled.div`
	display: flex;
	height: 90px;
	width: 100%;

	align-items: flex-end;
	.checkOut {
		background-color: #f0c14b;

		height: 30px;
		width: 100%;
	}
`;

const Info = styled.div`
	display: flex;
`;

const LeftSide = styled.div`
	height: 100%;
	width: 70%;

	display: flex;
	flex-direction: column;
	padding: 10px;

	h1 {
		border-bottom: 1px solid #00000037;
		padding-bottom: 15px;
		margin-top: 20px;
		font-size: 25px;
	}

	.banner {
		width: 100%;
	}
`;

const ItemsStack = styled.div`
	width: 100%;
	height: auto;
	padding: 5px;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	gap: 5px;

	position: relative;
`;

const EmptyCartBanner = styled.div`
	height: 100px;
	width: 100%;
	background-color: white;

	display: flex;
	align-items: center;
	justify-content: flex-center;
	padding-left: 50px;

	h1 {
		border-bottom: none;
		font-size: 20px;
		font-weight: 400;
		color: gray;
		margin-bottom: 10px;
	}
`;