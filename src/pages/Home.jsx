import { Link } from 'react-router-dom';

// Home page, recreated from the Canva design:
//   1) hero with the school photo, title, tagline and website button
//   2) green "shops & restaurants" section with the See More button
export default function Home() {
  return (
    <>
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__content">
          <h1 id="hero-title" className="hero__title">
            OCT Delivery
          </h1>
          <p className="hero__tagline">Your Food | Your school | Made Simple</p>
        </div>

        <a
          className="btn btn--primary"
          href="https://www.stemegypt.net"
          target="_blank"
          rel="noopener noreferrer"
        >
          www.stemegypt.net
        </a>
      </section>

      <section className="shops" aria-labelledby="shops-heading">
        <div className="shops__block">
          <div className="shops__heading-wrap">
            <h2 id="shops-heading" className="shops__heading">
              shops &amp; restaurants
            </h2>
          </div>

          <p className="shops__text">
            More than 65 shops and restaurants deliver directly to our school such as Bazooka, ZIZO
            Koshari, Am Shakshak, Tahrir Koshari, and others.
          </p>

          <Link className="btn btn--light shops__cta" to="/restaurants">
            See More
          </Link>
        </div>
      </section>
    </>
  );
}
