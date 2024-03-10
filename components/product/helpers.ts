/**
 * 
 * Format Date
 */
export const formatDate = (date: string) => {
  const formatted = new Date(date);

  return new Intl.DateTimeFormat("en-US").format(formatted);
}