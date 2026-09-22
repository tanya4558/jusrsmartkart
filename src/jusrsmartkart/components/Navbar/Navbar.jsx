import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { FaHeart, FaBars, FaTimes } from "react-icons/fa";
import { useWishlist } from "../../context/WishlistContext.jsx";
import "./Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { count } = useWishlist();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [open]);

  const links = [
    { to: "/", label: "Home", end: true },
    { to: "/shop", label: "Shop" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <header className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
      <div className="container nav__inner">
        <Link to="/" className="nav__brand" onClick={() => setOpen(false)}>
          <span className="nav__logo">Justsmartkart</span>
          <span className="nav__sub">Smart Storage</span>
        </Link>

        <nav className="nav__links">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.end}
              className={({ isActive }) =>
                `nav__link ${isActive ? "is-active" : ""}`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="nav__actions">
          <NavLink to="/wishlist" className="nav__wish" aria-label="Wishlist">
            <FaHeart />
            {count > 0 && <span className="nav__badge">{count}</span>}
          </NavLink>
          <button
            className="nav__toggle"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      <div
        className={`nav__backdrop ${open ? "show" : ""}`}
        onClick={() => setOpen(false)}
      />
      <aside className={`nav__drawer ${open ? "show" : ""}`}>
        {links.map((l) => (
          <NavLink
            key={l.to}
            to={l.to}
            end={l.end}
            className={({ isActive }) =>
              `nav__drawer-link ${isActive ? "is-active" : ""}`
            }
            onClick={() => setOpen(false)}
          >
            {l.label}
          </NavLink>
        ))}
        <NavLink
          to="/wishlist"
          className="nav__drawer-link"
          onClick={() => setOpen(false)}
        >
          Wishlist {count > 0 && <span>({count})</span>}
        </NavLink>
      </aside>
    </header>
  );
}
