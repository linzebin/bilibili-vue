# bilibili-vue

> 用Vue.js开发B站app

## Usage

```bash

# npm install -g yarn
# yarn config set registry https://registry.npm.taobao.org

# install dependencies
npm install

# server with reload at localhost:8090
npm run dev

# build for production with minification
npm run build

# build for running express as assets server
npm run build:server

# run express as assets server
npm run start

```

## Project Structure

```
- build/            # webpack config file
- config/
    - index.js      # main project config
- src/
    - main.ts       # main entry file
    - App.vue       # main app component
    - App.ts
    - components/   # ui components
    - assets/       # module asserts (processed by webpack)
- server/
    - index.ts      # server entry file
- editorconfig      # editor config
- static/           # pure static asserts (directly copied)
- index.html        # index.html template
- package.json      # build script and dependencies
- tsconfig.json     # typescript config
- tslint            # tslint config
- typings.json      # typescript declaration files
```

## Technology Stack
- main stakc
    - [Vue]() - Simple yet powerful library for building modern web interfaces.
    - [TypeScript]() - TypeScript is a superset of JavaScript that compiles to clean JavaScript output.
- other stack
    - [Yarn]() - Fast, reliable, and secure dependency management.
    - [Vuex]() - Centralized State Management for Vue.js.
    - [VueRouter]() -  It deeply integrates with Vue.js core to make building Single Page Applications with Vue.js a breeze.
    - [Webpack]() - A bundler for javascript and friends. Packs many modules into a few bundled assets.
- dependencies
    - [vue-class-component](https://github.com/vuejs/vue-class-component) - Office TypeScript decorator for class-style Vue components.
- plugins
    - [vetur](https://github.com/octref/vetur) - A VSCode plugin

## TODO

## Code Style
ts - tslint
css - BEM
