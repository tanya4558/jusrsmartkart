import ProductCard from "../ProductCard/ProductCard.jsx";
import { PRODUCTS } from "../../data/products.js";
import "./Shop.css";

export default function Shop() {
  return (
    <div className="shop">
      <header className="shop__hero">
        <div className="container">
          <span className="eyebrow">Shop Justsmartkart</span>
          <h1>Make space for better days</h1>
          <p>Thoughtful organizers for wardrobes, shelves and everyday routines.</p>
        </div>
      </header>

      <div className="container section">
        <div className="shop__grid">
          {PRODUCTS.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </div>
  );
}
