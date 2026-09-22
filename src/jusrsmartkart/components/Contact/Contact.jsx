import { FaWhatsapp, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import {
  BUSINESS,
  fullAddress,
  whatsappLink,
  telLink,
  mailLink,
} from "../../data/business.js";
import "./Contact.css";

export default function Contact() {
  const { address, trademark } = BUSINESS;

  return (
    <div className="contact">
      <header className="contact__hero">
        <div className="container">
          <span className="eyebrow">Get in touch</span>
          <h1>Let's talk storage</h1>
          <p>
            Questions, bulk enquiries or delivery details — reach {BUSINESS.name} directly.
          </p>
        </div>
      </header>

      <div className="container section contact__grid">
        <div className="contact__cards">
          <a className="contact__card" href={whatsappLink()} target="_blank" rel="noreferrer">
            <span className="contact__icon contact__icon--wa">
              <FaWhatsapp />
            </span>
            <div>
              <h4>WhatsApp</h4>
              <p>Chat with us instantly</p>
              <strong>+91 {BUSINESS.phone}</strong>
            </div>
          </a>

          <a className="contact__card" href={telLink}>
            <span className="contact__icon">
              <FaPhoneAlt />
            </span>
            <div>
              <h4>Call</h4>
              <p>Mon–Sat, 10am–7pm</p>
              <strong>+91 {BUSINESS.phone}</strong>
            </div>
          </a>

          <a className="contact__card" href={mailLink}>
            <span className="contact__icon">
              <FaEnvelope />
            </span>
            <div>
              <h4>Email</h4>
              <p>We reply within a day</p>
              <strong>{BUSINESS.email}</strong>
            </div>
          </a>

          <div className="contact__card contact__card--static">
            <span className="contact__icon">
              <FaMapMarkerAlt />
            </span>
            <div>
              <h4>Visit / Ship from</h4>
              <p>{address.line1}, {address.line2}</p>
              <strong>
                {address.city}, {address.state} - {address.pincode}
              </strong>
            </div>
          </div>
        </div>

        <div className="contact__side">
          <div className="contact__map">
            <iframe
              title="Justsmartkart location - Olpad, Surat"
              src={`https://www.google.com/maps?q=${encodeURIComponent(
                fullAddress
              )}&output=embed`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="contact__tm">
            <h3>Trademark & ownership</h3>
            <p className="contact__tm-note">
              Public ownership summary for the Justsmartkart business.
            </p>
            <ul>
              <li><span>Brand</span><strong>{trademark.mark}™ ({trademark.type})</strong></li>
              <li><span>Classification</span><strong>{trademark.class}</strong></li>
              <li><span>Status</span><strong>{trademark.status}</strong></li>
              <li><span>Proprietor</span><strong>{BUSINESS.proprietor}</strong></li>
              <li><span>Firm</span><strong>{BUSINESS.firm}</strong></li>
              <li><span>Goods</span><strong>{trademark.goods}</strong></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
