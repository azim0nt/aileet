import './style.scss';
import Arrow from '../../assets/images/arrow.png';
import Logo from '../../assets/images/logo.png';
import Bozorli from '../../assets/images/bozorli.png';
import Ishlance from '../../assets/images/ishlance.png';
import Bookmark from '../../assets/images/bookmark.png';
import Wallpaper from '../../assets/images/consultation-wallpaper.png'
import Stack from '../../assets/images/stack.png';
import BozorliScreen from '../../assets/images/bozorli_screen.png';
import emailjs from 'emailjs-com'
import Project2 from '../../assets/images/project-2.png';
import { useTranslation } from 'react-i18next'
import { useState } from 'react';
import Footer from '../Footer';
function Landing() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    fullname: '',
    contact: '',
    category: 'Website',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const submit = (e) => {
    e.preventDefault();

    emailjs.send(
      import.meta.env.VITE_SERVICE_ID,
      import.meta.env.VITE_TEMPLATE_ID,
      formData,
      import.meta.env.VITE_USER_ID
    )
      .then((result) => {
        console.log('SUCCESS!', result.text);
        alert('Сообщение отправлено успешно!');
        setFormData({
          fullname: '',
          contact: '',
          category: 'Website',
          message: ''
        })
      }, (error) => {
        console.log('FAILED...', error.text);
        alert('Ошибка отправки сообщения.');
      });
  };

  return (
    <div className="landing-wrapper">
      <div className="landing-content">
        <div className="home">
          <div className="left">
            <img src={Logo} alt="Logo" />
            <div className="gradient"></div>
          </div>
          <div className="right">
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
              <div>
                <h5 id="subtitle">{t('selected_project')}</h5>
                <h1 id="title">{t('sample_project')}</h1>
              </div>

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
              <div>
                <h5 id="subtitle">featured_project</h5>
                <h1 id="title">example_project</h1>
              </div>
              <div className="glass-card">
                <p>{t('ishlance')}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="consultation-wrapper">
          <form onSubmit={submit}>
            <div className="form-control">
              <input
                id="consultation-person-fullname"
                type="text"
                name="fullname"
                placeholder="Как к вам обращаться"
                value={formData.fullname}
                onChange={handleChange}
              />
            </div>
            <div className="form-control row">
              <div className="left">
                <input
                  type="contact"
                  name="contact"
                  placeholder="contact"
                  value={formData.contact}
                  onChange={handleChange}
                />
                <select
                  id="consultation-person-email"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                >
                  <option value="Website">Website</option>
                  <option value="CRM">CRM</option>
                  <option value="Landing">Landing</option>
                  <option value="Design">Design</option>
                  <option value="Online Shop">Online Shop</option>
                  <option value="Telegram Bot">Telegram Bot</option>
                </select>
              </div>
            </div>
            <div className="form-control">
              <textarea
                id="consultation-person-message"
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
              />
            </div>
            <div className="form-control">
              <button className="green-btn">Получить консультацию</button>
            </div>
          </form>
          <div className='image-wrapper'>
            <img src={Wallpaper} width={"100%"} height={550} />
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Landing;
