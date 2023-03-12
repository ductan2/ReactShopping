import React, { useEffect, useRef } from 'react';
import logo from '../assets/images/Logo-2.png';
import { Link, NavLink, useLocation } from 'react-router-dom';
export const Header = () => {
    const mainNav = [
        { dislay: 'Trang chủ', path: '/' },
        { dislay: 'Sản phẩm', path: '/catalog' },
        { dislay: 'Phụ kiện', path: '/accessories' },
        { dislay: 'Liên hệ', path: '/contact' }
    ];

    //  viết hàm scroll và hàm active từng page
    // hàm scroll sử dụng trong useEffect
    const { pathname } = useLocation();
    const isActive = mainNav.findIndex((item) => item.path === pathname);
    const headerRef = useRef(null);
    const leftRef = useRef(null);
    const menuToggle = () => {
        leftRef.current.classList.toggle('active');
    };
    useEffect(() => {
        // listen scroll to user
        window.addEventListener('scroll', () => {
            if (
                document.body.scrollTop > 100 ||
                document.documentElement.scrollTop > 100
            ) {
                headerRef.current.classList.add('shirk');
            } else {
                headerRef.current.classList.remove('shirk');
            }
        });

        return () => {
            window.removeEventListener('scroll', () => {});
        };
    }, []);

    return (
        <div className="header" ref={headerRef}>
            <div className="container">
                <div className="header__logo">
                    <Link to={'/'}>
                        <img src={logo} alt="" />
                    </Link>
                </div>
                <div className="header__menu">
                    <div
                        className=" header__menu__mobile-toogle"
                        onClick={menuToggle}
                    >
                        <i class="bx bx-menu"></i>
                    </div>
                    <ul className=" header__menu__left" ref={leftRef}>
                        <div
                            className="header__menu__left__close"
                            onClick={menuToggle}
                        >
                            <i className="bx bx-chevron-left"></i>
                        </div>
                        {mainNav.map((item, index) => {
                            return (
                                <li
                                    key={index}
                                    className={`header__menu-item header__menu__left-item ${
                                        index === isActive ? 'active' : ''
                                    }`}
                                >
                                    <NavLink to={item.path}>
                                        {item.dislay}
                                    </NavLink>
                                </li>
                            );
                        })}
                    </ul>

                    <div className=" header__menu__right">
                        <div className="header__menu-item header__menu__right-item">
                            <i class="bx bx-search"></i>
                        </div>
                        <div className="header__menu-item header__menu__right-item">
                            <NavLink to={'/cart'}>
                                <i class="bx bx-cart"></i>
                            </NavLink>
                        </div>
                        <div className="header__menu-item header__menu__right-item">
                            <i class="bx bx-user"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
