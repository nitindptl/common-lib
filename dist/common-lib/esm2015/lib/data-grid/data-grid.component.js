/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, ViewChild, ElementRef, Renderer } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { DataTableDataSource } from './data-table-datasource';
export class DataGridComponent {
    /**
     * @param {?} hCell
     * @param {?} renderer
     */
    constructor(hCell, renderer) {
        this.hCell = hCell;
        this.renderer = renderer;
        this.selectAll = new EventEmitter();
        this.selection = new SelectionModel(true, []);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @param {?} _data
     * @return {?}
     */
    set data(_data) {
        this.dataSource = new DataTableDataSource(this.paginator, _data, this.sort);
    }
    /**
     * @param {?} id
     * @return {?}
     */
    set id(id) { }
    /**
     * @param {?} _columns
     * @return {?}
     */
    set columns(_columns) {
        /** @type {?} */
        var header = [];
        /** @type {?} */
        var fileds = [];
        _columns.forEach(element => {
            header.push(element);
            fileds.push(element.field);
        });
        this.displayedColumns = header;
        this.dataFileds = fileds;
    }
    /**
     * @return {?}
     */
    isAllSelected() {
        /** @type {?} */
        const numSelected = this.selection.selected.length;
        /** @type {?} */
        const numRows = this.dataSource.data.length;
        return numSelected == numRows;
    }
    /**
     * Selects all rows if they are not all selected; otherwise clear selection.
     * @return {?}
     */
    masterToggle() {
        this.isAllSelected() ?
            this.selection.clear() :
            this.dataSource.data.forEach(row => this.selection.select(row));
        console.log(this.selection);
        this.selectAll.emit(null);
    }
    /**
     * @param {?} row
     * @return {?}
     */
    isSelected(row) {
        this.selection.toggle(row);
        console.log(row);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onMouseDown(event) {
        this.start = event.target;
        this.pressed = true;
        this.startX = event.x;
        //console.log(event.target.offsetParent.cellIndex)
        // console.log(this.hCell.nativeElement.querySelector("thead>tr").children[2])
        this.startWidth = event.target.offsetParent.offsetWidth;
        this.initResizableColumns();
    }
    /**
     * @return {?}
     */
    initResizableColumns() {
        this.renderer.listenGlobal('body', 'mousemove', (event) => {
            if (this.pressed) {
                /** @type {?} */
                let width = this.startWidth + (event.x - this.startX);
                /** @type {?} */
                let index = event.target.offsetParent.cellIndex;
                /** @type {?} */
                let colHeaderEle = this.hCell.nativeElement.querySelector("thead>tr").children[index];
                colHeaderEle.style.width = width + 'px';
                /** @type {?} */
                let colDataEle = this.hCell.nativeElement.querySelector("tbody>tr").children[index];
                colDataEle.style.width = width + 'px';
            }
        });
        this.renderer.listenGlobal('body', 'mouseup', (event) => {
            if (this.pressed) {
                this.pressed = false;
            }
        });
    }
}
DataGridComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-data-grid',
                template: `<div class="mat-elevation-z8">
  <div class="example-container">
    <table  mat-table #table [dataSource]="dataSource" matSort aria-label="Elements">
      
      <ng-container [matColumnDef]="cols.field" *ngFor="let cols of displayedColumns" >
          <ng-container *ngIf="cols.title=='check'">
              <th mat-header-cell *matHeaderCellDef  [ngClass]="{'mat-table-sticky':cols.freez}">
                <mat-checkbox (change)="$event ? masterToggle() : null"
                              [checked]="selection.hasValue() && isAllSelected()"
                              [indeterminate]="selection.hasValue() && !isAllSelected()">
                </mat-checkbox>
              </th>
              <td mat-cell  mat-cell *matCellDef="let row" [ngClass]="{'mat-table-sticky':cols.freez}">
                <mat-checkbox (click)="$event.stopPropagation()"
                              (change)="$event ? isSelected(row) : null"
                              [checked]="selection.isSelected(row)">
                </mat-checkbox>
              </td>
            </ng-container>
        <th #header mat-header-cell *matHeaderCellDef mat-sort-header sticky [ngClass]="{'mat-table-sticky':cols.freez}"> {{cols.title}} <span 
          class = "ui-column-resizer" 
          (mousedown) = "onMouseDown($event)">
       </span></th>
        <td mat-cell *matCellDef="let element" [ngClass]="{'mat-table-sticky':cols.freez}"> {{element[cols.field]}} </td>
      </ng-container>
      <tr mat-header-row *matHeaderRowDef="dataFileds"></tr>
      <tr mat-row *matRowDef="let row; columns: dataFileds;">
      </tr>
    </table>
  </div>
    <mat-paginator #paginator
      [length]="dataSource.data.length"
      [pageIndex]="0"
      [pageSize]="50"
      [pageSizeOptions]="[5, 10, 20, 40]">
    </mat-paginator>
  </div>`
            }] }
];
/** @nocollapse */
DataGridComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer }
];
DataGridComponent.propDecorators = {
    data: [{ type: Input }],
    id: [{ type: Input }],
    columns: [{ type: Input }],
    selectAll: [{ type: Output }],
    paginator: [{ type: ViewChild, args: [MatPaginator,] }],
    sort: [{ type: ViewChild, args: [MatSort,] }]
};
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1ncmlkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NvbW1vbi1saWIvIiwic291cmNlcyI6WyJsaWIvZGF0YS1ncmlkL2RhdGEtZ3JpZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaEgsT0FBTyxFQUFFLFlBQVksRUFBRSxPQUFPLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDMUQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUEwQzlELE1BQU07Ozs7O0lBa0NKLFlBQW9CLEtBQWlCLEVBQVEsUUFBa0I7UUFBM0MsVUFBSyxHQUFMLEtBQUssQ0FBWTtRQUFRLGFBQVEsR0FBUixRQUFRLENBQVU7eUJBVnJCLElBQUksWUFBWSxFQUFFO3lCQU9oRCxJQUFJLGNBQWMsQ0FBTSxJQUFJLEVBQUMsRUFBRSxDQUFDO0tBSzNDOzs7O0lBbkNELFFBQVE7S0FDUDs7Ozs7SUFPRCxJQUFhLElBQUksQ0FBQyxLQUFZO1FBQzVCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDN0U7Ozs7O0lBQ0QsSUFBYSxFQUFFLENBQUMsRUFBTyxLQUFLOzs7OztJQUM1QixJQUFhLE9BQU8sQ0FBQyxRQUFlOztRQUNsQyxJQUFJLE1BQU0sR0FBRSxFQUFFLENBQUM7O1FBQ2YsSUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLFFBQVEsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDeEIsTUFBTSxDQUFDLElB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YUFDeEI7U0FDRixDQUFDLENBQUM7S0FDSjs7O1lBMUhBLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZUFBZTtnQkFDekIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7U0FvQ0g7YUFDUjs7OztZQTVDbUUsVUFBVTtZQUFFLFFBQVE7OzttQkFzRHJGLEtBQUs7aUJBR0wsS0FBSztzQkFDTCxLQUFLO3dCQVdMLE1BQU07d0JBQ04sU0FBUyxTQUFDLFlBQVk7bUJBQ3RCLFNBQVMsU0FBQyxPQUFPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBSZW5kZXJlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWF0UGFnaW5hdG9yLCBNYXRTb3J0IH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuaW1wb3J0IHsgU2VsZWN0aW9uTW9kZWwgfSBmcm9tICdAYW5ndWxhci9jZGsvY29sbGVjdGlvbnMnO1xuaW1wb3J0IHsgRGF0YVRhYmxlRGF0YVNvdXJjZSB9IGZyb20gJy4vZGF0YS10YWJsZS1kYXRhc291cmNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLWRhdGEtZ3JpZCcsXG4gIHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cIm1hdC1lbGV2YXRpb24tejhcIj5cbiAgPGRpdiBjbGFzcz1cImV4YW1wbGUtY29udGFpbmVyXCI+XG4gICAgPHRhYmxlICBtYXQtdGFibGUgI3RhYmxlIFtkYXRhU291cmNlXT1cImRhdGFTb3VyY2VcIiBtYXRTb3J0IGFyaWEtbGFiZWw9XCJFbGVtZW50c1wiPlxuICAgICAgXG4gICAgICA8bmctY29udGFpbmVyIFttYXRDb2x1bW5EZWZdPVwiY29scy5maWVsZFwiICpuZ0Zvcj1cImxldCBjb2xzIG9mIGRpc3BsYXllZENvbHVtbnNcIiA+XG4gICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImNvbHMudGl0bGU9PSdjaGVjaydcIj5cbiAgICAgICAgICAgICAgPHRoIG1hdC1oZWFkZXItY2VsbCAqbWF0SGVhZGVyQ2VsbERlZiAgW25nQ2xhc3NdPVwieydtYXQtdGFibGUtc3RpY2t5Jzpjb2xzLmZyZWV6fVwiPlxuICAgICAgICAgICAgICAgIDxtYXQtY2hlY2tib3ggKGNoYW5nZSk9XCIkZXZlbnQgPyBtYXN0ZXJUb2dnbGUoKSA6IG51bGxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2NoZWNrZWRdPVwic2VsZWN0aW9uLmhhc1ZhbHVlKCkgJiYgaXNBbGxTZWxlY3RlZCgpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtpbmRldGVybWluYXRlXT1cInNlbGVjdGlvbi5oYXNWYWx1ZSgpICYmICFpc0FsbFNlbGVjdGVkKClcIj5cbiAgICAgICAgICAgICAgICA8L21hdC1jaGVja2JveD5cbiAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgPHRkIG1hdC1jZWxsICBtYXQtY2VsbCAqbWF0Q2VsbERlZj1cImxldCByb3dcIiBbbmdDbGFzc109XCJ7J21hdC10YWJsZS1zdGlja3knOmNvbHMuZnJlZXp9XCI+XG4gICAgICAgICAgICAgICAgPG1hdC1jaGVja2JveCAoY2xpY2spPVwiJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjaGFuZ2UpPVwiJGV2ZW50ID8gaXNTZWxlY3RlZChyb3cpIDogbnVsbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbY2hlY2tlZF09XCJzZWxlY3Rpb24uaXNTZWxlY3RlZChyb3cpXCI+XG4gICAgICAgICAgICAgICAgPC9tYXQtY2hlY2tib3g+XG4gICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgPHRoICNoZWFkZXIgbWF0LWhlYWRlci1jZWxsICptYXRIZWFkZXJDZWxsRGVmIG1hdC1zb3J0LWhlYWRlciBzdGlja3kgW25nQ2xhc3NdPVwieydtYXQtdGFibGUtc3RpY2t5Jzpjb2xzLmZyZWV6fVwiPiB7e2NvbHMudGl0bGV9fSA8c3BhbiBcbiAgICAgICAgICBjbGFzcyA9IFwidWktY29sdW1uLXJlc2l6ZXJcIiBcbiAgICAgICAgICAobW91c2Vkb3duKSA9IFwib25Nb3VzZURvd24oJGV2ZW50KVwiPlxuICAgICAgIDwvc3Bhbj48L3RoPlxuICAgICAgICA8dGQgbWF0LWNlbGwgKm1hdENlbGxEZWY9XCJsZXQgZWxlbWVudFwiIFtuZ0NsYXNzXT1cInsnbWF0LXRhYmxlLXN0aWNreSc6Y29scy5mcmVlen1cIj4ge3tlbGVtZW50W2NvbHMuZmllbGRdfX0gPC90ZD5cbiAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgPHRyIG1hdC1oZWFkZXItcm93ICptYXRIZWFkZXJSb3dEZWY9XCJkYXRhRmlsZWRzXCI+PC90cj5cbiAgICAgIDx0ciBtYXQtcm93ICptYXRSb3dEZWY9XCJsZXQgcm93OyBjb2x1bW5zOiBkYXRhRmlsZWRzO1wiPlxuICAgICAgPC90cj5cbiAgICA8L3RhYmxlPlxuICA8L2Rpdj5cbiAgICA8bWF0LXBhZ2luYXRvciAjcGFnaW5hdG9yXG4gICAgICBbbGVuZ3RoXT1cImRhdGFTb3VyY2UuZGF0YS5sZW5ndGhcIlxuICAgICAgW3BhZ2VJbmRleF09XCIwXCJcbiAgICAgIFtwYWdlU2l6ZV09XCI1MFwiXG4gICAgICBbcGFnZVNpemVPcHRpb25zXT1cIls1LCAxMCwgMjAsIDQwXVwiPlxuICAgIDwvbWF0LXBhZ2luYXRvcj5cbiAgPC9kaXY+YFxufSlcbmV4cG9ydCBjbGFzcyBEYXRhR3JpZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgZGF0YUZpbGVkcyA6YW55O1xuICBzdGFydCA6IEVsZW1lbnQ7XG4gIHN0YXJ0WCA6IG51bWJlcjtcbiAgcHJlc3NlZCA6IGJvb2xlYW47XG4gIHN0YXJ0V2lkdGggOm51bWJlcjtcbiAgQElucHV0KCkgc2V0IGRhdGEoX2RhdGE6IGFueVtdKSB7XG4gICAgdGhpcy5kYXRhU291cmNlID0gbmV3IERhdGFUYWJsZURhdGFTb3VyY2UodGhpcy5wYWdpbmF0b3IsIF9kYXRhLCB0aGlzLnNvcnQpO1xuICB9XG4gIEBJbnB1dCgpIHNldCBpZChpZDogYW55KSB7IH1cbiAgQElucHV0KCkgc2V0IGNvbHVtbnMoX2NvbHVtbnM6IGFueVtdKSB7XG4gICAgdmFyIGhlYWRlciA9W107XG4gICAgdmFyIGZpbGVkcyA9IFtdO1xuICAgX2NvbHVtbnMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgIGhlYWRlci5wdXNoKGVsZW1lbnQpO1xuICAgICAgZmlsZWRzLnB1c2goZWxlbWVudC5maWVsZCk7XG4gICAgfSk7XG4gICAgdGhpcy5kaXNwbGF5ZWRDb2x1bW5zID0gaGVhZGVyO1xuICAgIHRoaXMuZGF0YUZpbGVkcyA9IGZpbGVkcztcbiAgfVxuXG4gIEBPdXRwdXQoKSBzZWxlY3RBbGwgOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQFZpZXdDaGlsZChNYXRQYWdpbmF0b3IpIHBhZ2luYXRvcjogTWF0UGFnaW5hdG9yO1xuICBAVmlld0NoaWxkKE1hdFNvcnQpIHNvcnQ6IE1hdFNvcnQ7XG4gIGRhdGFTb3VyY2U6IERhdGFUYWJsZURhdGFTb3VyY2U7XG5cbiAgLyoqIENvbHVtbnMgZGlzcGxheWVkIGluIHRoZSB0YWJsZS4gQ29sdW1ucyBJRHMgY2FuIGJlIGFkZGVkLCByZW1vdmVkLCBvciByZW9yZGVyZWQuICovXG4gIGRpc3BsYXllZENvbHVtbnM6IEFycmF5PHN0cmluZz47XG4gIHNlbGVjdGlvbiA9IG5ldyBTZWxlY3Rpb25Nb2RlbDxhbnk+KHRydWUsW10pO1xuXG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBoQ2VsbCA6RWxlbWVudFJlZixwdWJsaWMgcmVuZGVyZXI6IFJlbmRlcmVyKSB7XG4gICAgXG4gIH1cbiAgaXNBbGxTZWxlY3RlZCgpIHtcbiAgICBjb25zdCBudW1TZWxlY3RlZCA9IHRoaXMuc2VsZWN0aW9uLnNlbGVjdGVkLmxlbmd0aDtcbiAgICBjb25zdCBudW1Sb3dzID0gdGhpcy5kYXRhU291cmNlLmRhdGEubGVuZ3RoO1xuICAgIHJldHVybiBudW1TZWxlY3RlZCA9PSBudW1Sb3dzO1xuICB9XG4gIFxuICAvKiogU2VsZWN0cyBhbGwgcm93cyBpZiB0aGV5IGFyZSBub3QgYWxsIHNlbGVjdGVkOyBvdGhlcndpc2UgY2xlYXIgc2VsZWN0aW9uLiAqL1xuICBtYXN0ZXJUb2dnbGUoKSB7XG4gICAgdGhpcy5pc0FsbFNlbGVjdGVkKCkgP1xuICAgICAgICB0aGlzLnNlbGVjdGlvbi5jbGVhcigpIDpcbiAgICAgICAgdGhpcy5kYXRhU291cmNlLmRhdGEuZm9yRWFjaChyb3cgPT4gdGhpcy5zZWxlY3Rpb24uc2VsZWN0KHJvdykpO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnNlbGVjdGlvbilcbiAgICAgICAgdGhpcy5zZWxlY3RBbGwuZW1pdChudWxsKTtcbiAgfVxuICBpc1NlbGVjdGVkKHJvdykge1xuICAgIHRoaXMuc2VsZWN0aW9uLnRvZ2dsZShyb3cpO1xuICAgIGNvbnNvbGUubG9nKHJvdylcbiAgfVxuXG4gIG9uTW91c2VEb3duKGV2ZW50KXtcbiAgICB0aGlzLnN0YXJ0ID0gZXZlbnQudGFyZ2V0O1xuICAgIHRoaXMucHJlc3NlZCA9IHRydWU7XG4gICAgdGhpcy5zdGFydFggPSBldmVudC54O1xuICAgIC8vY29uc29sZS5sb2coZXZlbnQudGFyZ2V0Lm9mZnNldFBhcmVudC5jZWxsSW5kZXgpXG4gICAvLyBjb25zb2xlLmxvZyh0aGlzLmhDZWxsLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcihcInRoZWFkPnRyXCIpLmNoaWxkcmVuWzJdKVxuICAgIHRoaXMuc3RhcnRXaWR0aCA9IGV2ZW50LnRhcmdldC5vZmZzZXRQYXJlbnQub2Zmc2V0V2lkdGg7XG4gICAgdGhpcy5pbml0UmVzaXphYmxlQ29sdW1ucygpO1xuICB9XG5cbiAgaW5pdFJlc2l6YWJsZUNvbHVtbnMoKSB7XG4gICB0aGlzLnJlbmRlcmVyLmxpc3Rlbkdsb2JhbCgnYm9keScsICdtb3VzZW1vdmUnLCAoZXZlbnQpID0+IHtcbiAgICAgICBpZih0aGlzLnByZXNzZWQpIHtcbiAgICAgICAgICBsZXQgd2lkdGggPSB0aGlzLnN0YXJ0V2lkdGggKyAoZXZlbnQueCAtIHRoaXMuc3RhcnRYKTtcbiAgICAgICAgICBsZXQgaW5kZXggPSBldmVudC50YXJnZXQub2Zmc2V0UGFyZW50LmNlbGxJbmRleDtcbiAgICAgICAgICBsZXQgY29sSGVhZGVyRWxlID0gdGhpcy5oQ2VsbC5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCJ0aGVhZD50clwiKS5jaGlsZHJlbltpbmRleF07XG4gICAgICAgICAgY29sSGVhZGVyRWxlLnN0eWxlLndpZHRoID0gd2lkdGgrJ3B4JztcbiAgICAgICAgICBsZXQgY29sRGF0YUVsZSA9IHRoaXMuaENlbGwubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwidGJvZHk+dHJcIikuY2hpbGRyZW5baW5kZXhdO1xuICAgICAgICAgIGNvbERhdGFFbGUuc3R5bGUud2lkdGggPSB3aWR0aCsncHgnO1xuICAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLnJlbmRlcmVyLmxpc3Rlbkdsb2JhbCgnYm9keScsICdtb3VzZXVwJywgKGV2ZW50KSA9PiB7XG4gICAgaWYodGhpcy5wcmVzc2VkKSB7XG4gICAgICAgIHRoaXMucHJlc3NlZCA9IGZhbHNlO1xuICAgIH1cbiAgfSk7XG59XG59XG4iXX0=