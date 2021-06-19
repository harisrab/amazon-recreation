import React from "react";
import styled from "styled-components";
import Currency from "react-currency-formatter";
import { useStateValue } from "../StateProvider";

function Product({ id, title, price, rating, image }) {
	const [{ basket }, dispatch] = useStateValue();

	const dispatchItemToStore = () => {
		//dispatch an action
		dispatch({
			type: "ADD_TO_BASKET",
			item: {
				id,
				title,
				price,
				rating,
				image,
				amount: 1,
			},
		});
	};
	return (
		<ProductWrapper key={id} id={`productId__${id}`}>
			<ProductInfo>
				<p>{title}</p>

				<Stars>
					<p>Rating: </p>
					{rating !== 0 ? (
						Array.from(Array(rating).keys()).map((_, i) => {
							return <p key={i}>⭐</p>;
						})
					) : (
						<p className="noRating">No rating available</p>
					)}
				</Stars>

				<Price>
					<Currency
						className="currency"
						quantity={price}
						currency="EUR"
						pattern="##,### !"
					/>
				</Price>
			</ProductInfo>

			<img src={image} alt="" />

			<button onClick={dispatchItemToStore} className="addToCartButton">
				Add to cart
			</button>
		</ProductWrapper>
	);
}

export default Product;

const ProductWrapper = styled.div`
	z-index: 400;

	background-color: white;
	height: 100%;
	flex: 1;

	margin-right: 5px;
	margin-left: 5px;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;

	img {
		height: 220px;
		object-fit: contain;
	}

	.addToCartButton {
		background-color: #f0c14b;
		border: 1px solid;
		margin-top: 35px;
		border-color: #a88734 #9c7e31 #846a29;
		color: #111;

		&:hover {
			background-color: #e7b535;
			cursor: pointer;
		}
	}
`;

const ProductInfo = styled.div`
	width: 100%;
	height: 100px;

	margin-bottom: 20px;

	padding: 10px 20px;

	color: black;

	font-weight: 800;

	p:first-of-type {
		font-weight: 400;
		margin-bottom: 5px;
	}
`;

const Stars = styled.div`
	display: flex;
	flex-direction: row;

	p {
		&:first-of-type {
			font-weight: 500;
			margin-right: 5px;
			text-decoration: underline;
		}
		margin: 0;
		padding: 0;

		font-size: 13px;
	}

	.noRating {
		font-weight: 500;
		color: #660000;
	}
`;

const Price = styled.div`
	.currency {
		color: black;
		font-weight: 800;
	}
`;
