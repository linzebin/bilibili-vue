import 'normalize.css'
import './polyfills'
import './mixin'
import '../static/flexible.js'
import * as config from '../config'

import Tools from './common/Tools'
import * as FastClick from 'fastclick'

import * as Vue from 'vue'
import App from './App.vue'

import routes from './router'
import store from './store'

import VueRouter from 'vue-router'
// Create the router
Tools.Log('process.env = ' + process.env.NODE_ENV)
Vue.use(VueRouter)
const router = new VueRouter({
    mode: 'history',
    base: process.env.NODE_ENV === JSON.parse(config.dev.env.NODE_ENV) ? config.dev.assetsPublicPath : config.build.assetsPublicPath,
    routes,
    scrollBehavior(to, from, savedPosition) {
        return { x: 0, y: 0 }
    }
})
router.beforeEach((to, from, next) => {
    Tools.Log(`route ${from.fullPath}-->${to.fullPath}`)
    document.title = to.name
    next()
})

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')


// use fastclick to solve 300ms delay in webapp
if ('addEventListener' in document) {
    Tools.Log('document loaded, attatch fastclick')
    document.addEventListener('DOMContentLoaded', function () {
        FastClick.attach(document.body);
    }, false);
}
