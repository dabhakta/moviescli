import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

import { FilterPipe } from '../filter.pipe';
import { DataService } from '../data.service';
import { DetailComponent } from '../detail/detail.component';

@Component({
  moduleId: module.id,
  selector: 'app-directory',
  templateUrl: 'directory.component.html',
  styleUrls: ['directory.component.css'],
  pipes: [FilterPipe],
  providers: [DataService],
  directives: [DetailComponent]
})

export class DirectoryComponent implements OnInit {
  
  title = "Movie Listing";
  movies = [];
  selectedMovie: any;

  constructor(
    private router: Router,
    private dataService: DataService,
    private location: Location) { }

  ngOnInit() {
    this.getMovies();
  }

  onSelect(movie: any){
    this.selectedMovie = movie;
  }

  gotoDetail(movie: any){
    this.router.navigate(['/detail', this.selectedMovie.id]);
  }

  gotoDetailEmpty(){
    this.router.navigate(['/detail']);
  }

  getMovies(){
    this.movies = this.dataService.getData();
  }

  delete(movie: any){
    this.dataService.delete(movie);
    window.location.reload();
  }

}
