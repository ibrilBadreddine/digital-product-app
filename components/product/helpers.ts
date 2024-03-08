import type { TableColumn } from "@youcan/ui-vue3/dist/types/components/Table/types";

/**
 * 
 * Table Columns
 */
export const columns: TableColumn[] = [
    { label: '', accessor: 'id' },
    { label: 'Name', accessor: 'name' },
    { label: 'Created At', accessor: 'created_at' },
  ];