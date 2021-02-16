(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/TPa":
/*!*********************************************************!*\
  !*** ./src/app/components/board/list/list.component.ts ***!
  \*********************************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _model_card_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../model/card/card */ "WiOR");
/* harmony import */ var _model_card_movement__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../model/card/movement */ "xF7O");
/* harmony import */ var _panel_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../panel.service */ "eRKv");
/* harmony import */ var _common_context_menu_context_menu_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/context-menu/context-menu.component */ "T65d");
/* harmony import */ var src_app_directives_common_content_edit_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/directives/common/content-edit.directive */ "eDW+");
/* harmony import */ var _card_card_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../card/card.component */ "2Ds6");










function ListComponent_app_card_summary_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-card-summary", 6);
} if (rf & 2) {
    const card_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("card", card_r1)("listIndex", ctx_r0.listIndex)("cardIndex", i_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("cardIndex", i_r2);
} }
class ListComponent {
    constructor(elementRef, document, panelService) {
        this.elementRef = elementRef;
        this.document = document;
        this.panelService = panelService;
        this.moveCardAcrossList = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.newCardAdded = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.deleteList = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.cardCount = 0;
        this.tasks = [];
        panelService.getPanel().subscribe((data) => { this.tasks = data.tasks; this.loadList(); });
        this.service = panelService;
    }
    ngOnInit() {
    }
    loadList() {
        this.tasks.forEach(element => {
            if (this.listIndex === 0 && element.isTaskDone == '0') {
                this.addExistingCard(element.id, element.title, element.description, element.isTaskDone, element.owner.name, element.owner.email, element.changeCount);
            }
            if (this.listIndex === 1 && element.isTaskDone == '1') {
                this.addExistingCard(element.id, element.title, element.description, element.isTaskDone, element.owner.name, element.owner.email, element.changeCount);
            }
        });
    }
    addExistingCard(id, title, description, isTaskDone, owner, email, changeCount) {
        this.cardCount++;
        const card = new _model_card_card__WEBPACK_IMPORTED_MODULE_2__["Card"](id, title, description, isTaskDone, owner, email, changeCount);
        this.list.cards.push(card);
        this.newCardAdded.emit(card);
    }
    addNewCard() {
        const card = new _model_card_card__WEBPACK_IMPORTED_MODULE_2__["Card"](this.cardCount++ + '', 'New Title', 'New Description', '', 'New Owner', 'email@email.com', '');
        if (this.listIndex == 0) {
            card.isTaskDone = 'false';
        }
        else {
            card.isTaskDone = 'true';
        }
        this.panelService.postTask({
            "id": '0',
            "title": 'card.title',
            "description": 'card.description',
            "isTaskDone": 'false',
            "owner": {
                "id": '0',
                "name": 'card.owner',
                "email": 'card.email'
            },
            "ownerId": '0',
            "changeCount": '0'
        });
        this.list.cards.push(card);
        this.newCardAdded.emit(card);
    }
    allowCardReplacement(dragEvent) {
        dragEvent.dataTransfer.dropEffect = 'move';
        dragEvent.preventDefault();
    }
    delete() {
        this.deleteList.emit(this.listIndex);
    }
    dropCard(dragEvent) {
        const data = JSON.parse(dragEvent.dataTransfer.getData('text'));
        const elements = this.document.elementsFromPoint(dragEvent.x, dragEvent.y);
        const cardElementBeingDroppedOn = elements.find(x => x.tagName.toLowerCase() === 'app-card-summary');
        const listElementBeingDroppedOn = elements.find(x => x.tagName.toLowerCase() === 'app-list');
        const listIndexDroppedOn = parseInt(listElementBeingDroppedOn.getAttribute('listIndex'), 10);
        const cardIndexDroppedOn = cardElementBeingDroppedOn === undefined ? undefined :
            parseInt(cardElementBeingDroppedOn.getAttribute('cardIndex'), 10);
        const listIndexDragged = parseInt(data.listIndex, 10);
        const cardIndexDragged = parseInt(data.cardIndex, 10);
        if (listIndexDragged === listIndexDroppedOn) {
            // same list just re-organize the cards
            const cardDragged = this.list.cards.splice(cardIndexDragged, 1);
            this.list.cards.splice(cardIndexDroppedOn, 0, ...cardDragged);
        }
        else {
            this.moveCardAcrossList.emit(new _model_card_movement__WEBPACK_IMPORTED_MODULE_3__["Movement"](listIndexDragged, listIndexDroppedOn, cardIndexDragged, cardIndexDroppedOn));
        }
    }
}
ListComponent.ɵfac = function ListComponent_Factory(t) { return new (t || ListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_panel_service__WEBPACK_IMPORTED_MODULE_4__["PanelService"])); };
ListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ListComponent, selectors: [["app-list"]], inputs: { list: "list", listIndex: "listIndex" }, outputs: { moveCardAcrossList: "moveCardAcrossList", newCardAdded: "newCardAdded", deleteList: "deleteList" }, decls: 7, vars: 3, consts: [[1, "list", "col", "custom-col", "list-drag-component", 3, "id", "dragover", "drop"], [3, "contextAction"], [1, "list-name", 3, "appContentEdit", "appContentEditChange"], ["id", "list-one"], [3, "card", "listIndex", "cardIndex", 4, "ngFor", "ngForOf"], [1, "text-center", "add-new-card", 3, "click"], [3, "card", "listIndex", "cardIndex"]], template: function ListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dragover", function ListComponent_Template_div_dragover_0_listener($event) { return ctx.allowCardReplacement($event); })("drop", function ListComponent_Template_div_drop_0_listener($event) { return ctx.dropCard($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-context-menu", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("contextAction", function ListComponent_Template_app_context_menu_contextAction_1_listener() { return ctx.delete(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("appContentEditChange", function ListComponent_Template_p_appContentEditChange_2_listener($event) { return ctx.list.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ListComponent_app_card_summary_4_Template, 1, 4, "app-card-summary", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h6", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListComponent_Template_h6_click_5_listener() { return ctx.addNewCard(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Add new card...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "list-", ctx.listIndex, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("appContentEdit", ctx.list.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.list.cards);
    } }, directives: [_common_context_menu_context_menu_component__WEBPACK_IMPORTED_MODULE_5__["ContextMenuComponent"], src_app_directives_common_content_edit_directive__WEBPACK_IMPORTED_MODULE_6__["ContentEditDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _card_card_component__WEBPACK_IMPORTED_MODULE_7__["CardComponent"]], styles: [".col[_ngcontent-%COMP%] {\r\n  background-color: #f5f5f5;\r\n  margin: 0px;\r\n  padding: 5px;\r\n  border-top: solid 5px blue;\r\n  max-width: 400px;\r\n}\r\n\r\n.text-center.add-new-card[_ngcontent-%COMP%]:hover {\r\n  opacity: 0.9;\r\n  color: #767676;\r\n}\r\n\r\n.text-center.add-new-card[_ngcontent-%COMP%] {\r\n  font-size: 20px;\r\n  color: #a6a6a6;\r\n  cursor: pointer;\r\n  opacity: 0.4;\r\n  min-width: 400px;\r\n}\r\n\r\n.list-name[_ngcontent-%COMP%] {\r\n  font-weight: bold;\r\n  text-align: center;\r\n  font-size: 22px;\r\n}\r\n\r\n.list[_ngcontent-%COMP%] {\r\n  background-color: #e7e9ea;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ib2FyZC9saXN0L2xpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsWUFBWTtFQUNaLDBCQUEwQjtFQUMxQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osY0FBYztBQUNoQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixjQUFjO0VBQ2QsZUFBZTtFQUNmLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0IiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2JvYXJkL2xpc3QvbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcclxuICBtYXJnaW46IDBweDtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgYm9yZGVyLXRvcDogc29saWQgNXB4IGJsdWU7XHJcbiAgbWF4LXdpZHRoOiA0MDBweDtcclxufVxyXG5cclxuLnRleHQtY2VudGVyLmFkZC1uZXctY2FyZDpob3ZlciB7XHJcbiAgb3BhY2l0eTogMC45O1xyXG4gIGNvbG9yOiAjNzY3Njc2O1xyXG59XHJcblxyXG4udGV4dC1jZW50ZXIuYWRkLW5ldy1jYXJkIHtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgY29sb3I6ICNhNmE2YTY7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIG9wYWNpdHk6IDAuNDtcclxuICBtaW4td2lkdGg6IDQwMHB4O1xyXG59XHJcblxyXG4ubGlzdC1uYW1lIHtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG59XHJcblxyXG4ubGlzdCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U3ZTllYTtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-list',
                templateUrl: './list.component.html',
                styleUrls: ['./list.component.css']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: Document, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
            }] }, { type: _panel_service__WEBPACK_IMPORTED_MODULE_4__["PanelService"] }]; }, { list: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], listIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], moveCardAcrossList: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], newCardAdded: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], deleteList: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\Workspaces\Saipos_ToDo.API\Saipos_ToDo.Frontend\SaiposToDo\src\main.ts */"zUnb");


/***/ }),

/***/ "2Ds6":
/*!*********************************************************!*\
  !*** ./src/app/components/board/card/card.component.ts ***!
  \*********************************************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _panel_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../panel.service */ "eRKv");
/* harmony import */ var _confirmation_dialog_confirmation_dialog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../confirmation-dialog/confirmation-dialog.service */ "P8gP");
/* harmony import */ var src_app_directives_common_content_edit_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/directives/common/content-edit.directive */ "eDW+");





class CardComponent {
    constructor(panelService, confirmationDialogService) {
        this.panelService = panelService;
        this.confirmationDialogService = confirmationDialogService;
        this.hasLogged = 'false';
        this.service = panelService;
    }
    ngOnInit() {
    }
    chechChangePermission(dragEvent) {
        /*if (this.hasLogged == 'false'){
            this.confirmationDialogService.confirm('Enter Admin Password', '')
            .then(() => {this.hasLogged = 'true'; console.log(this.hasLogged);})
            .catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));
          }*/
        /*if (this.listIndex == 1){
          this.service.postPanel(this.card.id);
        }
        else
        {
          if (this.hasLogged == 'false'){
            this.hasLogged = 'true';
            console.log(this.hasLogged);
            this.service.postTask(
              {
                "id": this.card.id,
                "title": this.card.title,
                "description": this.card.description,
                "isTaskDone": true,
                "owner": {
                    "id": 0,
                    "name": this.card.owner,
                    "email": this.card.email,
                },
                "ownerId": 0,
                "changeCount": this.card.changeCount
              }
            );
          }
        }*/
    }
    identifyCardBeingDragged(dragEvent) {
        dragEvent.dataTransfer.effectAllowed = 'move';
        dragEvent.dataTransfer.dropEffect = 'move';
        const transferObject = {
            'listIndex': this.listIndex,
            'cardIndex': this.cardIndex
        };
        dragEvent.dataTransfer.setData('text', JSON.stringify(transferObject));
    }
    allowCardDragToBeDropped(dragEvent) {
        dragEvent.dataTransfer.dropEffect = 'move';
        dragEvent.preventDefault();
    }
    identifyTitleBeingEdited(editEvent) {
        this.service.postTask({
            "id": this.card.id,
            "title": editEvent,
            "description": this.card.description,
            "isTaskDone": this.card.isTaskDone,
            "owner": {
                "id": 0,
                "name": this.card.owner,
                "email": this.card.email
            },
            "ownerId": 0,
            "changeCount": this.card.changeCount
        });
    }
    identifyDescriptionBeingEdited(editEvent) {
        this.service.postTask({
            "id": this.card.id,
            "title": this.card.title,
            "description": editEvent,
            "isTaskDone": this.card.isTaskDone,
            "owner": {
                "id": 0,
                "name": this.card.owner,
                "email": this.card.email
            },
            "ownerId": 0,
            "changeCount": this.card.changeCount
        });
    }
    identifyOwnerBeingEdited(editEvent) {
        this.service.postTask({
            "id": this.card.id,
            "title": this.card.title,
            "description": this.card.description,
            "isTaskDone": this.card.isTaskDone,
            "owner": {
                "id": 0,
                "name": editEvent,
                "email": this.card.email
            },
            "ownerId": 0,
            "changeCount": this.card.changeCount
        });
    }
    identifyEmailBeingEdited(editEvent) {
        this.service.postTask({
            "id": this.card.id,
            "title": this.card.title,
            "description": this.card.description,
            "isTaskDone": this.card.isTaskDone,
            "owner": {
                "id": 0,
                "name": this.card.owner,
                "email": editEvent
            },
            "ownerId": 0,
            "changeCount": this.card.changeCount
        });
    }
}
CardComponent.ɵfac = function CardComponent_Factory(t) { return new (t || CardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_panel_service__WEBPACK_IMPORTED_MODULE_1__["PanelService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_confirmation_dialog_confirmation_dialog_service__WEBPACK_IMPORTED_MODULE_2__["ConfirmationDialogService"])); };
CardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CardComponent, selectors: [["app-card-summary"]], inputs: { card: "card", listIndex: "listIndex", cardIndex: "cardIndex" }, decls: 6, vars: 13, consts: [[1, "card", 3, "draggable", "id", "dragstart", "dragleave", "dragover"], [1, "card-body"], [1, "card-title", 3, "appContentEdit", "draggable", "appContentEditChange"], [1, "text-muted", "card-subtitle", "mb-2", 3, "appContentEdit", "draggable", "appContentEditChange"]], template: function CardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dragstart", function CardComponent_Template_div_dragstart_0_listener($event) { return ctx.identifyCardBeingDragged($event); })("dragleave", function CardComponent_Template_div_dragleave_0_listener($event) { return ctx.chechChangePermission($event); })("dragover", function CardComponent_Template_div_dragover_0_listener($event) { return ctx.allowCardDragToBeDropped($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("appContentEditChange", function CardComponent_Template_h2_appContentEditChange_2_listener($event) { return ctx.card.title = $event; })("appContentEditChange", function CardComponent_Template_h2_appContentEditChange_2_listener($event) { return ctx.identifyTitleBeingEdited($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("appContentEditChange", function CardComponent_Template_h4_appContentEditChange_3_listener($event) { return ctx.card.description = $event; })("appContentEditChange", function CardComponent_Template_h4_appContentEditChange_3_listener($event) { return ctx.identifyDescriptionBeingEdited($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("appContentEditChange", function CardComponent_Template_h4_appContentEditChange_4_listener($event) { return ctx.card.owner = $event; })("appContentEditChange", function CardComponent_Template_h4_appContentEditChange_4_listener($event) { return ctx.identifyOwnerBeingEdited($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("appContentEditChange", function CardComponent_Template_h4_appContentEditChange_5_listener($event) { return ctx.card.email = $event; })("appContentEditChange", function CardComponent_Template_h4_appContentEditChange_5_listener($event) { return ctx.identifyEmailBeingEdited($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("id", "list-", ctx.listIndex, "-card-", ctx.cardIndex, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("draggable", "true");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("listIndex", ctx.listIndex)("cardIndex", ctx.cardIndex);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("appContentEdit", ctx.card.title)("draggable", "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("appContentEdit", ctx.card.description)("draggable", "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("appContentEdit", ctx.card.owner)("draggable", "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("appContentEdit", ctx.card.email)("draggable", "false");
    } }, directives: [src_app_directives_common_content_edit_directive__WEBPACK_IMPORTED_MODULE_3__["ContentEditDirective"]], styles: [".card[_ngcontent-%COMP%] {\r\n  margin-bottom: 10px;\r\n  width: 380px;\r\n  max-height: 200px;\r\n  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n.card-title[_ngcontent-%COMP%] {\r\n  font-size: 18px;\r\n  margin-bottom: 0.35rem;\r\n}\r\n\r\n.card-body[_ngcontent-%COMP%] {\r\n  max-height: 210px;\r\n}\r\n\r\np.card-text[_ngcontent-%COMP%] {\r\n  max-height: 65px;\r\n  overflow-y: hidden;\r\n  text-overflow: ellipsis;\r\n  font-size: 16px;\r\n  width: 360px;\r\n}\r\n\r\n.text-muted[_ngcontent-%COMP%] {\r\n  font-size: 16px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ib2FyZC9jYXJkL2NhcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLDBDQUEwQztBQUM1Qzs7QUFFQTtFQUNFLGVBQWU7RUFDZixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YsWUFBWTtBQUNkOztBQUNBO0VBQ0UsZUFBZTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYm9hcmQvY2FyZC9jYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICB3aWR0aDogMzgwcHg7XHJcbiAgbWF4LWhlaWdodDogMjAwcHg7XHJcbiAgYm94LXNoYWRvdzogMCAycHggNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG59XHJcblxyXG4uY2FyZC10aXRsZSB7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDAuMzVyZW07XHJcbn1cclxuXHJcbi5jYXJkLWJvZHkge1xyXG4gIG1heC1oZWlnaHQ6IDIxMHB4O1xyXG59XHJcbnAuY2FyZC10ZXh0IHtcclxuICBtYXgtaGVpZ2h0OiA2NXB4O1xyXG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcclxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgd2lkdGg6IDM2MHB4O1xyXG59XHJcbi50ZXh0LW11dGVkIHtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-card-summary',
                templateUrl: './card.component.html',
                styleUrls: ['./card.component.css']
            }]
    }], function () { return [{ type: _panel_service__WEBPACK_IMPORTED_MODULE_1__["PanelService"] }, { type: _confirmation_dialog_confirmation_dialog_service__WEBPACK_IMPORTED_MODULE_2__["ConfirmationDialogService"] }]; }, { card: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], listIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], cardIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _panel_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../panel.service */ "eRKv");



class HomeComponent {
    constructor(panelService) {
        this.panelService = panelService;
        this.tasks = [];
        panelService.getPanel().subscribe((data) => { this.tasks = data.tasks; });
    }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_panel_service__WEBPACK_IMPORTED_MODULE_1__["PanelService"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 0, vars: 0, template: function HomeComponent_Template(rf, ctx) { }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return [{ type: _panel_service__WEBPACK_IMPORTED_MODULE_1__["PanelService"] }]; }, null); })();


/***/ }),

/***/ "AytR":
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

/***/ "IV65":
/*!***********************************************!*\
  !*** ./src/app/components/model/list/list.ts ***!
  \***********************************************/
/*! exports provided: List */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "List", function() { return List; });
class List {
    constructor() {
        this.cards = [];
    }
    addCard(card) {
        if (this.isCardEmpty()) {
            this.cards = [];
        }
        this.cards.push(card);
    }
    removeCard(id) {
        if (this.isCardEmpty()) {
            return null;
        }
        const cardIndex = this.cards.findIndex(x => x.id === id);
        if (cardIndex > -1) {
            const cardInterfaces = this.cards.splice(cardIndex, 1);
            return cardInterfaces[0];
        }
        return null;
    }
    isCardEmpty() {
        return this.cards === undefined || this.cards === null;
    }
}


/***/ }),

/***/ "JYil":
/*!**********************************************************************!*\
  !*** ./src/app/confirmation-dialog/confirmation-dialog.component.ts ***!
  \**********************************************************************/
/*! exports provided: ConfirmationDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmationDialogComponent", function() { return ConfirmationDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");



class ConfirmationDialogComponent {
    constructor(activeModal) {
        this.activeModal = activeModal;
    }
    ngOnInit() {
    }
    accept() {
        this.activeModal.close(true);
    }
    dismiss() {
        this.activeModal.dismiss();
    }
}
ConfirmationDialogComponent.ɵfac = function ConfirmationDialogComponent_Factory(t) { return new (t || ConfirmationDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"])); };
ConfirmationDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ConfirmationDialogComponent, selectors: [["app-confirmation-dialog"]], inputs: { title: "title", btnOkText: "btnOkText" }, decls: 8, vars: 2, consts: [[1, "modal-header"], [1, "modal-title"], [1, "modal-body"], ["type", "password"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-primary", 3, "click"]], template: function ConfirmationDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfirmationDialogComponent_Template_button_click_6_listener() { return ctx.accept(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.btnOkText);
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConfirmationDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-confirmation-dialog',
                templateUrl: './confirmation-dialog.component.html',
            }]
    }], function () { return [{ type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"] }]; }, { title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], btnOkText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "P8gP":
/*!********************************************************************!*\
  !*** ./src/app/confirmation-dialog/confirmation-dialog.service.ts ***!
  \********************************************************************/
/*! exports provided: ConfirmationDialogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmationDialogService", function() { return ConfirmationDialogService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./confirmation-dialog.component */ "JYil");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");




class ConfirmationDialogService {
    constructor(modalService) {
        this.modalService = modalService;
    }
    confirm(title, message, btnOkText = 'OK', btnCancelText = 'Cancel', dialogSize = 'sm') {
        const modalRef = this.modalService.open(_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_1__["ConfirmationDialogComponent"], { size: dialogSize });
        modalRef.componentInstance.title = title;
        modalRef.componentInstance.message = message;
        modalRef.componentInstance.btnOkText = btnOkText;
        modalRef.componentInstance.btnCancelText = btnCancelText;
        return modalRef.result;
    }
}
ConfirmationDialogService.ɵfac = function ConfirmationDialogService_Factory(t) { return new (t || ConfirmationDialogService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"])); };
ConfirmationDialogService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ConfirmationDialogService, factory: ConfirmationDialogService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConfirmationDialogService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"] }]; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_board_board_board_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/board/board/board.component */ "kTLw");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class AppComponent {
    constructor() {
        this.title = 'SaiposToDo';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 5, vars: 0, consts: [[1, "clean-block", "call-to-action", "blue", "add-on", 2, "height", "20px", "padding", "20px", "margin-bottom", "15px", "text-align", "left !important", "justify-content", "left", "padding-top", "20px"], [2, "font-size", "22px", "height", "20px", "/*padding", "20px", "*/margin-bottom", "55px", "text-align", "left !important", "justify-content", "left", "margin-top", "-15px"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "To Do List");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-board");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "router-outlet");
    } }, directives: [_components_board_board_board_component__WEBPACK_IMPORTED_MODULE_1__["BoardComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "T65d":
/*!**************************************************************************!*\
  !*** ./src/app/components/common/context-menu/context-menu.component.ts ***!
  \**************************************************************************/
/*! exports provided: ContextMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContextMenuComponent", function() { return ContextMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



function ContextMenuComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContextMenuComponent_div_6_Template_a_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.emitCloseEvent(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ContextMenuComponent {
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.show = false;
        this.contextAction = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
    }
    emitCloseEvent() {
        this.contextAction.emit('DELETE');
        this.show = false;
    }
    closeOutClickOutside(event) {
        if (!this.elementRef.nativeElement.contains(event.target)) {
            this.show = false;
        }
    }
}
ContextMenuComponent.ɵfac = function ContextMenuComponent_Factory(t) { return new (t || ContextMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
ContextMenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContextMenuComponent, selectors: [["app-context-menu"]], hostBindings: function ContextMenuComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContextMenuComponent_click_HostBindingHandler($event) { return ctx.closeOutClickOutside($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"]);
    } }, outputs: { contextAction: "contextAction" }, decls: 8, vars: 1, consts: [[2, "position", "relative"], [1, "right", 2, "line-height", "5px", "float", "right", "cursor", "pointer", 3, "click"], ["width", "15", "height", "5"], ["cx", "2", "cy", "2", "r", "1.5", "fill", "grey"], ["cx", "7", "cy", "2", "r", "1.5", "fill", "grey"], ["cx", "12", "cy", "2", "r", "1.5", "fill", "grey"], [4, "ngIf"], [1, "clearfix"], [1, "dropdown-menu", "dropdown-menu-sm", "show", 2, "position", "absolute", "top", "5px", "left", "inherit", "right", "0px", "padding", ".15rem 0", "margin", ".125rem 0 0", "font-size", "0.8rem", "min-width", "5rem"], ["href", "#", 1, "dropdown-item", 3, "click"]], template: function ContextMenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContextMenuComponent_Template_div_click_1_listener() { return ctx.show = true; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "svg", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "circle", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "circle", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "circle", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ContextMenuComponent_div_6_Template, 4, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.show);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29tbW9uL2NvbnRleHQtbWVudS9jb250ZXh0LW1lbnUuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContextMenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-context-menu',
                templateUrl: './context-menu.component.html',
                styleUrls: ['./context-menu.component.css']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { contextAction: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], closeOutClickOutside: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['document:click', ['$event']]
        }] }); })();


/***/ }),

/***/ "WiOR":
/*!***********************************************!*\
  !*** ./src/app/components/model/card/card.ts ***!
  \***********************************************/
/*! exports provided: Card */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Card", function() { return Card; });
class Card {
    constructor(id, title, description, isTaskDone, owner, email, changeCount) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.isTaskDone = isTaskDone;
        this.owner = owner;
        this.email = email;
        this.changeCount = changeCount;
    }
}


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _panel_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./panel.service */ "eRKv");
/* harmony import */ var _components_board_board_board_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/board/board/board.component */ "kTLw");
/* harmony import */ var _components_board_list_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/board/list/list.component */ "/TPa");
/* harmony import */ var _components_board_card_card_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/board/card/card.component */ "2Ds6");
/* harmony import */ var src_app_directives_common_content_edit_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/directives/common/content-edit.directive */ "eDW+");
/* harmony import */ var _components_common_context_menu_context_menu_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/common/context-menu/context-menu.component */ "T65d");
/* harmony import */ var _confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./confirmation-dialog/confirmation-dialog.component */ "JYil");
/* harmony import */ var _confirmation_dialog_confirmation_dialog_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./confirmation-dialog/confirmation-dialog.service */ "P8gP");

















const appRoutes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] }
];
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_panel_service__WEBPACK_IMPORTED_MODULE_7__["PanelService"], _confirmation_dialog_confirmation_dialog_service__WEBPACK_IMPORTED_MODULE_14__["ConfirmationDialogService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(appRoutes),
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
        _components_board_board_board_component__WEBPACK_IMPORTED_MODULE_8__["BoardComponent"],
        _components_board_list_list_component__WEBPACK_IMPORTED_MODULE_9__["ListComponent"],
        _components_board_card_card_component__WEBPACK_IMPORTED_MODULE_10__["CardComponent"],
        src_app_directives_common_content_edit_directive__WEBPACK_IMPORTED_MODULE_11__["ContentEditDirective"],
        _components_common_context_menu_context_menu_component__WEBPACK_IMPORTED_MODULE_12__["ContextMenuComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
                    _components_board_board_board_component__WEBPACK_IMPORTED_MODULE_8__["BoardComponent"],
                    _components_board_list_list_component__WEBPACK_IMPORTED_MODULE_9__["ListComponent"],
                    _components_board_card_card_component__WEBPACK_IMPORTED_MODULE_10__["CardComponent"],
                    src_app_directives_common_content_edit_directive__WEBPACK_IMPORTED_MODULE_11__["ContentEditDirective"],
                    _components_common_context_menu_context_menu_component__WEBPACK_IMPORTED_MODULE_12__["ContextMenuComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(appRoutes),
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"]
                ],
                providers: [_panel_service__WEBPACK_IMPORTED_MODULE_7__["PanelService"], _confirmation_dialog_confirmation_dialog_service__WEBPACK_IMPORTED_MODULE_14__["ConfirmationDialogService"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
                entryComponents: [_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_13__["ConfirmationDialogComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "eDW+":
/*!*************************************************************!*\
  !*** ./src/app/directives/common/content-edit.directive.ts ***!
  \*************************************************************/
/*! exports provided: ContentEditDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentEditDirective", function() { return ContentEditDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ContentEditDirective {
    constructor(el, renderer2) {
        this.el = el;
        this.renderer2 = renderer2;
        this.appContentEditChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.ignoreChange = false;
    }
    ngOnInit() {
        this.makeContentEditable();
    }
    exitContentEditable($event) {
        this.el.nativeElement.blur();
        return false;
    }
    exitContentEditableWithoutChanges($event) {
        this.ignoreChange = true;
        this.el.nativeElement.blur();
        return false;
    }
    propagateChange() {
        if (!this.ignoreChange) {
            this.appContentEditChange.emit(this.el.nativeElement.innerText);
        }
        else {
            this.el.nativeElement.innerText = this.appContentEdit;
        }
        this.ignoreChange = false;
        this.exitChange();
    }
    exitChange() {
        this.renderer2.setAttribute(this.el.nativeElement, 'contenteditable', 'false');
        this.renderer2.removeClass(this.el.nativeElement, 'inline-edit');
    }
    makeContentEditable() {
        this.renderer2.appendChild(this.el.nativeElement, this.renderer2.createText(this.appContentEdit));
        this.renderer2.listen(this.el.nativeElement, 'dblclick', () => {
            this.renderer2.setAttribute(this.el.nativeElement, 'contenteditable', 'true');
            this.renderer2.addClass(this.el.nativeElement, 'inline-edit');
            this.el.nativeElement.focus();
        });
    }
}
ContentEditDirective.ɵfac = function ContentEditDirective_Factory(t) { return new (t || ContentEditDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"])); };
ContentEditDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: ContentEditDirective, selectors: [["", "appContentEdit", ""]], hostBindings: function ContentEditDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown.enter", function ContentEditDirective_keydown_enter_HostBindingHandler() { return ctx.exitContentEditable(); })("keydown.escape", function ContentEditDirective_keydown_escape_HostBindingHandler() { return ctx.exitContentEditableWithoutChanges(); })("blur", function ContentEditDirective_blur_HostBindingHandler() { return ctx.propagateChange(); });
    } }, inputs: { appContentEdit: "appContentEdit" }, outputs: { appContentEditChange: "appContentEditChange" } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContentEditDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[appContentEdit]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }]; }, { appContentEdit: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], appContentEditChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], exitContentEditable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['keydown.enter', []]
        }], exitContentEditableWithoutChanges: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['keydown.escape', []]
        }], propagateChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['blur', []]
        }] }); })();


/***/ }),

/***/ "eRKv":
/*!**********************************!*\
  !*** ./src/app/panel.service.ts ***!
  \**********************************/
/*! exports provided: PanelService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanelService", function() { return PanelService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class PanelService {
    constructor(http) {
        this.http = http;
        this.accessPointUrl = 'http://localhost:50162';
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' });
    }
    getAuth(password) {
        return this.http.get(this.accessPointUrl + '/Auth', password);
    }
    getPanel() {
        return this.http.get(this.accessPointUrl + '/Panel');
    }
    postPanel(id) {
        this.http.post(this.accessPointUrl + '/Panel', id).toPromise()
            .then(response => {
            return response;
        })
            .catch((error) => {
            alert(error.error);
            return error;
        });
    }
    postRandomize() {
        return this.http.post(this.accessPointUrl + '/Randomize', '').toPromise()
            .then(response => {
            return response;
        })
            .catch((error) => {
            return error;
        });
    }
    getTask(id) {
        return this.http.get(this.accessPointUrl + '/Task', id);
    }
    postTask(task) {
        this.http.post(this.accessPointUrl + '/Task', task).toPromise()
            .then(response => {
            return response;
        })
            .catch((error) => {
            alert(error.error);
            return error;
        });
    }
}
PanelService.ɵfac = function PanelService_Factory(t) { return new (t || PanelService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
PanelService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PanelService, factory: PanelService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PanelService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "kTLw":
/*!***********************************************************!*\
  !*** ./src/app/components/board/board/board.component.ts ***!
  \***********************************************************/
/*! exports provided: BoardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoardComponent", function() { return BoardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _model_list_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../model/list/list */ "IV65");
/* harmony import */ var _panel_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../panel.service */ "eRKv");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../list/list.component */ "/TPa");






function BoardComponent_app_list_6_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-list", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("moveCardAcrossList", function BoardComponent_app_list_6_Template_app_list_moveCardAcrossList_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.moveCardAcrossList($event); })("deleteList", function BoardComponent_app_list_6_Template_app_list_deleteList_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.deleteList($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const list_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("list", list_r1)("listIndex", i_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("listIndex", i_r2);
} }
class BoardComponent {
    constructor(panelService) {
        this.panelService = panelService;
        this.service = panelService;
    }
    ngOnInit() {
        this.lists = [];
        this.addList('Unfinished');
        this.addList('Finished');
    }
    idleClick() {
        this.panelService.postRandomize();
        this.ngOnInit();
    }
    addList(name) {
        const newList = new _model_list_list__WEBPACK_IMPORTED_MODULE_1__["List"]();
        newList.position = this.lists.length + 1;
        newList.name = `${name}`;
        if (this.lists === undefined) {
            this.lists = [];
        }
        this.lists.push(newList);
    }
    moveCardAcrossList(movementInformation) {
        const cardMoved = this.lists[movementInformation.fromListIdx].cards.splice(movementInformation.fromCardIdx, 1);
        this.lists[movementInformation.toListIdx].cards.splice(movementInformation.toCardIdx, 0, ...cardMoved);
    }
    deleteList(listIndex) {
        this.lists.splice(listIndex, 1);
    }
}
BoardComponent.ɵfac = function BoardComponent_Factory(t) { return new (t || BoardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_panel_service__WEBPACK_IMPORTED_MODULE_2__["PanelService"])); };
BoardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BoardComponent, selectors: [["app-board"]], decls: 7, vars: 1, consts: [[1, "container", 2, "max-width", "inherit", "width", "auto", "height", "100%"], [1, "col"], [3, "click"], [1, "row", 2, "height", "inherit"], [3, "list", "listIndex", "moveCardAcrossList", "deleteList", 4, "ngFor", "ngForOf"], [3, "list", "listIndex", "moveCardAcrossList", "deleteList"]], template: function BoardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BoardComponent_Template_button_click_2_listener() { return ctx.idleClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "I'm Idle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, BoardComponent_app_list_6_Template, 1, 3, "app-list", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.lists);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _list_list_component__WEBPACK_IMPORTED_MODULE_4__["ListComponent"]], styles: [".text-center.add-new-list[_ngcontent-%COMP%]:hover {\r\n  opacity: 0.9;\r\n  color: #40409a;\r\n}\r\n\r\n.text-center.add-new-list[_ngcontent-%COMP%] {\r\n  font-size: 24px;\r\n  color: #767676;\r\n  cursor: pointer;\r\n  opacity: 0.4;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ib2FyZC9ib2FyZC9ib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsY0FBYztFQUNkLGVBQWU7RUFDZixZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2JvYXJkL2JvYXJkL2JvYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGV4dC1jZW50ZXIuYWRkLW5ldy1saXN0OmhvdmVyIHtcclxuICBvcGFjaXR5OiAwLjk7XHJcbiAgY29sb3I6ICM0MDQwOWE7XHJcbn1cclxuXHJcbi50ZXh0LWNlbnRlci5hZGQtbmV3LWxpc3Qge1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxuICBjb2xvcjogIzc2NzY3NjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgb3BhY2l0eTogMC40O1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BoardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-board',
                templateUrl: './board.component.html',
                styleUrls: ['./board.component.css'],
            }]
    }], function () { return [{ type: _panel_service__WEBPACK_IMPORTED_MODULE_2__["PanelService"] }]; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "xF7O":
/*!***************************************************!*\
  !*** ./src/app/components/model/card/movement.ts ***!
  \***************************************************/
/*! exports provided: Movement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Movement", function() { return Movement; });
class Movement {
    constructor(fromListIdx, toListIdx, fromCardIdx, toCardIdx) {
        this.fromListIdx = fromListIdx;
        this.toListIdx = toListIdx;
        this.fromCardIdx = fromCardIdx;
        this.toCardIdx = toCardIdx;
    }
}


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map