import React from 'react';
import { BsBank2, BsFillTelephoneFill } from 'react-icons/bs';
import { MdBedroomParent, MdSell } from 'react-icons/md';
import { Link } from 'react-router-dom';
import './header.css';

export const Header = () => {
  return (
    <div className="header">
        <div className="wrapper">
            <Link to={"/"} className="header__ico">
                <BsBank2
                size={50}
                className="header__ico-title"/>
                <span className="header__ico-descpiption">My Apartments</span>
            </Link>
            <Link to={"/rent"}>
                <MdBedroomParent
                    size={45}
                    className="header__ico-rent"
                />
            </Link>
            <Link to={"/sell"}>
                <MdSell
                    size={45}
                    className="header__ico-sell"
                />
            </Link>
            <Link to={"/contacts"}>
                <BsFillTelephoneFill
                    size={45}
                    className="header__ico-contact"
                />
            </Link>
        </div>
    </div>
  )
}
