import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { EmpireService } from '../empire.service';
var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(appservice) {
        this.appservice = appservice;
        this.listed_data = [];
    }
    SidebarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.appservice.getProjects().subscribe(function (response) { _this.listed_data = response; });
    };
    SidebarComponent = tslib_1.__decorate([
        Component({
            selector: 'app-sidebar',
            templateUrl: './sidebar.component.html',
            styleUrls: ['./sidebar.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [EmpireService])
    ], SidebarComponent);
    return SidebarComponent;
}());
export { SidebarComponent };
//# sourceMappingURL=sidebar.component.js.map