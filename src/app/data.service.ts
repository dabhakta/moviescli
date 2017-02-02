import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

declare var firebase: any;

@Injectable()
export class DataService {

  movies = [];
  users = [];
  stats = [];
  currentuser: string;
  movienewid: number;
  movie: any;

  constructor(private http: Http) {
    this.fbGetMovies();
    this.fbGetUsers();
    this.fbGetStatistics();
  }

  getMovies() {
    return this.movies;
  }

  getUsers() {
    return this.users;
  }

  getCurrentUser() {
    return firebase.auth().currentUser;
  }

  getSingleMovieId(id: number) {
    this.fbGetMovies();
    return this.movies[id];
  }

  getTotalMovie() {
    this.fbGetStatistics();
    return this.stats[0];
  }

  setCurrentUser() {
    this.currentuser = firebase.auth().currentUser;
  }

  registerUser(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(error => {
      alert(error.message);
    });
    this.setCurrentUser();
    this.fbAddUser(email);
  }

  loginUser(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password).catch(error => {
      alert(error.message);
    });
    this.setCurrentUser();
  } 

  signoutUser() {
    firebase.auth().signOut().catch(error => {
      alert(error.message);
    });
    this.currentuser = null;
  }

  fbGetMovies() {
    firebase.database().ref('/movies').on('child_added', (snapshot) => {
      this.movies.push(snapshot.val());
    });
    firebase.database().ref('/movies').on('child_changed', (snapshot) => {
      this.movies.splice(snapshot.key, 1, snapshot.val());
    });
    firebase.database().ref('/movies').on('child_removed', (snapshot) => {
      this.movies.splice(snapshot.key, 1);
    });
  }

  fbGetUsers() {
    firebase.database().ref('/users').on('child_added', (snapshot) => {
      this.users.push(snapshot.val());
    });
    firebase.database().ref('/users').on('child_changed', (snapshot) => {
      this.users.splice(snapshot.key, 1, snapshot.val());
    });
    firebase.database().ref('/users').on('child_removed', (snapshot) => {
      this.users.splice(snapshot.key, 1);
    });
  }

  fbGetStatistics() {
    firebase.database().ref('/statistics').on('child_added', (snapshot) => {
      this.stats.push(snapshot.val());
    });
    firebase.database().ref('/statistics/').on('child_changed', (snapshot) => {
      if (snapshot.key === "totalUsers") {
        this.stats.splice(1, 1, snapshot.val());
      }
      if (snapshot.key === "totalMovies") {
        this.stats.splice(0, 1, snapshot.val());
      }
    });
  }

  fbUpdateMovies(id: number, mtitle: string, year: number, director: string) {
    id--;
    var user: any = this.getCurrentUser();
    if (user === null) {
      alert("Please log in to edit database.");
    } else {
      firebase.database().ref('/movies/' + id).update({ mtitle: mtitle, year: year, director: director });
    }
  }

  fbAddMovies(id: number, mtitle: string, year: number, director: string) {
    this.movienewid = id;
    id--;
    var user: any = this.getCurrentUser();
    if (user === null) {
      alert("Please log in to edit database.");
    } else {
      var email: any = user.email;
      firebase.database().ref('/movies/' + id).update({ id: this.movienewid, mtitle: mtitle, year: year, director: director, user: email })
      firebase.database().ref('/statistics/').update({ totalMovies: this.movienewid });
    }
  }

  fbAddUser(email: string) {
    var userid: number = this.stats[1];
    firebase.database().ref('/users/' + userid).update({ email: email });
    userid++;
    firebase.database().ref('/statistics/').update({ totalUsers: userid });
  }

  delete(movie) {
    var user: any = this.getCurrentUser();
    if (user === null) {
      alert("Please log in to edit database.");
    } else {
      this.movie = this.movies[this.movies.length - 1];
      if (this.movie.id !== movie.id) {
        this.fbUpdateMovies(movie.id, this.movie.mtitle, this.movie.year, this.movie.director);
        firebase.database().ref('/statistics/').update({ totalMovies: this.movie.id - 1 })
      }
      this.fbDeleteMovie(this.movie.id);
    }
  }

  fbDeleteMovie(id: number) {
    id--;
    firebase.database().ref('/movies/' + id).remove();
    firebase.database().ref('/statistics/').update({ totalMovies: id })
  }
}