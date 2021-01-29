import React, { useState } from 'react'
import './Header.css'
import { FiMenu, FiX } from "react-icons/fi";
import LogoSchool from '../Logo-schoolWeb.png';

function Header() {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMoBileMenu = () => setClick(false);

    return (
        <div className="header">
            <div className="container">
                <div className="header-con">
                    <div className="logo-container">
                    <a href="#">
                        <img src={LogoSchool} width="190px" />
                    </a>
                    </div>
                    <ul className={click ? "menu active" : "menu"}>
                        <li className="menu-link" onClick={closeMoBileMenu}>
                            <a href="#">หน้าหลัก</a>
                        </li>
                        <li className="menu-link" onClick={closeMoBileMenu}>
                            <a href="#">ข่าวประชาสัมพันธ์</a>
                        </li>
                        <li className="menu-link" onClick={closeMoBileMenu}>
                            <a href="#">บุคลากร</a>
                        </li>
                        <li className="menu-link" onClick={closeMoBileMenu}>
                            <a href="#">ประวัติโรงเรียน</a>
                        </li>
                        <li className="menu-link" onClick={closeMoBileMenu}>
                            <a href="#">ติดต่อ</a>
                        </li>
                    </ul>
                    <div className="mobile-menu" onClick={handleClick}>
                        {click ?(
                            <FiX />
                        ) : (
                            <FiMenu/>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
