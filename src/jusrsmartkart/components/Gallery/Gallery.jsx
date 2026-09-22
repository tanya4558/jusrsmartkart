import { GALLERY } from "../../data/gallery.js";
import "./Gallery.css";

export default function Gallery() {
  return (
    <section className="section gallery" id="gallery">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">In the wild</span>
          <h2>Made for real routines</h2>
          <p>From wardrobes to shelves, Hoomora keeps everyday essentials in view.</p>
        </div>
        <div className="gallery__grid">
          {GALLERY.map((g, i) => (
            <figure className={`gallery__item gallery__item--${i % 3}`} key={g.src}>
              <img src={g.src} alt={g.caption} loading="lazy" />
              <figcaption>{g.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
