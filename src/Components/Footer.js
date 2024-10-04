import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import style from "../Style/Footer.module.css";

function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.container}>
        <div className={style.footerSection}>
          <h4>About Us</h4>
          <p>
            We are a leading company in providing the best solutions to our clients. Our goal is to bring you innovative ideas with excellent execution.
          </p>
        </div>

        <div className={style.footerSection}>
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Job Listing</a></li>
            <li><a href="#">Apply</a></li>
      
          </ul>
        </div>

        <div className={style.footerSection}>
          <h4>Follow Us</h4>
          <div className={style.socialIcons}>
            <a href="#" aria-label="Facebook"><FaFacebookF /></a>
            <a href="#" aria-label="Twitter"><FaTwitter /></a>
            <a href="#" aria-label="LinkedIn"><FaLinkedinIn /></a>
            <a href="#" aria-label="Instagram"><FaInstagram /></a>
          </div>
        </div>
      </div>
      <div className={style.footerBottom}>
        <p>&copy; 2024 YourCompany. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
