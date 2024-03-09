
/**
 * 
 * Table Columns
 */
export const columns = [
  { label: "Name", accessor: "name" },
  { label: "Price", accessor: "price" },
  { label: "Status", accessor: "status" },
  { label: "Created At", accessor: "created_at" },
  { label: "Action", accessor: "action" },
];

/**
 * 
 * Format Date
 */
export const formatDate = (date: string) => {
  const formatted = new Date(date);

  return new Intl.DateTimeFormat("en-US").format(formatted);
}