
export default function Footer({ navigate }) {
  return (
    <footer className="footer">
      <div>
        <button className="brand footer-brand" onClick={() => navigate("home")}>
          <span className="brand-icon">O</span>
          <span>Opt<span className="brand-accent">Path</span></span>
        </button>
        <p>Your potential. Your path. Your future.</p>
      </div>

      <div className="footer-right">
        <span>Made to help you move forward.</span>
        <span>© {new Date().getFullYear()} OptPath</span>
      </div>
    </footer>
  );
}
