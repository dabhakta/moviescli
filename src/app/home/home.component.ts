import { Component, OnInit } from '@angular/core';
import { LoggingService } from '../logging.service';

@Component({
  moduleId: module.id,
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
  providers: []
})
export class HomeComponent implements OnInit {

  homeTitle = "Welcome to the home page.";

  constructor(private logger: LoggingService) { }

  logIt(){
    this.logger.loghome();
  }

  ngOnInit() {
  }

}
