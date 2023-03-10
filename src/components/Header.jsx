import React, { useState, useContext, useRef } from 'react';
import '../styles/Header.scss';
import Menu from '../components/Menu.jsx';
import MenuMobile from '@containers/MenuMobile'
import AppContext from '../context/AppContext.js'
import MyOrder from '../containers/MyOrder';
import MainLogo from '../assets/logos/MainLogo.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { AiOutlineShoppingCart } from 'react-icons/ai';

const Header = () => {
	const [toggle, setToggle] = useState(false);
	const [toggleOrders, setToggleOrders] = useState(false);
	const [toggleMobile, setToggleMobile] = useState(false);

	const { state } = useContext(AppContext);

	const handleToggle = () => {
		setToggle(!toggle);
	}

	const handleClickMobile = () => {
		setToggleMobile(!toggleMobile);
	}
	return (
		<nav>
			<FontAwesomeIcon icon={faBars} className="menu" onClick={handleClickMobile} />
			<div className="navbar-left">
				<img src={MainLogo} className="logo" />
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
						elmer@example.com
					</li>
					<li className="navbar-shopping-cart" onClick={() => setToggleOrders(!toggleOrders)}>
						<AiOutlineShoppingCart />
						{state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
					</li>
				</ul>
			</div>
			<div className="container-menu">
				{toggle && <Menu />}
				{toggleMobile && <MenuMobile />}
				{toggleOrders && <MyOrder toggleOrders={toggleOrders} setToggleOrders={setToggleOrders} />}
			</div>
		</nav >
	);
}

export default Header;