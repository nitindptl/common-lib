(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/material'), require('@angular/common'), require('@angular/cdk/table'), require('@angular/cdk/collections'), require('rxjs/operators'), require('rxjs'), require('@angular/common/http'), require('@angular/router')) :
    typeof define === 'function' && define.amd ? define('common-lib', ['exports', '@angular/core', '@angular/material', '@angular/common', '@angular/cdk/table', '@angular/cdk/collections', 'rxjs/operators', 'rxjs', '@angular/common/http', '@angular/router'], factory) :
    (factory((global['common-lib'] = {}),global.ng.core,global.ng.material,global.ng.common,global.ng.cdk.table,global.ng.cdk.collections,global.rxjs.operators,global.rxjs,global.ng.common.http,global.ng.router));
}(this, (function (exports,i0,material,common,table,collections,operators,rxjs,i1,router) { 'use strict';

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
             */ function (_data) {
                this.displayedColumns = Object.keys(_data[0]);
                this.dataSource = _data;
            },
            enumerable: true,
            configurable: true
        });
        DataTableComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'lib-data-table',
                        template: "<div class=\"mat-elevation-z8 example-container\">\n              <table mat-table #table [dataSource]=\"dataSource\" matSort>\n                <ng-container *ngFor=\"let disCol of displayedColumns;\" matColumnDef=\"{{disCol}}\">\n                  <th #header mat-header-cell mat-sort-header *matHeaderCellDef> {{disCol}} </th>\n                  <td mat-cell *matCellDef=\"let element\"> {{element[disCol]}} </td>\n                </ng-container>\n                <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n                <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n              </table>\n              <mat-paginator [pageSizeOptions]=\"[5, 10, 20]\" showFirstLastButtons></mat-paginator>\n            </div>"
                    }] }
        ];
        /** @nocollapse */
        DataTableComponent.ctorParameters = function () { return []; };
        DataTableComponent.propDecorators = {
            paginator: [{ type: i0.ViewChild, args: [material.MatPaginator,] }],
            sort: [{ type: i0.ViewChild, args: [material.MatSort,] }],
            data: [{ type: i0.Input }]
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
            { type: i0.Component, args: [{
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
            { type: i0.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            table.CdkTableModule,
                            material.MatCheckboxModule,
                            material.MatCheckboxModule,
                            material.MatButtonModule,
                            material.MatInputModule,
                            material.MatAutocompleteModule,
                            material.MatDatepickerModule,
                            material.MatFormFieldModule,
                            material.MatRadioModule,
                            material.MatSelectModule,
                            material.MatSliderModule,
                            material.MatSlideToggleModule,
                            material.MatMenuModule,
                            material.MatSidenavModule,
                            material.MatToolbarModule,
                            material.MatListModule,
                            material.MatGridListModule,
                            material.MatCardModule,
                            material.MatStepperModule,
                            material.MatTabsModule,
                            material.MatExpansionModule,
                            material.MatButtonToggleModule,
                            material.MatChipsModule,
                            material.MatIconModule,
                            material.MatProgressSpinnerModule,
                            material.MatProgressBarModule,
                            material.MatDialogModule,
                            material.MatTooltipModule,
                            material.MatSnackBarModule,
                            material.MatTableModule,
                            material.MatSortModule,
                            material.MatPaginatorModule
                        ],
                        exports: [
                            common.CommonModule,
                            table.CdkTableModule,
                            material.MatCheckboxModule,
                            material.MatCheckboxModule,
                            material.MatButtonModule,
                            material.MatInputModule,
                            material.MatAutocompleteModule,
                            material.MatDatepickerModule,
                            material.MatFormFieldModule,
                            material.MatRadioModule,
                            material.MatSelectModule,
                            material.MatSliderModule,
                            material.MatSlideToggleModule,
                            material.MatMenuModule,
                            material.MatSidenavModule,
                            material.MatToolbarModule,
                            material.MatListModule,
                            material.MatGridListModule,
                            material.MatCardModule,
                            material.MatStepperModule,
                            material.MatTabsModule,
                            material.MatExpansionModule,
                            material.MatButtonToggleModule,
                            material.MatChipsModule,
                            material.MatIconModule,
                            material.MatProgressSpinnerModule,
                            material.MatProgressBarModule,
                            material.MatDialogModule,
                            material.MatTooltipModule,
                            material.MatSnackBarModule,
                            material.MatTableModule,
                            material.MatSortModule,
                            material.MatPaginatorModule,
                            material.MatNativeDateModule
                        ],
                        declarations: []
                    },] }
        ];
        return CommonMaterialModule;
    }());

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (b.hasOwnProperty(p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

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
     */ DataTableDataSource = /** @class */ (function (_super) {
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
                    rxjs.of(this.data),
                    this.paginator.page,
                    this.sort.sortChange
                ];
                // Set the paginators length
                this.paginator.length = this.data.length;
                return rxjs.merge.apply(void 0, __spread(dataMutations)).pipe(operators.map(function () {
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
    }(collections.DataSource));
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
            this.selectAll = new i0.EventEmitter();
            this.selection = new collections.SelectionModel(true, []);
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
             */ function (_data) {
                this.dataSource = new DataTableDataSource(this.paginator, _data, this.sort);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DataGridComponent.prototype, "id", {
            set: /**
             * @param {?} id
             * @return {?}
             */ function (id) { },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DataGridComponent.prototype, "columns", {
            set: /**
             * @param {?} _columns
             * @return {?}
             */ function (_columns) {
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
            { type: i0.Component, args: [{
                        selector: 'lib-data-grid',
                        template: "<div class=\"mat-elevation-z8\">\n  <div class=\"example-container\">\n    <table  mat-table #table [dataSource]=\"dataSource\" matSort aria-label=\"Elements\">\n      \n      <ng-container [matColumnDef]=\"cols.field\" *ngFor=\"let cols of displayedColumns\" >\n          <ng-container *ngIf=\"cols.title=='check'\">\n              <th mat-header-cell *matHeaderCellDef  [ngClass]=\"{'mat-table-sticky':cols.freez}\">\n                <mat-checkbox (change)=\"$event ? masterToggle() : null\"\n                              [checked]=\"selection.hasValue() && isAllSelected()\"\n                              [indeterminate]=\"selection.hasValue() && !isAllSelected()\">\n                </mat-checkbox>\n              </th>\n              <td mat-cell  mat-cell *matCellDef=\"let row\" [ngClass]=\"{'mat-table-sticky':cols.freez}\">\n                <mat-checkbox (click)=\"$event.stopPropagation()\"\n                              (change)=\"$event ? isSelected(row) : null\"\n                              [checked]=\"selection.isSelected(row)\">\n                </mat-checkbox>\n              </td>\n            </ng-container>\n        <th #header mat-header-cell *matHeaderCellDef mat-sort-header sticky [ngClass]=\"{'mat-table-sticky':cols.freez}\"> {{cols.title}} <span \n          class = \"ui-column-resizer\" \n          (mousedown) = \"onMouseDown($event)\">\n       </span></th>\n        <td mat-cell *matCellDef=\"let element\" [ngClass]=\"{'mat-table-sticky':cols.freez}\"> {{element[cols.field]}} </td>\n      </ng-container>\n      <tr mat-header-row *matHeaderRowDef=\"dataFileds\"></tr>\n      <tr mat-row *matRowDef=\"let row; columns: dataFileds;\">\n      </tr>\n    </table>\n  </div>\n    <mat-paginator #paginator\n      [length]=\"dataSource.data.length\"\n      [pageIndex]=\"0\"\n      [pageSize]=\"50\"\n      [pageSizeOptions]=\"[5, 10, 20, 40]\">\n    </mat-paginator>\n  </div>"
                    }] }
        ];
        /** @nocollapse */
        DataGridComponent.ctorParameters = function () {
            return [
                { type: i0.ElementRef },
                { type: i0.Renderer }
            ];
        };
        DataGridComponent.propDecorators = {
            data: [{ type: i0.Input }],
            id: [{ type: i0.Input }],
            columns: [{ type: i0.Input }],
            selectAll: [{ type: i0.Output }],
            paginator: [{ type: i0.ViewChild, args: [material.MatPaginator,] }],
            sort: [{ type: i0.ViewChild, args: [material.MatSort,] }]
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
            { type: i0.NgModule, args: [{
                        imports: [
                            CommonMaterialModule,
                            i1.HttpClientModule
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
             */ function () {
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
                var headers = new i1.HttpHeaders();
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
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        HttpService.ctorParameters = function () {
            return [
                { type: i1.HttpClient }
            ];
        };
        /** @nocollapse */ HttpService.ngInjectableDef = i0.defineInjectable({ factory: function HttpService_Factory() { return new HttpService(i0.inject(i1.HttpClient)); }, token: HttpService, providedIn: "root" });
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
                var router$$1 = this.injector.get(router.Router);
                console.log('URL: ' + router$$1.url);
                if (error instanceof i1.HttpErrorResponse) {
                    //Backend returns unsuccessful response codes such as 404, 500 etc.
                    console.error('Backend returned status code: ', error.status);
                    console.error('Response body:', error.message);
                }
                else {
                    //A client-side or network error occurred.
                    console.error('An error occurred:', error.message);
                }
                router$$1.navigate(['/error']);
            };
        GlobalErrorHandlerService.decorators = [
            { type: i0.Injectable }
        ];
        /** @nocollapse */
        GlobalErrorHandlerService.ctorParameters = function () {
            return [
                { type: i0.Injector }
            ];
        };
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

    exports.CommonLibModule = CommonLibModule;
    exports.CommonMaterialModule = CommonMaterialModule;
    exports.HttpService = HttpService;
    exports.GlobalErrorHandlerService = GlobalErrorHandlerService;
    exports.ɵc = DataGridComponent;
    exports.ɵa = DataTableComponent;
    exports.ɵb = PagerComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLWxpYi51bWQuanMubWFwIiwic291cmNlcyI6WyJuZzovL2NvbW1vbi1saWIvbGliL2RhdGEtdGFibGUvZGF0YS10YWJsZS5jb21wb25lbnQudHMiLCJuZzovL2NvbW1vbi1saWIvbGliL2RhdGEtdGFibGUvcGFnZXIuY29tcG9uZW50LnRzIiwibmc6Ly9jb21tb24tbGliL2xpYi9jb21tb24tbWF0ZXJpYWwubW9kdWxlLnRzIiwibm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5qcyIsIm5nOi8vY29tbW9uLWxpYi9saWIvZGF0YS1ncmlkL2RhdGEtdGFibGUtZGF0YXNvdXJjZS50cyIsIm5nOi8vY29tbW9uLWxpYi9saWIvZGF0YS1ncmlkL2RhdGEtZ3JpZC5jb21wb25lbnQudHMiLCJuZzovL2NvbW1vbi1saWIvbGliL2NvbW1vbi1saWIubW9kdWxlLnRzIiwibmc6Ly9jb21tb24tbGliL2xpYi9zZXJ2aWNlL2h0dHAuc2VydmljZS50cyIsIm5nOi8vY29tbW9uLWxpYi9saWIvZ2xvYmFsLWVycm9yLWhhbmRsZXIuc2VydmljZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWF0UGFnaW5hdG9yLCBNYXRTb3J0IH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItZGF0YS10YWJsZScsXG4gIHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cIm1hdC1lbGV2YXRpb24tejggZXhhbXBsZS1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgPHRhYmxlIG1hdC10YWJsZSAjdGFibGUgW2RhdGFTb3VyY2VdPVwiZGF0YVNvdXJjZVwiIG1hdFNvcnQ+XG4gICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgZGlzQ29sIG9mIGRpc3BsYXllZENvbHVtbnM7XCIgbWF0Q29sdW1uRGVmPVwie3tkaXNDb2x9fVwiPlxuICAgICAgICAgICAgICAgICAgPHRoICNoZWFkZXIgbWF0LWhlYWRlci1jZWxsIG1hdC1zb3J0LWhlYWRlciAqbWF0SGVhZGVyQ2VsbERlZj4ge3tkaXNDb2x9fSA8L3RoPlxuICAgICAgICAgICAgICAgICAgPHRkIG1hdC1jZWxsICptYXRDZWxsRGVmPVwibGV0IGVsZW1lbnRcIj4ge3tlbGVtZW50W2Rpc0NvbF19fSA8L3RkPlxuICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDx0ciBtYXQtaGVhZGVyLXJvdyAqbWF0SGVhZGVyUm93RGVmPVwiZGlzcGxheWVkQ29sdW1uc1wiPjwvdHI+XG4gICAgICAgICAgICAgICAgPHRyIG1hdC1yb3cgKm1hdFJvd0RlZj1cImxldCByb3c7IGNvbHVtbnM6IGRpc3BsYXllZENvbHVtbnM7XCI+PC90cj5cbiAgICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICAgICAgPG1hdC1wYWdpbmF0b3IgW3BhZ2VTaXplT3B0aW9uc109XCJbNSwgMTAsIDIwXVwiIHNob3dGaXJzdExhc3RCdXR0b25zPjwvbWF0LXBhZ2luYXRvcj5cbiAgICAgICAgICAgIDwvZGl2PmBcbn0pXG5leHBvcnQgY2xhc3MgRGF0YVRhYmxlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgXG4gIGRhdGFTb3VyY2U6IGFueVtdO1xuICBkaXNwbGF5ZWRDb2x1bW5zOiBBcnJheTxzdHJpbmc+O1xuICBAVmlld0NoaWxkKE1hdFBhZ2luYXRvcikgcGFnaW5hdG9yOiBNYXRQYWdpbmF0b3I7XG4gIEBWaWV3Q2hpbGQoTWF0U29ydCkgc29ydDogTWF0U29ydDtcbiAgXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7IH1cblxuICBASW5wdXQoKSBzZXQgZGF0YShfZGF0YTogYW55W10pIHtcbiAgICB0aGlzLmRpc3BsYXllZENvbHVtbnMgPSBPYmplY3Qua2V5cyhfZGF0YVswXSk7XG4gICAgdGhpcy5kYXRhU291cmNlID0gX2RhdGE7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWF0UGFnaW5hdG9yLCBNYXRUYWJsZURhdGFTb3VyY2UgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1wYWdlcicsXG4gIHRlbXBsYXRlOiBgPHA+UGFnZXIgd29ya3M8L3A+YFxufSlcbmV4cG9ydCBjbGFzcyBQYWdlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbmNvbnN0cnVjdG9yKCkgeyB9XG5cbm5nT25Jbml0KCkge1xufVxuXG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7XG4gIE1hdFNpZGVuYXZNb2R1bGUsXG4gIE1hdFRvb2xiYXJNb2R1bGUsXG4gIE1hdEljb25Nb2R1bGUsXG4gIE1hdExpc3RNb2R1bGUsXG4gIE1hdENhcmRNb2R1bGUsXG4gIE1hdEJ1dHRvbk1vZHVsZSxcbiAgTWF0VGFibGVNb2R1bGUsXG4gIE1hdERpYWxvZ01vZHVsZSxcbiAgTWF0SW5wdXRNb2R1bGUsXG4gIE1hdFNlbGVjdE1vZHVsZSxcbiAgTWF0UGFnaW5hdG9yTW9kdWxlLFxuICBNYXRTb3J0TW9kdWxlLFxuICBNYXRDaGVja2JveE1vZHVsZSxcbiAgTWF0QXV0b2NvbXBsZXRlTW9kdWxlLFxuICBNYXREYXRlcGlja2VyTW9kdWxlLFxuICBNYXRGb3JtRmllbGRNb2R1bGUsXG4gIE1hdFJhZGlvTW9kdWxlLFxuICBNYXRTbGlkZXJNb2R1bGUsXG4gIE1hdFNsaWRlVG9nZ2xlTW9kdWxlLFxuICBNYXRNZW51TW9kdWxlLFxuICBNYXRHcmlkTGlzdE1vZHVsZSxcbiAgTWF0U3RlcHBlck1vZHVsZSxcbiAgTWF0VGFic01vZHVsZSxcbiAgTWF0RXhwYW5zaW9uTW9kdWxlLFxuICBNYXRCdXR0b25Ub2dnbGVNb2R1bGUsXG4gIE1hdENoaXBzTW9kdWxlLFxuICBNYXRQcm9ncmVzc1NwaW5uZXJNb2R1bGUsXG4gIE1hdFByb2dyZXNzQmFyTW9kdWxlLFxuICBNYXRUb29sdGlwTW9kdWxlLFxuICBNYXRTbmFja0Jhck1vZHVsZSxcbiAgTWF0TmF0aXZlRGF0ZU1vZHVsZSxcbn0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuaW1wb3J0IHsgQ2RrVGFibGVNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvdGFibGUnO1xuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBDZGtUYWJsZU1vZHVsZSxcbiAgICBNYXRDaGVja2JveE1vZHVsZSxcbiAgICBNYXRDaGVja2JveE1vZHVsZSxcbiAgICBNYXRCdXR0b25Nb2R1bGUsXG4gICAgTWF0SW5wdXRNb2R1bGUsXG4gICAgTWF0QXV0b2NvbXBsZXRlTW9kdWxlLFxuICAgIE1hdERhdGVwaWNrZXJNb2R1bGUsXG4gICAgTWF0Rm9ybUZpZWxkTW9kdWxlLFxuICAgIE1hdFJhZGlvTW9kdWxlLFxuICAgIE1hdFNlbGVjdE1vZHVsZSxcbiAgICBNYXRTbGlkZXJNb2R1bGUsXG4gICAgTWF0U2xpZGVUb2dnbGVNb2R1bGUsXG4gICAgTWF0TWVudU1vZHVsZSxcbiAgICBNYXRTaWRlbmF2TW9kdWxlLFxuICAgIE1hdFRvb2xiYXJNb2R1bGUsXG4gICAgTWF0TGlzdE1vZHVsZSxcbiAgICBNYXRHcmlkTGlzdE1vZHVsZSxcbiAgICBNYXRDYXJkTW9kdWxlLFxuICAgIE1hdFN0ZXBwZXJNb2R1bGUsXG4gICAgTWF0VGFic01vZHVsZSxcbiAgICBNYXRFeHBhbnNpb25Nb2R1bGUsXG4gICAgTWF0QnV0dG9uVG9nZ2xlTW9kdWxlLFxuICAgIE1hdENoaXBzTW9kdWxlLFxuICAgIE1hdEljb25Nb2R1bGUsXG4gICAgTWF0UHJvZ3Jlc3NTcGlubmVyTW9kdWxlLFxuICAgIE1hdFByb2dyZXNzQmFyTW9kdWxlLFxuICAgIE1hdERpYWxvZ01vZHVsZSxcbiAgICBNYXRUb29sdGlwTW9kdWxlLFxuICAgIE1hdFNuYWNrQmFyTW9kdWxlLFxuICAgIE1hdFRhYmxlTW9kdWxlLFxuICAgIE1hdFNvcnRNb2R1bGUsXG4gICAgTWF0UGFnaW5hdG9yTW9kdWxlXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgQ2RrVGFibGVNb2R1bGUsXG4gICAgTWF0Q2hlY2tib3hNb2R1bGUsXG4gICAgTWF0Q2hlY2tib3hNb2R1bGUsXG4gICAgTWF0QnV0dG9uTW9kdWxlLFxuICAgIE1hdElucHV0TW9kdWxlLFxuICAgIE1hdEF1dG9jb21wbGV0ZU1vZHVsZSxcbiAgICBNYXREYXRlcGlja2VyTW9kdWxlLFxuICAgIE1hdEZvcm1GaWVsZE1vZHVsZSxcbiAgICBNYXRSYWRpb01vZHVsZSxcbiAgICBNYXRTZWxlY3RNb2R1bGUsXG4gICAgTWF0U2xpZGVyTW9kdWxlLFxuICAgIE1hdFNsaWRlVG9nZ2xlTW9kdWxlLFxuICAgIE1hdE1lbnVNb2R1bGUsXG4gICAgTWF0U2lkZW5hdk1vZHVsZSxcbiAgICBNYXRUb29sYmFyTW9kdWxlLFxuICAgIE1hdExpc3RNb2R1bGUsXG4gICAgTWF0R3JpZExpc3RNb2R1bGUsXG4gICAgTWF0Q2FyZE1vZHVsZSxcbiAgICBNYXRTdGVwcGVyTW9kdWxlLFxuICAgIE1hdFRhYnNNb2R1bGUsXG4gICAgTWF0RXhwYW5zaW9uTW9kdWxlLFxuICAgIE1hdEJ1dHRvblRvZ2dsZU1vZHVsZSxcbiAgICBNYXRDaGlwc01vZHVsZSxcbiAgICBNYXRJY29uTW9kdWxlLFxuICAgIE1hdFByb2dyZXNzU3Bpbm5lck1vZHVsZSxcbiAgICBNYXRQcm9ncmVzc0Jhck1vZHVsZSxcbiAgICBNYXREaWFsb2dNb2R1bGUsXG4gICAgTWF0VG9vbHRpcE1vZHVsZSxcbiAgICBNYXRTbmFja0Jhck1vZHVsZSxcbiAgICBNYXRUYWJsZU1vZHVsZSxcbiAgICBNYXRTb3J0TW9kdWxlLFxuICAgIE1hdFBhZ2luYXRvck1vZHVsZSxcbiAgICBNYXROYXRpdmVEYXRlTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW11cbn0pXG5leHBvcnQgY2xhc3MgQ29tbW9uTWF0ZXJpYWxNb2R1bGUgeyB9XG4iLCIvKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbkxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZVxyXG50aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZVxyXG5MaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG5cclxuVEhJUyBDT0RFIElTIFBST1ZJREVEIE9OIEFOICpBUyBJUyogQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxyXG5LSU5ELCBFSVRIRVIgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgV0lUSE9VVCBMSU1JVEFUSU9OIEFOWSBJTVBMSUVEXHJcbldBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBUSVRMRSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UsXHJcbk1FUkNIQU5UQUJMSVRZIE9SIE5PTi1JTkZSSU5HRU1FTlQuXHJcblxyXG5TZWUgdGhlIEFwYWNoZSBWZXJzaW9uIDIuMCBMaWNlbnNlIGZvciBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnNcclxuYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSAqL1xyXG5cclxudmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbihkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHRlbmRzKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2Fzc2lnbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIF9fYXNzaWduKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVzdChzLCBlKSB7XHJcbiAgICB2YXIgdCA9IHt9O1xyXG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXHJcbiAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDApXHJcbiAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xyXG4gICAgcmV0dXJuIHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2RlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19wYXJhbShwYXJhbUluZGV4LCBkZWNvcmF0b3IpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHsgZGVjb3JhdG9yKHRhcmdldCwga2V5LCBwYXJhbUluZGV4KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSkge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXRlcih0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUocmVzdWx0LnZhbHVlKTsgfSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19nZW5lcmF0b3IodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4cG9ydFN0YXIobSwgZXhwb3J0cykge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAoIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX192YWx1ZXMobykge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdLCBpID0gMDtcclxuICAgIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZWFkKG8sIG4pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcclxuICAgIGlmICghbSkgcmV0dXJuIG87XHJcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cclxuICAgIH1cclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkKCkge1xyXG4gICAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgYXIgPSBhci5jb25jYXQoX19yZWFkKGFyZ3VtZW50c1tpXSkpO1xyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdCh2KSB7XHJcbiAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIF9fYXdhaXQgPyAodGhpcy52ID0gdiwgdGhpcykgOiBuZXcgX19hd2FpdCh2KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNHZW5lcmF0b3IodGhpc0FyZywgX2FyZ3VtZW50cywgZ2VuZXJhdG9yKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIGcgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSksIGksIHEgPSBbXTtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpZiAoZ1tuXSkgaVtuXSA9IGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoYSwgYikgeyBxLnB1c2goW24sIHYsIGEsIGJdKSA+IDEgfHwgcmVzdW1lKG4sIHYpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gcmVzdW1lKG4sIHYpIHsgdHJ5IHsgc3RlcChnW25dKHYpKTsgfSBjYXRjaCAoZSkgeyBzZXR0bGUocVswXVszXSwgZSk7IH0gfVxyXG4gICAgZnVuY3Rpb24gc3RlcChyKSB7IHIudmFsdWUgaW5zdGFuY2VvZiBfX2F3YWl0ID8gUHJvbWlzZS5yZXNvbHZlKHIudmFsdWUudikudGhlbihmdWxmaWxsLCByZWplY3QpIDogc2V0dGxlKHFbMF1bMl0sIHIpOyB9XHJcbiAgICBmdW5jdGlvbiBmdWxmaWxsKHZhbHVlKSB7IHJlc3VtZShcIm5leHRcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiByZWplY3QodmFsdWUpIHsgcmVzdW1lKFwidGhyb3dcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUoZiwgdikgeyBpZiAoZih2KSwgcS5zaGlmdCgpLCBxLmxlbmd0aCkgcmVzdW1lKHFbMF1bMF0sIHFbMF1bMV0pOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jRGVsZWdhdG9yKG8pIHtcclxuICAgIHZhciBpLCBwO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiLCBmdW5jdGlvbiAoZSkgeyB0aHJvdyBlOyB9KSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobiwgZikgeyBpW25dID0gb1tuXSA/IGZ1bmN0aW9uICh2KSB7IHJldHVybiAocCA9ICFwKSA/IHsgdmFsdWU6IF9fYXdhaXQob1tuXSh2KSksIGRvbmU6IG4gPT09IFwicmV0dXJuXCIgfSA6IGYgPyBmKHYpIDogdjsgfSA6IGY7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNWYWx1ZXMobykge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBtID0gb1tTeW1ib2wuYXN5bmNJdGVyYXRvcl0sIGk7XHJcbiAgICByZXR1cm4gbSA/IG0uY2FsbChvKSA6IChvID0gdHlwZW9mIF9fdmFsdWVzID09PSBcImZ1bmN0aW9uXCIgPyBfX3ZhbHVlcyhvKSA6IG9bU3ltYm9sLml0ZXJhdG9yXSgpLCBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaSk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaVtuXSA9IG9bbl0gJiYgZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsgdiA9IG9bbl0odiksIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHYuZG9uZSwgdi52YWx1ZSk7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCBkLCB2KSB7IFByb21pc2UucmVzb2x2ZSh2KS50aGVuKGZ1bmN0aW9uKHYpIHsgcmVzb2x2ZSh7IHZhbHVlOiB2LCBkb25lOiBkIH0pOyB9LCByZWplY3QpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ha2VUZW1wbGF0ZU9iamVjdChjb29rZWQsIHJhdykge1xyXG4gICAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29va2VkLCBcInJhd1wiLCB7IHZhbHVlOiByYXcgfSk7IH0gZWxzZSB7IGNvb2tlZC5yYXcgPSByYXc7IH1cclxuICAgIHJldHVybiBjb29rZWQ7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnRTdGFyKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSByZXN1bHRba10gPSBtb2Rba107XHJcbiAgICByZXN1bHQuZGVmYXVsdCA9IG1vZDtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydERlZmF1bHQobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IGRlZmF1bHQ6IG1vZCB9O1xyXG59XHJcbiIsImltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAYW5ndWxhci9jZGsvY29sbGVjdGlvbnMnO1xuaW1wb3J0IHsgTWF0UGFnaW5hdG9yLCBNYXRTb3J0IH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgYXMgb2JzZXJ2YWJsZU9mLCBtZXJnZSB9IGZyb20gJ3J4anMnO1xuXG4vLyBUT0RPOiBSZXBsYWNlIHRoaXMgd2l0aCB5b3VyIG93biBkYXRhIG1vZGVsIHR5cGVcbmV4cG9ydCBpbnRlcmZhY2UgRGF0YVRhYmxlSXRlbSB7XG4gIG5hbWU6IHN0cmluZztcbiAgaWQ6IG51bWJlcjtcbn1cblxuXG4vKipcbiAqIERhdGEgc291cmNlIGZvciB0aGUgRGF0YVRhYmxlIHZpZXcuIFRoaXMgY2xhc3Mgc2hvdWxkXG4gKiBlbmNhcHN1bGF0ZSBhbGwgbG9naWMgZm9yIGZldGNoaW5nIGFuZCBtYW5pcHVsYXRpbmcgdGhlIGRpc3BsYXllZCBkYXRhXG4gKiAoaW5jbHVkaW5nIHNvcnRpbmcsIHBhZ2luYXRpb24sIGFuZCBmaWx0ZXJpbmcpLlxuICovXG5leHBvcnQgY2xhc3MgRGF0YVRhYmxlRGF0YVNvdXJjZSBleHRlbmRzIERhdGFTb3VyY2U8YW55PiB7XG4gIHB1YmxpYyBkYXRhOiBhbnlbXTtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBwYWdpbmF0b3I6IE1hdFBhZ2luYXRvciwgcHJpdmF0ZSBfZGF0YTogYW55W10scHJpdmF0ZSBzb3J0OiBNYXRTb3J0KSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmRhdGEgPSBfZGF0YTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb25uZWN0IHRoaXMgZGF0YSBzb3VyY2UgdG8gdGhlIHRhYmxlLiBUaGUgdGFibGUgd2lsbCBvbmx5IHVwZGF0ZSB3aGVuXG4gICAqIHRoZSByZXR1cm5lZCBzdHJlYW0gZW1pdHMgbmV3IGl0ZW1zLlxuICAgKiBAcmV0dXJucyBBIHN0cmVhbSBvZiB0aGUgaXRlbXMgdG8gYmUgcmVuZGVyZWQuXG4gICAqL1xuICBjb25uZWN0KCk6IE9ic2VydmFibGU8YW55W10+IHtcbiAgICAvLyBDb21iaW5lIGV2ZXJ5dGhpbmcgdGhhdCBhZmZlY3RzIHRoZSByZW5kZXJlZCBkYXRhIGludG8gb25lIHVwZGF0ZVxuICAgIC8vIHN0cmVhbSBmb3IgdGhlIGRhdGEtdGFibGUgdG8gY29uc3VtZS5cbiAgICBjb25zdCBkYXRhTXV0YXRpb25zID0gW1xuICAgICAgb2JzZXJ2YWJsZU9mKHRoaXMuZGF0YSksXG4gICAgICB0aGlzLnBhZ2luYXRvci5wYWdlLFxuICAgICAgdGhpcy5zb3J0LnNvcnRDaGFuZ2VcbiAgICBdO1xuXG4gICAgLy8gU2V0IHRoZSBwYWdpbmF0b3JzIGxlbmd0aFxuICAgIHRoaXMucGFnaW5hdG9yLmxlbmd0aCA9IHRoaXMuZGF0YS5sZW5ndGg7XG5cbiAgICByZXR1cm4gbWVyZ2UoLi4uZGF0YU11dGF0aW9ucykucGlwZShtYXAoKCkgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0UGFnZWREYXRhKHRoaXMuZ2V0U29ydGVkRGF0YShbLi4udGhpcy5kYXRhXSkpO1xuICAgIH0pKTtcbiAgfVxuXG4gIC8qKlxuICAgKiAgQ2FsbGVkIHdoZW4gdGhlIHRhYmxlIGlzIGJlaW5nIGRlc3Ryb3llZC4gVXNlIHRoaXMgZnVuY3Rpb24sIHRvIGNsZWFuIHVwXG4gICAqIGFueSBvcGVuIGNvbm5lY3Rpb25zIG9yIGZyZWUgYW55IGhlbGQgcmVzb3VyY2VzIHRoYXQgd2VyZSBzZXQgdXAgZHVyaW5nIGNvbm5lY3QuXG4gICAqL1xuICBkaXNjb25uZWN0KCkge31cblxuICAvKipcbiAgICogUGFnaW5hdGUgdGhlIGRhdGEgKGNsaWVudC1zaWRlKS4gSWYgeW91J3JlIHVzaW5nIHNlcnZlci1zaWRlIHBhZ2luYXRpb24sXG4gICAqIHRoaXMgd291bGQgYmUgcmVwbGFjZWQgYnkgcmVxdWVzdGluZyB0aGUgYXBwcm9wcmlhdGUgZGF0YSBmcm9tIHRoZSBzZXJ2ZXIuXG4gICAqL1xuICBwcml2YXRlIGdldFBhZ2VkRGF0YShkYXRhOiBEYXRhVGFibGVJdGVtW10pIHtcbiAgICBjb25zdCBzdGFydEluZGV4ID0gdGhpcy5wYWdpbmF0b3IucGFnZUluZGV4ICogdGhpcy5wYWdpbmF0b3IucGFnZVNpemU7XG4gICAgcmV0dXJuIGRhdGEuc3BsaWNlKHN0YXJ0SW5kZXgsIHRoaXMucGFnaW5hdG9yLnBhZ2VTaXplKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTb3J0IHRoZSBkYXRhIChjbGllbnQtc2lkZSkuIElmIHlvdSdyZSB1c2luZyBzZXJ2ZXItc2lkZSBzb3J0aW5nLFxuICAgKiB0aGlzIHdvdWxkIGJlIHJlcGxhY2VkIGJ5IHJlcXVlc3RpbmcgdGhlIGFwcHJvcHJpYXRlIGRhdGEgZnJvbSB0aGUgc2VydmVyLlxuICAgKi9cbiAgcHJpdmF0ZSBnZXRTb3J0ZWREYXRhKGRhdGE6IERhdGFUYWJsZUl0ZW1bXSkge1xuICAgIGlmICghdGhpcy5zb3J0LmFjdGl2ZSB8fCB0aGlzLnNvcnQuZGlyZWN0aW9uID09PSAnJykge1xuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRhdGEuc29ydCgoYSwgYikgPT4ge1xuICAgICAgY29uc3QgaXNBc2MgPSB0aGlzLnNvcnQuZGlyZWN0aW9uID09PSAnYXNjJztcbiAgICAgIHN3aXRjaCAodGhpcy5zb3J0LmFjdGl2ZSkge1xuICAgICAgICBjYXNlICduYW1lJzogcmV0dXJuIGNvbXBhcmUoYS5uYW1lLCBiLm5hbWUsIGlzQXNjKTtcbiAgICAgICAgY2FzZSAnaWQnOiByZXR1cm4gY29tcGFyZSgrYS5pZCwgK2IuaWQsIGlzQXNjKTtcbiAgICAgICAgZGVmYXVsdDogcmV0dXJuIDA7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cblxuLyoqIFNpbXBsZSBzb3J0IGNvbXBhcmF0b3IgZm9yIGV4YW1wbGUgSUQvTmFtZSBjb2x1bW5zIChmb3IgY2xpZW50LXNpZGUgc29ydGluZykuICovXG5mdW5jdGlvbiBjb21wYXJlKGEsIGIsIGlzQXNjKSB7XG4gIHJldHVybiAoYSA8IGIgPyAtMSA6IDEpICogKGlzQXNjID8gMSA6IC0xKTtcbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgUmVuZGVyZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hdFBhZ2luYXRvciwgTWF0U29ydCB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcbmltcG9ydCB7IFNlbGVjdGlvbk1vZGVsIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvbGxlY3Rpb25zJztcbmltcG9ydCB7IERhdGFUYWJsZURhdGFTb3VyY2UgfSBmcm9tICcuL2RhdGEtdGFibGUtZGF0YXNvdXJjZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1kYXRhLWdyaWQnLFxuICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJtYXQtZWxldmF0aW9uLXo4XCI+XG4gIDxkaXYgY2xhc3M9XCJleGFtcGxlLWNvbnRhaW5lclwiPlxuICAgIDx0YWJsZSAgbWF0LXRhYmxlICN0YWJsZSBbZGF0YVNvdXJjZV09XCJkYXRhU291cmNlXCIgbWF0U29ydCBhcmlhLWxhYmVsPVwiRWxlbWVudHNcIj5cbiAgICAgIFxuICAgICAgPG5nLWNvbnRhaW5lciBbbWF0Q29sdW1uRGVmXT1cImNvbHMuZmllbGRcIiAqbmdGb3I9XCJsZXQgY29scyBvZiBkaXNwbGF5ZWRDb2x1bW5zXCIgPlxuICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJjb2xzLnRpdGxlPT0nY2hlY2snXCI+XG4gICAgICAgICAgICAgIDx0aCBtYXQtaGVhZGVyLWNlbGwgKm1hdEhlYWRlckNlbGxEZWYgIFtuZ0NsYXNzXT1cInsnbWF0LXRhYmxlLXN0aWNreSc6Y29scy5mcmVlen1cIj5cbiAgICAgICAgICAgICAgICA8bWF0LWNoZWNrYm94IChjaGFuZ2UpPVwiJGV2ZW50ID8gbWFzdGVyVG9nZ2xlKCkgOiBudWxsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtjaGVja2VkXT1cInNlbGVjdGlvbi5oYXNWYWx1ZSgpICYmIGlzQWxsU2VsZWN0ZWQoKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbaW5kZXRlcm1pbmF0ZV09XCJzZWxlY3Rpb24uaGFzVmFsdWUoKSAmJiAhaXNBbGxTZWxlY3RlZCgpXCI+XG4gICAgICAgICAgICAgICAgPC9tYXQtY2hlY2tib3g+XG4gICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgIDx0ZCBtYXQtY2VsbCAgbWF0LWNlbGwgKm1hdENlbGxEZWY9XCJsZXQgcm93XCIgW25nQ2xhc3NdPVwieydtYXQtdGFibGUtc3RpY2t5Jzpjb2xzLmZyZWV6fVwiPlxuICAgICAgICAgICAgICAgIDxtYXQtY2hlY2tib3ggKGNsaWNrKT1cIiRldmVudC5zdG9wUHJvcGFnYXRpb24oKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY2hhbmdlKT1cIiRldmVudCA/IGlzU2VsZWN0ZWQocm93KSA6IG51bGxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2NoZWNrZWRdPVwic2VsZWN0aW9uLmlzU2VsZWN0ZWQocm93KVwiPlxuICAgICAgICAgICAgICAgIDwvbWF0LWNoZWNrYm94PlxuICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgIDx0aCAjaGVhZGVyIG1hdC1oZWFkZXItY2VsbCAqbWF0SGVhZGVyQ2VsbERlZiBtYXQtc29ydC1oZWFkZXIgc3RpY2t5IFtuZ0NsYXNzXT1cInsnbWF0LXRhYmxlLXN0aWNreSc6Y29scy5mcmVlen1cIj4ge3tjb2xzLnRpdGxlfX0gPHNwYW4gXG4gICAgICAgICAgY2xhc3MgPSBcInVpLWNvbHVtbi1yZXNpemVyXCIgXG4gICAgICAgICAgKG1vdXNlZG93bikgPSBcIm9uTW91c2VEb3duKCRldmVudClcIj5cbiAgICAgICA8L3NwYW4+PC90aD5cbiAgICAgICAgPHRkIG1hdC1jZWxsICptYXRDZWxsRGVmPVwibGV0IGVsZW1lbnRcIiBbbmdDbGFzc109XCJ7J21hdC10YWJsZS1zdGlja3knOmNvbHMuZnJlZXp9XCI+IHt7ZWxlbWVudFtjb2xzLmZpZWxkXX19IDwvdGQ+XG4gICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgIDx0ciBtYXQtaGVhZGVyLXJvdyAqbWF0SGVhZGVyUm93RGVmPVwiZGF0YUZpbGVkc1wiPjwvdHI+XG4gICAgICA8dHIgbWF0LXJvdyAqbWF0Um93RGVmPVwibGV0IHJvdzsgY29sdW1uczogZGF0YUZpbGVkcztcIj5cbiAgICAgIDwvdHI+XG4gICAgPC90YWJsZT5cbiAgPC9kaXY+XG4gICAgPG1hdC1wYWdpbmF0b3IgI3BhZ2luYXRvclxuICAgICAgW2xlbmd0aF09XCJkYXRhU291cmNlLmRhdGEubGVuZ3RoXCJcbiAgICAgIFtwYWdlSW5kZXhdPVwiMFwiXG4gICAgICBbcGFnZVNpemVdPVwiNTBcIlxuICAgICAgW3BhZ2VTaXplT3B0aW9uc109XCJbNSwgMTAsIDIwLCA0MF1cIj5cbiAgICA8L21hdC1wYWdpbmF0b3I+XG4gIDwvZGl2PmBcbn0pXG5leHBvcnQgY2xhc3MgRGF0YUdyaWRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIGRhdGFGaWxlZHMgOmFueTtcbiAgc3RhcnQgOiBFbGVtZW50O1xuICBzdGFydFggOiBudW1iZXI7XG4gIHByZXNzZWQgOiBib29sZWFuO1xuICBzdGFydFdpZHRoIDpudW1iZXI7XG4gIEBJbnB1dCgpIHNldCBkYXRhKF9kYXRhOiBhbnlbXSkge1xuICAgIHRoaXMuZGF0YVNvdXJjZSA9IG5ldyBEYXRhVGFibGVEYXRhU291cmNlKHRoaXMucGFnaW5hdG9yLCBfZGF0YSwgdGhpcy5zb3J0KTtcbiAgfVxuICBASW5wdXQoKSBzZXQgaWQoaWQ6IGFueSkgeyB9XG4gIEBJbnB1dCgpIHNldCBjb2x1bW5zKF9jb2x1bW5zOiBhbnlbXSkge1xuICAgIHZhciBoZWFkZXIgPVtdO1xuICAgIHZhciBmaWxlZHMgPSBbXTtcbiAgIF9jb2x1bW5zLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICBoZWFkZXIucHVzaChlbGVtZW50KTtcbiAgICAgIGZpbGVkcy5wdXNoKGVsZW1lbnQuZmllbGQpO1xuICAgIH0pO1xuICAgIHRoaXMuZGlzcGxheWVkQ29sdW1ucyA9IGhlYWRlcjtcbiAgICB0aGlzLmRhdGFGaWxlZHMgPSBmaWxlZHM7XG4gIH1cblxuICBAT3V0cHV0KCkgc2VsZWN0QWxsIDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBWaWV3Q2hpbGQoTWF0UGFnaW5hdG9yKSBwYWdpbmF0b3I6IE1hdFBhZ2luYXRvcjtcbiAgQFZpZXdDaGlsZChNYXRTb3J0KSBzb3J0OiBNYXRTb3J0O1xuICBkYXRhU291cmNlOiBEYXRhVGFibGVEYXRhU291cmNlO1xuXG4gIC8qKiBDb2x1bW5zIGRpc3BsYXllZCBpbiB0aGUgdGFibGUuIENvbHVtbnMgSURzIGNhbiBiZSBhZGRlZCwgcmVtb3ZlZCwgb3IgcmVvcmRlcmVkLiAqL1xuICBkaXNwbGF5ZWRDb2x1bW5zOiBBcnJheTxzdHJpbmc+O1xuICBzZWxlY3Rpb24gPSBuZXcgU2VsZWN0aW9uTW9kZWw8YW55Pih0cnVlLFtdKTtcblxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaENlbGwgOkVsZW1lbnRSZWYscHVibGljIHJlbmRlcmVyOiBSZW5kZXJlcikge1xuICAgIFxuICB9XG4gIGlzQWxsU2VsZWN0ZWQoKSB7XG4gICAgY29uc3QgbnVtU2VsZWN0ZWQgPSB0aGlzLnNlbGVjdGlvbi5zZWxlY3RlZC5sZW5ndGg7XG4gICAgY29uc3QgbnVtUm93cyA9IHRoaXMuZGF0YVNvdXJjZS5kYXRhLmxlbmd0aDtcbiAgICByZXR1cm4gbnVtU2VsZWN0ZWQgPT0gbnVtUm93cztcbiAgfVxuICBcbiAgLyoqIFNlbGVjdHMgYWxsIHJvd3MgaWYgdGhleSBhcmUgbm90IGFsbCBzZWxlY3RlZDsgb3RoZXJ3aXNlIGNsZWFyIHNlbGVjdGlvbi4gKi9cbiAgbWFzdGVyVG9nZ2xlKCkge1xuICAgIHRoaXMuaXNBbGxTZWxlY3RlZCgpID9cbiAgICAgICAgdGhpcy5zZWxlY3Rpb24uY2xlYXIoKSA6XG4gICAgICAgIHRoaXMuZGF0YVNvdXJjZS5kYXRhLmZvckVhY2gocm93ID0+IHRoaXMuc2VsZWN0aW9uLnNlbGVjdChyb3cpKTtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5zZWxlY3Rpb24pXG4gICAgICAgIHRoaXMuc2VsZWN0QWxsLmVtaXQobnVsbCk7XG4gIH1cbiAgaXNTZWxlY3RlZChyb3cpIHtcbiAgICB0aGlzLnNlbGVjdGlvbi50b2dnbGUocm93KTtcbiAgICBjb25zb2xlLmxvZyhyb3cpXG4gIH1cblxuICBvbk1vdXNlRG93bihldmVudCl7XG4gICAgdGhpcy5zdGFydCA9IGV2ZW50LnRhcmdldDtcbiAgICB0aGlzLnByZXNzZWQgPSB0cnVlO1xuICAgIHRoaXMuc3RhcnRYID0gZXZlbnQueDtcbiAgICAvL2NvbnNvbGUubG9nKGV2ZW50LnRhcmdldC5vZmZzZXRQYXJlbnQuY2VsbEluZGV4KVxuICAgLy8gY29uc29sZS5sb2codGhpcy5oQ2VsbC5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCJ0aGVhZD50clwiKS5jaGlsZHJlblsyXSlcbiAgICB0aGlzLnN0YXJ0V2lkdGggPSBldmVudC50YXJnZXQub2Zmc2V0UGFyZW50Lm9mZnNldFdpZHRoO1xuICAgIHRoaXMuaW5pdFJlc2l6YWJsZUNvbHVtbnMoKTtcbiAgfVxuXG4gIGluaXRSZXNpemFibGVDb2x1bW5zKCkge1xuICAgdGhpcy5yZW5kZXJlci5saXN0ZW5HbG9iYWwoJ2JvZHknLCAnbW91c2Vtb3ZlJywgKGV2ZW50KSA9PiB7XG4gICAgICAgaWYodGhpcy5wcmVzc2VkKSB7XG4gICAgICAgICAgbGV0IHdpZHRoID0gdGhpcy5zdGFydFdpZHRoICsgKGV2ZW50LnggLSB0aGlzLnN0YXJ0WCk7XG4gICAgICAgICAgbGV0IGluZGV4ID0gZXZlbnQudGFyZ2V0Lm9mZnNldFBhcmVudC5jZWxsSW5kZXg7XG4gICAgICAgICAgbGV0IGNvbEhlYWRlckVsZSA9IHRoaXMuaENlbGwubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwidGhlYWQ+dHJcIikuY2hpbGRyZW5baW5kZXhdO1xuICAgICAgICAgIGNvbEhlYWRlckVsZS5zdHlsZS53aWR0aCA9IHdpZHRoKydweCc7XG4gICAgICAgICAgbGV0IGNvbERhdGFFbGUgPSB0aGlzLmhDZWxsLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcihcInRib2R5PnRyXCIpLmNoaWxkcmVuW2luZGV4XTtcbiAgICAgICAgICBjb2xEYXRhRWxlLnN0eWxlLndpZHRoID0gd2lkdGgrJ3B4JztcbiAgICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy5yZW5kZXJlci5saXN0ZW5HbG9iYWwoJ2JvZHknLCAnbW91c2V1cCcsIChldmVudCkgPT4ge1xuICAgIGlmKHRoaXMucHJlc3NlZCkge1xuICAgICAgICB0aGlzLnByZXNzZWQgPSBmYWxzZTtcbiAgICB9XG4gIH0pO1xufVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIEVycm9ySGFuZGxlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGF0YVRhYmxlQ29tcG9uZW50IH0gZnJvbSAnLi9kYXRhLXRhYmxlL2RhdGEtdGFibGUuY29tcG9uZW50JztcbmltcG9ydCB7IFBhZ2VyQ29tcG9uZW50IH0gZnJvbSAnLi9kYXRhLXRhYmxlL3BhZ2VyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb21tb25NYXRlcmlhbE1vZHVsZSB9IGZyb20gJy4vY29tbW9uLW1hdGVyaWFsLm1vZHVsZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgRGF0YUdyaWRDb21wb25lbnQgfSBmcm9tICcuL2RhdGEtZ3JpZC9kYXRhLWdyaWQuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1hdGVyaWFsTW9kdWxlLFxuICAgIEh0dHBDbGllbnRNb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgRGF0YVRhYmxlQ29tcG9uZW50LCBcbiAgICBQYWdlckNvbXBvbmVudCxcbiAgICBEYXRhR3JpZENvbXBvbmVudFxuICBdLFxuICBleHBvcnRzOiBbIFxuICAgIERhdGFUYWJsZUNvbXBvbmVudCwgXG4gICAgUGFnZXJDb21wb25lbnQsIFxuICAgIERhdGFHcmlkQ29tcG9uZW50LFxuICAgIENvbW1vbk1hdGVyaWFsTW9kdWxlXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgQ29tbW9uTGliTW9kdWxlIHsgfVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSxJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgSHR0cCB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlfSBmcm9tICdyeGpzJztcclxuLy9pbXBvcnQgeyBJR2xvYmFscyB9IGZyb20gJy4vSUdsb2JhbC5pbnRlcmZhY2UnO1xyXG5cclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIEh0dHBTZXJ2aWNlIHtcclxuICBwcml2YXRlIF91cmw6IHN0cmluZyA7XHJcbiAgcHJpdmF0ZSBiYXNlVXJsOiBzdHJpbmcgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MS9cIjtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfaHR0cCA6IEh0dHBDbGllbnQpIHtcclxuICB9XHJcblxyXG4gIGdldCBwcm9jdXJhbnRDb250ZXh0KCk6IGFueSB7XHJcbiAgIC8vdGhpcy5iYXNlVXJsID0gdGhpcy5nbG9iYWxDb25maWcuYmFzZUFwaVVybF9Qcm9jdXJhbnQ7XHJcbiAgICByZXR1cm4gdGhpcy5nZXRDb250ZXh0KCk7XHJcbiAgfTtcclxuXHJcbiAgZ2V0Q29udGV4dCgpIHtcclxuICAgIGxldCBjb250ZXh0ID0ge1xyXG4gICAgICB1cmw6IHRoaXMudXJsLmJpbmQodGhpcyksXHJcbiAgICAgIGFkZFBhcmFtOiB0aGlzLmFkZFBhcmFtLmJpbmQodGhpcyksXHJcbiAgICAgIGdldDogdGhpcy5nZXQuYmluZCh0aGlzKSxcclxuICAgICAgcG9zdDogdGhpcy5wb3N0LmJpbmQodGhpcyksXHJcbiAgICAgIHB1dDogdGhpcy5wdXQuYmluZCh0aGlzKSxcclxuICAgICAgZGVsZXRlOiB0aGlzLmRlbGV0ZS5iaW5kKHRoaXMpXHJcbiAgICB9XHJcbiAgICByZXR1cm4gY29udGV4dDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY3JlYXRlSGVhZGVyKGNvbnRlbnRUeXBlPzogc3RyaW5nKSB7XHJcbiAgICBsZXQgaGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycygpO1xyXG4gICAgaGVhZGVycy5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsIGNvbnRlbnRUeXBlID8gY29udGVudFR5cGUgOiAnYXBwbGljYXRpb24vanNvbicpO1xyXG4gICAgcmV0dXJuIGhlYWRlcnM7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHVybCh1cmw6IHN0cmluZykge1xyXG4gICAgdGhpcy5fdXJsID0gdGhpcy5iYXNlVXJsICsgdXJsO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuXHJcbiAgcHJpdmF0ZSBhZGRQYXJhbShrZXk6IHN0cmluZywgdmFsdWU6IHN0cmluZyB8IG51bWJlcik6IEh0dHBTZXJ2aWNlIHtcclxuICAgIGlmICh2YWx1ZSAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgaWYgKHRoaXMuX3VybC5pbmRleE9mKFwiP1wiKSA+PSAwKVxyXG4gICAgICAgIHRoaXMuX3VybCArPSBcIiZcIiArIGtleSArIFwiPVwiICsgdmFsdWU7XHJcbiAgICAgIGVsc2VcclxuICAgICAgICB0aGlzLl91cmwgKz0gXCI/XCIgKyBrZXkgKyBcIj1cIiArIHZhbHVlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldChjb250ZW50VHlwZT86IHN0cmluZykge1xyXG4gICAgbGV0IGhlYWRlcnMgPSB0aGlzLmNyZWF0ZUhlYWRlcihjb250ZW50VHlwZSk7XHJcbiAgICBpZiAodGhpcy5fdXJsKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLl9odHRwLmdldCh0aGlzLl91cmwsIHtcclxuICAgICAgICBoZWFkZXJzOiBoZWFkZXJzXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBwb3N0KGRhdGEsIGNvbnRlbnRUeXBlPzogc3RyaW5nKSB7XHJcbiAgICBsZXQgaGVhZGVycyA9IHRoaXMuY3JlYXRlSGVhZGVyKGNvbnRlbnRUeXBlKTtcclxuICAgIGlmICh0aGlzLl91cmwpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuX2h0dHAucG9zdCh0aGlzLl91cmwsIGRhdGEsIHtcclxuICAgICAgICBoZWFkZXJzOiBoZWFkZXJzXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBwdXQoZGF0YSwgY29udGVudFR5cGU/OiBzdHJpbmcpIHtcclxuICAgIGxldCBoZWFkZXJzID0gdGhpcy5jcmVhdGVIZWFkZXIoY29udGVudFR5cGUpO1xyXG4gICAgaWYgKHRoaXMuX3VybCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5faHR0cC5wdXQodGhpcy5fdXJsLCBkYXRhLCB7XHJcbiAgICAgICAgaGVhZGVyczogaGVhZGVyc1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgZGVsZXRlKGNvbnRlbnRUeXBlPzogc3RyaW5nKSB7XHJcbiAgICBsZXQgaGVhZGVycyA9IHRoaXMuY3JlYXRlSGVhZGVyKGNvbnRlbnRUeXBlKTtcclxuICAgIGlmICh0aGlzLl91cmwpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuX2h0dHAuZGVsZXRlKHRoaXMuX3VybCwge1xyXG4gICAgICAgIGhlYWRlcnM6IGhlYWRlcnNcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldEJhc2VVcmwodXJsKSB7XHJcbiAgICB0aGlzLmJhc2VVcmwgPSB1cmw7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldEJhc2VVcmwoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5iYXNlVXJsO1xyXG4gIH1cclxuXHJcbn0iLCJpbXBvcnQgeyBJbmplY3RhYmxlLCBFcnJvckhhbmRsZXIsIEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHBFcnJvclJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgR2xvYmFsRXJyb3JIYW5kbGVyU2VydmljZSBpbXBsZW1lbnRzIEVycm9ySGFuZGxlciB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGluamVjdG9yOiBJbmplY3RvcikgeyB9ICAgIFxyXG5cclxuICAgIGhhbmRsZUVycm9yKGVycm9yOiBhbnkpIHtcclxuICAgICAgbGV0IHJvdXRlciA9IHRoaXMuaW5qZWN0b3IuZ2V0KFJvdXRlcik7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdVUkw6ICcgKyByb3V0ZXIudXJsKTtcclxuICAgICAgXHJcbiAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEh0dHBFcnJvclJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAvL0JhY2tlbmQgcmV0dXJucyB1bnN1Y2Nlc3NmdWwgcmVzcG9uc2UgY29kZXMgc3VjaCBhcyA0MDQsIDUwMCBldGMuXHRcdFx0XHQgIFxyXG4gICAgICAgICAgY29uc29sZS5lcnJvcignQmFja2VuZCByZXR1cm5lZCBzdGF0dXMgY29kZTogJywgZXJyb3Iuc3RhdHVzKTtcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1Jlc3BvbnNlIGJvZHk6JywgZXJyb3IubWVzc2FnZSk7ICAgICAgICAgIFx0ICBcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIC8vQSBjbGllbnQtc2lkZSBvciBuZXR3b3JrIGVycm9yIG9jY3VycmVkLlx0ICAgICAgICAgIFxyXG4gICAgICAgICAgY29uc29sZS5lcnJvcignQW4gZXJyb3Igb2NjdXJyZWQ6JywgZXJyb3IubWVzc2FnZSk7ICAgICAgICAgIFxyXG4gICAgICB9ICAgICBcclxuICAgICAgcm91dGVyLm5hdmlnYXRlKFsnL2Vycm9yJ10pO1xyXG4gICAgfVxyXG59ICJdLCJuYW1lcyI6WyJDb21wb25lbnQiLCJWaWV3Q2hpbGQiLCJNYXRQYWdpbmF0b3IiLCJNYXRTb3J0IiwiSW5wdXQiLCJOZ01vZHVsZSIsIkNvbW1vbk1vZHVsZSIsIkNka1RhYmxlTW9kdWxlIiwiTWF0Q2hlY2tib3hNb2R1bGUiLCJNYXRCdXR0b25Nb2R1bGUiLCJNYXRJbnB1dE1vZHVsZSIsIk1hdEF1dG9jb21wbGV0ZU1vZHVsZSIsIk1hdERhdGVwaWNrZXJNb2R1bGUiLCJNYXRGb3JtRmllbGRNb2R1bGUiLCJNYXRSYWRpb01vZHVsZSIsIk1hdFNlbGVjdE1vZHVsZSIsIk1hdFNsaWRlck1vZHVsZSIsIk1hdFNsaWRlVG9nZ2xlTW9kdWxlIiwiTWF0TWVudU1vZHVsZSIsIk1hdFNpZGVuYXZNb2R1bGUiLCJNYXRUb29sYmFyTW9kdWxlIiwiTWF0TGlzdE1vZHVsZSIsIk1hdEdyaWRMaXN0TW9kdWxlIiwiTWF0Q2FyZE1vZHVsZSIsIk1hdFN0ZXBwZXJNb2R1bGUiLCJNYXRUYWJzTW9kdWxlIiwiTWF0RXhwYW5zaW9uTW9kdWxlIiwiTWF0QnV0dG9uVG9nZ2xlTW9kdWxlIiwiTWF0Q2hpcHNNb2R1bGUiLCJNYXRJY29uTW9kdWxlIiwiTWF0UHJvZ3Jlc3NTcGlubmVyTW9kdWxlIiwiTWF0UHJvZ3Jlc3NCYXJNb2R1bGUiLCJNYXREaWFsb2dNb2R1bGUiLCJNYXRUb29sdGlwTW9kdWxlIiwiTWF0U25hY2tCYXJNb2R1bGUiLCJNYXRUYWJsZU1vZHVsZSIsIk1hdFNvcnRNb2R1bGUiLCJNYXRQYWdpbmF0b3JNb2R1bGUiLCJNYXROYXRpdmVEYXRlTW9kdWxlIiwidHNsaWJfMS5fX2V4dGVuZHMiLCJvYnNlcnZhYmxlT2YiLCJtZXJnZSIsIm1hcCIsIkRhdGFTb3VyY2UiLCJFdmVudEVtaXR0ZXIiLCJTZWxlY3Rpb25Nb2RlbCIsIkVsZW1lbnRSZWYiLCJSZW5kZXJlciIsIk91dHB1dCIsIkh0dHBDbGllbnRNb2R1bGUiLCJIdHRwSGVhZGVycyIsIkluamVjdGFibGUiLCJIdHRwQ2xpZW50Iiwicm91dGVyIiwiUm91dGVyIiwiSHR0cEVycm9yUmVzcG9uc2UiLCJJbmplY3RvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO1FBd0JFO1NBQWlCOzs7O1FBRWpCLHFDQUFROzs7WUFBUixlQUFjO1FBRWQsc0JBQWEsb0NBQUk7Ozs7Z0JBQWpCLFVBQWtCLEtBQVk7Z0JBQzVCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUM5QyxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQzthQUN6Qjs7O1dBQUE7O29CQTVCRkEsWUFBUyxTQUFDO3dCQUNULFFBQVEsRUFBRSxnQkFBZ0I7d0JBQzFCLFFBQVEsRUFBRSwwdkJBVU87cUJBQ2xCOzs7OztnQ0FLRUMsWUFBUyxTQUFDQyxxQkFBWTsyQkFDdEJELFlBQVMsU0FBQ0UsZ0JBQU87MkJBTWpCQyxRQUFLOztpQ0E1QlI7Ozs7Ozs7QUNBQTtRQVNBO1NBQWlCOzs7O1FBRWpCLGlDQUFROzs7WUFBUjthQUNDOztvQkFUQUosWUFBUyxTQUFDO3dCQUNULFFBQVEsRUFBRSxXQUFXO3dCQUNyQixRQUFRLEVBQUUsb0JBQW9CO3FCQUMvQjs7Ozs2QkFORDs7Ozs7OztBQ0FBOzs7O29CQW9DQ0ssV0FBUSxTQUFDO3dCQUNSLE9BQU8sRUFBRTs0QkFDUEMsbUJBQVk7NEJBQ1pDLG9CQUFjOzRCQUNkQywwQkFBaUI7NEJBQ2pCQSwwQkFBaUI7NEJBQ2pCQyx3QkFBZTs0QkFDZkMsdUJBQWM7NEJBQ2RDLDhCQUFxQjs0QkFDckJDLDRCQUFtQjs0QkFDbkJDLDJCQUFrQjs0QkFDbEJDLHVCQUFjOzRCQUNkQyx3QkFBZTs0QkFDZkMsd0JBQWU7NEJBQ2ZDLDZCQUFvQjs0QkFDcEJDLHNCQUFhOzRCQUNiQyx5QkFBZ0I7NEJBQ2hCQyx5QkFBZ0I7NEJBQ2hCQyxzQkFBYTs0QkFDYkMsMEJBQWlCOzRCQUNqQkMsc0JBQWE7NEJBQ2JDLHlCQUFnQjs0QkFDaEJDLHNCQUFhOzRCQUNiQywyQkFBa0I7NEJBQ2xCQyw4QkFBcUI7NEJBQ3JCQyx1QkFBYzs0QkFDZEMsc0JBQWE7NEJBQ2JDLGlDQUF3Qjs0QkFDeEJDLDZCQUFvQjs0QkFDcEJDLHdCQUFlOzRCQUNmQyx5QkFBZ0I7NEJBQ2hCQywwQkFBaUI7NEJBQ2pCQyx1QkFBYzs0QkFDZEMsc0JBQWE7NEJBQ2JDLDJCQUFrQjt5QkFDbkI7d0JBQ0QsT0FBTyxFQUFFOzRCQUNQL0IsbUJBQVk7NEJBQ1pDLG9CQUFjOzRCQUNkQywwQkFBaUI7NEJBQ2pCQSwwQkFBaUI7NEJBQ2pCQyx3QkFBZTs0QkFDZkMsdUJBQWM7NEJBQ2RDLDhCQUFxQjs0QkFDckJDLDRCQUFtQjs0QkFDbkJDLDJCQUFrQjs0QkFDbEJDLHVCQUFjOzRCQUNkQyx3QkFBZTs0QkFDZkMsd0JBQWU7NEJBQ2ZDLDZCQUFvQjs0QkFDcEJDLHNCQUFhOzRCQUNiQyx5QkFBZ0I7NEJBQ2hCQyx5QkFBZ0I7NEJBQ2hCQyxzQkFBYTs0QkFDYkMsMEJBQWlCOzRCQUNqQkMsc0JBQWE7NEJBQ2JDLHlCQUFnQjs0QkFDaEJDLHNCQUFhOzRCQUNiQywyQkFBa0I7NEJBQ2xCQyw4QkFBcUI7NEJBQ3JCQyx1QkFBYzs0QkFDZEMsc0JBQWE7NEJBQ2JDLGlDQUF3Qjs0QkFDeEJDLDZCQUFvQjs0QkFDcEJDLHdCQUFlOzRCQUNmQyx5QkFBZ0I7NEJBQ2hCQywwQkFBaUI7NEJBQ2pCQyx1QkFBYzs0QkFDZEMsc0JBQWE7NEJBQ2JDLDJCQUFrQjs0QkFDbEJDLDRCQUFtQjt5QkFDcEI7d0JBQ0QsWUFBWSxFQUFFLEVBQUU7cUJBQ2pCOzttQ0E3R0Q7OztJQ0FBOzs7Ozs7Ozs7Ozs7OztJQWNBO0lBRUEsSUFBSSxhQUFhLEdBQUcsVUFBUyxDQUFDLEVBQUUsQ0FBQztRQUM3QixhQUFhLEdBQUcsTUFBTSxDQUFDLGNBQWM7YUFDaEMsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLFlBQVksS0FBSyxJQUFJLFVBQVUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUM7WUFDNUUsVUFBVSxDQUFDLEVBQUUsQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQztnQkFBRSxJQUFJLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO29CQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQy9FLE9BQU8sYUFBYSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUMvQixDQUFDLENBQUM7QUFFRix1QkFBMEIsQ0FBQyxFQUFFLENBQUM7UUFDMUIsYUFBYSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNwQixnQkFBZ0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUMsRUFBRTtRQUN2QyxDQUFDLENBQUMsU0FBUyxHQUFHLENBQUMsS0FBSyxJQUFJLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3pGLENBQUM7QUFFRCxvQkF3RnVCLENBQUMsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxHQUFHLE9BQU8sTUFBTSxLQUFLLFVBQVUsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzNELElBQUksQ0FBQyxDQUFDO1lBQUUsT0FBTyxDQUFDLENBQUM7UUFDakIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDakMsSUFBSTtZQUNBLE9BQU8sQ0FBQyxDQUFDLEtBQUssS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLElBQUk7Z0JBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDOUU7UUFDRCxPQUFPLEtBQUssRUFBRTtZQUFFLENBQUMsR0FBRyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsQ0FBQztTQUFFO2dCQUMvQjtZQUNKLElBQUk7Z0JBQ0EsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUM7b0JBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNwRDtvQkFDTztnQkFBRSxJQUFJLENBQUM7b0JBQUUsTUFBTSxDQUFDLENBQUMsS0FBSyxDQUFDO2FBQUU7U0FDcEM7UUFDRCxPQUFPLEVBQUUsQ0FBQztJQUNkLENBQUM7QUFFRDtRQUNJLEtBQUssSUFBSSxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFO1lBQzlDLEVBQUUsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3pDLE9BQU8sRUFBRSxDQUFDO0lBQ2QsQ0FBQzs7Ozs7Ozs7Ozs7SUN6SEQ7Ozs7UUFBQTtRQUF5Q0MsdUNBQWU7UUFFdEQsNkJBQW9CLFNBQXVCLEVBQVUsS0FBWSxFQUFTLElBQWE7WUFBdkYsWUFDRSxpQkFBTyxTQUVSO1lBSG1CLGVBQVMsR0FBVCxTQUFTLENBQWM7WUFBVSxXQUFLLEdBQUwsS0FBSyxDQUFPO1lBQVMsVUFBSSxHQUFKLElBQUksQ0FBUztZQUVyRixLQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQzs7U0FDbkI7Ozs7Ozs7Ozs7O1FBT0QscUNBQU87Ozs7O1lBQVA7Z0JBQUEsaUJBZUM7O2dCQVpDLElBQU0sYUFBYSxHQUFHO29CQUNwQkMsT0FBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7b0JBQ3ZCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSTtvQkFDbkIsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVO2lCQUNyQixDQUFDOztnQkFHRixJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztnQkFFekMsT0FBT0MsVUFBSyx3QkFBSSxhQUFhLEdBQUUsSUFBSSxDQUFDQyxhQUFHLENBQUM7b0JBQ3RDLE9BQU8sS0FBSSxDQUFDLFlBQVksQ0FBQyxLQUFJLENBQUMsYUFBYSxVQUFLLEtBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO2lCQUM5RCxDQUFDLENBQUMsQ0FBQzthQUNMOzs7Ozs7Ozs7O1FBTUQsd0NBQVU7Ozs7O1lBQVYsZUFBZTs7Ozs7OztRQU1QLDBDQUFZOzs7Ozs7c0JBQUMsSUFBcUI7O2dCQUN4QyxJQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQztnQkFDdEUsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDOzs7Ozs7OztRQU9sRCwyQ0FBYTs7Ozs7O3NCQUFDLElBQXFCOztnQkFDekMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxLQUFLLEVBQUUsRUFBRTtvQkFDbkQsT0FBTyxJQUFJLENBQUM7aUJBQ2I7Z0JBRUQsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQUMsQ0FBQyxFQUFFLENBQUM7O29CQUNwQixJQUFNLEtBQUssR0FBRyxLQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsS0FBSyxLQUFLLENBQUM7b0JBQzVDLFFBQVEsS0FBSSxDQUFDLElBQUksQ0FBQyxNQUFNO3dCQUN0QixLQUFLLE1BQU0sRUFBRSxPQUFPLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7d0JBQ25ELEtBQUssSUFBSSxFQUFFLE9BQU8sT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUM7d0JBQy9DLFNBQVMsT0FBTyxDQUFDLENBQUM7cUJBQ25CO2lCQUNGLENBQUMsQ0FBQzs7a0NBN0VQO01BaUJ5Q0Msc0JBQVUsRUE4RGxELENBQUE7Ozs7Ozs7O0lBR0QsaUJBQWlCLENBQUMsRUFBRSxDQUFDLEVBQUUsS0FBSztRQUMxQixPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEtBQUssS0FBSyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQzVDOzs7Ozs7QUNwRkQ7UUErRUUsMkJBQW9CLEtBQWlCLEVBQVEsUUFBa0I7WUFBM0MsVUFBSyxHQUFMLEtBQUssQ0FBWTtZQUFRLGFBQVEsR0FBUixRQUFRLENBQVU7NkJBVnJCLElBQUlDLGVBQVksRUFBRTs2QkFPaEQsSUFBSUMsMEJBQWMsQ0FBTSxJQUFJLEVBQUMsRUFBRSxDQUFDO1NBSzNDOzs7O1FBbkNELG9DQUFROzs7WUFBUjthQUNDO1FBT0Qsc0JBQWEsbUNBQUk7Ozs7Z0JBQWpCLFVBQWtCLEtBQVk7Z0JBQzVCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDN0U7OztXQUFBO1FBQ0Qsc0JBQWEsaUNBQUU7Ozs7Z0JBQWYsVUFBZ0IsRUFBTyxLQUFLOzs7V0FBQTtRQUM1QixzQkFBYSxzQ0FBTzs7OztnQkFBcEIsVUFBcUIsUUFBZTs7Z0JBQ2xDLElBQUksTUFBTSxHQUFFLEVBQUUsQ0FBQzs7Z0JBQ2YsSUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFDO2dCQUNqQixRQUFRLENBQUMsT0FBTyxDQUFDLFVBQUEsT0FBTztvQkFDckIsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDckIsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7aUJBQzVCLENBQUMsQ0FBQztnQkFDSCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsTUFBTSxDQUFDO2dCQUMvQixJQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQzthQUMxQjs7O1dBQUE7Ozs7UUFlRCx5Q0FBYTs7O1lBQWI7O2dCQUNFLElBQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQzs7Z0JBQ25ELElBQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztnQkFDNUMsT0FBTyxXQUFXLElBQUksT0FBTyxDQUFDO2FBQy9COzs7Ozs7UUFHRCx3Q0FBWTs7OztZQUFaO2dCQUFBLGlCQU1DO2dCQUxDLElBQUksQ0FBQyxhQUFhLEVBQUU7b0JBQ2hCLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFO29CQUN0QixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxLQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBQSxDQUFDLENBQUM7Z0JBQ2hFLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFBO2dCQUMzQixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUMvQjs7Ozs7UUFDRCxzQ0FBVTs7OztZQUFWLFVBQVcsR0FBRztnQkFDWixJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDM0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQTthQUNqQjs7Ozs7UUFFRCx1Q0FBVzs7OztZQUFYLFVBQVksS0FBSztnQkFDZixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUM7Z0JBQzFCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO2dCQUNwQixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUM7OztnQkFHdEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUM7Z0JBQ3hELElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO2FBQzdCOzs7O1FBRUQsZ0RBQW9COzs7WUFBcEI7Z0JBQUEsaUJBZ0JEO2dCQWZFLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxXQUFXLEVBQUUsVUFBQyxLQUFLO29CQUNsRCxJQUFHLEtBQUksQ0FBQyxPQUFPLEVBQUU7O3dCQUNkLElBQUksS0FBSyxHQUFHLEtBQUksQ0FBQyxVQUFVLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxLQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7O3dCQUN0RCxJQUFJLEtBQUssR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUM7O3dCQUNoRCxJQUFJLFlBQVksR0FBRyxLQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO3dCQUN0RixZQUFZLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxLQUFLLEdBQUMsSUFBSSxDQUFDOzt3QkFDdEMsSUFBSSxVQUFVLEdBQUcsS0FBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQzt3QkFDcEYsVUFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsS0FBSyxHQUFDLElBQUksQ0FBQztxQkFDdEM7aUJBQ0gsQ0FBQyxDQUFDO2dCQUNILElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxTQUFTLEVBQUUsVUFBQyxLQUFLO29CQUNwRCxJQUFHLEtBQUksQ0FBQyxPQUFPLEVBQUU7d0JBQ2IsS0FBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7cUJBQ3hCO2lCQUNGLENBQUMsQ0FBQzthQUNKOztvQkExSEE3QyxZQUFTLFNBQUM7d0JBQ1QsUUFBUSxFQUFFLGVBQWU7d0JBQ3pCLFFBQVEsRUFBRSx5M0RBb0NIO3FCQUNSOzs7Ozt3QkE1Q21FOEMsYUFBVTt3QkFBRUMsV0FBUTs7OzsyQkFzRHJGM0MsUUFBSzt5QkFHTEEsUUFBSzs4QkFDTEEsUUFBSztnQ0FXTDRDLFNBQU07Z0NBQ04vQyxZQUFTLFNBQUNDLHFCQUFZOzJCQUN0QkQsWUFBUyxTQUFDRSxnQkFBTzs7Z0NBdkVwQjs7Ozs7OztBQ0FBOzs7O29CQU9DRSxXQUFRLFNBQUM7d0JBQ1IsT0FBTyxFQUFFOzRCQUNQLG9CQUFvQjs0QkFDcEI0QyxtQkFBZ0I7eUJBQ2pCO3dCQUNELFlBQVksRUFBRTs0QkFDWixrQkFBa0I7NEJBQ2xCLGNBQWM7NEJBQ2QsaUJBQWlCO3lCQUNsQjt3QkFDRCxPQUFPLEVBQUU7NEJBQ1Asa0JBQWtCOzRCQUNsQixjQUFjOzRCQUNkLGlCQUFpQjs0QkFDakIsb0JBQW9CO3lCQUNyQjtxQkFDRjs7OEJBdkJEOzs7Ozs7O0FDQUE7UUFjRSxxQkFBb0IsS0FBa0I7WUFBbEIsVUFBSyxHQUFMLEtBQUssQ0FBYTsyQkFGWix3QkFBd0I7U0FHakQ7UUFFRCxzQkFBSSx5Q0FBZ0I7OztnQkFBcEI7O2dCQUVFLE9BQU8sSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO2FBQzFCOzs7V0FBQTs7OztRQUVELGdDQUFVOzs7WUFBVjs7Z0JBQ0UsSUFBSSxPQUFPLEdBQUc7b0JBQ1osR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztvQkFDeEIsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztvQkFDbEMsR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztvQkFDeEIsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztvQkFDMUIsR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztvQkFDeEIsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztpQkFDL0IsQ0FBQTtnQkFDRCxPQUFPLE9BQU8sQ0FBQzthQUNoQjs7Ozs7UUFFTyxrQ0FBWTs7OztzQkFBQyxXQUFvQjs7Z0JBQ3ZDLElBQUksT0FBTyxHQUFHLElBQUlDLGNBQVcsRUFBRSxDQUFDO2dCQUNoQyxPQUFPLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxXQUFXLEdBQUcsV0FBVyxHQUFHLGtCQUFrQixDQUFDLENBQUM7Z0JBQy9FLE9BQU8sT0FBTyxDQUFDOzs7Ozs7UUFHVCx5QkFBRzs7OztzQkFBQyxHQUFXO2dCQUNyQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDO2dCQUMvQixPQUFPLElBQUksQ0FBQzs7Ozs7OztRQUlOLDhCQUFROzs7OztzQkFBQyxHQUFXLEVBQUUsS0FBc0I7Z0JBQ2xELElBQUksS0FBSyxJQUFJLFNBQVMsRUFBRTtvQkFDdEIsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDO3dCQUM3QixJQUFJLENBQUMsSUFBSSxJQUFJLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEtBQUssQ0FBQzs7d0JBRXJDLElBQUksQ0FBQyxJQUFJLElBQUksR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsS0FBSyxDQUFDO2lCQUN4QztnQkFDRCxPQUFPLElBQUksQ0FBQzs7Ozs7O1FBR04seUJBQUc7Ozs7c0JBQUMsV0FBb0I7O2dCQUM5QixJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2dCQUM3QyxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7b0JBQ2IsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFO3dCQUMvQixPQUFPLEVBQUUsT0FBTztxQkFDakIsQ0FBQyxDQUFDO2lCQUNKOzs7Ozs7O1FBR0ssMEJBQUk7Ozs7O3NCQUFDLElBQUksRUFBRSxXQUFvQjs7Z0JBQ3JDLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLENBQUM7Z0JBQzdDLElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtvQkFDYixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFO3dCQUN0QyxPQUFPLEVBQUUsT0FBTztxQkFDakIsQ0FBQyxDQUFDO2lCQUNKOzs7Ozs7O1FBR0sseUJBQUc7Ozs7O3NCQUFDLElBQUksRUFBRSxXQUFvQjs7Z0JBQ3BDLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLENBQUM7Z0JBQzdDLElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtvQkFDYixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFO3dCQUNyQyxPQUFPLEVBQUUsT0FBTztxQkFDakIsQ0FBQyxDQUFDO2lCQUNKOzs7Ozs7UUFHSyw0QkFBTTs7OztzQkFBQyxXQUFvQjs7Z0JBQ2pDLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLENBQUM7Z0JBQzdDLElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtvQkFDYixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUU7d0JBQ2xDLE9BQU8sRUFBRSxPQUFPO3FCQUNqQixDQUFDLENBQUM7aUJBQ0o7Ozs7OztRQUdLLGdDQUFVOzs7O3NCQUFDLEdBQUc7Z0JBQ3BCLElBQUksQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDOzs7OztRQUdiLGdDQUFVOzs7O2dCQUNoQixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7OztvQkExRnZCQyxhQUFVLFNBQUM7d0JBQ1YsVUFBVSxFQUFFLE1BQU07cUJBQ25COzs7Ozt3QkFSUUMsYUFBVTs7OzswQkFEbkI7Ozs7Ozs7QUNBQTtRQU1JLG1DQUFvQixRQUFrQjtZQUFsQixhQUFRLEdBQVIsUUFBUSxDQUFVO1NBQUs7Ozs7O1FBRTNDLCtDQUFXOzs7O1lBQVgsVUFBWSxLQUFVOztnQkFDcEIsSUFBSUMsU0FBTSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDQyxhQUFNLENBQUMsQ0FBQztnQkFDdkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEdBQUdELFNBQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFFbEMsSUFBSSxLQUFLLFlBQVlFLG9CQUFpQixFQUFFOztvQkFFcEMsT0FBTyxDQUFDLEtBQUssQ0FBQyxnQ0FBZ0MsRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBQzlELE9BQU8sQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2lCQUNsRDtxQkFBTTs7b0JBRUgsT0FBTyxDQUFDLEtBQUssQ0FBQyxvQkFBb0IsRUFBRSxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7aUJBQ3REO2dCQUNERixTQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQzthQUM3Qjs7b0JBakJKRixhQUFVOzs7Ozt3QkFKd0JLLFdBQVE7Ozt3Q0FBM0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9