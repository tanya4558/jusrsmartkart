import { Link } from "react-router-dom";
import { FaRegHeart, FaArrowRight } from "react-icons/fa";
import ProductCard from "../ProductCard/ProductCard.jsx";
import { PRODUCTS } from "../../data/products.js";
import { useWishlist } from "../../context/WishlistContext.jsx";
import "./Wishlist.css";

export default function Wishlist() {
  const { ids } = useWishlist();
  const saved = PRODUCTS.filter((p) => ids.includes(p.id));

  return (
    <div className="wish">
      <header className="wish__hero">
        <div className="container">
          <span className="eyebrow">Your edit</span>
          <h1>Wishlist</h1>
          <p>{saved.length ? `${saved.length} item(s) saved for later.` : "Nothing saved yet."}</p>
        </div>
      </header>

      <div className="container section">
        {saved.length ? (
          <div className="wish__grid">
            {saved.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        ) : (
          <div className="wish__empty">
            <span className="wish__empty-icon">
              <FaRegHeart />
            </span>
            <h3>Your wishlist is empty</h3>
            <p>Tap the heart on any bag to save it here.</p>
            <Link to="/shop" className="btn btn-primary">
              Browse the shop <FaArrowRight />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
