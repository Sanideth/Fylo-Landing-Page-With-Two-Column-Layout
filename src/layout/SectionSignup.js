import Heading from "../components/Heading";
import Paragraph from "../components/Paragraph";
import Input from "../components/Input";
import Button from "../components/Button";

const SectionSignup = () => {
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
          <form action="#" className="section-signup__form">
            <div className="section-signup__form-container">
              <Input
                type="email"
                name="email"
                ariaLabel="email"
                className="section-signup"
                placeholder="email@example.com"
              />
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
