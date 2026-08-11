import { FULLY_BOOKED_DATES } from "@/constants/bookingData";

const MIN_GUESTS = 10;

/**
 * Checks if a selected date and time slot are available within the booking window.
 *
 * @param {string} date
 * @param {string} timeSlot
 * @param {string} minDateStr
 * @param {string} maxDateStr
 * @returns {{ checked: boolean, available: boolean, message: string }}
 */
export function checkAvailabilityStatus(
  date,
  timeSlot,
  minDateStr,
  maxDateStr
) {
  if (!date || !timeSlot) {
    return {
      checked: false,
      available: false,
      message: "Missing booking information.",
    };
  }

  if (date < minDateStr || date > maxDateStr) {
    return {
      checked: true,
      available: false,
      message: "Selected date falls outside our available booking window.",
    };
  }

  const bookedDatesList = FULLY_BOOKED_DATES || [];

  if (bookedDatesList.includes(date)) {
    return {
      checked: true,
      available: false,
      message: "This date is fully booked. Please choose another date.",
    };
  }

  return {
    checked: true,
    available: true,
    message: "Selected date and time slot are available.",
  };
}

/**
 * Validates guest count.
 *
 * @param {number|string} guests
 * @returns {boolean}
 */
export const isValidGuestCount = (guests) => {
  const count = Number(guests);
  return Number.isInteger(count) && count >= MIN_GUESTS;
};

/**
 * Determines whether the Next button should be disabled for the current wizard step.
 *
 * @param {number} currentStep
 * @param {Object} bookingData
 * @param {Object} availabilityStatus
 * @returns {boolean}
 */
export function isStepNextDisabled(
  currentStep,
  bookingData = {},
  availabilityStatus = {}
) {
  switch (currentStep) {
    case 1:
      return (
        !bookingData.eventType ||
        !bookingData.dietaryPreference ||
        !bookingData.date ||
        !bookingData.timeSlot ||
        !availabilityStatus.available
      );

    case 2:
      return !isValidGuestCount(bookingData.guests);

    case 3:
      return !bookingData.packageId;

    default:
      return false;
  }
}