
export default function Navbar({ currentPage, navigate }) {
  return (
    <header className="navbar">
      <button
        className="brand"
        onClick={() => navigate("home")}
        aria-label="OptPath home"
      >
        <span className="brand-icon">O</span>
        <span>Opt<span className="brand-accent">Path</span></span>
      </button>

      <nav className="nav-links" aria-label="Main navigation">
        <button
          className={currentPage === "home" ? "nav-link active" : "nav-link"}
          onClick={() => navigate("home")}
        >
          Home
        </button>

        <button
          className={currentPage === "explore" ? "nav-link active" : "nav-link"}
          onClick={() => navigate("explore")}
        >
          Explore
        </button>

        <button
          className={currentPage === "profile" ? "nav-link active" : "nav-link"}
          onClick={() => navigate("profile")}
        >
          My Profile
        </button>
      </nav>

      <button className="btn btn-primary nav-cta" onClick={() => navigate("profile")}>
        Find my path <span aria-hidden="true">↗</span>
      </button>
    </header>
  );
}
