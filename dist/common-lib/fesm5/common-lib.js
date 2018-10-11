import { Component, ViewChild, Input, NgModule, Output, EventEmitter, ElementRef, Renderer, Injectable, Injector, defineInjectable, inject } from '@angular/core';
import { MatPaginator, MatSort, MatSidenavModule, MatToolbarModule, MatIconModule, MatListModule, MatCardModule, MatButtonModule, MatTableModule, MatDialogModule, MatInputModule, MatSelectModule, MatPaginatorModule, MatSortModule, MatCheckboxModule, MatAutocompleteModule, MatDatepickerModule, MatFormFieldModule, MatRadioModule, MatSliderModule, MatSlideToggleModule, MatMenuModule, MatGridListModule, MatStepperModule, MatTabsModule, MatExpansionModule, MatButtonToggleModule, MatChipsModule, MatProgressSpinnerModule, MatProgressBarModule, MatTooltipModule, MatSnackBarModule, MatNativeDateModule } from '@angular/material';
import { CommonModule } from '@angular/common';
import { CdkTableModule } from '@angular/cdk/table';
import { __extends, __spread } from 'tslib';
import { DataSource, SelectionModel } from '@angular/cdk/collections';
import { map } from 'rxjs/operators';
import { of, merge } from 'rxjs';
import { HttpClientModule, HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var DataTableComponent = /** @class */ (function () {
    function DataTableComponent() {
    }
    /**
     * @return {?}
     */
    DataTableComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    Object.defineProperty(DataTableComponent.prototype, "data", {
        set: /**
         * @param {?} _data
         * @return {?}
         */
        function (_data) {
            this.displayedColumns = Object.keys(_data[0]);
            this.dataSource = _data;
        },
        enumerable: true,
        configurable: true
    });
    DataTableComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-data-table',
                    template: "<div class=\"mat-elevation-z8 example-container\">\n              <table mat-table #table [dataSource]=\"dataSource\" matSort>\n                <ng-container *ngFor=\"let disCol of displayedColumns;\" matColumnDef=\"{{disCol}}\">\n                  <th #header mat-header-cell mat-sort-header *matHeaderCellDef> {{disCol}} </th>\n                  <td mat-cell *matCellDef=\"let element\"> {{element[disCol]}} </td>\n                </ng-container>\n                <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n                <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n              </table>\n              <mat-paginator [pageSizeOptions]=\"[5, 10, 20]\" showFirstLastButtons></mat-paginator>\n            </div>"
                }] }
    ];
    /** @nocollapse */
    DataTableComponent.ctorParameters = function () { return []; };
    DataTableComponent.propDecorators = {
        paginator: [{ type: ViewChild, args: [MatPaginator,] }],
        sort: [{ type: ViewChild, args: [MatSort,] }],
        data: [{ type: Input }]
    };
    return DataTableComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var PagerComponent = /** @class */ (function () {
    function PagerComponent() {
    }
    /**
     * @return {?}
     */
    PagerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    PagerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-pager',
                    template: "<p>Pager works</p>"
                }] }
    ];
    /** @nocollapse */
    PagerComponent.ctorParameters = function () { return []; };
    return PagerComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var CommonMaterialModule = /** @class */ (function () {
    function CommonMaterialModule() {
    }
    CommonMaterialModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        CdkTableModule,
                        MatCheckboxModule,
                        MatCheckboxModule,
                        MatButtonModule,
                        MatInputModule,
                        MatAutocompleteModule,
                        MatDatepickerModule,
                        MatFormFieldModule,
                        MatRadioModule,
                        MatSelectModule,
                        MatSliderModule,
                        MatSlideToggleModule,
                        MatMenuModule,
                        MatSidenavModule,
                        MatToolbarModule,
                        MatListModule,
                        MatGridListModule,
                        MatCardModule,
                        MatStepperModule,
                        MatTabsModule,
                        MatExpansionModule,
                        MatButtonToggleModule,
                        MatChipsModule,
                        MatIconModule,
                        MatProgressSpinnerModule,
                        MatProgressBarModule,
                        MatDialogModule,
                        MatTooltipModule,
                        MatSnackBarModule,
                        MatTableModule,
                        MatSortModule,
                        MatPaginatorModule
                    ],
                    exports: [
                        CommonModule,
                        CdkTableModule,
                        MatCheckboxModule,
                        MatCheckboxModule,
                        MatButtonModule,
                        MatInputModule,
                        MatAutocompleteModule,
                        MatDatepickerModule,
                        MatFormFieldModule,
                        MatRadioModule,
                        MatSelectModule,
                        MatSliderModule,
                        MatSlideToggleModule,
                        MatMenuModule,
                        MatSidenavModule,
                        MatToolbarModule,
                        MatListModule,
                        MatGridListModule,
                        MatCardModule,
                        MatStepperModule,
                        MatTabsModule,
                        MatExpansionModule,
                        MatButtonToggleModule,
                        MatChipsModule,
                        MatIconModule,
                        MatProgressSpinnerModule,
                        MatProgressBarModule,
                        MatDialogModule,
                        MatTooltipModule,
                        MatSnackBarModule,
                        MatTableModule,
                        MatSortModule,
                        MatPaginatorModule,
                        MatNativeDateModule
                    ],
                    declarations: []
                },] }
    ];
    return CommonMaterialModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * Data source for the DataTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
var /**
 * Data source for the DataTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
DataTableDataSource = /** @class */ (function (_super) {
    __extends(DataTableDataSource, _super);
    function DataTableDataSource(paginator, _data, sort) {
        var _this = _super.call(this) || this;
        _this.paginator = paginator;
        _this._data = _data;
        _this.sort = sort;
        _this.data = _data;
        return _this;
    }
    /**
     * Connect this data source to the table. The table will only update when
     * the returned stream emits new items.
     * @returns A stream of the items to be rendered.
     */
    /**
     * Connect this data source to the table. The table will only update when
     * the returned stream emits new items.
     * @return {?} A stream of the items to be rendered.
     */
    DataTableDataSource.prototype.connect = /**
     * Connect this data source to the table. The table will only update when
     * the returned stream emits new items.
     * @return {?} A stream of the items to be rendered.
     */
    function () {
        var _this = this;
        /** @type {?} */
        var dataMutations = [
            of(this.data),
            this.paginator.page,
            this.sort.sortChange
        ];
        // Set the paginators length
        this.paginator.length = this.data.length;
        return merge.apply(void 0, __spread(dataMutations)).pipe(map(function () {
            return _this.getPagedData(_this.getSortedData(__spread(_this.data)));
        }));
    };
    /**
     *  Called when the table is being destroyed. Use this function, to clean up
     * any open connections or free any held resources that were set up during connect.
     */
    /**
     *  Called when the table is being destroyed. Use this function, to clean up
     * any open connections or free any held resources that were set up during connect.
     * @return {?}
     */
    DataTableDataSource.prototype.disconnect = /**
     *  Called when the table is being destroyed. Use this function, to clean up
     * any open connections or free any held resources that were set up during connect.
     * @return {?}
     */
    function () { };
    /**
     * Paginate the data (client-side). If you're using server-side pagination,
     * this would be replaced by requesting the appropriate data from the server.
     * @param {?} data
     * @return {?}
     */
    DataTableDataSource.prototype.getPagedData = /**
     * Paginate the data (client-side). If you're using server-side pagination,
     * this would be replaced by requesting the appropriate data from the server.
     * @param {?} data
     * @return {?}
     */
    function (data) {
        /** @type {?} */
        var startIndex = this.paginator.pageIndex * this.paginator.pageSize;
        return data.splice(startIndex, this.paginator.pageSize);
    };
    /**
     * Sort the data (client-side). If you're using server-side sorting,
     * this would be replaced by requesting the appropriate data from the server.
     * @param {?} data
     * @return {?}
     */
    DataTableDataSource.prototype.getSortedData = /**
     * Sort the data (client-side). If you're using server-side sorting,
     * this would be replaced by requesting the appropriate data from the server.
     * @param {?} data
     * @return {?}
     */
    function (data) {
        var _this = this;
        if (!this.sort.active || this.sort.direction === '') {
            return data;
        }
        return data.sort(function (a, b) {
            /** @type {?} */
            var isAsc = _this.sort.direction === 'asc';
            switch (_this.sort.active) {
                case 'name': return compare(a.name, b.name, isAsc);
                case 'id': return compare(+a.id, +b.id, isAsc);
                default: return 0;
            }
        });
    };
    return DataTableDataSource;
}(DataSource));
/**
 * Simple sort comparator for example ID/Name columns (for client-side sorting).
 * @param {?} a
 * @param {?} b
 * @param {?} isAsc
 * @return {?}
 */
function compare(a, b, isAsc) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var DataGridComponent = /** @class */ (function () {
    function DataGridComponent(hCell, renderer) {
        this.hCell = hCell;
        this.renderer = renderer;
        this.selectAll = new EventEmitter();
        this.selection = new SelectionModel(true, []);
    }
    /**
     * @return {?}
     */
    DataGridComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    Object.defineProperty(DataGridComponent.prototype, "data", {
        set: /**
         * @param {?} _data
         * @return {?}
         */
        function (_data) {
            this.dataSource = new DataTableDataSource(this.paginator, _data, this.sort);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataGridComponent.prototype, "id", {
        set: /**
         * @param {?} id
         * @return {?}
         */
        function (id) { },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataGridComponent.prototype, "columns", {
        set: /**
         * @param {?} _columns
         * @return {?}
         */
        function (_columns) {
            /** @type {?} */
            var header = [];
            /** @type {?} */
            var fileds = [];
            _columns.forEach(function (element) {
                header.push(element);
                fileds.push(element.field);
            });
            this.displayedColumns = header;
            this.dataFileds = fileds;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    DataGridComponent.prototype.isAllSelected = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var numSelected = this.selection.selected.length;
        /** @type {?} */
        var numRows = this.dataSource.data.length;
        return numSelected == numRows;
    };
    /** Selects all rows if they are not all selected; otherwise clear selection. */
    /**
     * Selects all rows if they are not all selected; otherwise clear selection.
     * @return {?}
     */
    DataGridComponent.prototype.masterToggle = /**
     * Selects all rows if they are not all selected; otherwise clear selection.
     * @return {?}
     */
    function () {
        var _this = this;
        this.isAllSelected() ?
            this.selection.clear() :
            this.dataSource.data.forEach(function (row) { return _this.selection.select(row); });
        console.log(this.selection);
        this.selectAll.emit(null);
    };
    /**
     * @param {?} row
     * @return {?}
     */
    DataGridComponent.prototype.isSelected = /**
     * @param {?} row
     * @return {?}
     */
    function (row) {
        this.selection.toggle(row);
        console.log(row);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    DataGridComponent.prototype.onMouseDown = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.start = event.target;
        this.pressed = true;
        this.startX = event.x;
        //console.log(event.target.offsetParent.cellIndex)
        // console.log(this.hCell.nativeElement.querySelector("thead>tr").children[2])
        this.startWidth = event.target.offsetParent.offsetWidth;
        this.initResizableColumns();
    };
    /**
     * @return {?}
     */
    DataGridComponent.prototype.initResizableColumns = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.renderer.listenGlobal('body', 'mousemove', function (event) {
            if (_this.pressed) {
                /** @type {?} */
                var width = _this.startWidth + (event.x - _this.startX);
                /** @type {?} */
                var index = event.target.offsetParent.cellIndex;
                /** @type {?} */
                var colHeaderEle = _this.hCell.nativeElement.querySelector("thead>tr").children[index];
                colHeaderEle.style.width = width + 'px';
                /** @type {?} */
                var colDataEle = _this.hCell.nativeElement.querySelector("tbody>tr").children[index];
                colDataEle.style.width = width + 'px';
            }
        });
        this.renderer.listenGlobal('body', 'mouseup', function (event) {
            if (_this.pressed) {
                _this.pressed = false;
            }
        });
    };
    DataGridComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-data-grid',
                    template: "<div class=\"mat-elevation-z8\">\n  <div class=\"example-container\">\n    <table  mat-table #table [dataSource]=\"dataSource\" matSort aria-label=\"Elements\">\n      \n      <ng-container [matColumnDef]=\"cols.field\" *ngFor=\"let cols of displayedColumns\" >\n          <ng-container *ngIf=\"cols.title=='check'\">\n              <th mat-header-cell *matHeaderCellDef  [ngClass]=\"{'mat-table-sticky':cols.freez}\">\n                <mat-checkbox (change)=\"$event ? masterToggle() : null\"\n                              [checked]=\"selection.hasValue() && isAllSelected()\"\n                              [indeterminate]=\"selection.hasValue() && !isAllSelected()\">\n                </mat-checkbox>\n              </th>\n              <td mat-cell  mat-cell *matCellDef=\"let row\" [ngClass]=\"{'mat-table-sticky':cols.freez}\">\n                <mat-checkbox (click)=\"$event.stopPropagation()\"\n                              (change)=\"$event ? isSelected(row) : null\"\n                              [checked]=\"selection.isSelected(row)\">\n                </mat-checkbox>\n              </td>\n            </ng-container>\n        <th #header mat-header-cell *matHeaderCellDef mat-sort-header sticky [ngClass]=\"{'mat-table-sticky':cols.freez}\"> {{cols.title}} <span \n          class = \"ui-column-resizer\" \n          (mousedown) = \"onMouseDown($event)\">\n       </span></th>\n        <td mat-cell *matCellDef=\"let element\" [ngClass]=\"{'mat-table-sticky':cols.freez}\"> {{element[cols.field]}} </td>\n      </ng-container>\n      <tr mat-header-row *matHeaderRowDef=\"dataFileds\"></tr>\n      <tr mat-row *matRowDef=\"let row; columns: dataFileds;\">\n      </tr>\n    </table>\n  </div>\n    <mat-paginator #paginator\n      [length]=\"dataSource.data.length\"\n      [pageIndex]=\"0\"\n      [pageSize]=\"50\"\n      [pageSizeOptions]=\"[5, 10, 20, 40]\">\n    </mat-paginator>\n  </div>"
                }] }
    ];
    /** @nocollapse */
    DataGridComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer }
    ]; };
    DataGridComponent.propDecorators = {
        data: [{ type: Input }],
        id: [{ type: Input }],
        columns: [{ type: Input }],
        selectAll: [{ type: Output }],
        paginator: [{ type: ViewChild, args: [MatPaginator,] }],
        sort: [{ type: ViewChild, args: [MatSort,] }]
    };
    return DataGridComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var CommonLibModule = /** @class */ (function () {
    function CommonLibModule() {
    }
    CommonLibModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonMaterialModule,
                        HttpClientModule
                    ],
                    declarations: [
                        DataTableComponent,
                        PagerComponent,
                        DataGridComponent
                    ],
                    exports: [
                        DataTableComponent,
                        PagerComponent,
                        DataGridComponent,
                        CommonMaterialModule
                    ]
                },] }
    ];
    return CommonLibModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var HttpService = /** @class */ (function () {
    function HttpService(_http) {
        this._http = _http;
        this.baseUrl = "http://localhost:8081/";
    }
    Object.defineProperty(HttpService.prototype, "procurantContext", {
        get: /**
         * @return {?}
         */
        function () {
            //this.baseUrl = this.globalConfig.baseApiUrl_Procurant;
            return this.getContext();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    HttpService.prototype.getContext = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var context = {
            url: this.url.bind(this),
            addParam: this.addParam.bind(this),
            get: this.get.bind(this),
            post: this.post.bind(this),
            put: this.put.bind(this),
            delete: this.delete.bind(this)
        };
        return context;
    };
    /**
     * @param {?=} contentType
     * @return {?}
     */
    HttpService.prototype.createHeader = /**
     * @param {?=} contentType
     * @return {?}
     */
    function (contentType) {
        /** @type {?} */
        var headers = new HttpHeaders();
        headers.append('Content-Type', contentType ? contentType : 'application/json');
        return headers;
    };
    /**
     * @param {?} url
     * @return {?}
     */
    HttpService.prototype.url = /**
     * @param {?} url
     * @return {?}
     */
    function (url) {
        this._url = this.baseUrl + url;
        return this;
    };
    /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    HttpService.prototype.addParam = /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    function (key, value) {
        if (value != undefined) {
            if (this._url.indexOf("?") >= 0)
                this._url += "&" + key + "=" + value;
            else
                this._url += "?" + key + "=" + value;
        }
        return this;
    };
    /**
     * @param {?=} contentType
     * @return {?}
     */
    HttpService.prototype.get = /**
     * @param {?=} contentType
     * @return {?}
     */
    function (contentType) {
        /** @type {?} */
        var headers = this.createHeader(contentType);
        if (this._url) {
            return this._http.get(this._url, {
                headers: headers
            });
        }
    };
    /**
     * @param {?} data
     * @param {?=} contentType
     * @return {?}
     */
    HttpService.prototype.post = /**
     * @param {?} data
     * @param {?=} contentType
     * @return {?}
     */
    function (data, contentType) {
        /** @type {?} */
        var headers = this.createHeader(contentType);
        if (this._url) {
            return this._http.post(this._url, data, {
                headers: headers
            });
        }
    };
    /**
     * @param {?} data
     * @param {?=} contentType
     * @return {?}
     */
    HttpService.prototype.put = /**
     * @param {?} data
     * @param {?=} contentType
     * @return {?}
     */
    function (data, contentType) {
        /** @type {?} */
        var headers = this.createHeader(contentType);
        if (this._url) {
            return this._http.put(this._url, data, {
                headers: headers
            });
        }
    };
    /**
     * @param {?=} contentType
     * @return {?}
     */
    HttpService.prototype.delete = /**
     * @param {?=} contentType
     * @return {?}
     */
    function (contentType) {
        /** @type {?} */
        var headers = this.createHeader(contentType);
        if (this._url) {
            return this._http.delete(this._url, {
                headers: headers
            });
        }
    };
    /**
     * @param {?} url
     * @return {?}
     */
    HttpService.prototype.setBaseUrl = /**
     * @param {?} url
     * @return {?}
     */
    function (url) {
        this.baseUrl = url;
    };
    /**
     * @return {?}
     */
    HttpService.prototype.getBaseUrl = /**
     * @return {?}
     */
    function () {
        return this.baseUrl;
    };
    HttpService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    HttpService.ctorParameters = function () { return [
        { type: HttpClient }
    ]; };
    /** @nocollapse */ HttpService.ngInjectableDef = defineInjectable({ factory: function HttpService_Factory() { return new HttpService(inject(HttpClient)); }, token: HttpService, providedIn: "root" });
    return HttpService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var GlobalErrorHandlerService = /** @class */ (function () {
    function GlobalErrorHandlerService(injector) {
        this.injector = injector;
    }
    /**
     * @param {?} error
     * @return {?}
     */
    GlobalErrorHandlerService.prototype.handleError = /**
     * @param {?} error
     * @return {?}
     */
    function (error) {
        /** @type {?} */
        var router = this.injector.get(Router);
        console.log('URL: ' + router.url);
        if (error instanceof HttpErrorResponse) {
            //Backend returns unsuccessful response codes such as 404, 500 etc.
            console.error('Backend returned status code: ', error.status);
            console.error('Response body:', error.message);
        }
        else {
            //A client-side or network error occurred.
            console.error('An error occurred:', error.message);
        }
        router.navigate(['/error']);
    };
    GlobalErrorHandlerService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    GlobalErrorHandlerService.ctorParameters = function () { return [
        { type: Injector }
    ]; };
    return GlobalErrorHandlerService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { CommonLibModule, CommonMaterialModule, HttpService, GlobalErrorHandlerService, DataGridComponent as ɵc, DataTableComponent as ɵa, PagerComponent as ɵb };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLWxpYi5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vY29tbW9uLWxpYi9saWIvZGF0YS10YWJsZS9kYXRhLXRhYmxlLmNvbXBvbmVudC50cyIsIm5nOi8vY29tbW9uLWxpYi9saWIvZGF0YS10YWJsZS9wYWdlci5jb21wb25lbnQudHMiLCJuZzovL2NvbW1vbi1saWIvbGliL2NvbW1vbi1tYXRlcmlhbC5tb2R1bGUudHMiLCJuZzovL2NvbW1vbi1saWIvbGliL2RhdGEtZ3JpZC9kYXRhLXRhYmxlLWRhdGFzb3VyY2UudHMiLCJuZzovL2NvbW1vbi1saWIvbGliL2RhdGEtZ3JpZC9kYXRhLWdyaWQuY29tcG9uZW50LnRzIiwibmc6Ly9jb21tb24tbGliL2xpYi9jb21tb24tbGliLm1vZHVsZS50cyIsIm5nOi8vY29tbW9uLWxpYi9saWIvc2VydmljZS9odHRwLnNlcnZpY2UudHMiLCJuZzovL2NvbW1vbi1saWIvbGliL2dsb2JhbC1lcnJvci1oYW5kbGVyLnNlcnZpY2UudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hdFBhZ2luYXRvciwgTWF0U29ydCB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLWRhdGEtdGFibGUnLFxuICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJtYXQtZWxldmF0aW9uLXo4IGV4YW1wbGUtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgIDx0YWJsZSBtYXQtdGFibGUgI3RhYmxlIFtkYXRhU291cmNlXT1cImRhdGFTb3VyY2VcIiBtYXRTb3J0PlxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGRpc0NvbCBvZiBkaXNwbGF5ZWRDb2x1bW5zO1wiIG1hdENvbHVtbkRlZj1cInt7ZGlzQ29sfX1cIj5cbiAgICAgICAgICAgICAgICAgIDx0aCAjaGVhZGVyIG1hdC1oZWFkZXItY2VsbCBtYXQtc29ydC1oZWFkZXIgKm1hdEhlYWRlckNlbGxEZWY+IHt7ZGlzQ29sfX0gPC90aD5cbiAgICAgICAgICAgICAgICAgIDx0ZCBtYXQtY2VsbCAqbWF0Q2VsbERlZj1cImxldCBlbGVtZW50XCI+IHt7ZWxlbWVudFtkaXNDb2xdfX0gPC90ZD5cbiAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8dHIgbWF0LWhlYWRlci1yb3cgKm1hdEhlYWRlclJvd0RlZj1cImRpc3BsYXllZENvbHVtbnNcIj48L3RyPlxuICAgICAgICAgICAgICAgIDx0ciBtYXQtcm93ICptYXRSb3dEZWY9XCJsZXQgcm93OyBjb2x1bW5zOiBkaXNwbGF5ZWRDb2x1bW5zO1wiPjwvdHI+XG4gICAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgICAgIDxtYXQtcGFnaW5hdG9yIFtwYWdlU2l6ZU9wdGlvbnNdPVwiWzUsIDEwLCAyMF1cIiBzaG93Rmlyc3RMYXN0QnV0dG9ucz48L21hdC1wYWdpbmF0b3I+XG4gICAgICAgICAgICA8L2Rpdj5gXG59KVxuZXhwb3J0IGNsYXNzIERhdGFUYWJsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIFxuICBkYXRhU291cmNlOiBhbnlbXTtcbiAgZGlzcGxheWVkQ29sdW1uczogQXJyYXk8c3RyaW5nPjtcbiAgQFZpZXdDaGlsZChNYXRQYWdpbmF0b3IpIHBhZ2luYXRvcjogTWF0UGFnaW5hdG9yO1xuICBAVmlld0NoaWxkKE1hdFNvcnQpIHNvcnQ6IE1hdFNvcnQ7XG4gIFxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkgeyB9XG5cbiAgQElucHV0KCkgc2V0IGRhdGEoX2RhdGE6IGFueVtdKSB7XG4gICAgdGhpcy5kaXNwbGF5ZWRDb2x1bW5zID0gT2JqZWN0LmtleXMoX2RhdGFbMF0pO1xuICAgIHRoaXMuZGF0YVNvdXJjZSA9IF9kYXRhO1xuICB9XG5cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hdFBhZ2luYXRvciwgTWF0VGFibGVEYXRhU291cmNlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItcGFnZXInLFxuICB0ZW1wbGF0ZTogYDxwPlBhZ2VyIHdvcmtzPC9wPmBcbn0pXG5leHBvcnQgY2xhc3MgUGFnZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG5jb25zdHJ1Y3RvcigpIHsgfVxuXG5uZ09uSW5pdCgpIHtcbn1cblxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge1xuICBNYXRTaWRlbmF2TW9kdWxlLFxuICBNYXRUb29sYmFyTW9kdWxlLFxuICBNYXRJY29uTW9kdWxlLFxuICBNYXRMaXN0TW9kdWxlLFxuICBNYXRDYXJkTW9kdWxlLFxuICBNYXRCdXR0b25Nb2R1bGUsXG4gIE1hdFRhYmxlTW9kdWxlLFxuICBNYXREaWFsb2dNb2R1bGUsXG4gIE1hdElucHV0TW9kdWxlLFxuICBNYXRTZWxlY3RNb2R1bGUsXG4gIE1hdFBhZ2luYXRvck1vZHVsZSxcbiAgTWF0U29ydE1vZHVsZSxcbiAgTWF0Q2hlY2tib3hNb2R1bGUsXG4gIE1hdEF1dG9jb21wbGV0ZU1vZHVsZSxcbiAgTWF0RGF0ZXBpY2tlck1vZHVsZSxcbiAgTWF0Rm9ybUZpZWxkTW9kdWxlLFxuICBNYXRSYWRpb01vZHVsZSxcbiAgTWF0U2xpZGVyTW9kdWxlLFxuICBNYXRTbGlkZVRvZ2dsZU1vZHVsZSxcbiAgTWF0TWVudU1vZHVsZSxcbiAgTWF0R3JpZExpc3RNb2R1bGUsXG4gIE1hdFN0ZXBwZXJNb2R1bGUsXG4gIE1hdFRhYnNNb2R1bGUsXG4gIE1hdEV4cGFuc2lvbk1vZHVsZSxcbiAgTWF0QnV0dG9uVG9nZ2xlTW9kdWxlLFxuICBNYXRDaGlwc01vZHVsZSxcbiAgTWF0UHJvZ3Jlc3NTcGlubmVyTW9kdWxlLFxuICBNYXRQcm9ncmVzc0Jhck1vZHVsZSxcbiAgTWF0VG9vbHRpcE1vZHVsZSxcbiAgTWF0U25hY2tCYXJNb2R1bGUsXG4gIE1hdE5hdGl2ZURhdGVNb2R1bGUsXG59IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcbmltcG9ydCB7IENka1RhYmxlTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3RhYmxlJztcbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgQ2RrVGFibGVNb2R1bGUsXG4gICAgTWF0Q2hlY2tib3hNb2R1bGUsXG4gICAgTWF0Q2hlY2tib3hNb2R1bGUsXG4gICAgTWF0QnV0dG9uTW9kdWxlLFxuICAgIE1hdElucHV0TW9kdWxlLFxuICAgIE1hdEF1dG9jb21wbGV0ZU1vZHVsZSxcbiAgICBNYXREYXRlcGlja2VyTW9kdWxlLFxuICAgIE1hdEZvcm1GaWVsZE1vZHVsZSxcbiAgICBNYXRSYWRpb01vZHVsZSxcbiAgICBNYXRTZWxlY3RNb2R1bGUsXG4gICAgTWF0U2xpZGVyTW9kdWxlLFxuICAgIE1hdFNsaWRlVG9nZ2xlTW9kdWxlLFxuICAgIE1hdE1lbnVNb2R1bGUsXG4gICAgTWF0U2lkZW5hdk1vZHVsZSxcbiAgICBNYXRUb29sYmFyTW9kdWxlLFxuICAgIE1hdExpc3RNb2R1bGUsXG4gICAgTWF0R3JpZExpc3RNb2R1bGUsXG4gICAgTWF0Q2FyZE1vZHVsZSxcbiAgICBNYXRTdGVwcGVyTW9kdWxlLFxuICAgIE1hdFRhYnNNb2R1bGUsXG4gICAgTWF0RXhwYW5zaW9uTW9kdWxlLFxuICAgIE1hdEJ1dHRvblRvZ2dsZU1vZHVsZSxcbiAgICBNYXRDaGlwc01vZHVsZSxcbiAgICBNYXRJY29uTW9kdWxlLFxuICAgIE1hdFByb2dyZXNzU3Bpbm5lck1vZHVsZSxcbiAgICBNYXRQcm9ncmVzc0Jhck1vZHVsZSxcbiAgICBNYXREaWFsb2dNb2R1bGUsXG4gICAgTWF0VG9vbHRpcE1vZHVsZSxcbiAgICBNYXRTbmFja0Jhck1vZHVsZSxcbiAgICBNYXRUYWJsZU1vZHVsZSxcbiAgICBNYXRTb3J0TW9kdWxlLFxuICAgIE1hdFBhZ2luYXRvck1vZHVsZVxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIENka1RhYmxlTW9kdWxlLFxuICAgIE1hdENoZWNrYm94TW9kdWxlLFxuICAgIE1hdENoZWNrYm94TW9kdWxlLFxuICAgIE1hdEJ1dHRvbk1vZHVsZSxcbiAgICBNYXRJbnB1dE1vZHVsZSxcbiAgICBNYXRBdXRvY29tcGxldGVNb2R1bGUsXG4gICAgTWF0RGF0ZXBpY2tlck1vZHVsZSxcbiAgICBNYXRGb3JtRmllbGRNb2R1bGUsXG4gICAgTWF0UmFkaW9Nb2R1bGUsXG4gICAgTWF0U2VsZWN0TW9kdWxlLFxuICAgIE1hdFNsaWRlck1vZHVsZSxcbiAgICBNYXRTbGlkZVRvZ2dsZU1vZHVsZSxcbiAgICBNYXRNZW51TW9kdWxlLFxuICAgIE1hdFNpZGVuYXZNb2R1bGUsXG4gICAgTWF0VG9vbGJhck1vZHVsZSxcbiAgICBNYXRMaXN0TW9kdWxlLFxuICAgIE1hdEdyaWRMaXN0TW9kdWxlLFxuICAgIE1hdENhcmRNb2R1bGUsXG4gICAgTWF0U3RlcHBlck1vZHVsZSxcbiAgICBNYXRUYWJzTW9kdWxlLFxuICAgIE1hdEV4cGFuc2lvbk1vZHVsZSxcbiAgICBNYXRCdXR0b25Ub2dnbGVNb2R1bGUsXG4gICAgTWF0Q2hpcHNNb2R1bGUsXG4gICAgTWF0SWNvbk1vZHVsZSxcbiAgICBNYXRQcm9ncmVzc1NwaW5uZXJNb2R1bGUsXG4gICAgTWF0UHJvZ3Jlc3NCYXJNb2R1bGUsXG4gICAgTWF0RGlhbG9nTW9kdWxlLFxuICAgIE1hdFRvb2x0aXBNb2R1bGUsXG4gICAgTWF0U25hY2tCYXJNb2R1bGUsXG4gICAgTWF0VGFibGVNb2R1bGUsXG4gICAgTWF0U29ydE1vZHVsZSxcbiAgICBNYXRQYWdpbmF0b3JNb2R1bGUsXG4gICAgTWF0TmF0aXZlRGF0ZU1vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIENvbW1vbk1hdGVyaWFsTW9kdWxlIHsgfVxuIiwiaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2xsZWN0aW9ucyc7XG5pbXBvcnQgeyBNYXRQYWdpbmF0b3IsIE1hdFNvcnQgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiBhcyBvYnNlcnZhYmxlT2YsIG1lcmdlIH0gZnJvbSAncnhqcyc7XG5cbi8vIFRPRE86IFJlcGxhY2UgdGhpcyB3aXRoIHlvdXIgb3duIGRhdGEgbW9kZWwgdHlwZVxuZXhwb3J0IGludGVyZmFjZSBEYXRhVGFibGVJdGVtIHtcbiAgbmFtZTogc3RyaW5nO1xuICBpZDogbnVtYmVyO1xufVxuXG5cbi8qKlxuICogRGF0YSBzb3VyY2UgZm9yIHRoZSBEYXRhVGFibGUgdmlldy4gVGhpcyBjbGFzcyBzaG91bGRcbiAqIGVuY2Fwc3VsYXRlIGFsbCBsb2dpYyBmb3IgZmV0Y2hpbmcgYW5kIG1hbmlwdWxhdGluZyB0aGUgZGlzcGxheWVkIGRhdGFcbiAqIChpbmNsdWRpbmcgc29ydGluZywgcGFnaW5hdGlvbiwgYW5kIGZpbHRlcmluZykuXG4gKi9cbmV4cG9ydCBjbGFzcyBEYXRhVGFibGVEYXRhU291cmNlIGV4dGVuZHMgRGF0YVNvdXJjZTxhbnk+IHtcbiAgcHVibGljIGRhdGE6IGFueVtdO1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBhZ2luYXRvcjogTWF0UGFnaW5hdG9yLCBwcml2YXRlIF9kYXRhOiBhbnlbXSxwcml2YXRlIHNvcnQ6IE1hdFNvcnQpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuZGF0YSA9IF9kYXRhO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbm5lY3QgdGhpcyBkYXRhIHNvdXJjZSB0byB0aGUgdGFibGUuIFRoZSB0YWJsZSB3aWxsIG9ubHkgdXBkYXRlIHdoZW5cbiAgICogdGhlIHJldHVybmVkIHN0cmVhbSBlbWl0cyBuZXcgaXRlbXMuXG4gICAqIEByZXR1cm5zIEEgc3RyZWFtIG9mIHRoZSBpdGVtcyB0byBiZSByZW5kZXJlZC5cbiAgICovXG4gIGNvbm5lY3QoKTogT2JzZXJ2YWJsZTxhbnlbXT4ge1xuICAgIC8vIENvbWJpbmUgZXZlcnl0aGluZyB0aGF0IGFmZmVjdHMgdGhlIHJlbmRlcmVkIGRhdGEgaW50byBvbmUgdXBkYXRlXG4gICAgLy8gc3RyZWFtIGZvciB0aGUgZGF0YS10YWJsZSB0byBjb25zdW1lLlxuICAgIGNvbnN0IGRhdGFNdXRhdGlvbnMgPSBbXG4gICAgICBvYnNlcnZhYmxlT2YodGhpcy5kYXRhKSxcbiAgICAgIHRoaXMucGFnaW5hdG9yLnBhZ2UsXG4gICAgICB0aGlzLnNvcnQuc29ydENoYW5nZVxuICAgIF07XG5cbiAgICAvLyBTZXQgdGhlIHBhZ2luYXRvcnMgbGVuZ3RoXG4gICAgdGhpcy5wYWdpbmF0b3IubGVuZ3RoID0gdGhpcy5kYXRhLmxlbmd0aDtcblxuICAgIHJldHVybiBtZXJnZSguLi5kYXRhTXV0YXRpb25zKS5waXBlKG1hcCgoKSA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5nZXRQYWdlZERhdGEodGhpcy5nZXRTb3J0ZWREYXRhKFsuLi50aGlzLmRhdGFdKSk7XG4gICAgfSkpO1xuICB9XG5cbiAgLyoqXG4gICAqICBDYWxsZWQgd2hlbiB0aGUgdGFibGUgaXMgYmVpbmcgZGVzdHJveWVkLiBVc2UgdGhpcyBmdW5jdGlvbiwgdG8gY2xlYW4gdXBcbiAgICogYW55IG9wZW4gY29ubmVjdGlvbnMgb3IgZnJlZSBhbnkgaGVsZCByZXNvdXJjZXMgdGhhdCB3ZXJlIHNldCB1cCBkdXJpbmcgY29ubmVjdC5cbiAgICovXG4gIGRpc2Nvbm5lY3QoKSB7fVxuXG4gIC8qKlxuICAgKiBQYWdpbmF0ZSB0aGUgZGF0YSAoY2xpZW50LXNpZGUpLiBJZiB5b3UncmUgdXNpbmcgc2VydmVyLXNpZGUgcGFnaW5hdGlvbixcbiAgICogdGhpcyB3b3VsZCBiZSByZXBsYWNlZCBieSByZXF1ZXN0aW5nIHRoZSBhcHByb3ByaWF0ZSBkYXRhIGZyb20gdGhlIHNlcnZlci5cbiAgICovXG4gIHByaXZhdGUgZ2V0UGFnZWREYXRhKGRhdGE6IERhdGFUYWJsZUl0ZW1bXSkge1xuICAgIGNvbnN0IHN0YXJ0SW5kZXggPSB0aGlzLnBhZ2luYXRvci5wYWdlSW5kZXggKiB0aGlzLnBhZ2luYXRvci5wYWdlU2l6ZTtcbiAgICByZXR1cm4gZGF0YS5zcGxpY2Uoc3RhcnRJbmRleCwgdGhpcy5wYWdpbmF0b3IucGFnZVNpemUpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNvcnQgdGhlIGRhdGEgKGNsaWVudC1zaWRlKS4gSWYgeW91J3JlIHVzaW5nIHNlcnZlci1zaWRlIHNvcnRpbmcsXG4gICAqIHRoaXMgd291bGQgYmUgcmVwbGFjZWQgYnkgcmVxdWVzdGluZyB0aGUgYXBwcm9wcmlhdGUgZGF0YSBmcm9tIHRoZSBzZXJ2ZXIuXG4gICAqL1xuICBwcml2YXRlIGdldFNvcnRlZERhdGEoZGF0YTogRGF0YVRhYmxlSXRlbVtdKSB7XG4gICAgaWYgKCF0aGlzLnNvcnQuYWN0aXZlIHx8IHRoaXMuc29ydC5kaXJlY3Rpb24gPT09ICcnKSB7XG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGF0YS5zb3J0KChhLCBiKSA9PiB7XG4gICAgICBjb25zdCBpc0FzYyA9IHRoaXMuc29ydC5kaXJlY3Rpb24gPT09ICdhc2MnO1xuICAgICAgc3dpdGNoICh0aGlzLnNvcnQuYWN0aXZlKSB7XG4gICAgICAgIGNhc2UgJ25hbWUnOiByZXR1cm4gY29tcGFyZShhLm5hbWUsIGIubmFtZSwgaXNBc2MpO1xuICAgICAgICBjYXNlICdpZCc6IHJldHVybiBjb21wYXJlKCthLmlkLCArYi5pZCwgaXNBc2MpO1xuICAgICAgICBkZWZhdWx0OiByZXR1cm4gMDtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuXG4vKiogU2ltcGxlIHNvcnQgY29tcGFyYXRvciBmb3IgZXhhbXBsZSBJRC9OYW1lIGNvbHVtbnMgKGZvciBjbGllbnQtc2lkZSBzb3J0aW5nKS4gKi9cbmZ1bmN0aW9uIGNvbXBhcmUoYSwgYiwgaXNBc2MpIHtcbiAgcmV0dXJuIChhIDwgYiA/IC0xIDogMSkgKiAoaXNBc2MgPyAxIDogLTEpO1xufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBSZW5kZXJlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWF0UGFnaW5hdG9yLCBNYXRTb3J0IH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuaW1wb3J0IHsgU2VsZWN0aW9uTW9kZWwgfSBmcm9tICdAYW5ndWxhci9jZGsvY29sbGVjdGlvbnMnO1xuaW1wb3J0IHsgRGF0YVRhYmxlRGF0YVNvdXJjZSB9IGZyb20gJy4vZGF0YS10YWJsZS1kYXRhc291cmNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLWRhdGEtZ3JpZCcsXG4gIHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cIm1hdC1lbGV2YXRpb24tejhcIj5cbiAgPGRpdiBjbGFzcz1cImV4YW1wbGUtY29udGFpbmVyXCI+XG4gICAgPHRhYmxlICBtYXQtdGFibGUgI3RhYmxlIFtkYXRhU291cmNlXT1cImRhdGFTb3VyY2VcIiBtYXRTb3J0IGFyaWEtbGFiZWw9XCJFbGVtZW50c1wiPlxuICAgICAgXG4gICAgICA8bmctY29udGFpbmVyIFttYXRDb2x1bW5EZWZdPVwiY29scy5maWVsZFwiICpuZ0Zvcj1cImxldCBjb2xzIG9mIGRpc3BsYXllZENvbHVtbnNcIiA+XG4gICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImNvbHMudGl0bGU9PSdjaGVjaydcIj5cbiAgICAgICAgICAgICAgPHRoIG1hdC1oZWFkZXItY2VsbCAqbWF0SGVhZGVyQ2VsbERlZiAgW25nQ2xhc3NdPVwieydtYXQtdGFibGUtc3RpY2t5Jzpjb2xzLmZyZWV6fVwiPlxuICAgICAgICAgICAgICAgIDxtYXQtY2hlY2tib3ggKGNoYW5nZSk9XCIkZXZlbnQgPyBtYXN0ZXJUb2dnbGUoKSA6IG51bGxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2NoZWNrZWRdPVwic2VsZWN0aW9uLmhhc1ZhbHVlKCkgJiYgaXNBbGxTZWxlY3RlZCgpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtpbmRldGVybWluYXRlXT1cInNlbGVjdGlvbi5oYXNWYWx1ZSgpICYmICFpc0FsbFNlbGVjdGVkKClcIj5cbiAgICAgICAgICAgICAgICA8L21hdC1jaGVja2JveD5cbiAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgPHRkIG1hdC1jZWxsICBtYXQtY2VsbCAqbWF0Q2VsbERlZj1cImxldCByb3dcIiBbbmdDbGFzc109XCJ7J21hdC10YWJsZS1zdGlja3knOmNvbHMuZnJlZXp9XCI+XG4gICAgICAgICAgICAgICAgPG1hdC1jaGVja2JveCAoY2xpY2spPVwiJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjaGFuZ2UpPVwiJGV2ZW50ID8gaXNTZWxlY3RlZChyb3cpIDogbnVsbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbY2hlY2tlZF09XCJzZWxlY3Rpb24uaXNTZWxlY3RlZChyb3cpXCI+XG4gICAgICAgICAgICAgICAgPC9tYXQtY2hlY2tib3g+XG4gICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgPHRoICNoZWFkZXIgbWF0LWhlYWRlci1jZWxsICptYXRIZWFkZXJDZWxsRGVmIG1hdC1zb3J0LWhlYWRlciBzdGlja3kgW25nQ2xhc3NdPVwieydtYXQtdGFibGUtc3RpY2t5Jzpjb2xzLmZyZWV6fVwiPiB7e2NvbHMudGl0bGV9fSA8c3BhbiBcbiAgICAgICAgICBjbGFzcyA9IFwidWktY29sdW1uLXJlc2l6ZXJcIiBcbiAgICAgICAgICAobW91c2Vkb3duKSA9IFwib25Nb3VzZURvd24oJGV2ZW50KVwiPlxuICAgICAgIDwvc3Bhbj48L3RoPlxuICAgICAgICA8dGQgbWF0LWNlbGwgKm1hdENlbGxEZWY9XCJsZXQgZWxlbWVudFwiIFtuZ0NsYXNzXT1cInsnbWF0LXRhYmxlLXN0aWNreSc6Y29scy5mcmVlen1cIj4ge3tlbGVtZW50W2NvbHMuZmllbGRdfX0gPC90ZD5cbiAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgPHRyIG1hdC1oZWFkZXItcm93ICptYXRIZWFkZXJSb3dEZWY9XCJkYXRhRmlsZWRzXCI+PC90cj5cbiAgICAgIDx0ciBtYXQtcm93ICptYXRSb3dEZWY9XCJsZXQgcm93OyBjb2x1bW5zOiBkYXRhRmlsZWRzO1wiPlxuICAgICAgPC90cj5cbiAgICA8L3RhYmxlPlxuICA8L2Rpdj5cbiAgICA8bWF0LXBhZ2luYXRvciAjcGFnaW5hdG9yXG4gICAgICBbbGVuZ3RoXT1cImRhdGFTb3VyY2UuZGF0YS5sZW5ndGhcIlxuICAgICAgW3BhZ2VJbmRleF09XCIwXCJcbiAgICAgIFtwYWdlU2l6ZV09XCI1MFwiXG4gICAgICBbcGFnZVNpemVPcHRpb25zXT1cIls1LCAxMCwgMjAsIDQwXVwiPlxuICAgIDwvbWF0LXBhZ2luYXRvcj5cbiAgPC9kaXY+YFxufSlcbmV4cG9ydCBjbGFzcyBEYXRhR3JpZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgZGF0YUZpbGVkcyA6YW55O1xuICBzdGFydCA6IEVsZW1lbnQ7XG4gIHN0YXJ0WCA6IG51bWJlcjtcbiAgcHJlc3NlZCA6IGJvb2xlYW47XG4gIHN0YXJ0V2lkdGggOm51bWJlcjtcbiAgQElucHV0KCkgc2V0IGRhdGEoX2RhdGE6IGFueVtdKSB7XG4gICAgdGhpcy5kYXRhU291cmNlID0gbmV3IERhdGFUYWJsZURhdGFTb3VyY2UodGhpcy5wYWdpbmF0b3IsIF9kYXRhLCB0aGlzLnNvcnQpO1xuICB9XG4gIEBJbnB1dCgpIHNldCBpZChpZDogYW55KSB7IH1cbiAgQElucHV0KCkgc2V0IGNvbHVtbnMoX2NvbHVtbnM6IGFueVtdKSB7XG4gICAgdmFyIGhlYWRlciA9W107XG4gICAgdmFyIGZpbGVkcyA9IFtdO1xuICAgX2NvbHVtbnMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgIGhlYWRlci5wdXNoKGVsZW1lbnQpO1xuICAgICAgZmlsZWRzLnB1c2goZWxlbWVudC5maWVsZCk7XG4gICAgfSk7XG4gICAgdGhpcy5kaXNwbGF5ZWRDb2x1bW5zID0gaGVhZGVyO1xuICAgIHRoaXMuZGF0YUZpbGVkcyA9IGZpbGVkcztcbiAgfVxuXG4gIEBPdXRwdXQoKSBzZWxlY3RBbGwgOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQFZpZXdDaGlsZChNYXRQYWdpbmF0b3IpIHBhZ2luYXRvcjogTWF0UGFnaW5hdG9yO1xuICBAVmlld0NoaWxkKE1hdFNvcnQpIHNvcnQ6IE1hdFNvcnQ7XG4gIGRhdGFTb3VyY2U6IERhdGFUYWJsZURhdGFTb3VyY2U7XG5cbiAgLyoqIENvbHVtbnMgZGlzcGxheWVkIGluIHRoZSB0YWJsZS4gQ29sdW1ucyBJRHMgY2FuIGJlIGFkZGVkLCByZW1vdmVkLCBvciByZW9yZGVyZWQuICovXG4gIGRpc3BsYXllZENvbHVtbnM6IEFycmF5PHN0cmluZz47XG4gIHNlbGVjdGlvbiA9IG5ldyBTZWxlY3Rpb25Nb2RlbDxhbnk+KHRydWUsW10pO1xuXG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBoQ2VsbCA6RWxlbWVudFJlZixwdWJsaWMgcmVuZGVyZXI6IFJlbmRlcmVyKSB7XG4gICAgXG4gIH1cbiAgaXNBbGxTZWxlY3RlZCgpIHtcbiAgICBjb25zdCBudW1TZWxlY3RlZCA9IHRoaXMuc2VsZWN0aW9uLnNlbGVjdGVkLmxlbmd0aDtcbiAgICBjb25zdCBudW1Sb3dzID0gdGhpcy5kYXRhU291cmNlLmRhdGEubGVuZ3RoO1xuICAgIHJldHVybiBudW1TZWxlY3RlZCA9PSBudW1Sb3dzO1xuICB9XG4gIFxuICAvKiogU2VsZWN0cyBhbGwgcm93cyBpZiB0aGV5IGFyZSBub3QgYWxsIHNlbGVjdGVkOyBvdGhlcndpc2UgY2xlYXIgc2VsZWN0aW9uLiAqL1xuICBtYXN0ZXJUb2dnbGUoKSB7XG4gICAgdGhpcy5pc0FsbFNlbGVjdGVkKCkgP1xuICAgICAgICB0aGlzLnNlbGVjdGlvbi5jbGVhcigpIDpcbiAgICAgICAgdGhpcy5kYXRhU291cmNlLmRhdGEuZm9yRWFjaChyb3cgPT4gdGhpcy5zZWxlY3Rpb24uc2VsZWN0KHJvdykpO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnNlbGVjdGlvbilcbiAgICAgICAgdGhpcy5zZWxlY3RBbGwuZW1pdChudWxsKTtcbiAgfVxuICBpc1NlbGVjdGVkKHJvdykge1xuICAgIHRoaXMuc2VsZWN0aW9uLnRvZ2dsZShyb3cpO1xuICAgIGNvbnNvbGUubG9nKHJvdylcbiAgfVxuXG4gIG9uTW91c2VEb3duKGV2ZW50KXtcbiAgICB0aGlzLnN0YXJ0ID0gZXZlbnQudGFyZ2V0O1xuICAgIHRoaXMucHJlc3NlZCA9IHRydWU7XG4gICAgdGhpcy5zdGFydFggPSBldmVudC54O1xuICAgIC8vY29uc29sZS5sb2coZXZlbnQudGFyZ2V0Lm9mZnNldFBhcmVudC5jZWxsSW5kZXgpXG4gICAvLyBjb25zb2xlLmxvZyh0aGlzLmhDZWxsLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcihcInRoZWFkPnRyXCIpLmNoaWxkcmVuWzJdKVxuICAgIHRoaXMuc3RhcnRXaWR0aCA9IGV2ZW50LnRhcmdldC5vZmZzZXRQYXJlbnQub2Zmc2V0V2lkdGg7XG4gICAgdGhpcy5pbml0UmVzaXphYmxlQ29sdW1ucygpO1xuICB9XG5cbiAgaW5pdFJlc2l6YWJsZUNvbHVtbnMoKSB7XG4gICB0aGlzLnJlbmRlcmVyLmxpc3Rlbkdsb2JhbCgnYm9keScsICdtb3VzZW1vdmUnLCAoZXZlbnQpID0+IHtcbiAgICAgICBpZih0aGlzLnByZXNzZWQpIHtcbiAgICAgICAgICBsZXQgd2lkdGggPSB0aGlzLnN0YXJ0V2lkdGggKyAoZXZlbnQueCAtIHRoaXMuc3RhcnRYKTtcbiAgICAgICAgICBsZXQgaW5kZXggPSBldmVudC50YXJnZXQub2Zmc2V0UGFyZW50LmNlbGxJbmRleDtcbiAgICAgICAgICBsZXQgY29sSGVhZGVyRWxlID0gdGhpcy5oQ2VsbC5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCJ0aGVhZD50clwiKS5jaGlsZHJlbltpbmRleF07XG4gICAgICAgICAgY29sSGVhZGVyRWxlLnN0eWxlLndpZHRoID0gd2lkdGgrJ3B4JztcbiAgICAgICAgICBsZXQgY29sRGF0YUVsZSA9IHRoaXMuaENlbGwubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwidGJvZHk+dHJcIikuY2hpbGRyZW5baW5kZXhdO1xuICAgICAgICAgIGNvbERhdGFFbGUuc3R5bGUud2lkdGggPSB3aWR0aCsncHgnO1xuICAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLnJlbmRlcmVyLmxpc3Rlbkdsb2JhbCgnYm9keScsICdtb3VzZXVwJywgKGV2ZW50KSA9PiB7XG4gICAgaWYodGhpcy5wcmVzc2VkKSB7XG4gICAgICAgIHRoaXMucHJlc3NlZCA9IGZhbHNlO1xuICAgIH1cbiAgfSk7XG59XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgRXJyb3JIYW5kbGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEYXRhVGFibGVDb21wb25lbnQgfSBmcm9tICcuL2RhdGEtdGFibGUvZGF0YS10YWJsZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGFnZXJDb21wb25lbnQgfSBmcm9tICcuL2RhdGEtdGFibGUvcGFnZXIuY29tcG9uZW50JztcbmltcG9ydCB7IENvbW1vbk1hdGVyaWFsTW9kdWxlIH0gZnJvbSAnLi9jb21tb24tbWF0ZXJpYWwubW9kdWxlJztcbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBEYXRhR3JpZENvbXBvbmVudCB9IGZyb20gJy4vZGF0YS1ncmlkL2RhdGEtZ3JpZC5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTWF0ZXJpYWxNb2R1bGUsXG4gICAgSHR0cENsaWVudE1vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBEYXRhVGFibGVDb21wb25lbnQsIFxuICAgIFBhZ2VyQ29tcG9uZW50LFxuICAgIERhdGFHcmlkQ29tcG9uZW50XG4gIF0sXG4gIGV4cG9ydHM6IFsgXG4gICAgRGF0YVRhYmxlQ29tcG9uZW50LCBcbiAgICBQYWdlckNvbXBvbmVudCwgXG4gICAgRGF0YUdyaWRDb21wb25lbnQsXG4gICAgQ29tbW9uTWF0ZXJpYWxNb2R1bGVcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBDb21tb25MaWJNb2R1bGUgeyB9XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlLEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBIdHRwIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XHJcbmltcG9ydCB7IE9ic2VydmFibGV9IGZyb20gJ3J4anMnO1xyXG4vL2ltcG9ydCB7IElHbG9iYWxzIH0gZnJvbSAnLi9JR2xvYmFsLmludGVyZmFjZSc7XHJcblxyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgSHR0cFNlcnZpY2Uge1xyXG4gIHByaXZhdGUgX3VybDogc3RyaW5nIDtcclxuICBwcml2YXRlIGJhc2VVcmw6IHN0cmluZyA9IFwiaHR0cDovL2xvY2FsaG9zdDo4MDgxL1wiO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9odHRwIDogSHR0cENsaWVudCkge1xyXG4gIH1cclxuXHJcbiAgZ2V0IHByb2N1cmFudENvbnRleHQoKTogYW55IHtcclxuICAgLy90aGlzLmJhc2VVcmwgPSB0aGlzLmdsb2JhbENvbmZpZy5iYXNlQXBpVXJsX1Byb2N1cmFudDtcclxuICAgIHJldHVybiB0aGlzLmdldENvbnRleHQoKTtcclxuICB9O1xyXG5cclxuICBnZXRDb250ZXh0KCkge1xyXG4gICAgbGV0IGNvbnRleHQgPSB7XHJcbiAgICAgIHVybDogdGhpcy51cmwuYmluZCh0aGlzKSxcclxuICAgICAgYWRkUGFyYW06IHRoaXMuYWRkUGFyYW0uYmluZCh0aGlzKSxcclxuICAgICAgZ2V0OiB0aGlzLmdldC5iaW5kKHRoaXMpLFxyXG4gICAgICBwb3N0OiB0aGlzLnBvc3QuYmluZCh0aGlzKSxcclxuICAgICAgcHV0OiB0aGlzLnB1dC5iaW5kKHRoaXMpLFxyXG4gICAgICBkZWxldGU6IHRoaXMuZGVsZXRlLmJpbmQodGhpcylcclxuICAgIH1cclxuICAgIHJldHVybiBjb250ZXh0O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjcmVhdGVIZWFkZXIoY29udGVudFR5cGU/OiBzdHJpbmcpIHtcclxuICAgIGxldCBoZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKCk7XHJcbiAgICBoZWFkZXJzLmFwcGVuZCgnQ29udGVudC1UeXBlJywgY29udGVudFR5cGUgPyBjb250ZW50VHlwZSA6ICdhcHBsaWNhdGlvbi9qc29uJyk7XHJcbiAgICByZXR1cm4gaGVhZGVycztcclxuICB9XHJcblxyXG4gIHByaXZhdGUgdXJsKHVybDogc3RyaW5nKSB7XHJcbiAgICB0aGlzLl91cmwgPSB0aGlzLmJhc2VVcmwgKyB1cmw7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG5cclxuICBwcml2YXRlIGFkZFBhcmFtKGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nIHwgbnVtYmVyKTogSHR0cFNlcnZpY2Uge1xyXG4gICAgaWYgKHZhbHVlICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICBpZiAodGhpcy5fdXJsLmluZGV4T2YoXCI/XCIpID49IDApXHJcbiAgICAgICAgdGhpcy5fdXJsICs9IFwiJlwiICsga2V5ICsgXCI9XCIgKyB2YWx1ZTtcclxuICAgICAgZWxzZVxyXG4gICAgICAgIHRoaXMuX3VybCArPSBcIj9cIiArIGtleSArIFwiPVwiICsgdmFsdWU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0KGNvbnRlbnRUeXBlPzogc3RyaW5nKSB7XHJcbiAgICBsZXQgaGVhZGVycyA9IHRoaXMuY3JlYXRlSGVhZGVyKGNvbnRlbnRUeXBlKTtcclxuICAgIGlmICh0aGlzLl91cmwpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuX2h0dHAuZ2V0KHRoaXMuX3VybCwge1xyXG4gICAgICAgIGhlYWRlcnM6IGhlYWRlcnNcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHBvc3QoZGF0YSwgY29udGVudFR5cGU/OiBzdHJpbmcpIHtcclxuICAgIGxldCBoZWFkZXJzID0gdGhpcy5jcmVhdGVIZWFkZXIoY29udGVudFR5cGUpO1xyXG4gICAgaWYgKHRoaXMuX3VybCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5faHR0cC5wb3N0KHRoaXMuX3VybCwgZGF0YSwge1xyXG4gICAgICAgIGhlYWRlcnM6IGhlYWRlcnNcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHB1dChkYXRhLCBjb250ZW50VHlwZT86IHN0cmluZykge1xyXG4gICAgbGV0IGhlYWRlcnMgPSB0aGlzLmNyZWF0ZUhlYWRlcihjb250ZW50VHlwZSk7XHJcbiAgICBpZiAodGhpcy5fdXJsKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLl9odHRwLnB1dCh0aGlzLl91cmwsIGRhdGEsIHtcclxuICAgICAgICBoZWFkZXJzOiBoZWFkZXJzXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBkZWxldGUoY29udGVudFR5cGU/OiBzdHJpbmcpIHtcclxuICAgIGxldCBoZWFkZXJzID0gdGhpcy5jcmVhdGVIZWFkZXIoY29udGVudFR5cGUpO1xyXG4gICAgaWYgKHRoaXMuX3VybCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5faHR0cC5kZWxldGUodGhpcy5fdXJsLCB7XHJcbiAgICAgICAgaGVhZGVyczogaGVhZGVyc1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0QmFzZVVybCh1cmwpIHtcclxuICAgIHRoaXMuYmFzZVVybCA9IHVybDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0QmFzZVVybCgpIHtcclxuICAgIHJldHVybiB0aGlzLmJhc2VVcmw7XHJcbiAgfVxyXG5cclxufSIsImltcG9ydCB7IEluamVjdGFibGUsIEVycm9ySGFuZGxlciwgSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cEVycm9yUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBHbG9iYWxFcnJvckhhbmRsZXJTZXJ2aWNlIGltcGxlbWVudHMgRXJyb3JIYW5kbGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yKSB7IH0gICAgXHJcblxyXG4gICAgaGFuZGxlRXJyb3IoZXJyb3I6IGFueSkge1xyXG4gICAgICBsZXQgcm91dGVyID0gdGhpcy5pbmplY3Rvci5nZXQoUm91dGVyKTtcclxuICAgICAgY29uc29sZS5sb2coJ1VSTDogJyArIHJvdXRlci51cmwpO1xyXG4gICAgICBcclxuICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgSHR0cEVycm9yUmVzcG9uc2UpIHtcclxuICAgICAgICAgIC8vQmFja2VuZCByZXR1cm5zIHVuc3VjY2Vzc2Z1bCByZXNwb25zZSBjb2RlcyBzdWNoIGFzIDQwNCwgNTAwIGV0Yy5cdFx0XHRcdCAgXHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdCYWNrZW5kIHJldHVybmVkIHN0YXR1cyBjb2RlOiAnLCBlcnJvci5zdGF0dXMpO1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcignUmVzcG9uc2UgYm9keTonLCBlcnJvci5tZXNzYWdlKTsgICAgICAgICAgXHQgIFxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgLy9BIGNsaWVudC1zaWRlIG9yIG5ldHdvcmsgZXJyb3Igb2NjdXJyZWQuXHQgICAgICAgICAgXHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdBbiBlcnJvciBvY2N1cnJlZDonLCBlcnJvci5tZXNzYWdlKTsgICAgICAgICAgXHJcbiAgICAgIH0gICAgIFxyXG4gICAgICByb3V0ZXIubmF2aWdhdGUoWycvZXJyb3InXSk7XHJcbiAgICB9XHJcbn0gIl0sIm5hbWVzIjpbInRzbGliXzEuX19leHRlbmRzIiwib2JzZXJ2YWJsZU9mIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtJQXdCRTtLQUFpQjs7OztJQUVqQixxQ0FBUTs7O0lBQVIsZUFBYztJQUVkLHNCQUFhLG9DQUFJOzs7OztRQUFqQixVQUFrQixLQUFZO1lBQzVCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzlDLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1NBQ3pCOzs7T0FBQTs7Z0JBNUJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO29CQUMxQixRQUFRLEVBQUUsMHZCQVVP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