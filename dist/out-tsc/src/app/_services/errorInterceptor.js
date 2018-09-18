"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var ErrorInterceptor = /** @class */ (function () {
    function ErrorInterceptor() {
    }
    ErrorInterceptor.prototype.intercept = function (req, next) {
        return next.handle(req).pipe(operators_1.catchError(function (error) {
            if (error instanceof http_1.HttpErrorResponse) {
                if (error.status === 401) {
                    return rxjs_1.throwError(error.statusText);
                }
                var applicationError = error.headers.get('Application-Error');
                if (applicationError) {
                    console.error(applicationError);
                    return rxjs_1.throwError(applicationError);
                }
                var serverError = error.error;
                var modelStateErrors = '';
                if (serverError && typeof serverError === 'object') {
                    for (var key in serverError) {
                        if (serverError[key]) {
                            modelStateErrors += serverError[key] + '\n';
                        }
                    }
                }
                return rxjs_1.throwError(modelStateErrors || serverError || 'Server Error');
            }
        }));
    };
    ErrorInterceptor = __decorate([
        core_1.Injectable()
    ], ErrorInterceptor);
    return ErrorInterceptor;
}());
exports.ErrorInterceptor = ErrorInterceptor;
exports.ErrorInterceptorProvider = {
    provide: http_1.HTTP_INTERCEPTORS,
    useClass: ErrorInterceptor,
    multi: true
};
//# sourceMappingURL=errorInterceptor.js.map