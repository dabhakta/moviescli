import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { DataService } from '../data.service';


@Component({
  moduleId: module.id,
  selector: 'app-detail',
  templateUrl: 'detail.component.html',
  styleUrls: ['detail.component.css'],
  providers: [DataService]
})

export class DetailComponent implements OnInit {

  title = "Movie Details";
  id: number;
  selectedmovie: any;

  constructor(
    private dataService: DataService, 
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() { 
    this.id = this.route.snapshot.params['id'];
    this.selectedmovie = this.dataService.getsingleData(this.id-1);
  }

  update(id, mtitle, year){
    console.log("Clicked the save button.");

    this.dataService.fbUpdateData(id, mtitle, year);

    this.router.navigate(['/movies']);
  }

  goBack(){
    this.router.navigate(['/movies']);
  }
}
