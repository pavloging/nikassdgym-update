import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <hr />
            <div className="footer">
                <h2 className="footer__title">Мои контакты</h2>
                <div className="footer__contact-block">
                    <h2 className="footer__contact-block">Дупина Ника Николаевна</h2>
                    <span className="footer__contact-block">ИНН 270396986640</span>
                    <div className="footer__contact">
                        <img className="footer__img" src="/tel.svg" alt="" />
                        <a className="footer__link" href="https://wa.me/+79141636665">
                            WhatsApp
                        </a>
                    </div>
                    <div className="footer__contact">
                        <img className="footer__img" src="/instagram.svg" alt="" />
                        <a className="footer__link" href="https://www.instagram.com/nikass.d?igsh=MTRkODdydmZhNWlsYQ==">
                            Instagram
                        </a>
                    </div>
                    <div className="footer__contact">
                        <img className="footer__img" src="/youtube.svg" alt="" />
                        <a
                            className="footer__link"
                            href="https://youtube.com/@nikass.d?si=805QKxSV-zpTlBJk"
                        >
                            YouTube
                        </a>
                    </div>
                </div>
                <div className="footer__container">
                    <p className="footer__policy">2024</p>
                    <Link to="/policy" className="footer__policy">
                        Политика конфиденциальности
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Footer;
