const Logo = (props) => {
  return (
    <div className={`${props.className}__logo-container`}>{props.logo}</div>
  );
};

export default Logo;
