import { Link } from "react-router-dom";
import { FaWhatsapp, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import {
  BUSINESS,
  whatsappLink,
  telLink,
  mailLink,
} from "../../data/business.js";
import "./Footer.css";

export default function Footer() {
  const { address, trademark } = BUSINESS;
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <span className="footer__logo">Jusrsmartkart</span>
          <p>{BUSINESS.tagline}</p>
          <p className="footer__intro">{BUSINESS.intro}</p>
          <a
            className="btn btn-primary"
            href={whatsappLink()}
            target="_blank"
            rel="noreferrer"
          >
            <FaWhatsapp /> Order on WhatsApp
          </a>
        </div>

        <div className="footer__col">
          <h4>Explore</h4>
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/wishlist">Wishlist</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="footer__col">
          <h4>Reach us</h4>
          <a href={telLink}><FaPhoneAlt /> +91 {BUSINESS.phone}</a>
          <a href={mailLink}><FaEnvelope /> {BUSINESS.email}</a>
          <span className="footer__addr">
            <FaMapMarkerAlt />
            {address.line1}, {address.line2}, {address.city}, {address.state} - {address.pincode}
          </span>
        </div>
      </div>

      <div className="footer__bar">
        <div className="container footer__bar-inner">
          <p>© {year} {BUSINESS.firm}. All rights reserved.</p>
          <p className="footer__tm">
            {trademark.mark}™ · {trademark.class} · Proprietor {BUSINESS.proprietor}
          </p>
        </div>
      </div>
    </footer>
  );
}
