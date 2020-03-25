import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { EmpireService } from '../empire.service';
import { ActivatedRoute } from '@angular/router';
var StatusComponent = /** @class */ (function () {
    function StatusComponent(appservice, route) {
        this.appservice = appservice;
        this.route = route;
        this.retrieved_data = [];
    }
    StatusComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (params) {
            _this.project_id = params.get("project_id");
        });
        this.load_project_status(this.project_id);
    };
    StatusComponent.prototype.load_project_status = function (project_id) {
        var _this = this;
        this.appservice.getStatusByProjectId(project_id)
            .subscribe(function (response) {
            _this.retrieved_data = response;
            // console.log("Response oooooooo ",response);
        });
    };
    StatusComponent = tslib_1.__decorate([
        Component({
            selector: 'app-status',
            templateUrl: './status.component.html',
            styleUrls: ['./status.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [EmpireService, ActivatedRoute])
    ], StatusComponent);
    return StatusComponent;
}());
export { StatusComponent };
//# sourceMappingURL=status.component.js.map