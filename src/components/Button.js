const Button = (props) => {
  const type = props.type;
  const checkSpan = props.span ? <span className="btn-span"></span> : null;
  const Element = type === "form" ? "button" : "a";
  const href = Element === "a" ? props.link : null;

  return (
    <>
      <Element className={`btn btn-${props.className}`} href={href}>
        {props.text}
        {checkSpan}
      </Element>
    </>
  );
};

export default Button;
