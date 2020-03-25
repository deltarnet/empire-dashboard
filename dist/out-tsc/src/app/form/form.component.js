import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
var FormComponent = /** @class */ (function () {
    function FormComponent() {
        this.projects = [{ project: '' }];
        this.endpoints = [{ endpoints: '' }];
    }
    FormComponent.prototype.ngOnInit = function () { };
    FormComponent.prototype.addProject = function () {
        this.projects.push({ project: '' });
    };
    FormComponent.prototype.addEndpoint = function () {
        this.endpoints.push({ endpoints: '' });
    };
    FormComponent.prototype.removeEndpoint = function (i) {
        this.endpoints.splice(i, 1);
    };
    FormComponent.prototype.logValue = function (form) {
        console.log(form);
        console.log(form.value);
        form.reset(form);
        // console.log(value.projectName)
        // console.log(this.projects);
        // console.log(this.endpoints);
    };
    FormComponent = tslib_1.__decorate([
        Component({
            template: '',
            selector: 'app-form',
            templateUrl: './form.component.html',
            styleUrls: [
                './form.component.scss'
            ]
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], FormComponent);
    return FormComponent;
}());
export { FormComponent };
//# sourceMappingURL=form.component.js.map