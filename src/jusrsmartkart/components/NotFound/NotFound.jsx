import { Link } from "react-router-dom";
import "./NotFound.css";

export default function NotFound() {
  return (
    <div className="nf">
      <div className="container nf__inner">
        <span className="nf__code">404</span>
        <h1>Page not found</h1>
        <p>The page you're looking for has packed up and left.</p>
        <Link to="/" className="btn btn-primary">
          Back to home
        </Link>
      </div>
    </div>
  );
}
