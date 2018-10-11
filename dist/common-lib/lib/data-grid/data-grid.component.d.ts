import { OnInit, EventEmitter, ElementRef, Renderer } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { DataTableDataSource } from './data-table-datasource';
export declare class DataGridComponent implements OnInit {
    private hCell;
    renderer: Renderer;
    ngOnInit(): void;
    dataFileds: any;
    start: Element;
    startX: number;
    pressed: boolean;
    startWidth: number;
    data: any[];
    id: any;
    columns: any[];
    selectAll: EventEmitter<any>;
    paginator: MatPaginator;
    sort: MatSort;
    dataSource: DataTableDataSource;
    /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
    displayedColumns: Array<string>;
    selection: SelectionModel<any>;
    constructor(hCell: ElementRef, renderer: Renderer);
    isAllSelected(): boolean;
    /** Selects all rows if they are not all selected; otherwise clear selection. */
    masterToggle(): void;
    isSelected(row: any): void;
    onMouseDown(event: any): void;
    initResizableColumns(): void;
}
