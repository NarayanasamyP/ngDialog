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
var core_1 = require("@angular/core");
var ej2_ng_popups_1 = require("@syncfusion/ej2-ng-popups");
var AppComponent = (function () {
    function AppComponent() {
        // The Dialog shows within the target element.
        this.targetElement = document.getElementById('dialog-container');
        //To Load Dialog content from container
        this.ContainerContent = document.getElementById('dialog-content');
    }
    // Sample level code to handle the button click action
    AppComponent.prototype.onOpenDialog = function (event) {
        // Call the show method to open the Dialog
        this.ejDialog.content.style.display = 'block';
        this.ejDialog.show();
    };
    AppComponent.prototype.ngOnInit = function () {
        this.hideDialog = function (event) {
            this.ejDialog.hide();
        };
        this.buttons = [
            {
                'click': this.hideDialog.bind(this),
                // Accessing button component properties by buttonModel property
                buttonModel: {
                    content: 'OK',
                    //Enables the primary button
                    isPrimary: true
                }
            },
            {
                'click': this.hideDialog.bind(this),
                buttonModel: {
                    content: 'Cancel',
                }
            }
        ];
    };
    return AppComponent;
}());
__decorate([
    core_1.ViewChild('ejDialog'),
    __metadata("design:type", ej2_ng_popups_1.DialogComponent)
], AppComponent.prototype, "ejDialog", void 0);
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n    <button class=\"e-control e-btn\" style=\"position: absolute;\" id=\"targetButton\" (click)=\"onOpenDialog($event)\">Open Dialog</button>\n\n    <ej-dialog #ejDialog header=\"Alert Dialog\" [visible] = false [content] = ContainerContent [target]='targetElement' [buttons]='buttons' width='250px'>\n    </ej-dialog>"
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map