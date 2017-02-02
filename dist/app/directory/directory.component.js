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
var router_1 = require('@angular/router');
var filter_pipe_1 = require('../filter.pipe');
var data_service_1 = require('../data.service');
var DirectoryComponent = (function () {
    function DirectoryComponent(router, dataService) {
        this.router = router;
        this.dataService = dataService;
        this.title = "Movie Listing";
        this.movies = [];
    }
    DirectoryComponent.prototype.ngOnInit = function () {
        this.getMovies();
    };
    DirectoryComponent.prototype.getMovies = function () {
        this.movies = this.dataService.getMovies();
    };
    DirectoryComponent.prototype.onSelect = function (movie) {
        this.selectedMovie = movie;
    };
    DirectoryComponent.prototype.gotoDetail = function (movie) {
        this.router.navigate(['/detail', this.selectedMovie.id]);
    };
    DirectoryComponent.prototype.gotoDetailEmpty = function () {
        this.router.navigate(['/detail']);
    };
    DirectoryComponent.prototype.delete = function (movie) {
        this.dataService.delete(movie);
    };
    DirectoryComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-directory',
            templateUrl: 'directory.component.html',
            styleUrls: ['directory.component.css'],
            pipes: [filter_pipe_1.FilterPipe],
            providers: [data_service_1.DataService]
        }), 
        __metadata('design:paramtypes', [router_1.Router, data_service_1.DataService])
    ], DirectoryComponent);
    return DirectoryComponent;
}());
exports.DirectoryComponent = DirectoryComponent;
//# sourceMappingURL=directory.component.js.map