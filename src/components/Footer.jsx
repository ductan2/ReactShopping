import React from 'react';
import { Link } from 'react-router-dom';
import Grid from './Grid';
import logo from '../assets/images/logo-2.png';

export const Footer = () => {
    const footerAboutLinks = [
        { display: 'Giới thiệu', path: '/about' },
        { display: 'Liên hệ', path: '/about' },
        { display: 'Tuyển dụng', path: '/about' },
        { display: 'Hệ thống cửa hàng', path: '/about' }
    ];
    const footerCustomLink = [
        { display: 'Chính sách khách hàng', path: '/about' },
        { display: 'Chính sách bảo hành', path: '/about' },
        { display: 'Chính sách hoàn tiền', path: '/about' }
    ];
    return (
        <footer className='footer'>
            <div className="container">
                <Grid col={4} mdCol={2} smCol={1} gap={10}>
                    <div>
                        <div className="footer__title">Tổng đài hỗ trợ</div>
                        <div className="footer__content">
                            <p>
                                Liên hệ đặt hàng <strong>0123456756</strong>
                            </p>
                            <p>
                                Khiếu nại <strong>0123456756</strong>
                            </p>
                            <p>
                                Thắc mắc đơn hàng <strong>0123456756</strong>
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className="footer__title">Về YoLo</div>
                        <div className="footer__content">
                            {footerAboutLinks.map((item, index) => {
                                return (
                                    <p key={index}>
                                        <Link to={item.path}>
                                            {item.display}
                                        </Link>
                                    </p>
                                );
                            })}
                        </div>
                    </div>
                    <div>
                        <div className="footer__title">Chăm sóc khách hàng</div>
                        <div className="footer__content">
                            {footerCustomLink.map((item, index) => {
                                return (
                                    <p key={index}>
                                        <Link to={item.path}>
                                            {item.display}
                                        </Link>
                                    </p>
                                );
                            })}
                        </div>
                    </div>
                    <div className='footer__about'>
                        <Link to={'/'}>
                            <img src={logo} className="footer__logo" alt="" />
                        </Link>
                        <p>
                            “Đặt sự hài lòng của khách hàng là ưu tiên số 1
                            trong mọi suy nghĩ hành động của mình” là sứ mệnh,
                            là triết lý, chiến lược.. luôn cùng YODY tiến bước
                        </p>
                    </div>
                </Grid>
            </div>
        </footer>
    );
};
