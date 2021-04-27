import { ReactComponent as IconArrow } from "../img/arrow-right-circle.svg";
import Icon from "../components/Icon";

const Button = (props) => {
  const renderDiv = props.withDiv ? (
    <div className="btn-div">
      <Icon icon={<IconArrow />} />
    </div>
  ) : null;

  return (
    <>
      {props.type === "form" ? (
        <button className={`btn btn-${props.className}`} type="submit">
          {props.text}
        </button>
      ) : (
        <a
          href="https://github.com/Sanideth"
          className={`btn btn-${props.className}`}
        >
          {props.text}
          {renderDiv}
        </a>
      )}
    </>
  );
};

export default Button;
