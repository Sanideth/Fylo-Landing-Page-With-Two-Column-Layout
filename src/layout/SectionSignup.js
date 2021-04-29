import Heading from "../components/Heading";
import Paragraph from "../components/Paragraph";
import Input from "../components/Input";
import Button from "../components/Button";
import { useState } from "react";

const SectionSignup = () => {
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
    <section className="section-signup">
      <div className="container">
        <div className="section-signup__content">
          <div className="section-signup__text-container">
            <Heading
              element="h3"
              headingText="Get early access today"
              headingClassName="tertiary"
            />
            <Paragraph
              paragraphText="It only takes a minute to sign up and our free starter tier is extremely generous. 
  If you have any questions, our support team would be happy to help you."
              paragraphClassName="tertiary"
            />
          </div>
          <form
            action="#"
            className="section-signup__form"
            noValidate
            onSubmit={handleSubmit}
          >
            <div className="section-signup__form-container">
              <Input
                type="email"
                name="email"
                ariaLabel="email"
                className="section-signup"
                placeholder="email@example.com"
                error={error}
                text={text}
                handleOnChange={setText}
              />
              {error ? (
                <p className="error-text">Please check your email</p>
              ) : null}
              <Button
                type="form"
                text="Get Started For Free"
                className="primary"
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SectionSignup;
