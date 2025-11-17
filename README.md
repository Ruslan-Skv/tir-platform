# TIR-PLATFORM!
Ссылка на проект:

Ссылка на репозиторий: https://github.com/Ruslan-Skv/tir-platform

Ссылка на техническое задание: https://docs.google.com/document/d/1bsz-MVFnsSHtb7MjG4a9hk47_ye0GNOM0p0WWabS4tU/edit?tab=t.0

Технологический стек:

  Фреймворк: React 18+, TypeScript, Бандлер: Vite 5+ с vite-plugin-ssr; Рендеринг: Гибридный (SSG/SSR/CSR); Стилизация: Основная: CSS Modules + Sass (для сложных компонентов), Tailwind CSS; Состояние: Клиентское: Redux Toolkit + RTK Query (для серверного состояния), Локальное: React Context + useReducer (для простого UI состояния); Маршрутизация: React Router v6; Архитектурные принципы: Feature-Sliced Design (FSD); Документация UI: Storybook; 3D-визуализация: Three.js / React Three Fiber; Дополнительно: Husky, ESLint, Prettier, lint-staged, Stylelint, Commitizen

  Бэкенд: NestJS, TypeScript, Основная БД: PostgreSQL, Поисковая система: Elasticsearch / OpenSearch, ORM: Prisma, Кэш и очереди: Redis + Bull Queue, Аутентификация: JWT + Redis для blacklist токенов, Файловое хранилище: S3-совместимое объектное хранилище, Мессенджеры: Telegram Bot API

  Мобильные приложения: React Native, TypeScript, Состояние: Redux Toolkit, Нативные модули: Доступ к камере, биометрии, push-уведомлениям

  Инфраструктура и деплой: Хостинг: Yandex Cloud / AWS, Контейнеризация: Docker + Docker Compose, Система контроля версий: Git (GitHub), CI/CD: Автоматизированные pipelines.

  ## Установка

### Фронтенд
Перейдите в папку с исходным кодом фронтенда

`cd tir-frontend`

Установите зависимости  с помощью команды

`npm i`

Создайте `.env` файлы из примера `.env.example`

Запуск фронтенда (development):
$ npm run dev

Сделать commit, запустить Husky, ESLint, Prettier, lint-staged, Stylelint, Commitizen:
$ npm run commit


### Бэкенд
Перейдите в папку с исходным кодом бэкенда

`cd tir-backend`

Установите зависимости (точно такие же, как в package-lock.json) с помощью команды

`npm i`

Создайте `.env` файлы из примера `.env.example`

### PostgreSQL