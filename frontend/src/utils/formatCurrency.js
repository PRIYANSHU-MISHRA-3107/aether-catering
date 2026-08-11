/**
 * Formats a number into Indian Rupee (INR) currency format.
 *
 * @param {number|string} amount
 * @returns {string} e.g. "₹1,500"
 */
export function formatCurrency(amount) {
  const value = Number(amount) || 0;

  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value);
}

export default formatCurrency;