import React from "react";
import { Link } from "react-router-dom";
import AboutUs from "./AboutUs";

function App() {
  return (
    <>
      <nav className="navbar">
        <h2>Paradise Nursery</h2>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/plants">Plants</Link>
          <Link to="/cart">🛒 Cart</Link>
        </div>
      </nav>

      <main className="landing-page">
        <div className="landing-content">
          <h1>Paradise Nursery</h1>

          <p>
            Bring the beauty of nature into your home.
            Discover our collection of beautiful
            houseplants.
          </p>

          <Link to="/plants">
            <button className="get-started">
              Get Started
            </button>
          </Link>
        </div>
      </main>

      <AboutUs />
    </>
  );
}

export default App;
