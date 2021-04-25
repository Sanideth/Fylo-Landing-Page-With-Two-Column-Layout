const Heading = (props) => {
  const Element = props.element;
  return (
    <Element className={`heading-${props.headingClassName}`}>
      {props.headingText}
    </Element>
  );
};

export default Heading;
