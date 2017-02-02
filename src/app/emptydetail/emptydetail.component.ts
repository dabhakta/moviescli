import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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
  movies = [];
  constructor(
    private dataService: DataService,
    private router: Router) { }

  ngOnInit() {
    this.movies = this.dataService.getMovies();
  }

  add(mtitle, year, director) {
    if (mtitle !== undefined && year !== undefined && director !== undefined) {
      this.checkformissingspot();
      this.dataService.fbAddMovies(this.idadd, mtitle, year, director);
      this.idadd = -1;
      this.router.navigate(['/movies']);
    } else {
      alert("Please fill in everything.");
    }
  }

  getLastId() {
    return this.dataService.getMovies().length;
  }

  goBack() {
    this.router.navigate(['/movies']);
  }

  checkformissingspot() {
    var idnew: number = 1;

    for (let i in this.movies) {
      if (this.movies[i].id === idnew) {
        idnew++;
        this.idadd = this.movies.length + 1;
      } else {
        this.idadd = idnew;
      }
    }
  }

}