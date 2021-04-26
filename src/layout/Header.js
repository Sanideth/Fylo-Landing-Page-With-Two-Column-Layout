import { ReactComponent as LogoSvg } from "../img/logo.svg";
import Logo from "../components/Logo";
import Nav from "../components/Nav";
import Heading from "../components/Heading";
import Paragraph from "../components/Paragraph";
import Input from "../components/Input";
import Button from "../components/Button";
import Image from "../components/Image";
import imgSrc from "../img/illustration-1.svg";

const Header = () => {
  const NavArr = ["Features", "Team", "Sign In"];
  return (
    <header className="header">
      <div className="container">
        <div className="header__top">
          <div className="header__logo-container">
            <Logo logo={<LogoSvg />} />
          </div>
          <Nav
            arr={NavArr}
            className="header"
            href="https://github.com/Sanideth"
          />
        </div>
        <div className="header__hero">
          <div className="header__hero-text-container">
            <Heading
              element="h1"
              headingClassName="primary"
              headingText="All your files in one secure location, accesible anywhere"
            />
            <Paragraph
              paragraphClassName="primary"
              paragraphText="Fylo stores your most important files in one secure location. 
  Access them wherever you need, share and collaborate with friends, 
  family, and co-workers."
            />
            <form action="#" className="header__form">
              <div className="header__form-container">
                <Input
                  placeholder="Enter your email..."
                  name="email"
                  type="email"
                  ariaLabel="email"
                  className="header"
                />
                <Button type="form" className="primary" text="Get Started" />
              </div>
            </form>
          </div>
          <div className="header__hero-image-container">
            <Image
              src={imgSrc}
              alt="Access Anywhere Image"
              className="header"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
