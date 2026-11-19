import type React from 'react';
export interface DataTableColumn<T> {
    id: string;
    header: string;
    accessorKey?: keyof T;
    accessorFn?: (row: T) => React.ReactNode;
    sortable?: boolean;
    className?: string;
    width?: string;
}
export interface DataTableProps<T> {
    columns: DataTableColumn<T>[];
    data: T[];
    caption?: string;
    sortable?: boolean;
    selectable?: boolean;
    onSelectionChange?: (selectedRows: T[]) => void;
    keyExtractor: (row: T) => string;
    emptyMessage?: string;
    loading?: boolean;
    className?: string;
    pageSize?: number;
    onPageChange?: (page: number) => void;
}
export declare function DataTable<T extends Record<string, unknown>>({ columns, data, caption, sortable, selectable, onSelectionChange, keyExtractor, emptyMessage, loading, className, pageSize, onPageChange, }: DataTableProps<T>): React.JSX.Element;
//# sourceMappingURL=DataTable.d.ts.map