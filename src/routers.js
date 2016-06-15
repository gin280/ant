module.exports = function (router) {
	router.map({
		'/': {
			name: 'index',
			component: require('./App.vue')
		},
		'/home': {
			name: 'home',
			component: function (reslove) {
				return require(['./views/home.vue'], reslove)
			}
		},
		'/error': {
			name: 'error',
			component: function (reslove) {
				return require(['./views/error.vue'], reslove)
			}
		},
		'/ordersuccess': {
			name: 'ordersuccess',
			component: function (reslove) {
				return require(['./views/orderSuccess.vue'], reslove)
			}
		}
	})

	router.redirect({
		'/': '/home'
	})

	router.beforeEach(function (transition) {
		transition.next()
	})

	router.afterEach(function (transition) {
		console.log('成功浏览到:' + transition.to.path)
	})
}