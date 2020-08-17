import React from 'react';
import { CartTitleAlign, NavbarDiv } from '../style/styled';
import { Bar, Container, BarTitle, Purchase } from './index';

const CartUI = () => {
	const foodList = JSON.parse(window.localStorage.getItem('foodList')) || {};
	const foodMap = Object.values(foodList);
	const user = window.localStorage.getItem('userID');
	const [isAuth, setAuth] = React.useState(window.localStorage.getItem('isAuth') || false);
	const handleLogOut = () => {
		setAuth(false);
		window.dataLayer.push({
			event: 'Log Out',
			user: user,
			timezone: 'Chicago',
		});
		window.localStorage.clear();
	};
	return (
		<div>
			<Container
				isAuth={isAuth}
				currentPage="Cart"
				onLogin={() => {
					setAuth(true);
				}}
				onLogOut={handleLogOut}
			/>
			<CartTitleAlign>Shopping Cart</CartTitleAlign>

			<BarTitle />

			{foodMap.map((cartItem) => (
				<Bar className="mr" cartItem={cartItem} key={`${cartItem.id}`}></Bar>
			))}
			<NavbarDiv>
				<Purchase />
			</NavbarDiv>
		</div>
	);
};
export default CartUI;
