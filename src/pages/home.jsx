import React, { useRef } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import '../styles/homeStyle.css';

const categories = [
  "Women's Apparel",
  'Home',
  'Living',
  'Mobiles & Gadgets',
  'Skincare',
  'Toys, Games & Collectibles',
  'Makeup',
  'Garments',
  "Men's Apparel",
];

// ✅ Reusable Product Card
function ProductCard({ name, price, image }) {
  return (
    <div className="product-card" role="group" aria-label={name}>
      <div className="product-image">
        <img src={image} alt={name} />
      </div>
      <div className="product-meta">
        <div className="product-name">{name}</div>
        <div className="product-price">{price}</div>
      </div>
    </div>
  );
}

export default function Products() {
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const fromState = location.state?.gridColumns;
  const fromQuery = searchParams.get('cols');
  const gridColumns = Number(fromState ?? (fromQuery ? Number(fromQuery) : 4));

  const rowRefs = {
    womens: useRef(null),
    mobiles: useRef(null),
  };

  const scrollRow = (ref, dir = 1) => {
    const el = ref.current;
    if (!el) return;
    const amount = el.clientWidth * 0.8 * dir;
    el.scrollBy({ left: amount, behavior: 'smooth' });
  };

  
  const womensProducts = [
    { name: 'Floral Dress', price: '₱499', image: '/picturesproduct/dress.jpg' },
    { name: 'Denim Jacket', price: '₱799', image: '/picturesproduct/jacket.jpg' },
    { name: 'Summer Top', price: '₱299', image: '/picturesproduct/summer.jpg' },
    { name: 'Casual Pant', price: '₱699', image: '/picturesproduct/pants.jpg' },
	{ name: 'Night Gown', price: '₱699', image: '/picturesproduct/nightgown.jpg' },
	{ name: 'Bra', price: '₱100', image: '/picturesproduct/bra.jpg' },
	{ name: 'Polo shirt', price: '₱200', image: '/picturesproduct/polo.jpg'},
	{ name: 'Headband', price: '₱20', image: '/picturesproduct/headband.jpg'},
	{ name: 'Abaya', price: '₱999', image: '/picturesproduct/abaya.jpg'},
	{ name: 'Skirt', price: '₱699', image: '/picturesproduct/skirt.jpg'},
  { name: 'Jogging Pants', price: '₱299', image: '/picturesproduct/joggingpants.jpg'},
  { name: 'Hoodie', price: '₱399', image: '/picturesproduct/hoodie.jpg'},
  ];

  const mobilesProducts = [
    { name: 'Charger', price: '₱99', image: '/picturesproduct/charger.jpg'},
    { name: 'Earphone', price: '₱199', image: '/picturesproduct/earphone.jpg' },
    { name: 'Smartwatch', price: '₱2,999', image: '/picturesproduct/smartwatch.jpg' },
    { name: 'Laptop', price: '₱12,999', image: '/picturesproduct/laptop.jpg' },
	{ name: 'KeyBoard', price: '1,299', image: '/picturesproduct/keyboard.jpg' },
	{ name: 'Wireless Earbuds', price: '₱499', image: '/picturesproduct/wirelessearphone.jpg' },
	{ name: 'iPhone', price: '₱34,999', image: '/picturesproduct/iphone.jpg' },
	{ name: 'Headphone', price: '₱599', image: '/picturesproduct/headphone.jpg' },
	{ name: 'Case', price: '₱99', image: '/picturesproduct/case.jpg' },
	{ name: 'Tablet Pro', price: '₱12,499', image: '/picturesproduct/charger.jpg' },
  { name: 'Camera Protector', price: '₱999', image: '/picturesproduct/cameraprotector.jpg' },
  { name: 'Mouse', price: '₱699', image: '/picturesproduct/mouse.jpg' },
  ];

  return (
    <main className="home">
      <div className="container">
        {/* Topbar */}
        <nav className="topbar" role="navigation" aria-label="Main navigation">
          <button
            type="button"
            className="logo"
            aria-label="Shopepy homepage"
            onClick={() => (window.location.href = '/')}
          >
            Shopepy
          </button>

          <div className="cart" role="button" aria-label="View cart">
            🛒
          </div>
        </nav>

        {/* Hero Banner */}
        <section className="hero">
          <div className="hero-banner">
            <div className="hero-left">
              <div className="banner-placeholder" />
                 <img src="/picturesproduct/sale1.jpg" alt="Sale Banner1" className="hero-image1" />
            </div>
            <div className="hero-right" /> 
            <img src="/picturesproduct/sale2.jpg" alt="Sale Banner2" className="hero-image2" />
          </div>
        </section>

        {/* Categories */}
        <nav className="categories" aria-label="Categories">
          {categories.map((c) => (
            <button key={c} className="pill" type="button">
              {c}
            </button>
          ))}
        </nav>

        {/* Product Sections */}
        <section className="sections">
          {/* Women's Apparel */}
          <div className="section">
            <h3>Women's Apparel</h3>
            <div className="row-wrap">
              <div className="products-row" ref={rowRefs.womens}>
                {womensProducts.map((item, i) => (
                  <ProductCard
                    key={i}
                    name={item.name}
                    price={item.price}
                    image={item.image}
                  />
                ))}
              </div>
              <button
                className="arrow"
                aria-label="Scroll women's apparel"
                onClick={() => scrollRow(rowRefs.womens, 1)}
              >
                ➜
              </button>
            </div>
          </div>

          {/* Mobiles & Gadgets */}
          <div className="section">
            <h3>Mobiles & Gadgets</h3>
            <div className="row-wrap">
              <div className="products-row" ref={rowRefs.mobiles}>
                {mobilesProducts.map((item, i) => (
                  <ProductCard
                    key={i}
                    name={item.name}
                    price={item.price}
                    image={item.image}
                  />
                ))}
              </div>
              <button
                className="arrow"
                aria-label="Scroll mobiles"
                onClick={() => scrollRow(rowRefs.mobiles, 1)}
              >
                ➜
              </button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}