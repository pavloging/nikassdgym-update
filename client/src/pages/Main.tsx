import { FC } from 'react';
import { Link } from 'react-router-dom';
import ContentContainer from '../components/ContentContainer';

const Main: FC = () => {
    return (
        <ContentContainer className="main">
            <div className="main__welcome">
                <h1 className="content__title main__title">
                    Добро пожаловать на платформу онлайн - тренинга Дупиной Ники
                </h1>
                <p className="main__description">
                    После оплаты предоставляется доступ к видеоурокам с объяснением техники
                    упражнений
                </p>
                <div className="main__buttons">
                    <Link to="/login">
                        <button className="secondary">Вход</button>
                    </Link>
                    <Link to="/registration">
                        <button className="primary">Регистрация и оплата</button>
                    </Link>
                </div>
            </div>

            <hr />

            <div className="main__content">
                <div className="main__text-block">
                    <p className="main__paragraph">
                        Работаю индивидуально под любые запросы, составляя тренировочный протокол по
                        циклам с периодизацией и прогрессией нагрузки
                    </p>
                </div>

                <div className="main__text-block">
                    <p className="main__paragraph">
                        Тренировочный план отправляется в WhatsApp. Необходима обратная связь после
                        каждой тренировки: где было легко, а где было сложно.
                        <br />
                        <span className="main__span">
                            Если нет обратной связи, добавляю нагрузку на свое усмотрение
                        </span>
                    </p>
                </div>

                <div className="main__text-block">
                    <p className="main__paragraph">
                        Оплата ежемесячно, независимо от использования сайта. Рекомендую смотреть
                        видеоуроки дома и перед тренировкой
                    </p>

                    <div className="main__buttons">
                        <Link to="/login">
                            <button className="secondary">Вход</button>
                        </Link>
                        <Link to="/registration">
                            <button className="primary">Регистрация и оплата</button>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="main__blur" id="main__blur-top"></div>
            <div className="main__blur" id="main__blur-bottom"></div>
        </ContentContainer>
    );
};

export default Main;
