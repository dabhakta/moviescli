import { Component, OnInit } from '@angular/core';
import { LoggingService } from '../logging.service';

import { DataService } from '../data.service';

@Component({
  moduleId: module.id,
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
  providers: [DataService]
})
export class HomeComponent implements OnInit {

  homeTitle = "Welcome to the home page.";
  premovie;
  ulList;

  constructor(
    private logger: LoggingService,
    private dataservice: DataService) { }

  logIt(){
    this.logger.loghome();
  }

  ngOnInit() { }

}
