import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { DataService } from '../data.service';

@Component({
  moduleId: module.id,
  selector: 'app-emptydetail',
  templateUrl: 'emptydetail.component.html',
  styleUrls: ['emptydetail.component.css']
})
export class EmptydetailComponent implements OnInit {

  title = "Add Movie";
  idadd: number;
  mtitle: string;
  year: number;

  constructor(
    private dataService: DataService,
    private router: Router) { }

  ngOnInit() {
  }

  add(mtitle, year){
    this.idadd = this.getLastId() + 1;
    this.dataService.fbAddData(this.idadd, mtitle, year);
    this.router.navigate(['/movies']);
  }

  getLastId(){
    return this.dataService.getData().length;
  }

  goBack(){
    this.router.navigate(['/movies']);
  }

}
