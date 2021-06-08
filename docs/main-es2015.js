(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _components_comment_comment_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/comment/comment.component */ "./src/app/components/comment/comment.component.ts");
/* harmony import */ var _components_add_comment_add_comment_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/add-comment/add-comment.component */ "./src/app/components/add-comment/add-comment.component.ts");





function AppComponent_app_comment_3_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-comment", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("commentInEdit", function AppComponent_app_comment_3_Template_app_comment_commentInEdit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.onCommentInEdit(); })("commentEdited", function AppComponent_app_comment_3_Template_app_comment_commentEdited_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const index_r3 = ctx.index; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.onEdit(index_r3, $event); })("commentDeleted", function AppComponent_app_comment_3_Template_app_comment_commentDeleted_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const index_r3 = ctx.index; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.onDelete(index_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const comment_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("avatarUrl", comment_r2.avatarUrl)("name", comment_r2.name)("comment", comment_r2.comment);
} }
function AppComponent_app_add_comment_4_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-add-comment", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("commentAdded", function AppComponent_app_add_comment_4_Template_app_add_comment_commentAdded_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.onCommentAdd($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AppComponent {
    constructor() {
        this.comments = [];
        this.isCommentInEdit = false;
    }
    ngOnInit() {
        this.comments = JSON.parse(localStorage.getItem('comments')) || [];
    }
    onCommentAdd(event) {
        const imgGen = __webpack_require__(/*! @dudadev/random-img */ "./node_modules/@dudadev/random-img/index.js");
        imgGen().then(avatarUrl => {
            const comment = { avatarUrl, name: event.name, comment: event.comment };
            this.comments = this.comments.concat(comment);
            localStorage.setItem('comments', JSON.stringify(this.comments));
        });
    }
    onCommentInEdit() {
        this.isCommentInEdit = true;
    }
    onDelete(index) {
        this.comments.splice(index, 1);
        localStorage.setItem('comments', JSON.stringify(this.comments));
    }
    onEdit(index, event) {
        this.comments[index].name = event.name;
        this.comments[index].comment = event.comment;
        this.isCommentInEdit = false;
        localStorage.setItem('comments', JSON.stringify(this.comments));
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 5, vars: 2, consts: [[1, "wrapper"], [1, "title"], [3, "avatarUrl", "name", "comment", "commentInEdit", "commentEdited", "commentDeleted", 4, "ngFor", "ngForOf"], [3, "commentAdded", 4, "ngIf"], [3, "avatarUrl", "name", "comment", "commentInEdit", "commentEdited", "commentDeleted"], [3, "commentAdded"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "User Reviews");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AppComponent_app_comment_3_Template, 1, 3, "app-comment", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AppComponent_app_add_comment_4_Template, 1, 0, "app-add-comment", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.comments);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isCommentInEdit);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _components_comment_comment_component__WEBPACK_IMPORTED_MODULE_2__["CommentComponent"], _components_add_comment_add_comment_component__WEBPACK_IMPORTED_MODULE_3__["AddCommentComponent"]], styles: ["[_nghost-%COMP%] {\n  align-items: center;\n  background-color: grey;\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  font-family: sans-serif;\n  height: 100%;\n  overflow: auto;\n  padding: 32px;\n  width: 100%;\n}\n\n.wrapper[_ngcontent-%COMP%] {\n  max-width: 640px;\n  width: 100%;\n}\n\n.wrapper[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: #006bb3;\n  display: flex;\n  font-family: cursive;\n  font-size: 52px;\n  font-weight: 500;\n  justify-content: center;\n  margin-bottom: 32px;\n}\n\n.wrapper[_ngcontent-%COMP%]   app-comment[_ngcontent-%COMP%], .wrapper[_ngcontent-%COMP%]   app-add-comment[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9iZ29sYW4vYmVuLWRldi91c2VyLXJldmlld3Mvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0FDQ0Y7O0FEQ0U7RUFDRSxjQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ0NKOztBREVFOztFQUVFLG1CQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBwYWRkaW5nOiAzMnB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLndyYXBwZXIge1xuICBtYXgtd2lkdGg6IDY0MHB4O1xuICB3aWR0aDogMTAwJTtcblxuICAudGl0bGUge1xuICAgIGNvbG9yOiByZ2IoMCwgMTA3LCAxNzkpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZm9udC1mYW1pbHk6IGN1cnNpdmU7XG4gICAgZm9udC1zaXplOiA1MnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogMzJweDtcbiAgfVxuXG4gIGFwcC1jb21tZW50LFxuICBhcHAtYWRkLWNvbW1lbnQge1xuICAgIG1hcmdpbi1ib3R0b206IDEycHg7XG4gIH1cbn1cbiIsIjpob3N0IHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gIGhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIHBhZGRpbmc6IDMycHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ud3JhcHBlciB7XG4gIG1heC13aWR0aDogNjQwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuLndyYXBwZXIgLnRpdGxlIHtcbiAgY29sb3I6ICMwMDZiYjM7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZvbnQtZmFtaWx5OiBjdXJzaXZlO1xuICBmb250LXNpemU6IDUycHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAzMnB4O1xufVxuLndyYXBwZXIgYXBwLWNvbW1lbnQsXG4ud3JhcHBlciBhcHAtYWRkLWNvbW1lbnQge1xuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_add_comment_add_comment_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/add-comment/add-comment.component */ "./src/app/components/add-comment/add-comment.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _components_comment_comment_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/comment/comment.component */ "./src/app/components/comment/comment.component.ts");







class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _components_add_comment_add_comment_component__WEBPACK_IMPORTED_MODULE_3__["AddCommentComponent"],
        _components_comment_comment_component__WEBPACK_IMPORTED_MODULE_5__["CommentComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                    _components_add_comment_add_comment_component__WEBPACK_IMPORTED_MODULE_3__["AddCommentComponent"],
                    _components_comment_comment_component__WEBPACK_IMPORTED_MODULE_5__["CommentComponent"]
                ],
                imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/add-comment/add-comment.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/add-comment/add-comment.component.ts ***!
  \*****************************************************************/
/*! exports provided: AddCommentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCommentComponent", function() { return AddCommentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");




class AddCommentComponent {
    constructor(formbuilder) {
        this.formbuilder = formbuilder;
        this.isEdit = false;
        this.commentAdded = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
        this.generateControls();
        this.form = this.formbuilder.group(this.formControls);
    }
    generateControls() {
        this.formControls = {
            name: this.formbuilder.control(this.name || '', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            comment: this.formbuilder.control(this.comment || '', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
        };
    }
    onSubmit() {
        this.commentAdded.emit({ name: this.formControls.name.value, comment: this.formControls.comment.value });
        this.form.reset();
    }
}
AddCommentComponent.ɵfac = function AddCommentComponent_Factory(t) { return new (t || AddCommentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
AddCommentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddCommentComponent, selectors: [["app-add-comment"]], inputs: { isEdit: "isEdit", name: "name", comment: "comment" }, outputs: { commentAdded: "commentAdded" }, decls: 5, vars: 5, consts: [[3, "formGroup", "ngSubmit"], ["formControlName", "name", "type", "text", "placeholder", "Your name", 3, "value"], ["formControlName", "comment", "placeholder", "Your comment", 3, "value"], [3, "disabled"]], template: function AddCommentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AddCommentComponent_Template_form_ngSubmit_0_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "textarea", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.formControls.name.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.formControls.comment.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.form.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.isEdit ? "Save" : "Add");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]], styles: ["[_nghost-%COMP%] {\n  background-color: white;\n  border: 2px solid black;\n  box-shadow: 0px 4px 3px 2px rgba(0, 0, 0, 0.2);\n  box-sizing: border-box;\n  display: flex;\n  padding: 16px 16px 24px;\n  width: 100%;\n}\n\nform[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n}\n\nform[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: 2px solid #c1c1c1;\n  box-sizing: border-box;\n  font-size: 16px;\n  height: 40px;\n  line-height: 24px;\n  margin-bottom: 16px;\n  -webkit-padding-start: 12px;\n          padding-inline-start: 12px;\n  padding-top: 2px;\n  width: 100%;\n}\n\nform[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  border: 2px solid #c1c1c1;\n  box-sizing: border-box;\n  font-size: 16px;\n  height: 90px;\n  line-height: 24px;\n  margin-bottom: 16px;\n  -webkit-padding-start: 12px;\n          padding-inline-start: 12px;\n  padding-top: 8px;\n  resize: none;\n  width: 100%;\n}\n\nform[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  align-self: flex-end;\n  background-color: rgba(15, 140, 223, 0.9);\n  border: none;\n  border-radius: 8px;\n  color: white;\n  cursor: pointer;\n  height: 32px;\n  outline: none;\n  width: 72px;\n}\n\nform[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active {\n  background-color: #0f8cdf;\n}\n\nform[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled {\n  background-color: rgba(15, 140, 223, 0.6);\n  cursor: unset;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9iZ29sYW4vYmVuLWRldi91c2VyLXJldmlld3Mvc3JjL2FwcC9jb21wb25lbnRzL2FkZC1jb21tZW50L2FkZC1jb21tZW50LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2FkZC1jb21tZW50L2FkZC1jb21tZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsdUJBQUE7RUFDQSx1QkFBQTtFQUNBLDhDQUxPO0VBTVAsc0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0FDREY7O0FESUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0FDREY7O0FER0U7RUFDRSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7VUFBQSwwQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQ0RKOztBRElFO0VBQ0UseUJBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO1VBQUEsMEJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDRko7O0FES0U7RUFDRSxvQkFBQTtFQUNBLHlDQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7QUNISjs7QURLSTtFQUNFLHlCQUFBO0FDSE47O0FET0k7RUFDRSx5Q0FBQTtFQUNBLGFBQUE7QUNMTiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRkLWNvbW1lbnQvYWRkLWNvbW1lbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkc2hhZG93OiAwcHggNHB4IDNweCAycHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuXG46aG9zdCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcbiAgYm94LXNoYWRvdzogJHNoYWRvdztcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZzogMTZweCAxNnB4IDI0cHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5mb3JtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDEwMCU7XG5cbiAgaW5wdXQge1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYigxOTMsIDE5MywgMTkzKTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgICBwYWRkaW5nLWlubGluZS1zdGFydDogMTJweDtcbiAgICBwYWRkaW5nLXRvcDogMnB4O1xuICAgIHdpZHRoOiAxMDAlXG4gIH1cblxuICB0ZXh0YXJlYSB7XG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiKDE5MywgMTkzLCAxOTMpO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGhlaWdodDogOTBweDtcbiAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICAgIHBhZGRpbmctaW5saW5lLXN0YXJ0OiAxMnB4O1xuICAgIHBhZGRpbmctdG9wOiA4cHg7XG4gICAgcmVzaXplOiBub25lO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgYnV0dG9uIHtcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE1LCAxNDAsIDIyMywgMC45KTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgaGVpZ2h0OiAzMnB4O1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgd2lkdGg6IDcycHg7XG5cbiAgICAmOmFjdGl2ZSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTUsIDE0MCwgMjIzKTtcblxuICAgIH1cblxuICAgICY6ZGlzYWJsZWQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNSwgMTQwLCAyMjMsIDAuNik7XG4gICAgICBjdXJzb3I6IHVuc2V0O1xuICAgIH1cbiAgfVxufVxuIiwiOmhvc3Qge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XG4gIGJveC1zaGFkb3c6IDBweCA0cHggM3B4IDJweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmc6IDE2cHggMTZweCAyNHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuZm9ybSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiAxMDAlO1xufVxuZm9ybSBpbnB1dCB7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNjMWMxYzE7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDEycHg7XG4gIHBhZGRpbmctdG9wOiAycHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuZm9ybSB0ZXh0YXJlYSB7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNjMWMxYzE7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgaGVpZ2h0OiA5MHB4O1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDEycHg7XG4gIHBhZGRpbmctdG9wOiA4cHg7XG4gIHJlc2l6ZTogbm9uZTtcbiAgd2lkdGg6IDEwMCU7XG59XG5mb3JtIGJ1dHRvbiB7XG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE1LCAxNDAsIDIyMywgMC45KTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBoZWlnaHQ6IDMycHg7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHdpZHRoOiA3MnB4O1xufVxuZm9ybSBidXR0b246YWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBmOGNkZjtcbn1cbmZvcm0gYnV0dG9uOmRpc2FibGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNSwgMTQwLCAyMjMsIDAuNik7XG4gIGN1cnNvcjogdW5zZXQ7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddCommentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-add-comment',
                templateUrl: './add-comment.component.html',
                styleUrls: ['./add-comment.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }]; }, { isEdit: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], comment: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], commentAdded: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/comment/comment.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/comment/comment.component.ts ***!
  \*********************************************************/
/*! exports provided: CommentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentComponent", function() { return CommentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _add_comment_add_comment_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../add-comment/add-comment.component */ "./src/app/components/add-comment/add-comment.component.ts");




function CommentComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CommentComponent_div_0_Template_i_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.onEdit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CommentComponent_div_0_Template_i_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.onDelete(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r10.avatarUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r10.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r10.comment);
} }
function CommentComponent_app_add_comment_1_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-add-comment", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("commentAdded", function CommentComponent_app_add_comment_1_Template_app_add_comment_commentAdded_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.onEditSave($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isEdit", true)("name", ctx_r11.name)("comment", ctx_r11.comment);
} }
class CommentComponent {
    constructor() {
        this.commentEdited = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.commentDeleted = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.commentInEdit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isEditClicked = false;
    }
    onEdit() {
        this.commentInEdit.emit();
        this.isEditClicked = true;
    }
    onDelete() {
        this.commentDeleted.emit();
    }
    onEditSave(event) {
        this.isEditClicked = false;
        this.commentEdited.emit({ name: event.name, comment: event.comment });
    }
}
CommentComponent.ɵfac = function CommentComponent_Factory(t) { return new (t || CommentComponent)(); };
CommentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CommentComponent, selectors: [["app-comment"]], inputs: { avatarUrl: "avatarUrl", name: "name", comment: "comment" }, outputs: { commentEdited: "commentEdited", commentDeleted: "commentDeleted", commentInEdit: "commentInEdit" }, decls: 2, vars: 2, consts: [["class", "comment-wrapper", 4, "ngIf"], [3, "isEdit", "name", "comment", "commentAdded", 4, "ngIf"], [1, "comment-wrapper"], [3, "src"], [1, "titles-wrapper"], [1, "name"], [1, "comment"], [1, "icons-wrapper"], ["aria-hidden", "true", 1, "fa", "fa-pen", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-trash", 3, "click"], [3, "isEdit", "name", "comment", "commentAdded"]], template: function CommentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CommentComponent_div_0_Template, 10, 3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CommentComponent_app_add_comment_1_Template, 1, 3, "app-add-comment", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isEditClicked);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isEditClicked);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _add_comment_add_comment_component__WEBPACK_IMPORTED_MODULE_2__["AddCommentComponent"]], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  width: 100%;\n}\n\n.comment-wrapper[_ngcontent-%COMP%] {\n  align-items: center;\n  background-color: white;\n  border: 2px solid black;\n  box-shadow: 0px 4px 3px 2px rgba(0, 0, 0, 0.2);\n  box-sizing: border-box;\n  display: flex;\n  padding: 16px;\n  position: relative;\n  width: 100%;\n}\n\nimg[_ngcontent-%COMP%] {\n  border: 2px solid #c1c1c1;\n  height: 64px;\n  -webkit-margin-end: 18px;\n          margin-inline-end: 18px;\n  width: 64px;\n}\n\n.titles-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  font-size: 24px;\n  line-height: 24px;\n}\n\n.titles-wrapper[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  color: black;\n  margin-bottom: 6px;\n}\n\n.titles-wrapper[_ngcontent-%COMP%]   .comment[_ngcontent-%COMP%] {\n  color: gray;\n}\n\n.icons-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  position: absolute;\n  right: 16px;\n  top: 16px;\n}\n\n.icons-wrapper[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%] {\n  cursor: pointer;\n  -webkit-margin-start: 8px;\n          margin-inline-start: 8px;\n}\n\n[style*=rtl][_nghost-%COMP%]   .icons-wrapper[_ngcontent-%COMP%], [style*=rtl]   [_nghost-%COMP%]   .icons-wrapper[_ngcontent-%COMP%], [dir=rtl][_nghost-%COMP%]   .icons-wrapper[_ngcontent-%COMP%], [dir=rtl]   [_nghost-%COMP%]   .icons-wrapper[_ngcontent-%COMP%] {\n  left: 16px;\n  right: unset;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9iZ29sYW4vYmVuLWRldi91c2VyLXJldmlld3Mvc3JjL2FwcC9jb21wb25lbnRzL2NvbW1lbnQvY29tbWVudC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9jb21tZW50L2NvbW1lbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxhQUFBO0VBQ0EsV0FBQTtBQ0RGOztBRElBO0VBQ0UsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHVCQUFBO0VBQ0EsOENBWE87RUFZUCxzQkFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FDREY7O0FESUE7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EsV0FBQTtBQ0RGOztBRElBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDREY7O0FER0U7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7QUNESjs7QURJRTtFQUNFLFdBQUE7QUNGSjs7QURNQTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0FDSEY7O0FES0U7RUFDRSxlQUFBO0VBQ0EseUJBQUE7VUFBQSx3QkFBQTtBQ0hKOztBRFNFOztFQUNFLFVBQUE7RUFDQSxZQUFBO0FDTEoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NvbW1lbnQvY29tbWVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRzaGFkb3c6IDBweCA0cHggM3B4IDJweCByZ2JhKDAsIDAsIDAsIDAuMik7XG5cbjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5jb21tZW50LXdyYXBwZXIge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XG4gIGJveC1zaGFkb3c6ICRzaGFkb3c7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbmltZyB7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYigxOTMsIDE5MywgMTkzKTtcbiAgaGVpZ2h0OiA2NHB4O1xuICBtYXJnaW4taW5saW5lLWVuZDogMThweDtcbiAgd2lkdGg6IDY0cHg7XG59XG5cbi50aXRsZXMtd3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG5cbiAgLm5hbWUge1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBtYXJnaW4tYm90dG9tOiA2cHg7XG4gIH1cblxuICAuY29tbWVudCB7XG4gICAgY29sb3I6IGdyYXk7XG4gIH1cbn1cblxuLmljb25zLXdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxNnB4O1xuICB0b3A6IDE2cHg7XG5cbiAgLmZhIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgbWFyZ2luLWlubGluZS1zdGFydDogOHB4O1xuICB9XG59XG5cbjpob3N0LWNvbnRleHQoW3N0eWxlKj0ncnRsJ10pLFxuOmhvc3QtY29udGV4dChbZGlyPSdydGwnXSkge1xuICAuaWNvbnMtd3JhcHBlciB7XG4gICAgbGVmdDogMTZweDtcbiAgICByaWdodDogdW5zZXQ7XG4gIH1cbn1cbiIsIjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5jb21tZW50LXdyYXBwZXIge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XG4gIGJveC1zaGFkb3c6IDBweCA0cHggM3B4IDJweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbmltZyB7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNjMWMxYzE7XG4gIGhlaWdodDogNjRweDtcbiAgbWFyZ2luLWlubGluZS1lbmQ6IDE4cHg7XG4gIHdpZHRoOiA2NHB4O1xufVxuXG4udGl0bGVzLXdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xufVxuLnRpdGxlcy13cmFwcGVyIC5uYW1lIHtcbiAgY29sb3I6IGJsYWNrO1xuICBtYXJnaW4tYm90dG9tOiA2cHg7XG59XG4udGl0bGVzLXdyYXBwZXIgLmNvbW1lbnQge1xuICBjb2xvcjogZ3JheTtcbn1cblxuLmljb25zLXdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxNnB4O1xuICB0b3A6IDE2cHg7XG59XG4uaWNvbnMtd3JhcHBlciAuZmEge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDhweDtcbn1cblxuOmhvc3QtY29udGV4dChbc3R5bGUqPXJ0bF0pIC5pY29ucy13cmFwcGVyLFxuOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pIC5pY29ucy13cmFwcGVyIHtcbiAgbGVmdDogMTZweDtcbiAgcmlnaHQ6IHVuc2V0O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CommentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-comment',
                templateUrl: './comment.component.html',
                styleUrls: ['./comment.component.scss']
            }]
    }], null, { avatarUrl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], comment: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], commentEdited: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], commentDeleted: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], commentInEdit: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/bgolan/ben-dev/user-reviews/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map