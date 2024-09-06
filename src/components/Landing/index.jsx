import './style.scss';
import Arrow from '../../assets/images/arrow.png';
import Logo from '../../assets/images/logo.png';
import Bozorli from '../../assets/images/bozorli.png';
import Ishlance from '../../assets/images/ishlance.png';
import Bookmark from '../../assets/images/bookmark.png';
import Stack from '../../assets/images/stack.png';
import BozorliScreen from '../../assets/images/bozorli_screen.png';
import Project2 from '../../assets/images/project-2.png';
import { useTranslation } from 'react-i18next'
function Landing() {
    const { t } = useTranslation();
    return (
        <div className="landing-wrapper">
            <div className="landing-content">
                <div className="home">
                    <div className="left">
                        <img src={Logo} alt="Logo" />
                    </div>
                    <div className="right">
                        <p id="team">{t('dev_team')}</p>
                        <p id="title">{t('meet_aileet')}</p>
                        <p id="subtitle">{t('digitize_biz')}</p>
                    </div>
                </div>
                <div className="stack">
                    <p id="title" className="element-animation">
                        {t('tech_stack')}
                    </p>
                    <img className="element-animation" src={Stack} alt="Stack" />
                </div>
            

                <div className="featured-project">
                    <div className="project-1 element-animation">
                        <div className="left">
                            <h5 id="subtitle">{t('selected_project')}</h5>
                            <h1 id="title">{t('sample_project')}</h1>
                            <div className="glass-card">
                                <p>{t('bozorli')}</p>
                            </div>
                        </div>
                        <div className="right">
                            <img src={BozorliScreen} alt="Bozorli Screen" />
                            <div className="gradient"></div>
                        </div>
                    </div>
                    <div className="project-2 element-animation">
                        <div className="left">
                            <img src={Project2} alt="Project 2" />
                            <div className="gradient"></div>
                        </div>
                        <div className="right">
                            <h5 id="subtitle">featured_project</h5>
                            <h1 id="title">example_project</h1>
                            <div className="glass-card">
                                <p>{t('ishlance')}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="contact">
                    <div className="left">
                        <p id="title" className="element-animation">{t('contact')}</p>
                        <p id="subtitle" className="element-animation">{t('it_park_office')}</p>
                        <a href="mailto:aileet@gmail.com" className="element-animation">aileet@gmail.com</a>
                        <div className="social element-animation">
                            <a href="https://www.instagram.com/aileet_company/" target="_blank" rel="noopener noreferrer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
                                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.005 4.005 0 1 0 0 8.01 4.005 4.005 0 0 0 0-8.01zm0 1.559a2.445 2.445 0 1 1 0 4.89 2.445 2.445 0 0 1 0-4.89z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className="right">
                        <div id="map"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Landing;
