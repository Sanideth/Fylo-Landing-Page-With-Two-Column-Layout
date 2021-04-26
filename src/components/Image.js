const Image = (props) => {
  return (
    <img src={props.src} alt={props.alt} className={`${props.className}-img`} />
  );
};

export default Image;
