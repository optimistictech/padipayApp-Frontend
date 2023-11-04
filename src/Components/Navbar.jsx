import React from "react";

const Navbar = () => {
  return (
    <div>
      <h1>
        <span>Padi</span>Pay
      </h1>
      <div>
        <ul>
          <li>
            <a href="index.html">Home</a>
          </li>
          <li>
            <a href="dist/about.html">About Us</a>
          </li>
          <li>
            <a href="dist/blog.html">Blog</a>
          </li>
          <li>
            <a href="dist/communityPage.html">Community</a>
          </li>
          <li>
            <a href="dist/ContactUs.html">Contact Us</a>
          </li>
        </ul>
      </div>
      <div>
        <div>
          <button>
            <a href="./dist/logIn.html">Login</a>
          </button>
        </div>
        <div>
          <button>
            <a href="/dist/signUp.html">Register now</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
