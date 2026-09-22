import { FaHeart, FaRegHeart, FaWhatsapp } from "react-icons/fa";
import { formatINR } from "../../data/products.js";
import { whatsappLink } from "../../data/business.js";
import { useWishlist } from "../../context/WishlistContext.jsx";
import "./ProductCard.css";

export default function ProductCard({ product }) {
  const { has, toggle } = useWishlist();
  const saved = has(product.id);
  const off = Math.round((1 - product.price / product.mrp) * 100);

  return (
    <article className={`pcard pcard--${product.tone}`}>
      <div className="pcard__media">
        {product.badge && <span className="pcard__badge">{product.badge}</span>}
        <button
          className={`pcard__wish ${saved ? "is-saved" : ""}`}
          onClick={() => toggle(product.id)}
          aria-label={saved ? "Remove from wishlist" : "Add to wishlist"}
        >
          {saved ? <FaHeart /> : <FaRegHeart />}
        </button>
        <img src={product.image} alt={product.name} loading="lazy" />
      </div>

      <div className="pcard__body">
        <span className="pcard__color">{product.colorway}</span>
        <h3 className="pcard__name">{product.name}</h3>
        <div className="pcard__rate">
          <span className="stars">★★★★★</span>
          <span>{product.rating} ({product.reviews})</span>
        </div>
        <p className="pcard__desc">{product.short}</p>

        <div className="pcard__price">
          <span className="pcard__now">{formatINR(product.price)}</span>
          <span className="pcard__mrp">{formatINR(product.mrp)}</span>
          <span className="pcard__off">{off}% off</span>
        </div>

        <a
          className="btn btn-primary btn-block"
          href={whatsappLink(
            `Hi Justsmartkart, I'm interested in the ${product.name} (${product.colorway}).`
          )}
          target="_blank"
          rel="noreferrer"
        >
          <FaWhatsapp /> Enquire on WhatsApp
        </a>
      </div>
    </article>
  );
}
