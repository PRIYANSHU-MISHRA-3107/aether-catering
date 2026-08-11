// src/constants/bookingData.js

// 1. Export FULLY_BOOKED_DATES (Required by bookingValidation.js)
export const FULLY_BOOKED_DATES = [
  "2026-08-15",
  "2026-10-02",
  "2026-12-25",
  "2026-12-31",
];

// 2. Default Package Identifier
export const DEFAULT_PACKAGE_ID = "silver";

// 3. Wizard Steps Definition
export const WIZARD_STEPS = [
  { id: 1, title: "Event Info" },
  { id: 2, title: "Guests" },
  { id: 3, title: "Package" },
  { id: 4, title: "Customize" },
  { id: 5, title: "Review" },
  { id: 6, title: "Reserve" },
];

// 4. Catering Packages List
export const CATERING_PACKAGES = [
  {
    id: "silver",
    name: "Silver Package",
    pricePerGuest: 450,
    limits: {
      starterDishes: 2,
      mainCourseDishes: 3,
      dessertDishes: 1,
      beverageDishes: 1,
    },
  },
  {
    id: "gold",
    name: "Gold Package",
    pricePerGuest: 750,
    limits: {
      starterDishes: 4,
      mainCourseDishes: 5,
      dessertDishes: 2,
      beverageDishes: 2,
    },
  },
];

// 5. Menu Categories List
export const MENU_CATEGORIES = [
  {
    id: "starters",
    name: "Starters",
    stateKey: "starterDishes",
    description: "Appetizers to kick off your event.",
    dishes: [
      { id: "s1", name: "Paneer Tikka", isVeg: true, description: "Grilled cottage cheese" },
      { id: "s2", name: "Chicken Wings", isVeg: false, description: "Spicy grilled wings" },
    ],
  },
  {
    id: "mains",
    name: "Main Course",
    stateKey: "mainCourseDishes",
    description: "Hearty dishes for the main meal.",
    dishes: [
      { id: "m1", name: "Dal Makhani", isVeg: true, description: "Creamy black lentils" },
      { id: "m2", name: "Butter Chicken", isVeg: false, description: "Tender chicken in rich gravy" },
    ],
  },
  {
    id: "desserts",
    name: "Desserts",
    stateKey: "dessertDishes",
    description: "Sweet treats to finish your menu.",
    dishes: [
      { id: "d1", name: "Gulab Jamun", isVeg: true, description: "Sweet milk solids in syrup" },
    ],
  },
  {
    id: "beverages",
    name: "Beverages",
    stateKey: "beverageDishes",
    description: "Refreshing drinks.",
    dishes: [
      { id: "b1", name: "Fresh Lime Soda", isVeg: true, description: "Sweet & salty soda" },
    ],
  },
];