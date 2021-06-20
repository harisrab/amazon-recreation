import React from "react";
import styled from "styled-components";

const PaymentPage = () => {
	return (
		<PageWrapper>
			<TitleBar>
				<h1>Checkout (1 Items)</h1>
			</TitleBar>

			<PaymentReceipt>
				<AddressInfoWrapper></AddressInfoWrapper>

				<ReviewItemsStackWrapper></ReviewItemsStackWrapper>

				<PaymentMethodWrapper></PaymentMethodWrapper>
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

	background-color: gray;
`;

const TitleBar = styled.div`
	width: 100%;
	height: 50px;

	text-align: center;
	background-color: red;

	display: flex;
	align-items: center;
	justify-content: center;

	h1 {
		font-size: 20px;
	}
`;

const PaymentReceipt = styled.div`
	width: 80%;
	height: auto;
	background-color: purple;

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
	background-color: green;
`;
const ReviewItemsStackWrapper = styled.div`
	width: 100%;
	height: 500px;
	background-color: green;
`;
const PaymentMethodWrapper = styled.div`
	width: 100%;
	height: 200px;
	background-color: yellow;
`;
