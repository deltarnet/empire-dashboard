import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
var EmpireService = /** @class */ (function () {
    function EmpireService(http) {
        this.http = http;
        this.testUrl = 'http://localhost:8050/api/v1/status/';
        this.turntablproject_url = 'http://localhost:8050/api/v1/projects';
        this.http.get(window.location.origin + '/').subscribe(function (res) {
            sessionStorage.setItem('turntablproject_url', res.turntablproject_url);
            sessionStorage.setItem('endpoints_url', res.endpoints_url);
        });
    }
    EmpireService.prototype.getProjects = function () {
        // return this.http.get<Turntabl_Project[]>(sessionStorage.getItem('turntablproject_url'));
        return this.http.get(this.turntablproject_url);
    };
    EmpireService.prototype.getProjectById = function (id) {
        return this.http.get(this.turntablproject_url + id);
    };
    EmpireService.prototype.getEndpoints = function () {
        return this.http.get(sessionStorage.getItem('endpoints_url'));
    };
    EmpireService.prototype.getEndpointById = function (id) {
        return this.http.get(sessionStorage.getItem('endpoints_url') + id);
    };
    EmpireService.prototype.getStatus = function () {
        // return this.http.get<Status[]>(sessionStorage.getItem('status_url'));
        return this.http.get(this.testUrl);
    };
    EmpireService.prototype.getStatusByProjectId = function (project_id) {
        return this.http.get(this.testUrl + project_id);
    };
    EmpireService = tslib_1.__decorate([
        Injectable({ providedIn: 'root' }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], EmpireService);
    return EmpireService;
}());
export { EmpireService };
//# sourceMappingURL=empire.service.js.map