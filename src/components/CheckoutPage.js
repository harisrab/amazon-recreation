import React from "react";
import styled from "styled-components";
import Item from "./Item";
import Currency from "react-currency-formatter";
import { useStateValue } from "../StateProvider";

function CheckoutPage() {
	const [{ basket }, dispatch] = useStateValue();

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
					{Object.keys(basket).map((eachItem) => {
						return (
							<Item
								image={eachItem.image}
								rating={eachItem.rating}
								title={eachItem.title}
								price={eachItem.price}
							/>
						);
					})}
				</ItemsStack>
			</LeftSide>

			<RightSide>
				<CheckoutSummary>
					<Info>
						<p className="checkOut__heading">
							Subtotal (2 items):{" "}
						</p>
						<Currency quantity={23234} />
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
`;
