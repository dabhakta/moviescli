import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent, environment } from './app/';
import { HTTP_PROVIDERS } from '@angular/http';

import { APP_ROUTES_PROVIDER } from './app/app.route';
import { LoggingService } from './app/logging.service';
import { DataService } from './app/data.service';

/*
if (environment.production) {
  enableProdMode();
}
*/

enableProdMode();

bootstrap(AppComponent, [APP_ROUTES_PROVIDER, LoggingService, HTTP_PROVIDERS, DataService]);