# Crypto Dashboard

## 📌 О проекте

Crypto Dashboard — это веб-приложение для отслеживания криптовалютного рынка.
Пользователь может получать актуальные данные о монетах, анализировать рынок и в дальнейшем управлять своим watchlist.

---


## 🛠 Используемые технологии

###  Frontend

* React (Vite)
* TypeScript

###  UI

* Material UI (MUI)
* Emotion (styled / css-in-js)

###  State Management

* Redux Toolkit
* RTK Query (работа с серверным состоянием)

###  Работа с API

* CoinGecko API (получение данных о криптовалютах)

### 🧹 Код-стайл и качество

* ESLint
* Prettier
* TypeScript strict typing

---

##  Архитектура проекта

Проект построен по feature-based подходу:

```
src/
├── app/            # инициализация (store, providers)
├── shared/         # общие утилиты, api, ui
├── entities/       # бизнес-сущности (asset)
├── features/       # действия пользователя
├── widgets/        # крупные UI блоки
├── pages/          # страницы приложения
```

---

## 🔌 Работа с API

Используется RTK Query для:

* получения данных
* кеширования
* управления состояниями загрузки и ошибок

Пример endpoint:

* `/coins/markets` — список криптовалют

---

##  Реализовано

* подключение RTK Query
* получение списка криптовалют
* получение данных конкретной монеты
* получение данных для графика цены

###  RTK Query

* API layer через RTK Query
* автоматическое кеширование
* auto-generated hooks
* loading/error handling


###  Routing

* React Router
* динамические страницы монет (`/coin/:id`)
---

##  План развития

###  Ближайшие шаги

* [ ] Улучшить UI таблицы
* [ ] Добавить форматирование цен
* [ ] Цветовые индикаторы роста/падения
* [ ] Переключение периодов графика (7d / 30d / 1y)
* [ ] Skeleton loaders
* [ ] Search

###  Дальше

* [ ] Watchlist
* [ ] WebSocket realtime updates
* [ ] Portfolio tracking
* [ ] Theme switcher
* [ ] Алерты по цене
* [ ] Адаптивная mobile версия

---

## 💡 Архитектурные решения

* Разделение server state (RTK Query) и client state (Redux slices)
* Feature-based структура проекта
* Типизация API для повышения надёжности

---

## ⚙️ Запуск проекта

```bash
npm install
npm run dev
```

---

## 📎 Примечание

Проект находится в стадии активной разработки и будет постепенно расширяться.
