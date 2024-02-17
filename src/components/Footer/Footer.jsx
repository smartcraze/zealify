import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>Contact Us</h5>
            <p>Email: example@example.com</p>
            <p>Phone: +1234567890</p>
          </div>
          <div className="col-md-4">
            <h5>Follow Us</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#!">Instagram</a>
              </li>
              <li>
                <a href="#!">Twitter</a>
              </li>
              <li>
                <a href="#!">Instagram</a>
              </li>
              <li>
                <a href="#!">Github</a>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Zeal</h5>
            <p>Bringing passion to every endeavor.</p>
            <p>"Success is not final, failure is not fatal: It is the courage to continue that counts." - Winston Churchill</p>
            <p>"The only way to do great work is to love what you do." - Steve Jobs</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
