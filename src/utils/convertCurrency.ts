/**
 * Converts a currency amount in Brazilian Real (BRL) format to cents.
 * @parem {string} amount - The amount in BRL format (e.g., "1.234,56").
 * @returns {number} The amount in cents (e.g., 123456).
 *
 * @example
 * convertRealToCents("1.234,56"); // returns 123456
 */
export function convertRealToCents(amount: string) {
  const numericPrice = parseFloat(amount.replace(/\./g, ''))
  const priceInCents = Math.round(numericPrice * 100)
  console.log(priceInCents)
  return priceInCents;

}
