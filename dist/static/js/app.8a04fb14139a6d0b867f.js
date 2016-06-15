webpackJsonp([4, 3], [function(t, e, o) { "use strict";

    function n(t) {
        return t && t.__esModule ? t : { "default": t } }
    var u = o(22),
        r = n(u),
        i = o(20),
        a = n(i),
        s = o(19),
        c = n(s),
        f = o(1),
        p = n(f);
    r["default"].use(a["default"]), r["default"].use(c["default"]), r["default"].http.options.emulateJSON = !0, r["default"].config.debug = !0;
    var l = new a["default"]({ hashbang: !0, history: !1, saveScrollPosition: !0, transitionONLoad: !0, linkActiveClass: "nav-active" });
    o(2)(l), r["default"].http.options.root = "./static/mock", l.start(p["default"], "app") }, function(t, e, o) {
    var n, u;
    o(7), n = o(3), u = o(10), t.exports = n || {}, t.exports.__esModule && (t.exports = t.exports["default"]), u && (("function" == typeof t.exports ? t.exports.options || (t.exports.options = {}) : t.exports).template = u) }, function(t, e, o) { "use strict";
    t.exports = function(t) { t.map({ "/": { name: "index", component: o(1) }, "/home": { name: "home", component: function(t) {
                    return o.e(0, function(e) {
                        var o = [e(17)];
                        t.apply(null, o) }.bind(this)) } }, "/error": { name: "error", component: function(t) {
                    return o.e(2, function(e) {
                        var o = [e(16)];
                        t.apply(null, o) }.bind(this)) } }, "/order": { name: "order", component: function(t) {
                    return o.e(1, function() {
                        [o(18)] }) } } }), t.redirect({ "/": "/home" }), t.beforeEach(function(t) { t.next() }), t.afterEach(function(t) { console.log("成功浏览到:" + t.to.path) }) } }, function(t, e, o) { "use strict";

    function n(t) {
        return t && t.__esModule ? t : { "default": t } }
    Object.defineProperty(e, "__esModule", { value: !0 });
    var u = o(15),
        r = n(u);
    e["default"] = { components: { Hello: r["default"] }, data: function() {
            return { loading: !0, effect: "fade" } } } }, function(t, e) { "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }), e["default"] = { data: function() {
            return { msg: "Hello World!" } } } }, , , function(t, e) {}, , function(t, e) {}, function(t, e) { t.exports = "<div id=app> <router-view class=ui-view keep-alive transition-mode=out-in :transtion=effect> </router-view> </div>" }, , , , function(t, e) { t.exports = '<div class=ui-btn-wrap _v-ccab2bf8=""> <button class=ui-btn-s _v-ccab2bf8=""> 1 确定 </button> <button class="ui-btn-s active" _v-ccab2bf8=""> 确定 </button> </div>' }, function(t, e, o) {
    var n, u;
    o(9), n = o(4), u = o(14), t.exports = n || {}, t.exports.__esModule && (t.exports = t.exports["default"]), u && (("function" == typeof t.exports ? t.exports.options || (t.exports.options = {}) : t.exports).template = u) }]);
//# sourceMappingURL=app.8a04fb14139a6d0b867f.js.map
