import React from "react";
import { Col, Row } from "antd";

import MainImage from "../images/main/main-img.png";

const MainPage = () => {
  return (
    <div className="landing">
      {/* Main section */}
      <section className="main">
        <div className="wrapper"></div>
        <div className="container">
          <Row justify="space-around" align="middle">
            <Col span={12} xs={24} xl={12}>
              <div className="main__content">
                <div className="main__content-header">
                  <h2>
                    Используй мобильные прокси с&nbsp;огромным пулом операторов
                    без&nbsp;головной боли
                  </h2>
                </div>

                <div className="main__content-subheader">
                  <p>
                    Заменяем сетевой отпечаток операционной системы прокси для
                    совпадения с Вашим User-Agent. Подмена Passive OS
                    Fingerprint.
                  </p>
                </div>

                <div className="main__content-actions p0f__buttons">
                  <button className="p0f__buttons-text">Личный кабинет</button>
                  <button className="p0f__buttons-arrow"></button>
                </div>
              </div>
            </Col>
            <Col span={12} xs={24} xl={12}>
              <div className="main__img">
                <img src={MainImage} alt="main" width="90%" />
              </div>
            </Col>
          </Row>
        </div>
      </section>
      {/* About section */}
      <section className="about">
        <div className="container">
          <Row>
            <div className="about__bg absolute-image"></div>
            <Col span={12} xs={24} xl={12}>
              <span>123</span>
            </Col>
            <Col span={12} xs={24} xl={12}>
              <div className="about__content">
                <h3>
                  Мобильные прокси открывают новые возможности для пользоватей
                </h3>
                <ul>
                  <li>
                    &#9989; Создавайте множество аккаунтов в нужном количестве
                  </li>
                  <li>
                    &#9989; Парсите результаты поиска и публикуйте контент без
                    риска блокировки
                  </li>
                  <li>
                    &#9989; Ставьте лайки и подписывайтесь в огромных
                    количествах от множества аккаунтов
                  </li>
                  <li>
                    &#9989; Интегрируйте наши прокси в свой софт для раскрутки,
                    SEO, парсинга, анти-детекта и другое
                  </li>
                  <li>
                    &#9989; Создавайте рекламные кампании в
                    Facebook/Adwords/Direct с мультиаккаунтов
                  </li>
                  <li>&#9989; Сохраняйте анонимность в Сети</li>
                </ul>

                <div className="p0f__buttons">
                  <button className="p0f__buttons-text">Узнать больше</button>
                  <button className="p0f__buttons-arrow"></button>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </section>
      {/* Register section */}
      <section className="register">
        <div className="container">
          <Row>
            <div className="register__bg absolute-image"></div>
            <Col span={12} xs={24} xl={12}>
              <div className="register__content">
                <h3>
                  Получи доступ в личный кабинет в несколько кликов &#128071;
                </h3>
                <p>
                  На данный момент регистрация происходит через нашего телеграм
                  бота. Это занимает несколько минут, это связнно с попытками
                  мошейнничества. Спасибо за понимание!
                </p>
                <p>
                  Нужно заполнить маленькую форму и мы тут же выдадим данные для
                  входа в личный кабинет. Далее будут доступны прокси и их
                  полные настройки. Если нету телеграм аккаунта, просто укажите
                  доступный способ связи.
                </p>

                <div className="p0f__buttons">
                  <button className="p0f__buttons-text">Получить доступ</button>
                  <button className="p0f__buttons-arrow"></button>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </section>
      {/* Calculator section */}
      <section className="calculation">
        <div className="container">
          <Row>
            <div className="calculation__bg absolute-image"></div>
            <Col span={12} xs={24} xl={12} offset={12}>
              <div className="calculation__content">
                <h3>
                  У нас есть специальный калькулятор который поможет в выборе
                  прокси &#128076;
                </h3>

                <p>
                  Если еще сомневаетесь или хотете узнать сколько это будет
                  стоит - попробуйте рассчитать сами! У нас есть специальный
                  калькулятор для этих целей.
                </p>

                <p>
                  Калькулятор состоит из нескольких этапов, пройдя которые можно
                  узнать итоговую цену под конкретные цели. Или же свяжитесь с
                  нашими консультантами за помощью.
                </p>

                <div className="p0f__buttons">
                  <button className="p0f__buttons-text">Посчитать</button>
                  <button className="p0f__buttons-arrow"></button>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </section>
    </div>
  );
};

export default MainPage;
