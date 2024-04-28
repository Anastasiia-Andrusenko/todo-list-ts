import css from './Navigation.module.css';

import { NavLink } from "react-router-dom";

interface Props {
  isActive: boolean;
}

const getClassName = ({ isActive }: Props) => {
  return isActive ? `${css.link} ${css.current}` : css.link;
};


const Navigation = () => {

  return (
    <nav className={css.container}>
      <NavLink className={getClassName} to='/'>All</NavLink>
      <NavLink className={getClassName} to='/done'>Done</NavLink>
      <NavLink className={getClassName} to='/deleted'>Deleted</NavLink>
    </nav>
  )
};

export default Navigation;