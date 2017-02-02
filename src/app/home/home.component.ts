import { Component, OnInit } from '@angular/core';

import { DataService } from '../data.service';

@Component({
  moduleId: module.id,
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
  providers: [DataService]
})

export class HomeComponent implements OnInit {

  homeTitle = "Directions";

  constructor(
    private dataservice: DataService) { }

  ngOnInit() {
  }

}