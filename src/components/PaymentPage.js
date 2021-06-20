import React from "react";
import styled from "styled-components";
import Item from "./Item";
import { useStateValue } from "../StateProvider";
import _ from "lodash";
import { totalBasketItems, totalBasketPrice } from "../reducer";
import Currency from "react-currency-formatter";

const PaymentPage = () => {
	const [{ basket, user }, dispatch] = useStateValue();

	return (
		<PageWrapper>
			<TitleBar>
				<h1>Checkout ({totalBasketItems(basket)} Items)</h1>
			</TitleBar>

			<PaymentReceipt>
				<AddressInfoWrapper>
					<SectionTitle>
						<p className="sectionTitle__text">Delivery Address</p>
					</SectionTitle>

					<div className="delivery__address">
						<p>harisrab01@gmail.com</p>
						<p>The Reactive Lane.</p>
						<p>Las Vegas.</p>
					</div>
				</AddressInfoWrapper>

				<ReviewItemsStackWrapper>
					<SectionTitle>
						<p className="sectionTitle__text">
							Review Items and Delivery
						</p>
					</SectionTitle>

					<Product>
						{totalBasketItems(basket) === 0 ? (
							<div className="noItems__banner">
								No items in the cart
							</div>
						) : (
							_.values(basket).map((eachItem, i) => {
								return eachItem.amount === 0 ? (
									<></>
								) : (
									<Item
										id={eachItem.id}
										title={eachItem.title}
										price={eachItem.price}
										rating={eachItem.rating}
										image={eachItem.image}
										amount={eachItem.amount}
									/>
								);
							})
						)}
					</Product>
				</ReviewItemsStackWrapper>
				<PaymentMethodWrapper>
					<SectionTitle>
						<p className="sectionTitle__text">Payment Method</p>
					</SectionTitle>
					<CardDetails>
						<p className="payment__title">Card Details</p>

						<div className="stripe__component"></div>

						<div className="total__order">
							<p className="grand__total">
								Grand Total:{" "}
								{
									<Currency
										quantity={totalBasketPrice(basket)}
									/>
								}
							</p>
							<button className="buy__now">Buy now</button>
						</div>
					</CardDetails>
				</PaymentMethodWrapper>
			</PaymentReceipt>
		</PageWrapper>
	);
};

export default PaymentPage;

const PageWrapper = styled.div`
	width: 100%;
	height: 100%;

	display: flex;
	flex-direction: column;

	align-items: center;

	background-color: #eeeeee;
`;

const TitleBar = styled.div`
	width: 100%;
	height: 50px;

	text-align: center;

	border-bottom: 1px solid;
	border-color: #0000004b;

	display: flex;
	align-items: center;
	justify-content: center;

	h1 {
		font-size: 20px;
		margin-bottom: 20px;
		margin-top: 15px;
	}
`;

const PaymentReceipt = styled.div`
	width: 80%;
	height: auto;
	background-color: white;
	border-radius: 8px;
	box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
		rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;

	margin-top: 20px;
	margin-bottom: 50px;

	display: flex;
	flex-direction: column;

	padding: 5px;
	padding-bottom: 0px;
	justify-content: space-between;
	gap: 5px;
`;
const AddressInfoWrapper = styled.div`
	width: 100%;
	height: 200px;

	display: flex;

	.delivery__address {
		height: 100%;
		width: 80%;

		padding-top: 20px;
		padding-left: 20px;

		font-size: 13px;
		font-weight: 400;

		display: flex;
		flex-direction: column;
	}
`;
const ReviewItemsStackWrapper = styled.div`
	width: 100%;
	height: auto;

	display: flex;
`;

const Product = styled.div`
	height: auto;
	width: 80%;

	.noItems__banner {
		margin-top: 20px;
		margin-left: 20px;
	}
`;

const PaymentMethodWrapper = styled.div`
	width: 100%;
	height: auto;

	display: flex;
	flex-direction: row;

	.payment__title {
		margin-top: 20px;
		margin-left: 20px;
		font-weight: 600;
	}
`;

const SectionTitle = styled.div`
	width: 20%;
	height: 100%;

	padding-top: 20px;
	padding-right: 20px;
	text-align: end;

	font-weight: 700;
`;

const CardDetails = styled.div`
	width: 80%;
	height: auto;

	.stripe__component {
	}

	.total__order {
		height: 130px;
		width: 400px;
		border-radius: 8px;
		background-color: white;
		margin-top: 20px;
		margin-left: 20px;
		margin-bottom: 20px;
		box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px,
			rgba(6, 24, 44, 0.65) 0px 4px 6px -1px,
			rgba(255, 255, 255, 0.08) 0px 1px 0px inset;

		padding: 20px;

		.buy__now {
			height: 35px;
			width: 100%;
			background-color: #ffb222;
			border: 1px solid;
			border-color: #0000008d;
			border-radius: 5px;

			&:hover {
				background-color: #fcb430;
				cursor: pointer;
			}

			&:active {
				background-color: #f8ab1c;
			}
		}

		.grand__total {
			margin-bottom: 30px;
		}
	}
`;
