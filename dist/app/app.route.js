"use strict";
var router_1 = require("@angular/router");
var directory_component_1 = require("./directory/directory.component");
var home_component_1 = require("./home/home.component");
var detail_component_1 = require("./detail/detail.component");
var emptydetail_component_1 = require("./emptydetail/emptydetail.component");
var users_component_1 = require("./users/users.component");
var login_component_1 = require("./login/login.component");
var register_component_1 = require("./register/register.component");
var APP_ROUTES = [
    { path: 'movies', component: directory_component_1.DirectoryComponent },
    { path: 'detail', component: emptydetail_component_1.EmptydetailComponent },
    { path: 'detail/:id', component: detail_component_1.DetailComponent },
    { path: 'home', component: home_component_1.HomeComponent },
    { path: '', component: home_component_1.HomeComponent },
    { path: 'users', component: users_component_1.UsersComponent },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'register', component: register_component_1.RegisterComponent }
];
exports.APP_ROUTES_PROVIDER = [
    router_1.provideRouter(APP_ROUTES)
];
//# sourceMappingURL=app.route.js.map