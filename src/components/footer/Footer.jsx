import vk from './../../assets/img/icons/vk.svg';
import github from './../../assets/img/icons/github.svg';
import instagram from './../../assets/img/icons/instagram.svg';
import telegram from './../../assets/img/icons/telegram.svg';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <ul className="social">
            <li className="social__item">
              <a
                href="https://vk.com/frodi_bjorn"
                target="_blank"
                rel="noreferrer"
              >
                <img src={vk} alt="Link" />
              </a>
            </li>
            <li className="social__item">
              <a
                href="https://www.instagram.com/frodi_byorn/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={instagram} alt="Link" />
              </a>
            </li>
            <li className="social__item">
              <a
                href="https://github.com/frodiBjorn"
                target="_blank"
                rel="noreferrer"
              >
                <img src={github} alt="Link" />
              </a>
            </li>
            <li className="social__item">
              <a href="https://t.me/I_dobryi" target="_blank" rel="noreferrer">
                <img src={telegram} alt="Link" />
              </a>
            </li>
          </ul>
          <div className="copyright">
            <p>© 2023</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
