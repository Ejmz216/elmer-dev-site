import React, { useContext, useState } from 'react';
import AppContext from '../context/AppContext';
import OrderItem from '../components/OrderItem';
import Checkout from '../pages/Checkout';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import '../styles/MyOrder.scss';

const MyOrder = ({ setToggleOrders, toggleOrders }) => {
	const [toggle, setToggle] = useState(false);
	const { state } = useContext(AppContext);

	const sumTotal = () => {
		const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
		const sum = state.cart.reduce(reducer, 0);
		return sum;
	}
	return (
		<aside className="MyOrder">
			<div className="title-container">
				<FontAwesomeIcon icon={faAngleLeft} className="arrowBack" alt="arrow" onClick={() => setToggleOrders(!toggleOrders)} />
				<p className="title">My order</p>
			</div>
			<div className="my-order-content">
				<div className="cart-product-list">
					{state.cart.map(product => (
						<OrderItem product={product} key={`orderItem-${product.id}`} />
					))}
				</div>
				<div className="order">
					<p>
						<span>Total</span>
					</p>
					<p>${sumTotal()}</p>
				</div>
				<button className="primary-button" onClick={() => setToggle(true)}>
					Checkout
				</button>
			</div>
			{toggle && <Checkout setToggle={setToggle} />}
		</aside>
	);
}

export default MyOrder;