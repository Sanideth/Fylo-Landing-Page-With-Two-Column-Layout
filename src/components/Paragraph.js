const Paragraph = (props) => {
  return (
    <p className={`paragraph-${props.paragraphClassName}`}>
      {props.paragraphText}
    </p>
  );
};

export default Paragraph;
