import { ReactComponent as IconArrow } from "../img/icon-arrow.svg";
import Icon from "../components/Icon";

const Button = (props) => {
  const type = props.type;
  const renderDiv = props.div ? (
    <div className="btn-div">
      <Icon icon={<IconArrow />} />
    </div>
  ) : null;
  const Element = type === "form" ? "button" : "a";
  const href = Element === "a" ? props.link : null;

  return (
    <>
      <Element className={`btn btn-${props.className}`} href={href}>
        {props.text}
        {renderDiv}
      </Element>
    </>
  );
};

export default Button;
