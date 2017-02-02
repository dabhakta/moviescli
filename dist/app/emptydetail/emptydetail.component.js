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
var data_service_1 = require('../data.service');
var EmptydetailComponent = (function () {
    function EmptydetailComponent(dataService, router) {
        this.dataService = dataService;
        this.router = router;
        this.title = "Add Movie";
        this.movies = [];
    }
    EmptydetailComponent.prototype.ngOnInit = function () {
        this.movies = this.dataService.getMovies();
    };
    EmptydetailComponent.prototype.add = function (mtitle, year, director) {
        if (mtitle !== undefined && year !== undefined && director !== undefined) {
            this.checkformissingspot();
            this.dataService.fbAddMovies(this.idadd, mtitle, year, director);
            this.idadd = -1;
            this.router.navigate(['/movies']);
        }
        else {
            alert("Please fill in everything.");
        }
    };
    EmptydetailComponent.prototype.getLastId = function () {
        return this.dataService.getMovies().length;
    };
    EmptydetailComponent.prototype.goBack = function () {
        this.router.navigate(['/movies']);
    };
    EmptydetailComponent.prototype.checkformissingspot = function () {
        var idnew = 1;
        for (var i in this.movies) {
            if (this.movies[i].id === idnew) {
                idnew++;
                this.idadd = this.movies.length + 1;
            }
            else {
                this.idadd = idnew;
            }
        }
    };
    EmptydetailComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-emptydetail',
            templateUrl: 'emptydetail.component.html',
            styleUrls: ['emptydetail.component.css']
        }), 
        __metadata('design:paramtypes', [data_service_1.DataService, router_1.Router])
    ], EmptydetailComponent);
    return EmptydetailComponent;
}());
exports.EmptydetailComponent = EmptydetailComponent;
//# sourceMappingURL=emptydetail.component.js.map