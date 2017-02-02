"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var DataService = (function () {
    function DataService(http) {
        this.http = http;
        this.movies = [];
        this.users = [];
        this.stats = [];
        this.fbGetMovies();
        this.fbGetUsers();
        this.fbGetStatistics();
    }
    DataService.prototype.getMovies = function () {
        return this.movies;
    };
    DataService.prototype.getUsers = function () {
        return this.users;
    };
    DataService.prototype.getCurrentUser = function () {
        return firebase.auth().currentUser;
    };
    DataService.prototype.getSingleMovieId = function (id) {
        this.fbGetMovies();
        return this.movies[id];
    };
    DataService.prototype.getTotalMovie = function () {
        this.fbGetStatistics();
        return this.stats[0];
    };
    DataService.prototype.setCurrentUser = function () {
        this.currentuser = firebase.auth().currentUser;
    };
    DataService.prototype.registerUser = function (email, password) {
        firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {
            alert(error.message);
        });
        this.setCurrentUser();
        this.fbAddUser(email);
    };
    DataService.prototype.loginUser = function (email, password) {
        firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
            alert(error.message);
        });
        this.setCurrentUser();
    };
    DataService.prototype.signoutUser = function () {
        firebase.auth().signOut().catch(function (error) {
            alert(error.message);
        });
        this.currentuser = null;
    };
    DataService.prototype.fbGetMovies = function () {
        var _this = this;
        firebase.database().ref('/movies').on('child_added', function (snapshot) {
            _this.movies.push(snapshot.val());
        });
        firebase.database().ref('/movies').on('child_changed', function (snapshot) {
            _this.movies.splice(snapshot.key, 1, snapshot.val());
        });
        firebase.database().ref('/movies').on('child_removed', function (snapshot) {
            _this.movies.splice(snapshot.key, 1);
        });
    };
    DataService.prototype.fbGetUsers = function () {
        var _this = this;
        firebase.database().ref('/users').on('child_added', function (snapshot) {
            _this.users.push(snapshot.val());
        });
        firebase.database().ref('/users').on('child_changed', function (snapshot) {
            _this.users.splice(snapshot.key, 1, snapshot.val());
        });
        firebase.database().ref('/users').on('child_removed', function (snapshot) {
            _this.users.splice(snapshot.key, 1);
        });
    };
    DataService.prototype.fbGetStatistics = function () {
        var _this = this;
        firebase.database().ref('/statistics').on('child_added', function (snapshot) {
            _this.stats.push(snapshot.val());
        });
        firebase.database().ref('/statistics/').on('child_changed', function (snapshot) {
            if (snapshot.key === "totalUsers") {
                _this.stats.splice(1, 1, snapshot.val());
            }
            if (snapshot.key === "totalMovies") {
                _this.stats.splice(0, 1, snapshot.val());
            }
        });
    };
    DataService.prototype.fbUpdateMovies = function (id, mtitle, year, director) {
        id--;
        var user = this.getCurrentUser();
        if (user === null) {
            alert("Please log in to edit database.");
        }
        else {
            firebase.database().ref('/movies/' + id).update({ mtitle: mtitle, year: year, director: director });
        }
    };
    DataService.prototype.fbAddMovies = function (id, mtitle, year, director) {
        this.movienewid = id;
        id--;
        var user = this.getCurrentUser();
        if (user === null) {
            alert("Please log in to edit database.");
        }
        else {
            var email = user.email;
            firebase.database().ref('/movies/' + id).update({ id: this.movienewid, mtitle: mtitle, year: year, director: director, user: email });
            firebase.database().ref('/statistics/').update({ totalMovies: this.movienewid });
        }
    };
    DataService.prototype.fbAddUser = function (email) {
        var userid = this.stats[1];
        firebase.database().ref('/users/' + userid).update({ email: email });
        userid++;
        firebase.database().ref('/statistics/').update({ totalUsers: userid });
    };
    DataService.prototype.delete = function (movie) {
        var user = this.getCurrentUser();
        if (user === null) {
            alert("Please log in to edit database.");
        }
        else {
            this.movie = this.movies[this.movies.length - 1];
            if (this.movie.id !== movie.id) {
                this.fbUpdateMovies(movie.id, this.movie.mtitle, this.movie.year, this.movie.director);
                firebase.database().ref('/statistics/').update({ totalMovies: this.movie.id - 1 });
            }
            this.fbDeleteMovie(this.movie.id);
        }
    };
    DataService.prototype.fbDeleteMovie = function (id) {
        id--;
        firebase.database().ref('/movies/' + id).remove();
        firebase.database().ref('/statistics/').update({ totalMovies: id });
    };
    DataService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], DataService);
    return DataService;
}());
exports.DataService = DataService;
//# sourceMappingURL=data.service.js.map