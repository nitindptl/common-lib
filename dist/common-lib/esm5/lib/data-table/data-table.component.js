/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, ViewChild, Input } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
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
export { DataTableComponent };
if (false) {
    /** @type {?} */
    DataTableComponent.prototype.dataSource;
    /** @type {?} */
    DataTableComponent.prototype.displayedColumns;
    /** @type {?} */
    DataTableComponent.prototype.paginator;
    /** @type {?} */
    DataTableComponent.prototype.sort;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS10YWJsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jb21tb24tbGliLyIsInNvdXJjZXMiOlsibGliL2RhdGEtdGFibGUvZGF0YS10YWJsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNwRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE9BQU8sRUFBRSxNQUFNLG1CQUFtQixDQUFDOztJQXVCeEQ7S0FBaUI7Ozs7SUFFakIscUNBQVE7OztJQUFSLGVBQWM7SUFFZCxzQkFBYSxvQ0FBSTs7Ozs7UUFBakIsVUFBa0IsS0FBWTtZQUM1QixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM5QyxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztTQUN6Qjs7O09BQUE7O2dCQTVCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtvQkFDMUIsUUFBUSxFQUFFLDB2QkFVTztpQkFDbEI7Ozs7OzRCQUtFLFNBQVMsU0FBQyxZQUFZO3VCQUN0QixTQUFTLFNBQUMsT0FBTzt1QkFNakIsS0FBSzs7NkJBNUJSOztTQWlCYSxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWF0UGFnaW5hdG9yLCBNYXRTb3J0IH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItZGF0YS10YWJsZScsXG4gIHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cIm1hdC1lbGV2YXRpb24tejggZXhhbXBsZS1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgPHRhYmxlIG1hdC10YWJsZSAjdGFibGUgW2RhdGFTb3VyY2VdPVwiZGF0YVNvdXJjZVwiIG1hdFNvcnQ+XG4gICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgZGlzQ29sIG9mIGRpc3BsYXllZENvbHVtbnM7XCIgbWF0Q29sdW1uRGVmPVwie3tkaXNDb2x9fVwiPlxuICAgICAgICAgICAgICAgICAgPHRoICNoZWFkZXIgbWF0LWhlYWRlci1jZWxsIG1hdC1zb3J0LWhlYWRlciAqbWF0SGVhZGVyQ2VsbERlZj4ge3tkaXNDb2x9fSA8L3RoPlxuICAgICAgICAgICAgICAgICAgPHRkIG1hdC1jZWxsICptYXRDZWxsRGVmPVwibGV0IGVsZW1lbnRcIj4ge3tlbGVtZW50W2Rpc0NvbF19fSA8L3RkPlxuICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDx0ciBtYXQtaGVhZGVyLXJvdyAqbWF0SGVhZGVyUm93RGVmPVwiZGlzcGxheWVkQ29sdW1uc1wiPjwvdHI+XG4gICAgICAgICAgICAgICAgPHRyIG1hdC1yb3cgKm1hdFJvd0RlZj1cImxldCByb3c7IGNvbHVtbnM6IGRpc3BsYXllZENvbHVtbnM7XCI+PC90cj5cbiAgICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICAgICAgPG1hdC1wYWdpbmF0b3IgW3BhZ2VTaXplT3B0aW9uc109XCJbNSwgMTAsIDIwXVwiIHNob3dGaXJzdExhc3RCdXR0b25zPjwvbWF0LXBhZ2luYXRvcj5cbiAgICAgICAgICAgIDwvZGl2PmBcbn0pXG5leHBvcnQgY2xhc3MgRGF0YVRhYmxlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgXG4gIGRhdGFTb3VyY2U6IGFueVtdO1xuICBkaXNwbGF5ZWRDb2x1bW5zOiBBcnJheTxzdHJpbmc+O1xuICBAVmlld0NoaWxkKE1hdFBhZ2luYXRvcikgcGFnaW5hdG9yOiBNYXRQYWdpbmF0b3I7XG4gIEBWaWV3Q2hpbGQoTWF0U29ydCkgc29ydDogTWF0U29ydDtcbiAgXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7IH1cblxuICBASW5wdXQoKSBzZXQgZGF0YShfZGF0YTogYW55W10pIHtcbiAgICB0aGlzLmRpc3BsYXllZENvbHVtbnMgPSBPYmplY3Qua2V5cyhfZGF0YVswXSk7XG4gICAgdGhpcy5kYXRhU291cmNlID0gX2RhdGE7XG4gIH1cblxufVxuIl19