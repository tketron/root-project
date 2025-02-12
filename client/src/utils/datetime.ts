// Convert UTC datetime from backend to locale specific (default to en-US for now)
export function formatDateTime(dateTime: string) {
  return new Date(dateTime).toLocaleString('en-US');
}
