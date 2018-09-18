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
var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(authService, alertify) {
        this.authService = authService;
        this.alertify = alertify;
        this.cancelRegister = new core_1.EventEmitter();
        this.model = {};
    }
    RegisterComponent.prototype.ngOnInit = function () { };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        this.authService.register(this.model).subscribe(function () {
            _this.alertify.success('Registration successful');
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    RegisterComponent.prototype.cancel = function () {
        this.cancelRegister.emit(false);
    };
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], RegisterComponent.prototype, "cancelRegister", void 0);
    RegisterComponent = __decorate([
        core_1.Component({
            selector: 'app-register',
            templateUrl: './register.component.html',
            styleUrls: ['./register.component.css']
        }),
        __metadata("design:paramtypes", [auth_service_1.AuthService,
            alertify_service_1.AlertifyService])
    ], RegisterComponent);
    return RegisterComponent;
}());
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=register.component.js.map