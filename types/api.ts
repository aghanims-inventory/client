export interface PagedApiRequest {
    page: number;
    pageSize: number;
};

export interface ProblemDetails {
    type: string;
    title: string;
    status: number;
    detail: string;
    instance: string;
};

export interface PagedApiResponse<T = unknown> {
    data: T[] | null;
    page: number;
    pageSize: number;
    totalRecords: number;
    totalPages: number;
    hasNextPage: boolean;
    hasPreviousPage: boolean;
    error: ProblemDetails | null;
};

export interface ApiResponse<T = unknown> {
    data: T | null;
    error: ProblemDetails | null;
};

export type EnumResponse = {
    name: string;
    value: number;
};
