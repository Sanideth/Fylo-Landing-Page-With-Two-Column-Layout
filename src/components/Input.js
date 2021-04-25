const Input = (props) => {
  return (
    <input
      type={props.type}
      className={`${props.className}__input`}
      aria-label={props.ariaLabel}
      placeholder={props.placeholder}
      name={props.name}
    />
  );
};

export default Input;
