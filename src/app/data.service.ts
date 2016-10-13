import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

declare var firebase: any;

@Injectable()
export class DataService {

  movies = [];
  idnew: number;
  movie: any;

  constructor(private http: Http) { 
    this.fbGetData();
  }

  getData(){
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

  fbGetLastData(){
    return 
  }

  fbUpdateData(id: number, mtitle: string, year: number){
    id--;
    firebase.database().ref('/' + id).update({mtitle: mtitle, year: year})
  }

  fbAddData(id: number, mtitle: string, year: number){
    this.idnew = id;
    id--;

    firebase.database().ref('/' + id).update({id: this.idnew, mtitle: mtitle, year: year})
  }

  delete(movie){
    this.movie = this.movies[this.movies.length - 1];

    if(this.movie.id !== movie.id){
      this.fbUpdateData(movie.id, this.movie.mtitle, this.movie.year);
    }
    this.fbDelete(this.movie.id);
  }

  fbDelete(id: number){
    id--;
    firebase.database().ref('/' + id).remove();
  }

}