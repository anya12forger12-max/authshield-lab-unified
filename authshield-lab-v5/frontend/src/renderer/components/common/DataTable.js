import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useCallback, useMemo } from 'react';
import { cn } from '../../utils/cn';
export function DataTable({ columns, data, caption, sortable = true, selectable = false, onSelectionChange, keyExtractor, emptyMessage = 'No data available', loading = false, className, pageSize = 10, onPageChange, }) {
    const [sort, setSort] = useState(null);
    const [selectedKeys, setSelectedKeys] = useState(new Set());
    const [currentPage, setCurrentPage] = useState(0);
    const totalPages = Math.ceil(data.length / pageSize);
    const handleSort = useCallback((columnId) => {
        if (!sortable)
            return;
        setSort((prev) => {
            if (prev?.column === columnId) {
                const next = prev.direction === 'asc' ? 'desc' : 'asc';
                return { column: columnId, direction: next };
            }
            return { column: columnId, direction: 'asc' };
        });
    }, [sortable]);
    const sortedData = useMemo(() => {
        if (!sort)
            return data;
        const column = columns.find((c) => c.id === sort.column);
        if (!column)
            return data;
        return [...data].sort((a, b) => {
            let aVal;
            let bVal;
            if (column.accessorFn) {
                aVal = column.accessorFn(a);
                bVal = column.accessorFn(b);
            }
            else if (column.accessorKey) {
                aVal = a[column.accessorKey];
                bVal = b[column.accessorKey];
            }
            if (aVal == null && bVal == null)
                return 0;
            if (aVal == null)
                return 1;
            if (bVal == null)
                return -1;
            const comparison = String(aVal).localeCompare(String(bVal));
            return sort.direction === 'asc' ? comparison : -comparison;
        });
    }, [data, sort, columns]);
    const paginatedData = useMemo(() => {
        const start = currentPage * pageSize;
        return sortedData.slice(start, start + pageSize);
    }, [sortedData, currentPage, pageSize]);
    const handlePageChange = useCallback((page) => {
        setCurrentPage(page);
        onPageChange?.(page);
    }, [onPageChange]);
    const toggleAll = useCallback(() => {
        if (selectedKeys.size === paginatedData.length) {
            setSelectedKeys(new Set());
            onSelectionChange?.([]);
        }
        else {
            const newKeys = new Set(paginatedData.map(keyExtractor));
            setSelectedKeys(newKeys);
            onSelectionChange?.(paginatedData);
        }
    }, [paginatedData, selectedKeys.size, keyExtractor, onSelectionChange]);
    const toggleRow = useCallback((row) => {
        const key = keyExtractor(row);
        setSelectedKeys((prev) => {
            const next = new Set(prev);
            if (next.has(key)) {
                next.delete(key);
            }
            else {
                next.add(key);
            }
            if (onSelectionChange) {
                const selected = paginatedData.filter((r) => next.has(keyExtractor(r)));
                onSelectionChange(selected);
            }
            return next;
        });
    }, [paginatedData, keyExtractor, onSelectionChange]);
    const getSortIndicator = (columnId) => {
        if (sort?.column !== columnId)
            return '';
        return sort.direction === 'asc' ? ' \u2191' : ' \u2193';
    };
    return (_jsxs("div", { className: cn('w-full overflow-x-auto', className), children: [_jsxs("table", { className: "w-full border-collapse text-[var(--font-size-sm)]", "aria-label": caption || 'Data table', children: [caption && (_jsx("caption", { className: "sr-only", children: caption })), _jsx("thead", { children: _jsxs("tr", { className: "border-b border-[var(--color-border)]", children: [selectable && (_jsx("th", { className: "w-10 px-3 py-2", children: _jsx("input", { type: "checkbox", className: "h-4 w-4 rounded border-[var(--color-border)] text-[var(--color-primary)] focus:ring-[var(--color-focus-ring)]", checked: selectedKeys.size === paginatedData.length && paginatedData.length > 0, onChange: toggleAll, "aria-label": "Select all rows" }) })), columns.map((col) => (_jsxs("th", { className: cn('px-3 py-2 text-left font-semibold text-[var(--color-text-secondary)] whitespace-nowrap', col.sortable && sortable && 'cursor-pointer hover:text-[var(--color-text-primary)] select-none', col.className), style: col.width ? { width: col.width } : undefined, "aria-sort": sort?.column === col.id
                                        ? sort.direction === 'asc'
                                            ? 'ascending'
                                            : 'descending'
                                        : col.sortable
                                            ? 'none'
                                            : undefined, onClick: () => col.sortable && handleSort(col.id), scope: "col", children: [col.header, col.sortable && sortable && (_jsx("span", { className: "ml-1 inline-block", "aria-hidden": "true", children: getSortIndicator(col.id) }))] }, col.id)))] }) }), _jsx("tbody", { children: loading ? (_jsx("tr", { children: _jsx("td", { colSpan: columns.length + (selectable ? 1 : 0), className: "px-3 py-8 text-center text-[var(--color-text-muted)]", children: _jsxs("div", { className: "flex items-center justify-center gap-2", children: [_jsxs("svg", { className: "animate-spin h-4 w-4", viewBox: "0 0 24 24", fill: "none", "aria-hidden": "true", children: [_jsx("circle", { className: "opacity-25", cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "4" }), _jsx("path", { className: "opacity-75", fill: "currentColor", d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" })] }), "Loading..."] }) }) })) : paginatedData.length === 0 ? (_jsx("tr", { children: _jsx("td", { colSpan: columns.length + (selectable ? 1 : 0), className: "px-3 py-8 text-center text-[var(--color-text-muted)]", children: emptyMessage }) })) : (paginatedData.map((row) => {
                            const key = keyExtractor(row);
                            const isSelected = selectedKeys.has(key);
                            return (_jsxs("tr", { className: cn('border-b border-[var(--color-border-subtle)] hover:bg-[var(--color-surface-sunken)] transition-colors', isSelected && 'bg-[var(--color-primary-subtle)]'), children: [selectable && (_jsx("td", { className: "w-10 px-3 py-2", children: _jsx("input", { type: "checkbox", className: "h-4 w-4 rounded border-[var(--color-border)] text-[var(--color-primary)] focus:ring-[var(--color-focus-ring)]", checked: isSelected, onChange: () => toggleRow(row), "aria-label": `Select row ${key}` }) })), columns.map((col) => (_jsx("td", { className: cn('px-3 py-2 text-[var(--color-text-primary)]', col.className), children: col.accessorFn
                                            ? col.accessorFn(row)
                                            : col.accessorKey
                                                ? String(row[col.accessorKey] ?? '')
                                                : null }, col.id)))] }, key));
                        })) })] }), totalPages > 1 && (_jsxs("nav", { className: "flex items-center justify-between px-3 py-2 border-t border-[var(--color-border)]", "aria-label": "Pagination", children: [_jsxs("span", { className: "text-[var(--font-size-sm)] text-[var(--color-text-muted)]", children: ["Showing ", currentPage * pageSize + 1, " to", ' ', Math.min((currentPage + 1) * pageSize, data.length), " of ", data.length] }), _jsxs("div", { className: "flex gap-1", children: [_jsx("button", { onClick: () => handlePageChange(currentPage - 1), disabled: currentPage === 0, className: "px-2 py-1 text-sm rounded border border-[var(--color-border)] hover:bg-[var(--color-surface-sunken)] disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-focus-ring)]", "aria-label": "Previous page", children: "Previous" }), Array.from({ length: totalPages }, (_, i) => (_jsx("button", { onClick: () => handlePageChange(i), className: cn('px-2 py-1 text-sm rounded border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-focus-ring)]', i === currentPage
                                    ? 'bg-[var(--color-primary)] text-white border-[var(--color-primary)]'
                                    : 'border-[var(--color-border)] hover:bg-[var(--color-surface-sunken)]'), "aria-label": `Page ${i + 1}`, "aria-current": i === currentPage ? 'page' : undefined, children: i + 1 }, i))), _jsx("button", { onClick: () => handlePageChange(currentPage + 1), disabled: currentPage >= totalPages - 1, className: "px-2 py-1 text-sm rounded border border-[var(--color-border)] hover:bg-[var(--color-surface-sunken)] disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-focus-ring)]", "aria-label": "Next page", children: "Next" })] })] }))] }));
}
//# sourceMappingURL=DataTable.js.map