import React, { useState } from "react";
import styled from "styled-components";
import { auth } from "../firebase";
import { useHistory } from "react-router-dom";

function LoginPage() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const history = useHistory();

	const handleSignIn = (e) => {
		// do some fancy firebase sign in stuff
		e.preventDefault();

		auth.signInWithEmailAndPassword(email, password)
			.then((auth) => {
				history.push("/");
			})
			.catch((error) => {
				alert(error.message);
			});
	};

	const handleSignUp = (e) => {
		// do some fancy firebase sign up stuff
		e.preventDefault();
		auth.createUserWithEmailAndPassword(email, password)
			.then((auth) => {
				console.log("Authentication Object: ", auth);

				if (auth) {
					history.push("/");
				}
			})
			.catch((error) => alert(error.message));
	};

	return (
		<LoginWrapper>
			<img src="/amazonLogoBlack.svg" alt="" />

			<LoginForm>
				<h1>Sign in</h1>

				<form action="">
					<div className="login__input">
						<label htmlFor="">Email</label>
						<input
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							type="text"
						/>
					</div>
					<div className="login__input">
						<label htmlFor="">Password</label>
						<input
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							type="password"
						/>
					</div>

					<button
						onClick={handleSignIn}
						className="signIn__button"
						type="submit"
					>
						Sign in
					</button>

					<p>
						By signing-in you agree to Amazon's Conditions of Use
						and Sale. Please see our Privacy Notice, our Cookies
						Notice, and our Interest-Based Ads Notice
					</p>

					<button
						onClick={handleSignUp}
						className="signUp__button"
						type="submit"
					>
						Create your Amazon Account
					</button>
				</form>
			</LoginForm>
		</LoginWrapper>
	);
}

export default LoginPage;

const LoginWrapper = styled.div`
	height: 100%;
	width: 100%;
	background-color: rgb(224, 224, 224);

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	img {
		height: 40px;
		margin-bottom: 50px;
		margin-top: 100px;
	}
`;

const LoginForm = styled.div`
	display: flex;

	flex-direction: column;
	height: 500px;
	width: 400px;
	background-color: rgb(238, 238, 238);
	box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
	border-radius: 5px;

	padding: 20px;

	h1 {
		font-size: 30px;
		font-weight: 500;
		margin-bottom: 40px;
	}

	.login__input {
		display: flex;
		flex-direction: column;

		label {
			font-weight: 700;
			font-size: 13px;
			margin-bottom: 8px;
		}

		input {
			margin-bottom: 15px;
			height: 40px;
			font-size: 18px;
			padding-left: 10px;
		}
	}
	.signIn__button {
		border-radius: 2px;
		width: 100%;
		height: 30px;
		border: 1px solid;
		margin-top: 10px;
		background-color: #eea332;
		margin-bottom: 20px;

		&:hover {
			background-color: #eeb155;
			cursor: pointer;
		}
		&:active {
			background-color: #df9423;
			cursor: pointer;
		}
	}

	.signUp__button {
		border-radius: 2px;
		width: 100%;
		height: 30px;
		border: 1px solid;
		margin-top: 20px;
		border-color: darkgray;
		cursor: pointer;

		&:hover {
			background-color: #f0f0f0;
			cursor: pointer;
		}
		&:active {
			background-color: #adadad;
			cursor: pointer;
		}
	}

	p {
		font-size: 10px;
	}
`;
