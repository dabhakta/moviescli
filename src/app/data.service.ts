import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

declare var firebase: any;

@Injectable()
export class DataService {

  movies = [];
  //movies: Movie[];

  constructor(private http: Http) { }

  getData(){
    this.fbGetData();
    return this.movies;
  }

  getsingleData(id: number){
    this.getData();
    return this.movies[id];
  }

  fbGetData(){
    firebase.database().ref('/').on('child_added', (snapshot) => {
      this.movies.push(snapshot.val())
    })
  }

}