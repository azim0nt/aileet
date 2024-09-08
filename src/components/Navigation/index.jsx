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

        const burgerMenuFn = () => {
            burgerMenu.classList.toggle('open');
            burgerMenuBtn.classList.toggle('open');
        };

        const links = [
            { link: document.querySelector('#home-link'), section: '.home' },
            { link: document.querySelector('#stack'), section: '.stack' },
            { link: document.querySelector('#projects'), section: '.featured-project' },
            { link: document.querySelector('#contact'), section: '.consultation-wrapper' }
        ];

        // Настройка наблюдателя для секций
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const link = links.find(l => l.section === `.${entry.target.classList[0]}`)?.link;
                    if (entry.isIntersecting && link) {
                        link.classList.add('active');
                    } else if (link) {
                        link.classList.remove('active');
                    }
                });
            },
            { threshold: 0.5 }
        );

        // Добавляем секции для отслеживания и назначаем скролл при клике
        links.forEach(({ link, section }) => {
            const sectionElement = document.querySelector(section);
            if (sectionElement) observer.observe(sectionElement);
            if (link) {
                link.addEventListener('click', (e) => goToPath(e, section));
            }
        });

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
            if (burgerMenuBtn) {
                burgerMenuBtn.removeEventListener('click', burgerMenuFn);
            }

            // Останавливаем наблюдатель
            observer.disconnect();

            // Удаляем обработчики событий для ссылок
            links.forEach(({ link, section }) => {
                if (link) {
                    link.removeEventListener('click', (e) => goToPath(e, section));
                }
            });
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
                    <a id="stack" href="#">Stack</a>
                    <a id="projects" href="#">Projects</a>
                    <a id="contact" href="#">Contact</a>
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
