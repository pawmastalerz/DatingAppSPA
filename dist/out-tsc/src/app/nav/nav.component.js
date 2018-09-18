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
Object.defineProperty(exports, "__esModule", { value: true });
var alertify_service_1 = require("./../_services/alertify.service");
var auth_service_1 = require("./../_services/auth.service");
var core_1 = require("@angular/core");
var NavComponent = /** @class */ (function () {
    function NavComponent(authService, alertify) {
        this.authService = authService;
        this.alertify = alertify;
        this.model = {};
    }
    NavComponent.prototype.ngOnInit = function () { };
    NavComponent.prototype.login = function () {
        var _this = this;
        this.authService.login(this.model).subscribe(function (next) {
            _this.alertify.success('Logged in successfully');
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    NavComponent.prototype.loggedIn = function () {
        var token = localStorage.getItem('token');
        return !!token;
    };
    NavComponent.prototype.logout = function () {
        localStorage.removeItem('token');
        this.alertify.message('Logged out');
    };
    NavComponent = __decorate([
        core_1.Component({
            selector: 'app-nav',
            templateUrl: './nav.component.html',
            styleUrls: ['./nav.component.css']
        }),
        __metadata("design:paramtypes", [auth_service_1.AuthService,
            alertify_service_1.AlertifyService])
    ], NavComponent);
    return NavComponent;
}());
exports.NavComponent = NavComponent;
//# sourceMappingURL=nav.component.js.map