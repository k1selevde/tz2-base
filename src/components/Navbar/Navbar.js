import React from 'react'
import {NavLink} from "react-router-dom";
import s from './Navbar.module.css';
import {useSelector} from "react-redux";


const Navbar = () => {
  const  isAuth =  useSelector(state => state.session.isAuth);
  return (
      <nav className={s.content}>
          <NavLink to="/" exact className={s.item} activeClassName={s.activeItem}>Home</NavLink>
          <NavLink to="/Login" className={s.item} activeClassName={s.activeItem}>Login</NavLink>
          <NavLink to="/Profile" className={s.item} activeClassName={s.activeItem}>Profile</NavLink>
          <NavLink to="/News" className={s.item} activeClassName={s.activeItem}>News</NavLink>
          {isAuth ? <div className={s.status}> Admin</div> : <div className={s.notStatus}>guest</div> }
      </nav>
  )
};


export default Navbar;
