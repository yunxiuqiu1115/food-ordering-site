import styled from 'styled-components';
import React from 'react';

// Buttons
function Button({ className, children, ...props }) {
	return (
		<button className={className} {...props}>
			{children}
		</button>
	);
}

export const ActionsButtons = styled.div`
	width: 100%;
	margin: auto;
	margin-bottom: 50px;
	align-items: center;
	display: flex;
	justify-content: space-between;
`;

export const BtnDefault = styled(Button)`
	min-height: 50px;
	min-width: 100px;
	margin-top: 50px;
	margin-bottom: 20px;
	color: #fff;
	border: none;
	border-radius: 5px;
	font-family: 'Roboto', sans-serif;
	font-size: 15px;
	text-transform: uppercase;
	letter-spacing: 2.5px;
	font-weight: 500;
	background: linear-gradient(70deg, #fff, #000);
	border-bottom: 5px solid #c44267;
	outline: none;
	cursor: pointer;
	box-shadow: inset 0 0 0 0 #ededed;
	-webkit-transition: ease-out 0.5s;
	-moz-transition: ease-out 0.5s;
	transition: ease-out 0.5s;
	&:hover {
		box-shadow: inset 400px 0 0 0 #ededed;
	}
`;
export const BtnGreen = styled(BtnDefault)`
	background: linear-gradient(70deg, #62d41c, #81d44e);
	border-bottom: 5px solid #3b9106;
`;

export const BtnRed = styled(BtnDefault)`
	background: linear-gradient(70deg, #fc030f, #de5057);
	border-bottom: 5px solid #800020;
`;

export const BtnBlue = styled(BtnDefault)`
	background: linear-gradient(70deg, #00cefc, #4ed4f2);
	border-bottom: 5px solid #0795b5;
`;

export const BtnYellow = styled(BtnDefault)`
	background: linear-gradient(60deg, #ffd769, #faec87);
	border-bottom: 5px solid #fc9803;
`;

export const BtnPink = styled(BtnDefault)`
	background: linear-gradient(70deg, #ff5686, #ff7b9e);
	border-bottom: 5px solid #c44267;
`;

export const BtnNoneOutLine = styled.button`
	margin-top: 50px;
	width: 140px;
	height: 45px;
	font-family: 'Roboto', sans-serif;
	font-size: 11px;
	text-transform: uppercase;
	letter-spacing: 2.5px;
	font-weight: 500;
	color: #000;
	background-color: #fff;
	border: none;
	border-radius: 45px;
	box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
	transition: all 0.3s ease 0s;
	cursor: pointer;
	outline: none;
	&:hover {
		background-color: #f55f5f;
		box-shadow: 0px 15px 20px #f7bcbc;
		color: #fff;
		transform: translateY(-7px);
	}
`;

// Header
export const Header = styled.header`
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	height: 50px;
	text-align: center;
	background: linear-gradient(70deg, #fcfc9f, #ff8f66);
	box-sizing: border-box;
	overflow-x: hidden;
	overflow-y: hidden;
`;

// Navbar
export const NavbarDiv = styled.div`
	position: absolute;
	right: 0px;
	flex-direction: row;
	display: flex;
	margin-right: 50px;
`;
// Text
export const TitleText = styled.div`
	margin-top: 10px;
	margin-bottom: 50px;
	font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
	font-weight: lighter;
	color: #bdb5b5;
	font-family: 'Roboto', sans-serif;
	font-size: 50px;
	text-transform: uppercase;
	letter-spacing: 2.5px;
`;

export const CartTitle = styled.div`
	margin-top: 50px;
	margin-bottom: 30px;
	font-family: muli;
	font-size: 30px;
	color: #9c9898;
	text-transform: uppercase;
	letter-spacing: 2.5px;
	font-weight: 500;
`;

export const CartTitleAlign = styled(CartTitle)`
	margin: auto;
	margin-top: 60px;
	margin-bottom: 30px;
	text-align: center;
	font-family: muli;
`;

export const SubtitleText = styled(TitleText)`
	margin-top: 10px;
	margin-right: 25px;
	font-size: 25px;
	color: #fff;
	text-transform: uppercase;
	letter-spacing: 2.5px;
	font-weight: 500;
	text-align: right;
	font-family: 'Gill Sans', sans-serif;
	-webkit-transition: ease-out 0.4s;
	-moz-transition: ease-out 0.4s;
	transition: ease-out 0.4s;
	&:hover {
		text-shadow: 2px 2px 2px #fc0000;
		transform: translateY(-7px);
		cursor: pointer;
	}
`;

// Card
export const CardAlign = styled.div`
	display: flex;
	width: 70%;
	margin: auto;
	justify-content: center;
`;
export const CardContainer = styled.div`
	margin-top: 20px;
	margin-right: 20px;
	display: flex;
	flex-direction: column;
	min-width: 0;
	max-width: 250px;
	height: 600px;
	word-wrap: break-word;
	background-color: #fff;
	background-clip: border-box;
	border: 1px solid rgba(0, 0, 0, 0.125);
	border-radius: 0.25rem;
	box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
	overflow: hidden;
`;

export const CardBody = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1 1 auto;
	min-height: 1px;
	padding: 1.25rem;
`;

export const CardTitle = styled.h1`
	font-size: 1.25rem;
	font-weight: bold;
	font-family: muli;
	margin: 0;
	&:hover {
		color: #6c757d;
		cursor: pointer;
	}
`;

export const CardText = styled.p`
	line-height: 25px;
	color: #6c757d;
	margin-top: 10px;
	font-family: muli;
	&:hover {
		color: #000;
		cursor: pointer;
	}
`;

export const CardHover = styled.div`
	color: white;
	text-shadow: 2px 2px #000;
	font-size: 50px;
	font-family: muli;
	position: relative;
	top: -20%;
	left: 50%;
	-webkit-transform: translate(-50%, -50%);
	-ms-transform: translate(-50%, -50%);
	transform: translate(-50%, -50%);
	text-align: center;
`;

export const CardImage = styled.img`
	width: 100%;
	&:hover {
		opacity: 0.5;
		backface-visibility: hidden;
		transition: 0.5s ease;
		background-color: #000;
	}
	&:hover {
		${CardHover}
	}
`;

export const CardButton = styled(BtnDefault)`
	background: linear-gradient(70deg, #ff7f50, #fc8e65);
	border-bottom: 5px solid #e04f19;
	font-family: muli;
	margin-top: 20px;
	width: 70%;
	margin-left: 35px;
`;

// Bar
export const BarContainer = styled.div`
	margin-top: 5px;
	margin-left: 50px;
	display: flex;
	flex-direction: row;
	min-height: 0;
	max-height: 50px;
	width: 95%;
	word-wrap: break-word;
	background-color: #fff;
	background-clip: border-box;
	border: 1px solid rgba(0, 0, 0, 0.125);
	border-radius: 0.25rem;
	box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
	overflow: hidden;
`;

export const BarBody = styled(CardBody)`
    flex-direction: row;
    width: 100%
    margin-top: 10px;
`;

export const BarTitle = styled(CardTitle)``;

export const BarText = styled(CardText)`
	line-height: 0px;
	text-align: right;
	font-family: 'Roboto', sans-serif;
	font-size: 15px;
	text-transform: uppercase;
	letter-spacing: 2.5px;
	font-weight: 500;
`;

export const PriceAlign = styled.div`
	width: 50%;
	margin: auto;
	margin-right: 100px;
	flex-direction: row;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

export const BarTitleAlign = styled.div`
	width: 47%;
	margin-left: 330px;
	margin-right: 100px;
	flex-direction: row;
	display: flex;
	justify-content: space-between;
`;

// Login
export const LoginContainer = styled.div``;

export const LogOutContainer = styled.div``;

// CAInputField
export const ProfileAlign = styled.div`
	width: 75%;
	margin-left: 50px;
	margin-top: 50px;
	margin-right: 50px;
	flex-direction: row;
	flex: 1 1 auto;
	display: flex;
`;

export const CAInputField = styled.div`
	flex-direction: column;
	margin-top: 20px;
	display: flex;
	margin-right: 20px;
`;

export const RowAlign = styled.div`
	flex-direction: row;
	display: flex;
	margin-left: 50px;
`;

export const BtnAttribute = styled(BtnNoneOutLine)`
	margin-top: 0px;
	margin-left: 20px;
	width: 200px;
	margin-right: 20px;
`;

export const InputAlign = styled.div`
	margin-right: 50px;
	display: flex;
	flex-direction: row;
`;

export const Pikachu = styled.img`
	width: 30%;
	display: flex;
	margin: auto;
`;
