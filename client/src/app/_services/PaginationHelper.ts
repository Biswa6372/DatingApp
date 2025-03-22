import { HttpParams, HttpResponse } from "@angular/common/http";
import { signal } from "@angular/core";
import { PaginatedResult } from "../_models/pagination";

export function setPaginatedResponse<T>(response: HttpResponse<T>,
    PaginatedResultSignal: ReturnType<typeof signal<PaginatedResult<T> | null>>) {
    PaginatedResultSignal.set({
        items: response.body as T,
        pagination: JSON.parse(response.headers.get('Pagination')!)
    })
}

export function setPaginationHeader(pageNumber: number, pageSize: number) {
    let params = new HttpParams();

    if (pageNumber && pageSize) {
        params = params.append('pageNumber', pageNumber);
        params = params.append('pageSize', pageSize);
    }

    return params;
}