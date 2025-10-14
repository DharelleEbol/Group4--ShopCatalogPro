import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { womensProducts } from './home'
import '../styles/productStyle.css'

export default function ProductDetails() {
	const { id } = useParams()
	const product = womensProducts.find(p => p.id === Number(id))
	const [quantity, setQuantity] = useState(1)

	if (!product) {
		return (
			<main className="product-details">
				<h1>Product Not Found</h1>
			</main>
		)
	}

	const handleAdd = () => setQuantity(q => q + 1)
	const handleMinus = () => setQuantity(q => (q > 1 ? q - 1 : 1))

	return (
		<main className="product-details">
			<div className="main-section">
				<img src={product.image} alt={product.name} />
				<div className="product-info">
					<div className="brand">{product.brand || "Brand Name"}</div>
					<h2>{product.name}</h2>
					<div className="rating">⭐ {product.rating || "4.5"} ({product.reviews || "120"})</div>
					<div className="description">
						{product.description ? product.description : "No description available."}
					</div>
					<div className="price">{product.price}</div>
					<div className="quantity-section">
						<button onClick={handleMinus}>-</button>
						<span>{quantity}</span>
						<button onClick={handleAdd}>+</button>
						<button className="add-to-cart">Add To Cart</button>
					</div>
				</div>
			</div>
			<h3>Related Products</h3>
			<div className="related-products">
				{womensProducts
					.filter(p => p.id !== product.id)
					.slice(0, 5)
					.map(related => (
						<div key={related.id} className="related-card">
							<img src={related.image} alt={related.name} />
							<p>{related.name}</p>
							<p className="product-price">{related.price}</p>
						</div>
					))}
					
			</div>
		</main>
	)
}

