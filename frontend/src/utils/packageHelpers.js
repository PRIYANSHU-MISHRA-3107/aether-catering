import { CATERING_PACKAGES } from "@/constants/bookingData";

/**
 * Finds a package by its ID.
 *
 * @param {string} packageId
 * @returns {Object|null}
 */
export function getPackageById(packageId) {
  if (!packageId) return null;
  return CATERING_PACKAGES?.find((pkg) => pkg.id === packageId) || null;
}