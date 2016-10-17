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
        this.fbGetData();
    }
    DataService.prototype.getData = function () {
        return this.movies;
    };
    DataService.prototype.getsingleData = function (id) {
        this.getData();
        return this.movies[id];
    };
    DataService.prototype.fbGetData = function () {
        var _this = this;
        firebase.database().ref().on('child_added', function (snapshot) {
            _this.movies.push(snapshot.val());
        });
        firebase.database().ref().on('child_changed', function (snapshot) {
            _this.movies.splice(snapshot.key, 1, snapshot.val());
        });
        firebase.database().ref().on('child_removed', function (snapshot) {
            _this.movies.splice(snapshot.key, 1);
        });
    };
    DataService.prototype.fbUpdateData = function (id, mtitle, year) {
        id--;
        firebase.database().ref('/' + id).update({ mtitle: mtitle, year: year });
    };
    DataService.prototype.fbAddData = function (id, mtitle, year) {
        this.idnew = id;
        id--;
        firebase.database().ref('/' + id).update({ id: this.idnew, mtitle: mtitle, year: year });
    };
    DataService.prototype.delete = function (movie) {
        this.movie = this.movies[this.movies.length - 1];
        if (this.movie.id !== movie.id) {
            this.fbUpdateData(movie.id, this.movie.mtitle, this.movie.year);
        }
        this.fbDelete(this.movie.id);
    };
    DataService.prototype.fbDelete = function (id) {
        id--;
        firebase.database().ref('/' + id).remove();
    };
    DataService.prototype.testgetobj = function () {
        return firebase.database().ref();
    };
    DataService.prototype.testgetobjkey = function (id) {
        return firebase.database().ref().child(id);
    };
    DataService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], DataService);
    return DataService;
}());
exports.DataService = DataService;
//# sourceMappingURL=data.service.js.map