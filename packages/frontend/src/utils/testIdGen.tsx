export function testIdGen(value: string): string {
  return value.trim().replace(/\s+/g, "-").toLowerCase();
}
