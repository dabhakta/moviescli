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
var UsersComponent = (function () {
    function UsersComponent(dataservice, router) {
        this.dataservice = dataservice;
        this.router = router;
        this.usersTitle = "Users";
        this.users = [];
        this.currentuserbool = true;
    }
    UsersComponent.prototype.ngOnInit = function () {
        this.getUsers();
        this.getCurrentUser();
    };
    UsersComponent.prototype.getUsers = function () {
        this.users = this.dataservice.getUsers();
    };
    UsersComponent.prototype.getCurrentUser = function () {
        this.currentuser = this.dataservice.getCurrentUser();
        this.updateDisplayCurrentUser();
    };
    UsersComponent.prototype.updateDisplayCurrentUser = function () {
        if (this.currentuser !== null) {
            this.currentuserbool = true;
        }
        else {
            this.currentuserbool = false;
        }
    };
    UsersComponent.prototype.logIn = function () {
        this.router.navigate(['/login']);
    };
    UsersComponent.prototype.register = function () {
        this.router.navigate(['/register']);
    };
    UsersComponent.prototype.signOut = function () {
        if (this.currentuser !== null) {
            this.dataservice.signoutUser();
            window.location.reload();
        }
    };
    UsersComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-users',
            templateUrl: 'users.component.html',
            styleUrls: ['users.component.css'],
            providers: [data_service_1.DataService]
        }), 
        __metadata('design:paramtypes', [data_service_1.DataService, router_1.Router])
    ], UsersComponent);
    return UsersComponent;
}());
exports.UsersComponent = UsersComponent;
//# sourceMappingURL=users.component.js.map