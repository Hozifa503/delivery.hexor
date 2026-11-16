export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>
        &copy; {currentYear} OCT Delivery - STEM Egypt High School for Boys, 6th October.{' '}
        <a href="https://www.stemegypt.net" target="_blank" rel="noopener noreferrer">
          stemegypt.net
        </a>
      </p>
    </footer>
  );
}
