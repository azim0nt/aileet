import React, { useEffect } from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import "./style.scss";

function Footer() {

  useEffect(() => {
    const goToPath = (e, path) => {
      e.preventDefault();
      const targetElement = document.querySelector(path);
      if (targetElement) {
          const offset = 50;
          const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
          window.scrollTo({
              top: elementPosition - offset,
              behavior: 'smooth'
          });
      }
  };

    const links = [
      { link: document.querySelector('#footer_home-link'), section: '.home' },
      { link: document.querySelector('#footer_stack'), section: '.stack' },
      { link: document.querySelector('#footer_projects'), section: '.featured-project' },
      { link: document.querySelector('#footer_contact'), section: '.consultation-wrapper' }
    ];

    // Добавляем обработчики для ссылок
    links.forEach(({ link, section }) => {
      if (link) {
        link.addEventListener('click', (e) => goToPath(e, section));
      }
    });

    return () => {
      // Удаляем обработчики при размонтировании компонента
      links.forEach(({ link, section }) => {
        if (link) {
          link.removeEventListener('click', (e) => goToPath(e, section));
        }
      });
    };
  }, []);

  return (
    <div className="footer-wrapper">
      <footer className="main-footer">
        <div className="left-side">
          <div className="h1-wrapper">
            <h1>Aileet</h1>
          </div>
          <div className="footer-links">
            <div className="left">
              <a id="footer_home-link" href="#">Home</a>
              <a id="footer_stack" href="#">Stack</a>
              <a id="footer_projects" href="#">Projects</a>
              <a id="footer_contact" href="#">Contact</a>
            </div>
            <div className="right">
              <a href="#">Terms and conditions</a>
              <a href="#">Privacy policy</a>
            </div>
          </div>
        </div>
        <div className="footer-social-media">
          <span>
            <FaFacebookF className="facebook" />
          </span>
          <span>
            <FaInstagram className="instagram" />
          </span>
          <span>
            <FaTwitter className="twitter" />
          </span>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
