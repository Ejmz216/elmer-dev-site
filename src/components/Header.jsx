import React, { useState, useContext } from 'react';
import '../styles/Header.scss';
import Menu from '../components/Menu.jsx';
import AppContext from '../context/AppContext.js'
import MyOrder from '../containers/MyOrder';

import { IconContext } from "react-icons";
import { AiOutlineShoppingCart, AiOutlineMenu } from 'react-icons/ai';
import { BsShop } from 'react-icons/bs';

const Header = () => {
	const [toggle, setToggle] = useState(false);
	const [toggleOrders, setToggleOrders] = useState(false);
	const { state } = useContext(AppContext);

	const handleToggle = () => {
		setToggle(!toggle);
	}
	return (
		<nav>
			<IconContext.Provider value={{ className: "menu" }}>
				<AiOutlineMenu />
			</IconContext.Provider>
			<div className="navbar-left">
				<IconContext.Provider value={{ className: "logo" }}>
					<BsShop />
				</IconContext.Provider>
				<ul>
					<li>
						<a href="/">All</a>
					</li>
					<li>
						<a href="/">Clothes</a>
					</li>
					<li>
						<a href="/">Electronics</a>
					</li>
					<li>
						<a href="/">Furnitures</a>
					</li>
					<li>
						<a href="/">Toys</a>
					</li>
					<li>
						<a href="/">Others</a>
					</li>
				</ul>
			</div>
			<div className="navbar-right">
				<ul>
					<li className="navbar-email" onClick={handleToggle}>
						platzi@example.com
					</li>
					<li className="navbar-shopping-cart" onClick={() => setToggleOrders(!toggleOrders)}>
						<AiOutlineShoppingCart />
						{state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
					</li>
				</ul>
			</div>
			{toggle && <Menu />}
			{toggleOrders && <MyOrder />}
		</nav>
	);
}

export default Header;