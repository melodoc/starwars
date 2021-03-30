import React from 'react';
import './Main.css';
// import

function Main() {
  return (
    <div className="container">
      <header>
        <nav className="menu">
          <a href="index.html">
            <img
              className="menu-header-logo"
              src="src/assets/icons/logo.svg"
              alt="Логотип киноэпопеи «Звездные войны»"
              width="135"
              height="40"
            />
          </a>
          <ul className="menu-nav">
            <li>
              <a className="menu-link" href="index.html">
                Билеты
              </a>
            </li>
            <li>
              <a className="menu-link" href="index.html">
                О фильме
              </a>
            </li>
            <li>
              <a className="menu-link" href="index.html">
                Трейлеры
              </a>
            </li>
            <li>
              <a className="menu-link" href="index.html">
                Обратная связь
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <h1 className="hidden">Киноэпопея «Звездные войны»</h1>
        <section className="episode">
          <h2 className="episode-number">Эпизод IX</h2>
          <p className="episode-title">Скайуокер. Восход</p>
          <p className="episode-description">
            Фильм завершает невероятную историю семьи Скайуокеров, длящуюся уже
            более сорока лет, и обещает дать ответы на все загадки из предыдущих
            серий. Зрителя ожидают старые и новые герои, уникальные миры,
            увлекательные путешествия на край Галактики и грандиозный финал
            фантастической саги
          </p>
        </section>

        <section className="date">
          <h2 className="date-title">Премьера</h2>
          <p className="date-description">19 декабря 2019</p>
        </section>

        <section className="trailer">
          <a
            className="trailer-button"
            href="https://www.youtube.com/watch?v=KVRBfWQgyuY"
            data-fancybox
          >
            Смотреть трейлер
          </a>
        </section>

        <h2 className="slider-title">Предыдущие эпизоды</h2>
        <article className="slider-card owl-carousel">
          <div className="slider-card-item">
            <figure>
              <img
                className="slider-card-image"
                src="public/remote-assetscard_4.png"
                alt=""
                width="207"
                height="166"
              />
            </figure>
            <time className="slider-card-year content" datetime="1977">
              1977
            </time>
            <p className="slider-card-name content">
              Эпизод IV:
              <br />
              Новая надежда
            </p>
            <p className="slider-card-rating content">8.11</p>
          </div>
          <div className="slider-card-item">
            <figure>
              <img
                className="slider-card-image"
                src="public/remote-assetscard_5.png"
                alt=""
                width="207"
                height="166"
              />
            </figure>
            <time className="slider-card-year content" datetime="1980">
              1980
            </time>
            <p className="slider-card-name content">
              Эпизод V:
              <br />
              Империя наносит ответный удар
            </p>
            <p className="slider-card-rating content">8.13</p>
          </div>
          <div className="slider-card-item">
            <figure>
              <img
                className="slider-card-image"
                src="public/remote-assetscard_6.png"
                alt=""
                width="207"
                height="166"
              />
            </figure>
            <time className="slider-card-year content" datetime="1983">
              1983
            </time>
            <p className="slider-card-name content">
              Эпизод VI:
              <br />
              Возвращение джедая
            </p>
            <p className="slider-card-rating content">8.15</p>
          </div>
          <div className="slider-card-item">
            <figure>
              <img
                className="slider-card-image"
                src="public/remote-assetscard_1.png"
                alt=""
                width="207"
                height="166"
              />
            </figure>
            <time className="slider-card-year content" datetime="1999">
              1999
            </time>
            <p className="slider-card-name content">
              Эпизод I:
              <br />
              Скрытая угроза
            </p>
            <p className="slider-card-rating content">7.90</p>
          </div>
          <div className="slider-card-item">
            <figure>
              <img
                className="slider-card-image"
                src="public/remote-assetscard_2.png"
                alt=""
                width="207"
                height="166"
              />
            </figure>
            <time className="slider-card-year content" datetime="2002">
              2002
            </time>
            <p className="slider-card-name content">
              Эпизод II:
              <br />
              Атака клонов
            </p>
            <p className="slider-card-rating content">7.98</p>
          </div>
          <div className="slider-card-item">
            <figure>
              <img
                className="slider-card-image"
                src="public/remote-assetscard_3.png"
                alt=""
                width="207"
                height="166"
              />
            </figure>
            <time className="slider-card-year content" datetime="2005">
              2005
            </time>
            <p className="slider-card-name content">
              Эпизод III:
              <br />
              Месть ситхов
            </p>
            <p className="slider-card-rating content">8.05</p>
          </div>
          <div className="slider-card-item">
            <figure>
              <img
                className="slider-card-image"
                src="public/remote-assetscard_7.png"
                alt=""
                width="207"
                height="166"
              />
            </figure>
            <time className="slider-card-year content" datetime="2015">
              2015
            </time>
            <p className="slider-card-name content">
              Эпизод VII:
              <br />
              Пробуждение силы
            </p>
            <p className="slider-card-rating content">7.10</p>
          </div>
          <div className="slider-card-item">
            <figure>
              <img
                className="slider-card-image"
                src="public/remote-assetscard_8.png"
                alt=""
                width="207"
                height="166"
              />
            </figure>
            <time className="slider-card-year content" datetime="2017">
              2017
            </time>
            <p className="slider-card-name content">
              Эпизод VIII:
              <br />
              Последние джедаи
            </p>
            <p className="slider-card-rating content">6.70</p>
          </div>
          <div className="slider-card-item">
            <figure>
              <img
                className="slider-card-image"
                src="public/remote-assets/card_9.png"
                alt=""
                width="207"
                height="166"
              />
            </figure>
            <time className="slider-card-year content" datetime="2019">
              2019
            </time>
            <p className="slider-card-name content">
              Эпизод IX:
              <br />
              Скайуокер. Восход
            </p>
            <p className="slider-card-rating content">6.07</p>
          </div>
        </article>
      </main>
    </div>
  );
}

export default Main;
