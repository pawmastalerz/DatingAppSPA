"use strict";
/* tslint:disable:no-unused-variable */
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var auth_service_1 = require("./auth.service");
describe('Service: Auth', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [auth_service_1.AuthService]
        });
    });
    it('should ...', testing_1.inject([auth_service_1.AuthService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=auth.service.spec.js.map