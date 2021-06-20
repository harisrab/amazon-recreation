import React from "react";
import styled from "styled-components";
import Currency from "react-currency-formatter";
import {useStateValue} from '../StateProvider';


function Item({ image, rating = 5, title, price, amount, id }) {

	const [{basket}, dispatch] = useStateValue();
	

	const handleRemoveItem = () => {
		//dispatch an action to remove the current item
		dispatch({
			type: "REMOVE_ITEM",
			payload: {
				id: id
			}
		})
	}

	return (
		<ItemWrapper>
			<PictureWrapper>
				<img src={image} alt="" />
			</PictureWrapper>
			<InfoWrapper>
				<h2>{title}</h2>

				<Currency quantity={price} />

				<Stars>
					<p className="rating">Rating: </p>
					{rating !== 0 ? (
						Array.from(Array(rating).keys()).map((_, i) => {
							return <p>⭐</p>;
						})
					) : (
						<p className="noRating">No rating available</p>
					)}
				</Stars>

				<Amount>
					<p className="amountTag">Amount: </p>
					<p className="amountActual">{amount}</p>
				</Amount>

				<button onClick={handleRemoveItem}>Remove from basket</button>
			</InfoWrapper>
		</ItemWrapper>
	);
}

export default Item;

const ItemWrapper = styled.div`
	width: 100%;
	height: 200px;
	background-color: white;

	display: flex;
	align-items: center;
	justify-content: flex-start;

	box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
		rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
`;

const PictureWrapper = styled.div`
	width: 20%;
	height: 100%;
	background-color: #ecebeb;

	display: flex;
	align-items: center;
	justify-content: center;

	img {
		height: 80%;
	}
`;
const InfoWrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 80%;
	height: 100%;
	background-color: #d8d8d8;

	padding: 10px;

	position: relative;

	h2 {
		font-size: 18px;
		margin-top: 5px;
		margin-bottom: 20px;
		font-weight: 400;
	}

	color: black;
	font-size: 15px;
	font-weight: 700;

	.rating {
		font-weight: 400;
		font-size: 15px;
		text-decoration: underline;

		margin-right: 5px;
	}

	p {
		font-size: 14px;
	}

	button {
		position: absolute;
		bottom: 30px;
		right: 30px;

		background-color: #f0c14b;
		border: 1px solid;
		border-color: #a88734 #9c7e31 #846a29;
		color: #111;
		transition: 0.2s ease-out;

		&:hover {
			background-color: #e7b535;
			cursor: pointer;
		}

		&:active {
			background-color: #c0962d;
		}

    
	}
`;

const Stars = styled.div`
	display: flex;

	margin-top: 5px;
`;


const Amount = styled.div`
	
	display: flex;

	.amountTag{
		font-weight: 400;
		font-size: 15px;
		text-decoration: underline;

		margin-right: 5px;

	}

	.amountActual {

		font-weight: 400;
		font-size: 15px;
	}
`;