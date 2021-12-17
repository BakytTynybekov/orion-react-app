import Location from "./location/Location";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faTelegram,
  faInstagram,
  faVk,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

import "./header.scss";
import SocialMedia from "./socialMedia/SocialMedia";
import Nav from "./nav/Nav";

function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <h1>Orion</h1>
      </div>
      <Nav />

      <div className="header__contacts">
        <a href="tel:+78000000000">+7 (800) 000 00 00</a>
        <a href="mailto:bakyt.tynybekov.ss@gmail.com" className="mail">
          orion@gmail.com
        </a>
        <a href="/" className="telegram">
          <FontAwesomeIcon icon={faTelegram} className="telegram-icon" />
          <span>Наш Телеграм</span>
        </a>
      </div>

      <div className="header__footer">
        <Location />

        <div className="social-media">
          <SocialMedia sclMedia={faVk} />
          <SocialMedia sclMedia={faInstagram} />
          <SocialMedia sclMedia={faFacebook} />
        </div>
        <div className="copyright">
          <p>Разработано компанией</p>
          <p>
            {" "}
            <a href="/">orionlab.com</a> &copy; 2021
          </p>
        </div>
      </div>
    </header>
  );
}

export default Header;
