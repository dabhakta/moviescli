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
var DetailComponent = (function () {
    function DetailComponent(dataService, route, router) {
        this.dataService = dataService;
        this.route = route;
        this.router = router;
        this.title = "Movie Details";
    }
    DetailComponent.prototype.ngOnInit = function () {
        this.id = this.route.snapshot.params['id'];
        this.selectedmovie = this.dataService.getsingleData(this.id - 1);
    };
    DetailComponent.prototype.save = function () {
        console.log("Clicked the save button.");
        this.router.navigate(['/movies']);
    };
    DetailComponent.prototype.goBack = function () {
        this.router.navigate(['/movies']);
    };
    DetailComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-detail',
            templateUrl: 'detail.component.html',
            styleUrls: ['detail.component.css'],
            providers: [data_service_1.DataService]
        }), 
        __metadata('design:paramtypes', [data_service_1.DataService, router_1.ActivatedRoute, router_1.Router])
    ], DetailComponent);
    return DetailComponent;
}());
exports.DetailComponent = DetailComponent;
//# sourceMappingURL=detail.component.js.map