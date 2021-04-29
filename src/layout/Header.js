import Nav from "../components/Nav";
import Heading from "../components/Heading";
import Paragraph from "../components/Paragraph";
import Input from "../components/Input";
import Button from "../components/Button";
import Image from "../components/Image";
import imgSrc from "../img/illustration-1.svg";
import logoSrc from "../img/logo.svg";
import { useState } from "react";

const Header = () => {
  const NavArr = ["Features", "Team", "Sign In"];
  const [text, setText] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    let mailFormat = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!text.match(mailFormat)) {
      setError(true);
    } else {
      setError(false);
    }
  };
  return (
    <header className="header">
      <div className="container">
        <div className="header__top">
          <div className="header__logo-container">
            <a href="https://github.com/Sanideth" className="header__logo-link">
              <Image src={logoSrc} className="header__logo" />
            </a>
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
            <form
              action="#"
              className="header__form"
              onSubmit={handleSubmit}
              noValidate
            >
              <div className="header__form-container">
                <Input
                  placeholder="Enter your email..."
                  name="email"
                  type="email"
                  ariaLabel="email"
                  className="header"
                  error={error}
                  text={text}
                  handleOnChange={setText}
                />

                <Button type="form" className="primary" text="Get Started" />
                <div className="error-container">
                  {error ? (
                    <p className="error-text">Please check your email</p>
                  ) : null}
                </div>
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
