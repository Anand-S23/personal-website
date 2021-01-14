import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <footer class="py-5 bg-dark bottom-fixed">
        <p class="m-0 text-center text-white">
          <Link className="link-out" to="/">Home</Link> |
          <Link className="link-out" to="/projects"> Projects</Link> |
          <Link className="link-out" to="/contact-me"> Contact Me</Link>
        </p>
        <p class="m-0 text-center text-white">
          2021 &copy; Anand Singh
        </p>
      </footer>
    </div>
  );
}

export default Footer;
