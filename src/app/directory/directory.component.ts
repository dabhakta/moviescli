import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FilterPipe } from '../filter.pipe';
import { DataService } from '../data.service';

@Component({
  moduleId: module.id,
  selector: 'app-directory',
  templateUrl: 'directory.component.html',
  styleUrls: ['directory.component.css'],
  pipes: [FilterPipe],
  providers: [DataService]
})

export class DirectoryComponent implements OnInit {

  title = "Movie Listing";
  movies = [];
  selectedMovie: any;

  constructor(
    private router: Router,
    private dataService: DataService) { }

  ngOnInit() {
    this.getMovies();
  }

  getMovies() {
    this.movies = this.dataService.getMovies();
  }

  onSelect(movie: any) {
    this.selectedMovie = movie;
  }

  gotoDetail(movie: any) {
    this.router.navigate(['/detail', this.selectedMovie.id]);
  }

  gotoDetailEmpty() {
    this.router.navigate(['/detail']);
  }

  delete(movie: any) {
    this.dataService.delete(movie);
  }
}