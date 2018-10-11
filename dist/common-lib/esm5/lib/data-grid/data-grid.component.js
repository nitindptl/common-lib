/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, ViewChild, ElementRef, Renderer } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { DataTableDataSource } from './data-table-datasource';
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
export { DataGridComponent };
if (false) {
    /** @type {?} */
    DataGridComponent.prototype.dataFileds;
    /** @type {?} */
    DataGridComponent.prototype.start;
    /** @type {?} */
    DataGridComponent.prototype.startX;
    /** @type {?} */
    DataGridComponent.prototype.pressed;
    /** @type {?} */
    DataGridComponent.prototype.startWidth;
    /** @type {?} */
    DataGridComponent.prototype.selectAll;
    /** @type {?} */
    DataGridComponent.prototype.paginator;
    /** @type {?} */
    DataGridComponent.prototype.sort;
    /** @type {?} */
    DataGridComponent.prototype.dataSource;
    /**
     * Columns displayed in the table. Columns IDs can be added, removed, or reordered.
     * @type {?}
     */
    DataGridComponent.prototype.displayedColumns;
    /** @type {?} */
    DataGridComponent.prototype.selection;
    /** @type {?} */
    DataGridComponent.prototype.hCell;
    /** @type {?} */
    DataGridComponent.prototype.renderer;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1ncmlkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NvbW1vbi1saWIvIiwic291cmNlcyI6WyJsaWIvZGF0YS1ncmlkL2RhdGEtZ3JpZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaEgsT0FBTyxFQUFFLFlBQVksRUFBRSxPQUFPLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDMUQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7O0lBNEU1RCwyQkFBb0IsS0FBaUIsRUFBUSxRQUFrQjtRQUEzQyxVQUFLLEdBQUwsS0FBSyxDQUFZO1FBQVEsYUFBUSxHQUFSLFFBQVEsQ0FBVTt5QkFWckIsSUFBSSxZQUFZLEVBQUU7eUJBT2hELElBQUksY0FBYyxDQUFNLElBQUksRUFBQyxFQUFFLENBQUM7S0FLM0M7Ozs7SUFuQ0Qsb0NBQVE7OztJQUFSO0tBQ0M7SUFPRCxzQkFBYSxtQ0FBSTs7Ozs7UUFBakIsVUFBa0IsS0FBWTtZQUM1QixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksbUJBQW1CLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzdFOzs7T0FBQTtJQUNELHNCQUFhLGlDQUFFOzs7OztRQUFmLFVBQWdCLEVBQU8sS0FBSzs7O09BQUE7SUFDNUIsc0JBQWEsc0NBQU87Ozs7O1FBQXBCLFVBQXFCLFFBQWU7O1lBQ2xDLElBQUksTUFBTSxHQUFFLEVBQUUsQ0FBQzs7WUFDZixJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUM7WUFDakIsUUFBUSxDQUFDLE9BQU8sQ0FB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QyxZQUFZLENBQUMsTUFBTSxFQUFFLFNBQVMsRUFBRSxVQUFDLEtBQUs7WUFDcEQsSUFBRyxLQUFJLENBQUMsT0FBTyxFQUFFO2dCQUNiLEtBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO2FBQ3hCO1NBQ0YsQ0FBQyxDQUFDO0tBQ0o7O2dCQTFIQSxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGVBQWU7b0JBQ3pCLFFBQVEsRUFBRSx5M0RBb0NIO2lCQUNSOzs7O2dCQTVDbUUsVUFBVTtnQkFBRSxRQUFROzs7dUJBc0RyRixLQUFLO3FCQUdMLEtBQUs7MEJBQ0wsS0FBSzs0QkFXTCxNQUFNOzRCQUNOLFNBQVMsU0FBQyxZQUFZO3VCQUN0QixTQUFTLFNBQUMsT0FBTzs7NEJBdkVwQjs7U0E2Q2EsaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBSZW5kZXJlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWF0UGFnaW5hdG9yLCBNYXRTb3J0IH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuaW1wb3J0IHsgU2VsZWN0aW9uTW9kZWwgfSBmcm9tICdAYW5ndWxhci9jZGsvY29sbGVjdGlvbnMnO1xuaW1wb3J0IHsgRGF0YVRhYmxlRGF0YVNvdXJjZSB9IGZyb20gJy4vZGF0YS10YWJsZS1kYXRhc291cmNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLWRhdGEtZ3JpZCcsXG4gIHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cIm1hdC1lbGV2YXRpb24tejhcIj5cbiAgPGRpdiBjbGFzcz1cImV4YW1wbGUtY29udGFpbmVyXCI+XG4gICAgPHRhYmxlICBtYXQtdGFibGUgI3RhYmxlIFtkYXRhU291cmNlXT1cImRhdGFTb3VyY2VcIiBtYXRTb3J0IGFyaWEtbGFiZWw9XCJFbGVtZW50c1wiPlxuICAgICAgXG4gICAgICA8bmctY29udGFpbmVyIFttYXRDb2x1bW5EZWZdPVwiY29scy5maWVsZFwiICpuZ0Zvcj1cImxldCBjb2xzIG9mIGRpc3BsYXllZENvbHVtbnNcIiA+XG4gICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImNvbHMudGl0bGU9PSdjaGVjaydcIj5cbiAgICAgICAgICAgICAgPHRoIG1hdC1oZWFkZXItY2VsbCAqbWF0SGVhZGVyQ2VsbERlZiAgW25nQ2xhc3NdPVwieydtYXQtdGFibGUtc3RpY2t5Jzpjb2xzLmZyZWV6fVwiPlxuICAgICAgICAgICAgICAgIDxtYXQtY2hlY2tib3ggKGNoYW5nZSk9XCIkZXZlbnQgPyBtYXN0ZXJUb2dnbGUoKSA6IG51bGxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2NoZWNrZWRdPVwic2VsZWN0aW9uLmhhc1ZhbHVlKCkgJiYgaXNBbGxTZWxlY3RlZCgpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtpbmRldGVybWluYXRlXT1cInNlbGVjdGlvbi5oYXNWYWx1ZSgpICYmICFpc0FsbFNlbGVjdGVkKClcIj5cbiAgICAgICAgICAgICAgICA8L21hdC1jaGVja2JveD5cbiAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgPHRkIG1hdC1jZWxsICBtYXQtY2VsbCAqbWF0Q2VsbERlZj1cImxldCByb3dcIiBbbmdDbGFzc109XCJ7J21hdC10YWJsZS1zdGlja3knOmNvbHMuZnJlZXp9XCI+XG4gICAgICAgICAgICAgICAgPG1hdC1jaGVja2JveCAoY2xpY2spPVwiJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjaGFuZ2UpPVwiJGV2ZW50ID8gaXNTZWxlY3RlZChyb3cpIDogbnVsbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbY2hlY2tlZF09XCJzZWxlY3Rpb24uaXNTZWxlY3RlZChyb3cpXCI+XG4gICAgICAgICAgICAgICAgPC9tYXQtY2hlY2tib3g+XG4gICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgPHRoICNoZWFkZXIgbWF0LWhlYWRlci1jZWxsICptYXRIZWFkZXJDZWxsRGVmIG1hdC1zb3J0LWhlYWRlciBzdGlja3kgW25nQ2xhc3NdPVwieydtYXQtdGFibGUtc3RpY2t5Jzpjb2xzLmZyZWV6fVwiPiB7e2NvbHMudGl0bGV9fSA8c3BhbiBcbiAgICAgICAgICBjbGFzcyA9IFwidWktY29sdW1uLXJlc2l6ZXJcIiBcbiAgICAgICAgICAobW91c2Vkb3duKSA9IFwib25Nb3VzZURvd24oJGV2ZW50KVwiPlxuICAgICAgIDwvc3Bhbj48L3RoPlxuICAgICAgICA8dGQgbWF0LWNlbGwgKm1hdENlbGxEZWY9XCJsZXQgZWxlbWVudFwiIFtuZ0NsYXNzXT1cInsnbWF0LXRhYmxlLXN0aWNreSc6Y29scy5mcmVlen1cIj4ge3tlbGVtZW50W2NvbHMuZmllbGRdfX0gPC90ZD5cbiAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgPHRyIG1hdC1oZWFkZXItcm93ICptYXRIZWFkZXJSb3dEZWY9XCJkYXRhRmlsZWRzXCI+PC90cj5cbiAgICAgIDx0ciBtYXQtcm93ICptYXRSb3dEZWY9XCJsZXQgcm93OyBjb2x1bW5zOiBkYXRhRmlsZWRzO1wiPlxuICAgICAgPC90cj5cbiAgICA8L3RhYmxlPlxuICA8L2Rpdj5cbiAgICA8bWF0LXBhZ2luYXRvciAjcGFnaW5hdG9yXG4gICAgICBbbGVuZ3RoXT1cImRhdGFTb3VyY2UuZGF0YS5sZW5ndGhcIlxuICAgICAgW3BhZ2VJbmRleF09XCIwXCJcbiAgICAgIFtwYWdlU2l6ZV09XCI1MFwiXG4gICAgICBbcGFnZVNpemVPcHRpb25zXT1cIls1LCAxMCwgMjAsIDQwXVwiPlxuICAgIDwvbWF0LXBhZ2luYXRvcj5cbiAgPC9kaXY+YFxufSlcbmV4cG9ydCBjbGFzcyBEYXRhR3JpZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgZGF0YUZpbGVkcyA6YW55O1xuICBzdGFydCA6IEVsZW1lbnQ7XG4gIHN0YXJ0WCA6IG51bWJlcjtcbiAgcHJlc3NlZCA6IGJvb2xlYW47XG4gIHN0YXJ0V2lkdGggOm51bWJlcjtcbiAgQElucHV0KCkgc2V0IGRhdGEoX2RhdGE6IGFueVtdKSB7XG4gICAgdGhpcy5kYXRhU291cmNlID0gbmV3IERhdGFUYWJsZURhdGFTb3VyY2UodGhpcy5wYWdpbmF0b3IsIF9kYXRhLCB0aGlzLnNvcnQpO1xuICB9XG4gIEBJbnB1dCgpIHNldCBpZChpZDogYW55KSB7IH1cbiAgQElucHV0KCkgc2V0IGNvbHVtbnMoX2NvbHVtbnM6IGFueVtdKSB7XG4gICAgdmFyIGhlYWRlciA9W107XG4gICAgdmFyIGZpbGVkcyA9IFtdO1xuICAgX2NvbHVtbnMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgIGhlYWRlci5wdXNoKGVsZW1lbnQpO1xuICAgICAgZmlsZWRzLnB1c2goZWxlbWVudC5maWVsZCk7XG4gICAgfSk7XG4gICAgdGhpcy5kaXNwbGF5ZWRDb2x1bW5zID0gaGVhZGVyO1xuICAgIHRoaXMuZGF0YUZpbGVkcyA9IGZpbGVkcztcbiAgfVxuXG4gIEBPdXRwdXQoKSBzZWxlY3RBbGwgOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQFZpZXdDaGlsZChNYXRQYWdpbmF0b3IpIHBhZ2luYXRvcjogTWF0UGFnaW5hdG9yO1xuICBAVmlld0NoaWxkKE1hdFNvcnQpIHNvcnQ6IE1hdFNvcnQ7XG4gIGRhdGFTb3VyY2U6IERhdGFUYWJsZURhdGFTb3VyY2U7XG5cbiAgLyoqIENvbHVtbnMgZGlzcGxheWVkIGluIHRoZSB0YWJsZS4gQ29sdW1ucyBJRHMgY2FuIGJlIGFkZGVkLCByZW1vdmVkLCBvciByZW9yZGVyZWQuICovXG4gIGRpc3BsYXllZENvbHVtbnM6IEFycmF5PHN0cmluZz47XG4gIHNlbGVjdGlvbiA9IG5ldyBTZWxlY3Rpb25Nb2RlbDxhbnk+KHRydWUsW10pO1xuXG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBoQ2VsbCA6RWxlbWVudFJlZixwdWJsaWMgcmVuZGVyZXI6IFJlbmRlcmVyKSB7XG4gICAgXG4gIH1cbiAgaXNBbGxTZWxlY3RlZCgpIHtcbiAgICBjb25zdCBudW1TZWxlY3RlZCA9IHRoaXMuc2VsZWN0aW9uLnNlbGVjdGVkLmxlbmd0aDtcbiAgICBjb25zdCBudW1Sb3dzID0gdGhpcy5kYXRhU291cmNlLmRhdGEubGVuZ3RoO1xuICAgIHJldHVybiBudW1TZWxlY3RlZCA9PSBudW1Sb3dzO1xuICB9XG4gIFxuICAvKiogU2VsZWN0cyBhbGwgcm93cyBpZiB0aGV5IGFyZSBub3QgYWxsIHNlbGVjdGVkOyBvdGhlcndpc2UgY2xlYXIgc2VsZWN0aW9uLiAqL1xuICBtYXN0ZXJUb2dnbGUoKSB7XG4gICAgdGhpcy5pc0FsbFNlbGVjdGVkKCkgP1xuICAgICAgICB0aGlzLnNlbGVjdGlvbi5jbGVhcigpIDpcbiAgICAgICAgdGhpcy5kYXRhU291cmNlLmRhdGEuZm9yRWFjaChyb3cgPT4gdGhpcy5zZWxlY3Rpb24uc2VsZWN0KHJvdykpO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnNlbGVjdGlvbilcbiAgICAgICAgdGhpcy5zZWxlY3RBbGwuZW1pdChudWxsKTtcbiAgfVxuICBpc1NlbGVjdGVkKHJvdykge1xuICAgIHRoaXMuc2VsZWN0aW9uLnRvZ2dsZShyb3cpO1xuICAgIGNvbnNvbGUubG9nKHJvdylcbiAgfVxuXG4gIG9uTW91c2VEb3duKGV2ZW50KXtcbiAgICB0aGlzLnN0YXJ0ID0gZXZlbnQudGFyZ2V0O1xuICAgIHRoaXMucHJlc3NlZCA9IHRydWU7XG4gICAgdGhpcy5zdGFydFggPSBldmVudC54O1xuICAgIC8vY29uc29sZS5sb2coZXZlbnQudGFyZ2V0Lm9mZnNldFBhcmVudC5jZWxsSW5kZXgpXG4gICAvLyBjb25zb2xlLmxvZyh0aGlzLmhDZWxsLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcihcInRoZWFkPnRyXCIpLmNoaWxkcmVuWzJdKVxuICAgIHRoaXMuc3RhcnRXaWR0aCA9IGV2ZW50LnRhcmdldC5vZmZzZXRQYXJlbnQub2Zmc2V0V2lkdGg7XG4gICAgdGhpcy5pbml0UmVzaXphYmxlQ29sdW1ucygpO1xuICB9XG5cbiAgaW5pdFJlc2l6YWJsZUNvbHVtbnMoKSB7XG4gICB0aGlzLnJlbmRlcmVyLmxpc3Rlbkdsb2JhbCgnYm9keScsICdtb3VzZW1vdmUnLCAoZXZlbnQpID0+IHtcbiAgICAgICBpZih0aGlzLnByZXNzZWQpIHtcbiAgICAgICAgICBsZXQgd2lkdGggPSB0aGlzLnN0YXJ0V2lkdGggKyAoZXZlbnQueCAtIHRoaXMuc3RhcnRYKTtcbiAgICAgICAgICBsZXQgaW5kZXggPSBldmVudC50YXJnZXQub2Zmc2V0UGFyZW50LmNlbGxJbmRleDtcbiAgICAgICAgICBsZXQgY29sSGVhZGVyRWxlID0gdGhpcy5oQ2VsbC5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCJ0aGVhZD50clwiKS5jaGlsZHJlbltpbmRleF07XG4gICAgICAgICAgY29sSGVhZGVyRWxlLnN0eWxlLndpZHRoID0gd2lkdGgrJ3B4JztcbiAgICAgICAgICBsZXQgY29sRGF0YUVsZSA9IHRoaXMuaENlbGwubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwidGJvZHk+dHJcIikuY2hpbGRyZW5baW5kZXhdO1xuICAgICAgICAgIGNvbERhdGFFbGUuc3R5bGUud2lkdGggPSB3aWR0aCsncHgnO1xuICAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLnJlbmRlcmVyLmxpc3Rlbkdsb2JhbCgnYm9keScsICdtb3VzZXVwJywgKGV2ZW50KSA9PiB7XG4gICAgaWYodGhpcy5wcmVzc2VkKSB7XG4gICAgICAgIHRoaXMucHJlc3NlZCA9IGZhbHNlO1xuICAgIH1cbiAgfSk7XG59XG59XG4iXX0=