import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { HomeComponent } from './home/index';
import { DataService } from './data.service';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  providers: [DataService],
  directives: [HomeComponent, ROUTER_DIRECTIVES]
})

export class AppComponent {
  title = 'Dipen Bhakta';
}
