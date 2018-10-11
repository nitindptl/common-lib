/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, ViewChild, Input } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
export class DataTableComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() { }
    /**
     * @param {?} _data
     * @return {?}
     */
    set data(_data) {
        this.displayedColumns = Object.keys(_data[0]);
        this.dataSource = _data;
    }
}
DataTableComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-data-table',
                template: `<div class="mat-elevation-z8 example-container">
              <table mat-table #table [dataSource]="dataSource" matSort>
                <ng-container *ngFor="let disCol of displayedColumns;" matColumnDef="{{disCol}}">
                  <th #header mat-header-cell mat-sort-header *matHeaderCellDef> {{disCol}} </th>
                  <td mat-cell *matCellDef="let element"> {{element[disCol]}} </td>
                </ng-container>
                <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
                <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
              </table>
              <mat-paginator [pageSizeOptions]="[5, 10, 20]" showFirstLastButtons></mat-paginator>
            </div>`
            }] }
];
/** @nocollapse */
DataTableComponent.ctorParameters = () => [];
DataTableComponent.propDecorators = {
    paginator: [{ type: ViewChild, args: [MatPaginator,] }],
    sort: [{ type: ViewChild, args: [MatSort,] }],
    data: [{ type: Input }]
};
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS10YWJsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jb21tb24tbGliLyIsInNvdXJjZXMiOlsibGliL2RhdGEtdGFibGUvZGF0YS10YWJsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNwRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE9BQU8sRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBZ0IxRCxNQUFNO0lBT0osaUJBQWlCOzs7O0lBRWpCLFFBQVEsTUFBTTs7Ozs7SUFFZCxJQUFhLElBQUksQ0FBQyxLQUFZO1FBQzVCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzlDLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO0tBQ3pCOzs7WUE1QkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLFFBQVEsRUFBRTs7Ozs7Ozs7OzttQkFVTzthQUNsQjs7Ozs7d0JBS0UsU0FBUyxTQUFDLFlBQVk7bUJBQ3RCLFNBQVMsU0FBQyxPQUFPO21CQU1qQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hdFBhZ2luYXRvciwgTWF0U29ydCB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLWRhdGEtdGFibGUnLFxuICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJtYXQtZWxldmF0aW9uLXo4IGV4YW1wbGUtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgIDx0YWJsZSBtYXQtdGFibGUgI3RhYmxlIFtkYXRhU291cmNlXT1cImRhdGFTb3VyY2VcIiBtYXRTb3J0PlxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGRpc0NvbCBvZiBkaXNwbGF5ZWRDb2x1bW5zO1wiIG1hdENvbHVtbkRlZj1cInt7ZGlzQ29sfX1cIj5cbiAgICAgICAgICAgICAgICAgIDx0aCAjaGVhZGVyIG1hdC1oZWFkZXItY2VsbCBtYXQtc29ydC1oZWFkZXIgKm1hdEhlYWRlckNlbGxEZWY+IHt7ZGlzQ29sfX0gPC90aD5cbiAgICAgICAgICAgICAgICAgIDx0ZCBtYXQtY2VsbCAqbWF0Q2VsbERlZj1cImxldCBlbGVtZW50XCI+IHt7ZWxlbWVudFtkaXNDb2xdfX0gPC90ZD5cbiAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8dHIgbWF0LWhlYWRlci1yb3cgKm1hdEhlYWRlclJvd0RlZj1cImRpc3BsYXllZENvbHVtbnNcIj48L3RyPlxuICAgICAgICAgICAgICAgIDx0ciBtYXQtcm93ICptYXRSb3dEZWY9XCJsZXQgcm93OyBjb2x1bW5zOiBkaXNwbGF5ZWRDb2x1bW5zO1wiPjwvdHI+XG4gICAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgICAgIDxtYXQtcGFnaW5hdG9yIFtwYWdlU2l6ZU9wdGlvbnNdPVwiWzUsIDEwLCAyMF1cIiBzaG93Rmlyc3RMYXN0QnV0dG9ucz48L21hdC1wYWdpbmF0b3I+XG4gICAgICAgICAgICA8L2Rpdj5gXG59KVxuZXhwb3J0IGNsYXNzIERhdGFUYWJsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIFxuICBkYXRhU291cmNlOiBhbnlbXTtcbiAgZGlzcGxheWVkQ29sdW1uczogQXJyYXk8c3RyaW5nPjtcbiAgQFZpZXdDaGlsZChNYXRQYWdpbmF0b3IpIHBhZ2luYXRvcjogTWF0UGFnaW5hdG9yO1xuICBAVmlld0NoaWxkKE1hdFNvcnQpIHNvcnQ6IE1hdFNvcnQ7XG4gIFxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkgeyB9XG5cbiAgQElucHV0KCkgc2V0IGRhdGEoX2RhdGE6IGFueVtdKSB7XG4gICAgdGhpcy5kaXNwbGF5ZWRDb2x1bW5zID0gT2JqZWN0LmtleXMoX2RhdGFbMF0pO1xuICAgIHRoaXMuZGF0YVNvdXJjZSA9IF9kYXRhO1xuICB9XG5cbn1cbiJdfQ==