import React from "react";
import "./Footer.css";
import { Button } from "./../button/Button";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Join the newsletter to receive more information about best resorts
        </p>
        <div className="input-areas">
          <form>
            <input
              className="footer-input"
              name="email"
              type="email"
              placeholder="Your Email"
            />
            <Button buttonStyle="btn--outline">Subscribe</Button>
          </form>
        </div>
      </section>
      <section class="social-media">
        <div class="social-media-wrap">
          <div class="footer-logo">
            <Link to="/my-app/" className="social-logo">
              Holiday
              <i class="fas fa-umbrella-beach" />
            </Link>
          </div>
          <small class="website-rights">Holiday © 2020</small>
          <div class="social-icons">
            <Link
              class="social-icon-link facebook"
              to="/my-app/"
              target="_blank"
              aria-label="Facebook"
            >
              <i class="fab fa-facebook-f" />
            </Link>
            <Link
              class="social-icon-link instagram"
              to="/my-app/"
              target="_blank"
              aria-label="Instagram"
            >
              <i class="fab fa-instagram" />
            </Link>
            <Link
              class="social-icon-link youtube"
              to="/my-app/"
              target="_blank"
              aria-label="Youtube"
            >
              <i class="fab fa-youtube" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
