export interface Quote {
    id: number;
    author?: string;
    content: string;
}

export interface Pagination<T> {
    page: number;
    totalPages: number;
    data: T[];
}