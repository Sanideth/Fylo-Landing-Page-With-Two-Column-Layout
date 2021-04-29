const Input = (props) => {
  const addErrorClass = props.error ? "error" : "";

  const handleOnChange = (e) => {
    props.handleOnChange(e.target.value);
  };

  return (
    <input
      type={props.type}
      className={`${props.className}__input ${addErrorClass}`}
      aria-label={props.ariaLabel}
      placeholder={props.placeholder}
      name={props.name}
      value={props.text}
      onChange={handleOnChange}
    />
  );
};

export default Input;
