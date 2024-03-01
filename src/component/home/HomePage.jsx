import React from "react";
import "./HomePage.css"; // Impor file CSS Anda

function HomePage() {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
      </header>

      {/* <section className="hero">
        <h1>Welcome to Our Website</h1>
        <p>Discover amazing things.</p>
        <a href="#" className="btn">
          Learn More
        </a>
      </section> */}
    </div>
  );
}

export default HomePage;
