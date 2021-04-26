const Nav = (props) => {
  return (
    <nav className={`${props.className}__nav`}>
      <ul className={`${props.className}__list`}>
        {props.arr.map((item, index) => (
          <li className={`${props.className}__item`} key={index}>
            <a href={props.href} className={`${props.className}__link`}>
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
