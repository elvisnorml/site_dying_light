# Отчет

Проект разработан с использованием современных фронтенд-технологий. Ниже перечислены основные инструменты и зависимости, используемые при разработке сайта.

## Основной стек

- **Vue 3** — основной фреймворк для построения интерфейса, управления состоянием компонентов и реактивности данных.  
  **Пример использования:**
  ```js
  import { createApp } from 'vue';
  import App from './App.vue';
  import router from './router';

  const app = createApp(App);
  app.use(router);
  app.mount('#app');
  ```

- **Vite** — инструмент для сборки и быстрого запуска проекта в режиме разработки, обеспечивает HMR (Hot Module Replacement) и оптимизированную сборку для продакшена.  
  **Пример использования:**
  ```bash
  npm run dev     # запуск локального сервера
  npm run build   # сборка для продакшена
  npm run preview # предпросмотр сборки
  ```

- **Vuetify 3** — библиотека готовых UI-компонентов с поддержкой адаптивной верстки, темизации и Material Design.  
  **Пример использования:**
  ```js
  import { createApp } from 'vue';
  import App from './App.vue';
  import { createVuetify } from 'vuetify';
  import 'vuetify/styles';

  const vuetify = createVuetify();
  createApp(App).use(vuetify).mount('#app');
  ```
  ```vue
  <template>
    <VApp>
      <VMain>
        <VContainer>
          <VBtn color="primary">Нажми меня</v-btn>
        </VContainer>
      </VMain>
    </VApp>
  </template>
  ```

- **Vue Router** — маршрутизация, навигация между страницами и управление состоянием URL в одностраничном приложении.  
  **Пример использования:**
  ```js
  import { createRouter, createWebHashHistory } from 'vue-router'

  const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes: [
      {
        path: '/',
        component: () => import('@/pages/Main/Main.vue'),
        meta: {
          layout: 'MainPageLayout',
          title: 'Главная — Dying Light',
          description: 'Добро пожаловать на официальный сайт Dying Light — узнайте больше о мире игры, героях и истории.'
        }
      },
    ],
  })
  ```

---

## Инструменты для тестирования

- **Vitest** — современный тест-раннер для Vue и JavaScript, выполняет unit-тесты и поддерживает тестирование в среде jsdom.  
  **Пример использования:**
  ```bash
  npm run test:unit
  ```
  ```js
  // vitest.config.js
  import { defineConfig } from 'vitest/config';
  import vue from '@vitejs/plugin-vue';

  export default defineConfig({
    plugins: [vue()],
    test: {
      environment: 'jsdom',
    },
  });
  ```

- **@testing-library/vue** — предоставляет утилиты для тестирования UI, помогает взаимодействовать с компонентами как пользователь.  
  **Пример использования:**
  ```js
  import { render, fireEvent } from '@testing-library/vue';
  import Header from '@/components/Header.vue';
  import { describe, it, expect } from 'vitest';

  describe('Header', () => {
    it('отображает текст заголовка', async () => {
      const { getByText } = render(Header);
      expect(getByText('Главная')).toBeTruthy();
    });
  });
  ```

- **@vue/test-utils** — официальная библиотека для работы с Vue-компонентами в тестах.  
  **Пример использования:**
  ```js
  import { mount } from '@vue/test-utils'
  import Main from '@/pages/Main/Main.vue'
  import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'

  describe('Main.vue', () => {
    let container
  
    beforeEach(() => {
      container = document.createElement('div')
      container.classList.add('scroll-wrapper')
      document.body.appendChild(container)
    })
  
    afterEach(() => {
      document.body.innerHTML = ''
    })
  
    it('монтируется без ошибок', () => {
      const wrapper = mount(Main, {
        global: {
          stubs: ['VBtn']
        },
        attachTo: container
      })
      expect(wrapper.exists()).toBe(true)
    })
  ```

- **jsdom** — эмулятор DOM для тестов в Node.js без необходимости браузера.  
  **Пример использования:**
  ```js
  import { JSDOM } from 'jsdom';
  const dom = new JSDOM('<!DOCTYPE html><p>Привет!</p>');
  console.log(dom.window.document.querySelector('p').textContent); // "Привет!"
  ```

---

## Автоматизация и сборка

- **vite-plugin-vuetify** — интеграция Vuetify с Vite, упрощает подключение компонентов и стилей.  
  **Пример использования:**
  ```js
  import { defineConfig } from 'vite';
  import vue from '@vitejs/plugin-vue';
  import vuetify from 'vite-plugin-vuetify';

  export default defineConfig({
    plugins: [vue(), vuetify()],
  });
  ```

- **@vitejs/plugin-vue** — поддержка Vue-файлов (`.vue`) в сборке Vite.  
  **Пример использования:**
  ```js
  import vue from '@vitejs/plugin-vue';

  export default {
    plugins: [vue()],
  };
  ```

- **unplugin-auto-import** — автоматический импорт часто используемых функций и хуков Vue.  
  **Пример использования:**
  ```js
  vuetify({
    autoImport: true
  }),
  ```

- **unplugin-vue-components** — автоматический импорт компонентов.  
  **Пример использования:**
  ```js
  import Components from 'unplugin-vue-components/vite';
  import { VuetifyResolver } from 'unplugin-vue-components/resolvers';

  export default {
    plugins: [
      Components({
        resolvers: [VuetifyResolver()],
      }),
    ],
  };
  ```

---

## Дополнительно

- **@mdi/js** — набор иконок Material Design для интерфейса.  
  **Пример использования:**
  ```vue
  <script setup>
  import { mdiHome } from '@mdi/js';
  </script>

  <template>
    <VIcon :icon="mdiHome" />
  </template>
  ```

- **gh-pages** — деплой проекта на GitHub Pages одним скриптом.  
  **Пример использования:**
  ```bash
  npm run deploy
  ```
  ```json
  {
    "scripts": {
      "deploy": "vite build --mode prod && gh-pages -d dist",
    }
  }
  ```

- **prettier** — инструмент для автоматического форматирования кода, поддерживает единый стиль в проекте.  
  **Пример использования:**
  ```bash
  npx prettier --write .
  ```
  ```json
  {
    "useTabs": false,
    "printWidth": 120,
    "semi": false,
    "singleQuote": true,
    "trailingComma": "none",
    "bracketSpacing": true,
    "arrowParens": "avoid"
  }
  ```


## 👨‍💻 Команда

**Тимлид: Дмитрий _elvisnorml_**  
GitHub: https://github.com/elvisnorml  
**Роли и задачи:**  
- Настройка окружения для unit-тестирования (Vitest, @vue/test-utils) и добавление базового набора тестов/примеров (включая пример теста на главной странице).
- Разработка и внедрение общей стилизации и визуального оформления сайта.
- Настройка адаптивности / responsive-верстки под мобильные устройства.
- Финальная проверка, отладка, исправление багов в верстке и оптимизация загрузки изображений перед релизом.
- Координация работы команды: постановка задач, проведение ревью и объединение веток (мерджи), контроль качества итогового результата.

**Разработчик: Евгений _XIIIrus_**  
GitHub: https://github.com/XIIIrus  
**Роли и задачи:**  
- Разработка и интеграция компонентов на главной странице **/**.
- Разработка и интеграция компонентов на странице **/story**.
- Разработка и интеграция компонентов на странице **/weapons**.
- Разработка и интеграция компонентов на странице **/map**.
- Реализация и добавление unit-тестов для страниц **/story**, **/gameplay**, **/weapons**.
- Настройка верстки, стилизация компонентов и проверка их адаптивности.
- Работа с динамическим контентом и улучшение пользовательского опыта на этих страницах.

**Разработчик: Александр _aadf2g4a75-eng_**  
GitHub: https://github.com/aadf2g4a75-eng  
**Роли и задачи:**  
- Разработка и интеграция компонентов на странице **/gameplay**.
- Разработка и интеграция компонентов на странице **/news**.
- Разработка и интеграция компонентов на странице **/gallery**.
- Реализация и добавление unit-тестов для страниц **/map**, **/news**, **/gallery**.
- Разработка компонента **Header** с навигационным меню.
- Настройка верстки, стилизация компонентов и проверка их адаптивности.
- Работа с динамическим контентом и улучшение пользовательского опыта на этих страницах.

