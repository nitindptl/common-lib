/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
var /**
 * Data source for the DataTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
DataTableDataSource = /** @class */ (function (_super) {
    tslib_1.__extends(DataTableDataSource, _super);
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
            observableOf(this.data),
            this.paginator.page,
            this.sort.sortChange
        ];
        // Set the paginators length
        this.paginator.length = this.data.length;
        return merge.apply(void 0, tslib_1.__spread(dataMutations)).pipe(map(function () {
            return _this.getPagedData(_this.getSortedData(tslib_1.__spread(_this.data)));
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
 * Data source for the DataTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export { DataTableDataSource };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS10YWJsZS1kYXRhc291cmNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vY29tbW9uLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9kYXRhLWdyaWQvZGF0YS10YWJsZS1kYXRhc291cmNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBRXRELE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyQyxPQUFPLEVBQWMsRUFBRSxJQUFJLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxNQUFNLENBQUM7Ozs7Ozs7Ozs7Ozs7O0FBYzdEOzs7OztBQUFBO0lBQXlDLCtDQUFlO0lBRXRELDZCQUFvQixTQUF1QixFQUFVLEtBQVksRUFBUyxJQUFhO1FBQXZGLFlBQ0UsaUJBQU8sU0FFUjtRQUhtQixlQUFTLEdBQVQsU0FBUyxDQUFjO1FBQVUsV0FBSyxHQUFMLEtBQUssQ0FBTztRQUFTLFVBQUksR0FBSixJQUFJLENBQVM7UUFFckYsS0FBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7O0tBQ25CO0lBRUQ7Ozs7T0FJRzs7Ozs7O0lBQ0gscUNBQU87Ozs7O0lBQVA7UUFBQSxpQkFlQzs7UUFaQyxJQUFNLGFBQWEsR0FBRztZQUNwQixZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztZQUN2QixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUk7WUFDbkIsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVO1NBQ3JCLENBQUM7O1FBR0YsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7UUFFekMsT0FBTyxLQUFLLGdDQUFJLGFBQWEsR0FBRSxJQUFJLENBQUMsR0FBRyxDQUFDO1lBQ3RDLE9BQU8sS0FBSSxDQUFDLFlBQVksQ0FBQyxLQUFJLENBQUMsYUFBYSxrQkFBSyxLQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztTQUM5RCxDQUFDLENBQUMsQ0FBQztLQUNMO0lBRUQ7OztPQUdHOzs7Ozs7SUFDSCx3Q0FBVTs7Ozs7SUFBVixlQUFlOzs7Ozs7O0lBTVAsMENBQVk7Ozs7OztjQUFDLElBQXFCOztRQUN4QyxJQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQztRQUN0RSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUM7Ozs7Ozs7O0lBT2xELDJDQUFhOzs7Ozs7Y0FBQyxJQUFxQjs7UUFDekMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxLQUFLLEVBQUUsRUFBRTtZQUNuRCxPQUFPLElBQUksQ0FBQztTQUNiO1FBRUQsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQUMsQ0FBQyxFQUFFLENBQUM7O1lBQ3BCLElBQU0sS0FBSyxHQUFHLEtBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxLQUFLLEtBQUssQ0FBQztZQUM1QyxRQUFRLEtBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO2dCQUN4QixLQUFLLE1BQU0sQ0FBQyxDQUFDLE9BQU8sT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztnQkFDbkQsS0FBSyxJQUFJLENBQUMsQ0FBQyxPQUFPLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDO2dCQUMvQyxPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUNuQjtTQUNGLENBQUMsQ0FBQzs7OEJBN0VQO0VBaUJ5QyxVQUFVLEVBOERsRCxDQUFBOzs7Ozs7QUE5REQsK0JBOERDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHRCxpQkFBaUIsQ0FBQyxFQUFFLENBQUMsRUFBRSxLQUFLO0lBQzFCLE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztDQUM1QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICdAYW5ndWxhci9jZGsvY29sbGVjdGlvbnMnO1xuaW1wb3J0IHsgTWF0UGFnaW5hdG9yLCBNYXRTb3J0IH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgYXMgb2JzZXJ2YWJsZU9mLCBtZXJnZSB9IGZyb20gJ3J4anMnO1xuXG4vLyBUT0RPOiBSZXBsYWNlIHRoaXMgd2l0aCB5b3VyIG93biBkYXRhIG1vZGVsIHR5cGVcbmV4cG9ydCBpbnRlcmZhY2UgRGF0YVRhYmxlSXRlbSB7XG4gIG5hbWU6IHN0cmluZztcbiAgaWQ6IG51bWJlcjtcbn1cblxuXG4vKipcbiAqIERhdGEgc291cmNlIGZvciB0aGUgRGF0YVRhYmxlIHZpZXcuIFRoaXMgY2xhc3Mgc2hvdWxkXG4gKiBlbmNhcHN1bGF0ZSBhbGwgbG9naWMgZm9yIGZldGNoaW5nIGFuZCBtYW5pcHVsYXRpbmcgdGhlIGRpc3BsYXllZCBkYXRhXG4gKiAoaW5jbHVkaW5nIHNvcnRpbmcsIHBhZ2luYXRpb24sIGFuZCBmaWx0ZXJpbmcpLlxuICovXG5leHBvcnQgY2xhc3MgRGF0YVRhYmxlRGF0YVNvdXJjZSBleHRlbmRzIERhdGFTb3VyY2U8YW55PiB7XG4gIHB1YmxpYyBkYXRhOiBhbnlbXTtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBwYWdpbmF0b3I6IE1hdFBhZ2luYXRvciwgcHJpdmF0ZSBfZGF0YTogYW55W10scHJpdmF0ZSBzb3J0OiBNYXRTb3J0KSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmRhdGEgPSBfZGF0YTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb25uZWN0IHRoaXMgZGF0YSBzb3VyY2UgdG8gdGhlIHRhYmxlLiBUaGUgdGFibGUgd2lsbCBvbmx5IHVwZGF0ZSB3aGVuXG4gICAqIHRoZSByZXR1cm5lZCBzdHJlYW0gZW1pdHMgbmV3IGl0ZW1zLlxuICAgKiBAcmV0dXJucyBBIHN0cmVhbSBvZiB0aGUgaXRlbXMgdG8gYmUgcmVuZGVyZWQuXG4gICAqL1xuICBjb25uZWN0KCk6IE9ic2VydmFibGU8YW55W10+IHtcbiAgICAvLyBDb21iaW5lIGV2ZXJ5dGhpbmcgdGhhdCBhZmZlY3RzIHRoZSByZW5kZXJlZCBkYXRhIGludG8gb25lIHVwZGF0ZVxuICAgIC8vIHN0cmVhbSBmb3IgdGhlIGRhdGEtdGFibGUgdG8gY29uc3VtZS5cbiAgICBjb25zdCBkYXRhTXV0YXRpb25zID0gW1xuICAgICAgb2JzZXJ2YWJsZU9mKHRoaXMuZGF0YSksXG4gICAgICB0aGlzLnBhZ2luYXRvci5wYWdlLFxuICAgICAgdGhpcy5zb3J0LnNvcnRDaGFuZ2VcbiAgICBdO1xuXG4gICAgLy8gU2V0IHRoZSBwYWdpbmF0b3JzIGxlbmd0aFxuICAgIHRoaXMucGFnaW5hdG9yLmxlbmd0aCA9IHRoaXMuZGF0YS5sZW5ndGg7XG5cbiAgICByZXR1cm4gbWVyZ2UoLi4uZGF0YU11dGF0aW9ucykucGlwZShtYXAoKCkgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0UGFnZWREYXRhKHRoaXMuZ2V0U29ydGVkRGF0YShbLi4udGhpcy5kYXRhXSkpO1xuICAgIH0pKTtcbiAgfVxuXG4gIC8qKlxuICAgKiAgQ2FsbGVkIHdoZW4gdGhlIHRhYmxlIGlzIGJlaW5nIGRlc3Ryb3llZC4gVXNlIHRoaXMgZnVuY3Rpb24sIHRvIGNsZWFuIHVwXG4gICAqIGFueSBvcGVuIGNvbm5lY3Rpb25zIG9yIGZyZWUgYW55IGhlbGQgcmVzb3VyY2VzIHRoYXQgd2VyZSBzZXQgdXAgZHVyaW5nIGNvbm5lY3QuXG4gICAqL1xuICBkaXNjb25uZWN0KCkge31cblxuICAvKipcbiAgICogUGFnaW5hdGUgdGhlIGRhdGEgKGNsaWVudC1zaWRlKS4gSWYgeW91J3JlIHVzaW5nIHNlcnZlci1zaWRlIHBhZ2luYXRpb24sXG4gICAqIHRoaXMgd291bGQgYmUgcmVwbGFjZWQgYnkgcmVxdWVzdGluZyB0aGUgYXBwcm9wcmlhdGUgZGF0YSBmcm9tIHRoZSBzZXJ2ZXIuXG4gICAqL1xuICBwcml2YXRlIGdldFBhZ2VkRGF0YShkYXRhOiBEYXRhVGFibGVJdGVtW10pIHtcbiAgICBjb25zdCBzdGFydEluZGV4ID0gdGhpcy5wYWdpbmF0b3IucGFnZUluZGV4ICogdGhpcy5wYWdpbmF0b3IucGFnZVNpemU7XG4gICAgcmV0dXJuIGRhdGEuc3BsaWNlKHN0YXJ0SW5kZXgsIHRoaXMucGFnaW5hdG9yLnBhZ2VTaXplKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTb3J0IHRoZSBkYXRhIChjbGllbnQtc2lkZSkuIElmIHlvdSdyZSB1c2luZyBzZXJ2ZXItc2lkZSBzb3J0aW5nLFxuICAgKiB0aGlzIHdvdWxkIGJlIHJlcGxhY2VkIGJ5IHJlcXVlc3RpbmcgdGhlIGFwcHJvcHJpYXRlIGRhdGEgZnJvbSB0aGUgc2VydmVyLlxuICAgKi9cbiAgcHJpdmF0ZSBnZXRTb3J0ZWREYXRhKGRhdGE6IERhdGFUYWJsZUl0ZW1bXSkge1xuICAgIGlmICghdGhpcy5zb3J0LmFjdGl2ZSB8fCB0aGlzLnNvcnQuZGlyZWN0aW9uID09PSAnJykge1xuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRhdGEuc29ydCgoYSwgYikgPT4ge1xuICAgICAgY29uc3QgaXNBc2MgPSB0aGlzLnNvcnQuZGlyZWN0aW9uID09PSAnYXNjJztcbiAgICAgIHN3aXRjaCAodGhpcy5zb3J0LmFjdGl2ZSkge1xuICAgICAgICBjYXNlICduYW1lJzogcmV0dXJuIGNvbXBhcmUoYS5uYW1lLCBiLm5hbWUsIGlzQXNjKTtcbiAgICAgICAgY2FzZSAnaWQnOiByZXR1cm4gY29tcGFyZSgrYS5pZCwgK2IuaWQsIGlzQXNjKTtcbiAgICAgICAgZGVmYXVsdDogcmV0dXJuIDA7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cblxuLyoqIFNpbXBsZSBzb3J0IGNvbXBhcmF0b3IgZm9yIGV4YW1wbGUgSUQvTmFtZSBjb2x1bW5zIChmb3IgY2xpZW50LXNpZGUgc29ydGluZykuICovXG5mdW5jdGlvbiBjb21wYXJlKGEsIGIsIGlzQXNjKSB7XG4gIHJldHVybiAoYSA8IGIgPyAtMSA6IDEpICogKGlzQXNjID8gMSA6IC0xKTtcbn1cbiJdfQ==