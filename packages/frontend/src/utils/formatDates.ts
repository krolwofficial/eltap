export function formatDates(dates: any): string[] {
  return dates.map((date: any) => {
    return date.toISOString().split("T")[0];
  });
}
