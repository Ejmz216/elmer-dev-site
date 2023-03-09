import React, { useContext } from 'react';

import AppContext from '../context/AppContext';
import close from '../assets/icons/icon_close.png'
import '../styles/OrderItem.scss';


const OrderItem = ({ product }) => {
	const { removeFromCart } = useContext(AppContext);

	const handleRemove = product => {
		removeFromCart(product);
	}
	return (
		<div className="OrderItem">
			<figure>
				<img src={product.images[0]} alt={product.title} />
			</figure>
			<p>{product.title}</p>
			<p>${product.price}</p>
			<img className="close" src={close} onClick={() => handleRemove(product)} />
		</div>
	);
}

export default OrderItem;