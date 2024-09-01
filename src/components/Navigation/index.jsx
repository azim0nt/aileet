import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './style.scss';
import TextLogo from '../../assets/images/text-logo.png';

function Navigation() {
    const { t, i18n } = useTranslation();

    useEffect(() => {
        const burgerMenuBtn = document.querySelector('.burger-menu');
        const burgerMenu = document.querySelector('nav .right');

        const goToPath = (e, path) => {
            e.preventDefault(); // Предотвращаем стандартное поведение ссылки
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

        const burgerMenuFn = () => {
            burgerMenu.classList.toggle('open');
            burgerMenuBtn.classList.toggle('open');
        };

        const homeLink = document.querySelector('#home-link');
        const aboutLink = document.querySelector('#about-link');
        const labLink = document.querySelector('#lab-link');

        if (homeLink) {
            homeLink.addEventListener('click', (e) => goToPath(e, '.home'));
        }
        if (aboutLink) {
            aboutLink.addEventListener('click', (e) => goToPath(e, '.about-us'));
        }
        if (labLink) {
            labLink.addEventListener('click', (e) => goToPath(e, '.stack'));
        }

        const languageSelect = document.getElementById('language-select');
        if (languageSelect) {
            languageSelect.addEventListener('change', function () {
                i18n.changeLanguage(this.value);
            });
        }

        if (burgerMenuBtn) {
            burgerMenuBtn.addEventListener('click', burgerMenuFn);
        }

        return () => {
            if (homeLink) {
                homeLink.removeEventListener('click', (e) => goToPath(e, '.home'));
            }
            if (aboutLink) {
                aboutLink.removeEventListener('click', (e) => goToPath(e, '.about-us'));
            }
            if (labLink) {
                labLink.removeEventListener('click', (e) => goToPath(e, '.stack'));
            }
            if (burgerMenuBtn) {
                burgerMenuBtn.removeEventListener('click', burgerMenuFn);
            }
        };
    }, [i18n]);

    return (
        <>
            <nav>
                <div className="left">
                    <a href="#"><img src={TextLogo} alt="" /></a>
                </div>
                <div className="burger-menu-container">
                    <button className="burger-menu green-btn">
                        <div></div>
                        <div></div>
                        <div></div>
                    </button>
                </div>
                <div className="right">
                    <a id="home-link" href="#">Home</a>
                    <a id="about-link" href="#">About</a>
                    <a id="lab-link" href="#">Lab</a>
                    <select className="green-btn" name="language" id="language-select" defaultValue={i18n.language}>
                        <option value="en">English</option>
                        <option value="uz">Uzbek</option>
                        <option value="ru">Russian</option>
                    </select>
                </div>
            </nav>
        </>
    );
}

export default Navigation;
