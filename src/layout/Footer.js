import Logo from "../components/Logo";
import { ReactComponent as LogoSrc } from "../img/logo.svg";
import Nav from "../components/Nav";
import { ReactComponent as IconPhone } from "../img/icon-phone.svg";
import { ReactComponent as IconEmail } from "../img/icon-email.svg";
import Icon from "../components/Icon";
import { ReactComponent as IconFacebook } from "../img/facebook.svg";
import { ReactComponent as IconTwitter } from "../img/twitter.svg";
import { ReactComponent as IconInstagram } from "../img/instagram.svg";
import Paragraph from "../components/Paragraph";

const Footer = () => {
  const navArr = [
    "About Us",
    "Contact Us",
    "Jobs",
    "Terms",
    "Press",
    "Privacy",
    "Blog",
  ];
  return (
    <footer className="footer">
      <div className="footer__logo-container">
        <Logo logo={<LogoSrc />} alt="Main Logo" className="logo" />
      </div>
      <div className="footer__details">
        <div className="footer__contact">
          <div className="footer__phone">
            <div className="footer__icon-container">
              <Icon icon={<IconPhone />} />
            </div>
            <div className="footer__text-container">
              <Paragraph
                paragraphText="Phone: +1-543-123-4567"
                paragraphClassName="footer"
              />
            </div>
          </div>
          <div className="footer__email">
            <div className="footer__icon-container">
              <Icon icon={<IconEmail />} />
            </div>
            <div className="footer__text-container">
              <Paragraph
                paragraphText="example@fylo.com"
                paragraphClassName="footer"
              />
            </div>
          </div>
        </div>
        <Nav arr={navArr} className="footer" />
        <div className="footer__social-media">
          <div className="footer__social-media-icon-container">
            <Icon icon={<IconFacebook />} />
          </div>
          <div className="footer__social-media-icon-container">
            <Icon icon={<IconTwitter />} />
          </div>
          <div className="footer__social-media-icon-container">
            <Icon icon={<IconInstagram />} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
