import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { EmpireService } from '../empire.service';
var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(appservice) {
        this.appservice = appservice;
        this.retrieved_data = [];
        ;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.appservice.getStatus().subscribe(function (response) {
            _this.retrieved_data = response;
            // console.log("Response oooooooo ",response);
        });
    };
    DashboardComponent = tslib_1.__decorate([
        Component({
            selector: 'app-dashboard',
            templateUrl: './dashboard.component.html',
            styleUrls: [
                '../app.component.scss', './dashboard.component.scss'
            ],
            encapsulation: ViewEncapsulation.None
        }),
        tslib_1.__metadata("design:paramtypes", [EmpireService])
    ], DashboardComponent);
    return DashboardComponent;
}());
export { DashboardComponent };
//# sourceMappingURL=dashboard.component.js.map