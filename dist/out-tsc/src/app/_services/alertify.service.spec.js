"use strict";
/* tslint:disable:no-unused-variable */
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var alertify_service_1 = require("./alertify.service");
describe('Service: Alertify', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [alertify_service_1.AlertifyService]
        });
    });
    it('should ...', testing_1.inject([alertify_service_1.AlertifyService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=alertify.service.spec.js.map