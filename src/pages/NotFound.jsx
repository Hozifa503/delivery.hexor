import { Link } from 'react-router-dom';

// Shown when the address does not match any page.
export default function NotFound() {
  return (
    <div className="page">
      <div className="page-notice">
        <h1>Page not found</h1>
        <p>The page you are looking for does not exist.</p>
        <Link className="btn btn--primary" to="/">
          Back to Home
        </Link>
      </div>
    </div>
  );
}
