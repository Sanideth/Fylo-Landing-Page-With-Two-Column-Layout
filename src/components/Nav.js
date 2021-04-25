const Nav = (props) => {
  return (
    <nav className={`${props.className}__nav`}>
      {props.arr.map((item, index) => (
        <li className={`${props.className}__item`} key={index}>
          <a href={props.href} className={`${props.className}__link`}>
            {item}
          </a>
        </li>
      ))}
    </nav>
  );
};

export default Nav;
