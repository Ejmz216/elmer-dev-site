import React, { useContext } from 'react';
import '@styles/ProductItem.scss';
import AppContext from '../context/AppContext.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';


const ProductItem = ({ product }) => {

	const { addToCart } = useContext(AppContext);

	const handleClick = item => {
		addToCart(item);
	};
	return (
		<div className="ProductItem">
			<img src={product.images[0]} alt={product.title} />
			<div className="product-info">
				<div>
					<p>${product.price} USD</p>
					<p>{product.title}</p>
				</div>
				<figure onClick={() => handleClick(product)}>
				<FontAwesomeIcon icon={faCartPlus} className="addToCart" alt="" />
				</figure>
			</div>
		</div >
	);
}

export default ProductItem;