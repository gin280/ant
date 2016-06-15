import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App'

Vue.use(VueRouter)
Vue.use(VueResource)

Vue.http.options.emulateJSON = true
Vue.config.debug = true

const router = new VueRouter({
	hashbang: true,
	history: false,
	saveScrollPosition: true,
	transitionONLoad: true,
	linkActiveClass: 'nav-active'
})

require('./routers')(router)

Vue.http.options.root = '/static/mock'

router.start(App, 'app')
