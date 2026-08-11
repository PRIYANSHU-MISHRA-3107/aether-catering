import { CATERING_PACKAGES } from "@/constants/bookingData";

/**
 * Calculates complete pricing breakdown and dish counts for BillingSummary.
 *
 * @param {Object} bookingData
 * @returns {Object} Pricing breakdown and dish totals
 */
export function calculatePricing(bookingData = {}) {
  const guests = Number(bookingData.guests) || 0;

  // 1. Find selected package
  const selectedPackage = CATERING_PACKAGES?.find(
    (pkg) => pkg.id === (bookingData.packageId || bookingData.package)
  );

  // Per-guest rate calculation
  const perGuestRate = selectedPackage?.pricePerGuest || 500;
  const packageBasePrice = guests * perGuestRate;

  // 2. Extra services calculation
  const selectedExtras = bookingData.selectedExtras || bookingData.extras || [];
  const extrasCost = selectedExtras.length * 2000;

  // 3. Totals
  const subtotal = packageBasePrice + extrasCost;
  const gstAmount = Math.round(subtotal * 0.18); // 18% GST
  const totalAmount = subtotal + gstAmount;

  // 4. Count total selected dishes across all course categories
  const starters = bookingData.starterDishes?.length || 0;
  const mains = bookingData.mainCourseDishes?.length || 0;
  const desserts = bookingData.dessertDishes?.length || 0;
  const beverages = bookingData.beverageDishes?.length || 0;
  const totalDishesCount = starters + mains + desserts + beverages;

  return {
    perGuestRate,
    packageBasePrice,
    packageBaseCost: packageBasePrice, // Alias for backward compatibility
    extrasCost,
    subtotal,
    gstAmount,
    totalAmount,
    totalDishesCount,
  };
}