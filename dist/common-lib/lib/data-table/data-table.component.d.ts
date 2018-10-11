import { OnInit } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
export declare class DataTableComponent implements OnInit {
    dataSource: any[];
    displayedColumns: Array<string>;
    paginator: MatPaginator;
    sort: MatSort;
    constructor();
    ngOnInit(): void;
    data: any[];
}
