import React, { useRef } from 'react';
import { useLocation, useSearchParams, useNavigate } from 'react-router-dom';
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
function ProductCard({ id, name, price, image }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/productDetails/${id}`);
  };

  return (
    <div
      className="product-card"
      role="group"
      aria-label={name}
      onClick={handleClick}
      style={{ cursor: 'pointer' }}
    >
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

export const womensProducts = [
  { id: 1, name: 'Floral Dress', price: '₱499', image: '/picturesproduct/dress.jpg' },
  { id: 2, name: 'Denim Jacket', price: '₱799', image: '/picturesproduct/jacket.jpg' },
  { id: 3, name: 'Summer Top', price: '₱299', image: '/picturesproduct/summer.jpg' },
  { id: 4, name: 'Casual Pant', price: '₱699', image: '/picturesproduct/pants.jpg' },
	{ id: 5, name: 'Night Gown', price: '₱699', image: '/picturesproduct/nightgown.jpg' },
	{ id: 6, name: 'Bra', price: '₱100', image: '/picturesproduct/bra.jpg' },
	{ id: 7, name: 'Polo shirt', price: '₱200', image: '/picturesproduct/polo.jpg'},
	{ id: 8, name: 'Headband', price: '₱20', image: '/picturesproduct/headband.jpg'},
	{ id: 9, name: 'Abaya', price: '₱999', image: '/picturesproduct/abaya.jpg'},
	{ id: 10, name: 'Skirt', price: '₱699', image: '/picturesproduct/skirt.jpg'},
  { id: 11, name: 'Jogging Pants', price: '₱299', image: '/picturesproduct/joggingpants.jpg'},
  { id: 12, name: 'Hoodie', price: '₱399', image: '/picturesproduct/hoodie.jpg'},
];

const mobilesProducts = [
  { id: 1, name: 'Charger', price: '₱99', image: '/picturesproduct/charger.jpg'},
  { id: 2, name: 'Earphone', price: '₱199', image: '/picturesproduct/earphone.jpg' },
  { id: 3, name: 'Smartwatch', price: '₱2,999', image: '/picturesproduct/smartwatch.jpg' },
  { id: 4, name: 'Laptop', price: '₱12,999', image: '/picturesproduct/laptop.jpg' },
	{ id: 5, name: 'KeyBoard', price: '1,299', image: '/picturesproduct/keyboard.jpg' },
	{ id: 6, name: 'Wireless Earbuds', price: '₱499', image: '/picturesproduct/wirelessearphone.jpg' },
	{ id: 7, name: 'iPhone', price: '₱34,999', image: '/picturesproduct/iphone.jpg' },
	{ id: 8, name: 'Headphone', price: '₱599', image: '/picturesproduct/headphone.jpg' },
	{ id: 9, name: 'Case', price: '₱99', image: '/picturesproduct/case.jpg' },
	{ id: 10, name: 'Tablet Pro', price: '₱12,499', image: '/picturesproduct/charger.jpg' },
  { id: 11, name: 'Camera Protector', price: '₱999', image: '/picturesproduct/cameraprotector.jpg' },
  { id: 12, name: 'Mouse', price: '₱699', image: '/picturesproduct/mouse.jpg' },
];

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
                    key={item.id}
                    id={item.id}
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
                    key={item.id}
                    id={item.id}
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