import { memo } from "react";
import TemplatePage from "../TemplatePage";
import { DefaultContent } from "../../components/DefaultContent";
import { Container } from "../../components/DefaultContent/DefaultContent.styled";
import logo from "../../assets/foundation.svg";
import mockupProfile from "../../assets/product-mockups/mockup-profile.png";
import mockupChat from "../../assets/product-mockups/mockup-chat.png";
import mockupReport from "../../assets/product-mockups/mockup-report.png";
import mockupOffers from "../../assets/product-mockups/mockup-offers.png";
import {
  Description,
  FoundationLogo,
  MockupImage,
  MockupsGrid,
  ScrollableMain,
} from "./ProductInfoPage.styled";

const PRODUCT_MOCKUPS = [
  { src: mockupProfile, alt: "Макет профиля компании" },
  { src: mockupChat, alt: "Макет чата заказов" },
  { src: mockupReport, alt: "Макет формы отчёта" },
  { src: mockupOffers, alt: "Макет каталога предложений" },
] as const;

const ProductInfoPage = memo(() => {
  return (
    <TemplatePage
      sideContent={{
        content: (
          <DefaultContent title="О ПРОДУКТЕ">
            <Description>
              CHECKMATE — платформа для организации проверок качества
              обслуживания: бизнес публикует задания, тайные покупатели
              выполняют визиты и формируют структурированные отчёты.
            </Description>
            <Description>
              Решение поддерживает полный цикл — от регистрации и
              аккредитации компании до создания предложения, переписки по
              заказу и сдачи отчёта с оценкой сервиса.
            </Description>
            <Description>
              Проект создан при поддержке Федерального государственного
              бюджетного учреждения «Фонд содействия развитию малых форм
              предприятий в научно-технической сфере в рамках программы
              "Студенческий стартап" федерального проекта "Платформа
              университетского технологического предпринимательства".
            </Description>
            <FoundationLogo src={logo} alt="Фонд содействия инновациям" />
          </DefaultContent>
        ),
        footer: <Container>Ген. директор: +7 950 166 3763</Container>,
      }}
      mainContent={{
        header: <></>,
        content: (
          <ScrollableMain>
            <DefaultContent title="ТЕХНИЧЕСКИЕ ХАРАКТЕРИСТИКИ">
              <Description>
                Клиентская часть CHECKMATE — одностраничное веб-приложение
                (SPA), собранное на React с TypeScript. Интерфейс построен из
                компонентного дерева React, типизация на уровне TypeScript
                снижает количество ошибок при разработке и сопровождении.
                Навигация между разделами — предложения, заказы, чаты, отчёты
                и профиль — реализована через React Router; визуальное
                оформление — на Styled Components, сборка и локальная разработка
                — через Vite.
              </Description>
              <Description>
                Серверная часть — REST API на Java и Spring Framework. Spring
                Boot обеспечивает конфигурацию сервиса, внедрение зависимостей
                и единообразную обработку HTTP-запросов; Spring Web —
                контроллеры и маршрутизацию эндпоинтов. Бизнес-логика
                (регистрация, аккредитация, предложения, заказы, отчёты)
                сосредоточена в сервисном слое; доступ к данным — через Spring
                Data и реляционную СУБД. Авторизация и сессии — на основе JWT
                или сессионных механизмов Spring Security.
              </Description>
              <Description>
                Взаимодействие фронтенда и бэкенда — по REST: клиент отправляет
                JSON-запросы (Axios), сервер отвечает структурированными DTO.
                Архитектура рассчитана на разделение ролей «бизнес» и «тайный
                покупатель»: разные сценарии в одном приложении при общей
                модели пользователя и едином API. Для демонстрации и
                прототипирования допускается подмена бэкенда mock-сервером;
                целевой контур — развёртывание Spring-приложения и статики SPA
                за reverse proxy.
              </Description>
            </DefaultContent>

            <DefaultContent title="МАКЕТЫ ПРОДУКТА">
              <MockupsGrid>
                {PRODUCT_MOCKUPS.map(({ src, alt }) => (
                  <MockupImage key={alt} src={src} alt={alt} />
                ))}
              </MockupsGrid>
            </DefaultContent>
          </ScrollableMain>
        ),
      }}
    />
  );
});

export default ProductInfoPage;
