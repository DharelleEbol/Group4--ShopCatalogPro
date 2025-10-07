import React, { useRef } from 'react'
import { useLocation, useSearchParams } from 'react-router-dom'
import '../styles/homeStyle.css'

const categories = [
	"Women's Apparel",
	'Home',
	'Living',
	'Mobiles & Gadgets',
	'Skincare',
	'Toys, Games & Collectibles',
	'Makeup',
]

function ProductCard({ name = 'Product Name', price = 'P100' }) {
	return (
		<div className="product-card" role="group" aria-label={name}>
			<div className="product-image" />
			<div className="product-meta">
				<div className="product-name">{name}</div>
				<div className="product-price">{price}</div>
			</div>
		</div>
	)
}

export default function Products() {
	const location = useLocation()
	const [searchParams] = useSearchParams()
	const fromState = location.state?.gridColumns
	const fromQuery = searchParams.get('cols')
	const gridColumns = Number(fromState ?? (fromQuery ? Number(fromQuery) : 4))

	const rowRefs = {
		womens: useRef(null),
		mobiles: useRef(null),
	}

	const scrollRow = (ref, dir = 1) => {
		const el = ref.current
		if (!el) return
		const amount = el.clientWidth * 0.8 * dir
		el.scrollBy({ left: amount, behavior: 'smooth' })
	}

	return (
		<main className="home">
			<div className="container">
				<nav className="topbar" role="navigation" aria-label="Main navigation">
					<button
						type="button"
						className="logo"
						aria-label="Shopepy homepage"
						onClick={() => (window.location.href = '/')}
					>
						Shopepy
					</button>

					<div className="cart" role="button" aria-label="View cart">🛒</div>
				</nav>

				<section className="hero">
					<div className="hero-banner">
						<div className="hero-left">
							<div className="banner-placeholder" />
						</div>
						<div className="hero-right" />
					</div>
				</section>

				<nav className="categories" aria-label="Categories">
					{categories.map((c) => (
						<button key={c} className="pill" type="button">
							{c}
						</button>
					))}
				</nav>

				<section className="sections">
					<div className="section">
						<h3>Women's Apparel</h3>
						<div className="row-wrap">
							<div className="products-row" ref={rowRefs.womens}>
								{Array.from({ length: 10 }).map((_, i) => (
									<ProductCard key={i} />
								))}
							</div>
							<button className="arrow" aria-label="Scroll women's apparel" onClick={() => scrollRow(rowRefs.womens, 1)}>➜</button>
						</div>
					</div>

					<div className="section">
						<h3>Mobiles & Gadgets</h3>
						<div className="row-wrap">
							<div className="products-row" ref={rowRefs.mobiles}>
								{Array.from({ length: 10 }).map((_, i) => (
									<ProductCard key={i} />
								))}
							</div>
							<button className="arrow" aria-label="Scroll mobiles" onClick={() => scrollRow(rowRefs.mobiles, 1)}>➜</button>
						</div>
					</div>
				</section>
			</div>
		</main>
	)
}