"use strict";
var router_1 = require("@angular/router");
var directory_component_1 = require("./directory/directory.component");
var home_component_1 = require("./home/home.component");
var detail_component_1 = require("./detail/detail.component");
var emptydetail_component_1 = require("./emptydetail/emptydetail.component");
var APP_ROUTES = [
    { path: 'movies', component: directory_component_1.DirectoryComponent },
    { path: 'detail', component: emptydetail_component_1.EmptydetailComponent },
    { path: 'detail/:id', component: detail_component_1.DetailComponent },
    { path: '', component: home_component_1.HomeComponent }
];
exports.APP_ROUTES_PROVIDER = [
    router_1.provideRouter(APP_ROUTES)
];
//# sourceMappingURL=app.route.js.map