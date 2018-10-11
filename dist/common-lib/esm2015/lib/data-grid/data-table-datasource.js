/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { DataSource } from '@angular/cdk/collections';
import { map } from 'rxjs/operators';
import { of as observableOf, merge } from 'rxjs';
/**
 * @record
 */
export function DataTableItem() { }
/** @type {?} */
DataTableItem.prototype.name;
/** @type {?} */
DataTableItem.prototype.id;
/**
 * Data source for the DataTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class DataTableDataSource extends DataSource {
    /**
     * @param {?} paginator
     * @param {?} _data
     * @param {?} sort
     */
    constructor(paginator, _data, sort) {
        super();
        this.paginator = paginator;
        this._data = _data;
        this.sort = sort;
        this.data = _data;
    }
    /**
     * Connect this data source to the table. The table will only update when
     * the returned stream emits new items.
     * @return {?} A stream of the items to be rendered.
     */
    connect() {
        /** @type {?} */
        const dataMutations = [
            observableOf(this.data),
            this.paginator.page,
            this.sort.sortChange
        ];
        // Set the paginators length
        this.paginator.length = this.data.length;
        return merge(...dataMutations).pipe(map(() => {
            return this.getPagedData(this.getSortedData([...this.data]));
        }));
    }
    /**
     *  Called when the table is being destroyed. Use this function, to clean up
     * any open connections or free any held resources that were set up during connect.
     * @return {?}
     */
    disconnect() { }
    /**
     * Paginate the data (client-side). If you're using server-side pagination,
     * this would be replaced by requesting the appropriate data from the server.
     * @param {?} data
     * @return {?}
     */
    getPagedData(data) {
        /** @type {?} */
        const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
        return data.splice(startIndex, this.paginator.pageSize);
    }
    /**
     * Sort the data (client-side). If you're using server-side sorting,
     * this would be replaced by requesting the appropriate data from the server.
     * @param {?} data
     * @return {?}
     */
    getSortedData(data) {
        if (!this.sort.active || this.sort.direction === '') {
            return data;
        }
        return data.sort((a, b) => {
            /** @type {?} */
            const isAsc = this.sort.direction === 'asc';
            switch (this.sort.active) {
                case 'name': return compare(a.name, b.name, isAsc);
                case 'id': return compare(+a.id, +b.id, isAsc);
                default: return 0;
            }
        });
    }
}
if (false) {
    /** @type {?} */
    DataTableDataSource.prototype.data;
    /** @type {?} */
    DataTableDataSource.prototype.paginator;
    /** @type {?} */
    DataTableDataSource.prototype._data;
    /** @type {?} */
    DataTableDataSource.prototype.sort;
}
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS10YWJsZS1kYXRhc291cmNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vY29tbW9uLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9kYXRhLWdyaWQvZGF0YS10YWJsZS1kYXRhc291cmNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFFdEQsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3JDLE9BQU8sRUFBYyxFQUFFLElBQUksWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLE1BQU0sQ0FBQzs7Ozs7Ozs7Ozs7Ozs7QUFjN0QsTUFBTSwwQkFBMkIsU0FBUSxVQUFlOzs7Ozs7SUFFdEQsWUFBb0IsU0FBdUIsRUFBVSxLQUFZLEVBQVMsSUFBYTtRQUNyRixLQUFLLEVBQUUsQ0FBQztRQURVLGNBQVMsR0FBVCxTQUFTLENBQWM7UUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFPO1FBQVMsU0FBSSxHQUFKLElBQUksQ0FBUztRQUVyRixJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztLQUNuQjs7Ozs7O0lBT0QsT0FBTzs7UUFHTCxNQUFNLGFBQWEsR0FBRztZQUNwQixZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztZQUN2QixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUk7WUFDbkIsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVO1NBQ3JCLENBQUM7O1FBR0YsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7UUFFekMsT0FBTyxLQUFLLENBQUMsR0FBRyxhQUFhLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRTtZQUMzQyxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUM5RCxDQUFDLENBQUMsQ0FBQztLQUNMOzs7Ozs7SUFNRCxVQUFVLE1BQUs7Ozs7Ozs7SUFNUCxZQUFZLENBQUMsSUFBcUI7O1FBQ3hDLE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDO1FBQ3RFLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQzs7Ozs7Ozs7SUFPbEQsYUFBYSxDQUFDLElBQXFCO1FBQ3pDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsS0FBSyxFQUFFLEVBQUU7WUFDbkQsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUVELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTs7WUFDeEIsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEtBQUssS0FBSyxDQUFDO1lBQzVDLFFBQVEsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7Z0JBQ3hCLEtBQUssTUFBTSxDQUFDLENBQUMsT0FBTyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO2dCQUNuRCxLQUFLLElBQUksQ0FBQyxDQUFDLE9BQU8sT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUM7Z0JBQy9DLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQ25CO1NBQ0YsQ0FBQyxDQUFDOztDQUVOOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHRCxpQkFBaUIsQ0FBQyxFQUFFLENBQUMsRUFBRSxLQUFLO0lBQzFCLE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztDQUM1QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAYW5ndWxhci9jZGsvY29sbGVjdGlvbnMnO1xuaW1wb3J0IHsgTWF0UGFnaW5hdG9yLCBNYXRTb3J0IH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgYXMgb2JzZXJ2YWJsZU9mLCBtZXJnZSB9IGZyb20gJ3J4anMnO1xuXG4vLyBUT0RPOiBSZXBsYWNlIHRoaXMgd2l0aCB5b3VyIG93biBkYXRhIG1vZGVsIHR5cGVcbmV4cG9ydCBpbnRlcmZhY2UgRGF0YVRhYmxlSXRlbSB7XG4gIG5hbWU6IHN0cmluZztcbiAgaWQ6IG51bWJlcjtcbn1cblxuXG4vKipcbiAqIERhdGEgc291cmNlIGZvciB0aGUgRGF0YVRhYmxlIHZpZXcuIFRoaXMgY2xhc3Mgc2hvdWxkXG4gKiBlbmNhcHN1bGF0ZSBhbGwgbG9naWMgZm9yIGZldGNoaW5nIGFuZCBtYW5pcHVsYXRpbmcgdGhlIGRpc3BsYXllZCBkYXRhXG4gKiAoaW5jbHVkaW5nIHNvcnRpbmcsIHBhZ2luYXRpb24sIGFuZCBmaWx0ZXJpbmcpLlxuICovXG5leHBvcnQgY2xhc3MgRGF0YVRhYmxlRGF0YVNvdXJjZSBleHRlbmRzIERhdGFTb3VyY2U8YW55PiB7XG4gIHB1YmxpYyBkYXRhOiBhbnlbXTtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBwYWdpbmF0b3I6IE1hdFBhZ2luYXRvciwgcHJpdmF0ZSBfZGF0YTogYW55W10scHJpdmF0ZSBzb3J0OiBNYXRTb3J0KSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmRhdGEgPSBfZGF0YTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb25uZWN0IHRoaXMgZGF0YSBzb3VyY2UgdG8gdGhlIHRhYmxlLiBUaGUgdGFibGUgd2lsbCBvbmx5IHVwZGF0ZSB3aGVuXG4gICAqIHRoZSByZXR1cm5lZCBzdHJlYW0gZW1pdHMgbmV3IGl0ZW1zLlxuICAgKiBAcmV0dXJucyBBIHN0cmVhbSBvZiB0aGUgaXRlbXMgdG8gYmUgcmVuZGVyZWQuXG4gICAqL1xuICBjb25uZWN0KCk6IE9ic2VydmFibGU8YW55W10+IHtcbiAgICAvLyBDb21iaW5lIGV2ZXJ5dGhpbmcgdGhhdCBhZmZlY3RzIHRoZSByZW5kZXJlZCBkYXRhIGludG8gb25lIHVwZGF0ZVxuICAgIC8vIHN0cmVhbSBmb3IgdGhlIGRhdGEtdGFibGUgdG8gY29uc3VtZS5cbiAgICBjb25zdCBkYXRhTXV0YXRpb25zID0gW1xuICAgICAgb2JzZXJ2YWJsZU9mKHRoaXMuZGF0YSksXG4gICAgICB0aGlzLnBhZ2luYXRvci5wYWdlLFxuICAgICAgdGhpcy5zb3J0LnNvcnRDaGFuZ2VcbiAgICBdO1xuXG4gICAgLy8gU2V0IHRoZSBwYWdpbmF0b3JzIGxlbmd0aFxuICAgIHRoaXMucGFnaW5hdG9yLmxlbmd0aCA9IHRoaXMuZGF0YS5sZW5ndGg7XG5cbiAgICByZXR1cm4gbWVyZ2UoLi4uZGF0YU11dGF0aW9ucykucGlwZShtYXAoKCkgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0UGFnZWREYXRhKHRoaXMuZ2V0U29ydGVkRGF0YShbLi4udGhpcy5kYXRhXSkpO1xuICAgIH0pKTtcbiAgfVxuXG4gIC8qKlxuICAgKiAgQ2FsbGVkIHdoZW4gdGhlIHRhYmxlIGlzIGJlaW5nIGRlc3Ryb3llZC4gVXNlIHRoaXMgZnVuY3Rpb24sIHRvIGNsZWFuIHVwXG4gICAqIGFueSBvcGVuIGNvbm5lY3Rpb25zIG9yIGZyZWUgYW55IGhlbGQgcmVzb3VyY2VzIHRoYXQgd2VyZSBzZXQgdXAgZHVyaW5nIGNvbm5lY3QuXG4gICAqL1xuICBkaXNjb25uZWN0KCkge31cblxuICAvKipcbiAgICogUGFnaW5hdGUgdGhlIGRhdGEgKGNsaWVudC1zaWRlKS4gSWYgeW91J3JlIHVzaW5nIHNlcnZlci1zaWRlIHBhZ2luYXRpb24sXG4gICAqIHRoaXMgd291bGQgYmUgcmVwbGFjZWQgYnkgcmVxdWVzdGluZyB0aGUgYXBwcm9wcmlhdGUgZGF0YSBmcm9tIHRoZSBzZXJ2ZXIuXG4gICAqL1xuICBwcml2YXRlIGdldFBhZ2VkRGF0YShkYXRhOiBEYXRhVGFibGVJdGVtW10pIHtcbiAgICBjb25zdCBzdGFydEluZGV4ID0gdGhpcy5wYWdpbmF0b3IucGFnZUluZGV4ICogdGhpcy5wYWdpbmF0b3IucGFnZVNpemU7XG4gICAgcmV0dXJuIGRhdGEuc3BsaWNlKHN0YXJ0SW5kZXgsIHRoaXMucGFnaW5hdG9yLnBhZ2VTaXplKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTb3J0IHRoZSBkYXRhIChjbGllbnQtc2lkZSkuIElmIHlvdSdyZSB1c2luZyBzZXJ2ZXItc2lkZSBzb3J0aW5nLFxuICAgKiB0aGlzIHdvdWxkIGJlIHJlcGxhY2VkIGJ5IHJlcXVlc3RpbmcgdGhlIGFwcHJvcHJpYXRlIGRhdGEgZnJvbSB0aGUgc2VydmVyLlxuICAgKi9cbiAgcHJpdmF0ZSBnZXRTb3J0ZWREYXRhKGRhdGE6IERhdGFUYWJsZUl0ZW1bXSkge1xuICAgIGlmICghdGhpcy5zb3J0LmFjdGl2ZSB8fCB0aGlzLnNvcnQuZGlyZWN0aW9uID09PSAnJykge1xuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRhdGEuc29ydCgoYSwgYikgPT4ge1xuICAgICAgY29uc3QgaXNBc2MgPSB0aGlzLnNvcnQuZGlyZWN0aW9uID09PSAnYXNjJztcbiAgICAgIHN3aXRjaCAodGhpcy5zb3J0LmFjdGl2ZSkge1xuICAgICAgICBjYXNlICduYW1lJzogcmV0dXJuIGNvbXBhcmUoYS5uYW1lLCBiLm5hbWUsIGlzQXNjKTtcbiAgICAgICAgY2FzZSAnaWQnOiByZXR1cm4gY29tcGFyZSgrYS5pZCwgK2IuaWQsIGlzQXNjKTtcbiAgICAgICAgZGVmYXVsdDogcmV0dXJuIDA7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cblxuLyoqIFNpbXBsZSBzb3J0IGNvbXBhcmF0b3IgZm9yIGV4YW1wbGUgSUQvTmFtZSBjb2x1bW5zIChmb3IgY2xpZW50LXNpZGUgc29ydGluZykuICovXG5mdW5jdGlvbiBjb21wYXJlKGEsIGIsIGlzQXNjKSB7XG4gIHJldHVybiAoYSA8IGIgPyAtMSA6IDEpICogKGlzQXNjID8gMSA6IC0xKTtcbn1cbiJdfQ==