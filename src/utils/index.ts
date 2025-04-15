/**
 *
 * @param (string) number -The price without separators
 * @returns (string) number -The price after it is separated by comma each 3 digits
 */
export function priceSeparator(price: string): string {
  return price.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

/**
 * @param (string) text -Input text that need to be truncated.
 * @param (number) max -The maximum number of charachters needed.
 * @returns (string) text -The text after being truncated.
 */
export function sliceText(description: string, max: number): string {
  return description.length > max
    ? description.slice(0, max) + "..."
    : description;
}
