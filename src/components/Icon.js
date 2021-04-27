const Icon = (props) => {
  return (
    <div className="icon-container">
      {props.link ? (
        <a href="https://github.com/Sanideth" className="icon-link">
          {props.icon}
        </a>
      ) : (
        props.icon
      )}
    </div>
  );
};

export default Icon;
