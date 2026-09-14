/** Format plain dimensions only; preserve prose, ranges and mixed units. */
export function formatDimensions(value: string): string {
  const parts = value.trim().split(/\s*[x×*]\s*/i);
  if (parts.length < 2 || parts.length > 3) return value;
  const matches = parts.map((part) => /^(\d+(?:[.,]\d+)?)\s*(mm|cm|m)?$/i.exec(part));
  const unit = matches.at(-1)?.[2]?.toLowerCase();
  if (!unit || matches.some((match) => !match || (match[2] && match[2].toLowerCase() !== unit))) return value;
  return `${matches.map((match) => match![1]).join(" × ")} ${unit}`;
}

export function repeatsDimensions(text: string | null, dimensions: string | null | undefined): boolean {
  if (!text || !dimensions) return false;
  const formatted = formatDimensions(text);
  // Only suppress a complete dimension expression, never descriptive copy.
  return /^\d+(?:[.,]\d+)?(?: × \d+(?:[.,]\d+)?){1,2} (?:mm|cm|m)$/.test(formatted)
    && formatted === formatDimensions(dimensions);
}
