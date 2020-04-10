import React from 'react'
import {NavLink} from "react-router-dom";
import s from './Navbar.module.css';
import {useSelector} from "react-redux";
import {AppStateType} from "../../reducers/rootReducer";

const Navbar = () => {

  const initial = (state: AppStateType) => state.session.isAuth;
  const isAuth =  useSelector(initial);
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