"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var core_1 = require('@angular/core');
var _1 = require('./app/');
var http_1 = require('@angular/http');
var app_route_1 = require('./app/app.route');
var logging_service_1 = require('./app/logging.service');
if (_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.bootstrap(_1.AppComponent, [app_route_1.APP_ROUTES_PROVIDER, logging_service_1.LoggingService, http_1.HTTP_PROVIDERS]);
//# sourceMappingURL=main.js.map