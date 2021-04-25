import Heading from "../components/Heading";
import Paragraph from "../components/Paragraph";
import Button from "../components/Button";
import Image from "../components/Image";
import quotesSrc from "../img/icon-quotes.svg";
import avatarSrc from "../img/avatar-testimonial.jpg";
import mainImgSrc from "../img/illustration-2.svg";

const SectionInfo = () => {
  return (
    <section className="section-info">
      <div className="section-info__text-container">
        <Heading
          headingClassName="secondary"
          element="h2"
          headingText="Stay Productive, wherever you are"
        />
        <Paragraph
          paragraphClassName="secondary"
          paragraphText="Never let location be an issue when accessing your files. Fylo has you 
  covered for all of your file storage needs."
        />
        <Paragraph
          paragraphClassName="secondary"
          paragraphText="Securely share files and folders with friends, family and colleagues for 
          live collaboration. No email attachments required!"
        />
        <Button
          text="See how Fylo works"
          className="secondary"
          span={true}
          link="https://github.com/Sanideth"
        />
        <div className="section-info__testimonial">
          <Image src={quotesSrc} alt="Quotes Image" className="quotes" />
          <Paragraph
            paragraphClassName="testimonial"
            paragraphText="Fylo has improved our team productivity by an order of magnitude. Since 
  making the switch our team has become a well-oiled collaboration machine."
          />
          <div className="section-info__user">
            <div className="section-info__user-image-container">
              <Image src={avatarSrc} alt="User Image" className="avatar" />
            </div>
            <div className="section-info__user-text-container">
              <Heading
                element="h4"
                headingText="Kyle Burton"
                headingClassName="user"
              />
              <Paragraph
                paragraphText="Founder & CEO, Huddle"
                paragraphClassName="user"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="section-info__image-container">
        <Image
          src={mainImgSrc}
          alt="Stay Productive Image"
          className="section-info"
        />
      </div>
    </section>
  );
};

export default SectionInfo;
