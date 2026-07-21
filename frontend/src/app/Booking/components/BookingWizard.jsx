"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CalendarDays,
  Users,
  UtensilsCrossed,
  ClipboardCheck,
  CreditCard,
  CircleCheckBig,
  ArrowLeft,
  ArrowRight,
  Calendar,
  Clock,
  Award,
  Crown,
  Gem,
  Sparkles,
  ChevronDown,
  Soup,
  Utensils,
  Wheat,
  CookingPot,
  CakeSlice,
  Coffee,
  Check,
  Info,
  HelpCircle,
  CalendarX2,
  CalendarCheck2,
  Loader2,
  FlameKindling
} from "lucide-react";

// ==========================================
// CONSTANTS & STATIC CONFIGURATION DATA
// ==========================================
const WIZARD_STEPS = [
  { id: 1, title: "Event Info", icon: CalendarDays },
  { id: 2, title: "Guests", icon: Users },
  { id: 3, title: "Package", icon: UtensilsCrossed },
  { id: 4, title: "Customize", icon: ClipboardCheck },
  { id: 5, title: "Review", icon: CreditCard },
  { id: 6, title: "Reserve", icon: CircleCheckBig },
];

const EVENT_TYPES = ["Wedding", "Reception", "Birthday", "Corporate", "Anniversary", "House Party"];
const TIME_SLOTS = [
  { id: "lunch", label: "Lunch Event (11:00 AM - 4:00 PM)" },
  { id: "dinner", label: "Dinner Event (7:00 PM - 12:00 AM)" }
];
const GUEST_PRESETS = [25, 50, 100, 150, 250, 500, 1000];
const FULLY_BOOKED_DATES = ["2026-10-31", "2026-12-25", "2026-12-31"];

const CATERING_PACKAGES = [
  {
    id: "silver",
    name: "Silver",
    icon: Award,
    price: 499,
    canCustomize: false,
    description: "Budget essential tier menu configuration with standard classic catering essentials.",
    includes: ["3 Starters Included", "5 Main Course Included", "2 Desserts Included"],
  },
  {
    id: "gold",
    name: "Gold",
    icon: Crown,
    price: 799,
    canCustomize: false,
    description: "Most popular choice for weddings. Fixed premium tier standard menu configuration.",
    includes: ["4 Starters Included", "8 Main Course Included", "3 Desserts Included", "Live Counter Included"],
  },
  {
    id: "premium",
    name: "Premium",
    icon: Gem,
    price: 1199,
    canCustomize: false, // Now customizable with pre-selected dishes
    description: "Luxury tier package. Comes with premium dishes pre-selected, but fully customizable at a fixed flat rate.",
    includes: ["Pre-loaded Premium Layout", "Add/Remove Items Freely", "Flat Luxury Per-Head Rate Locked"],
  },
  {
    id: "custom",
    name: "Custom Menu",
    icon: Sparkles,
    price: 0,
    canCustomize: true,
    description: "Build your own completely tailored menu from a totally clean slate. Base price is zero.",
    includes: ["Fresh Start (Empty Initial State)", "Flexible Component Setup", "Dynamic Per-Dish Billing Pricing"],
  },
];

const EXTRA_ADDONS = [
  { id: "live_counter", name: "Live Counter", price: 2500 },
  { id: "welcome_drinks", name: "Welcome Drinks", price: 2500 },
  { id: "mocktail_bar", name: "Mocktail Bar", price: 2500 },
  { id: "fruit_counter", name: "Fruit Counter", price: 2500 },
  { id: "ice_cream", name: "Ice Cream Station", price: 2500 },
  { id: "live_chaat", name: "Live Chaat", price: 2500 },
];

const MENU_CATEGORIES = [
  {
    id: 1,
    title: "Starters",
    stateKey: "starters",
    icon: Soup,
    dishes: [
      { name: "Paneer Tikka", isVeg: true, tiers: ["Silver", "Gold", "Premium"] },
      { name: "Hara Bhara Kabab", isVeg: true, tiers: ["Silver", "Gold", "Premium"] },
      { name: "Veg Manchurian", isVeg: true, tiers: ["Silver", "Gold", "Premium"] },
      { name: "Spring Roll", isVeg: true, tiers: ["Gold", "Premium"] },
      { name: "Chilli Paneer", isVeg: true, tiers: ["Gold", "Premium"] },
      { name: "Corn Cheese Balls", isVeg: true, isPremium: true, tiers: ["Premium"] },
      { name: "Dahi Ke Sholay", isVeg: true, tiers: ["Gold", "Premium"] },
      { name: "Soya Malai Chaap", isVeg: true, tiers: ["Silver", "Gold", "Premium"] },
      { name: "Crispy Corn Salt & Pepper", isVeg: true, tiers: ["Gold", "Premium"] },
      { name: "Mushroom Duplex", isVeg: true, isPremium: true, tiers: ["Premium"] },
    ],
  },
  {
    id: 2,
    title: "Main Course",
    stateKey: "mainCourse",
    icon: Utensils,
    dishes: [
      { name: "Butter Paneer Masala", isVeg: true, tiers: ["Silver", "Gold", "Premium"] },
      { name: "Dal Makhani", isVeg: true, tiers: ["Silver", "Gold", "Premium"] },
      { name: "Mix Veg", isVeg: true, tiers: ["Silver", "Gold", "Premium"] },
      { name: "Kadai Paneer", isVeg: true, tiers: ["Gold", "Premium"] },
      { name: "Malai Kofta", isVeg: true, isPremium: true, tiers: ["Premium"] },
      { name: "Mutter Mushroom", isVeg: true, tiers: ["Gold", "Premium"] },
      { name: "Palak Paneer", isVeg: true, tiers: ["Silver", "Gold", "Premium"] },
      { name: "Pind Chana Masala", isVeg: true, tiers: ["Silver", "Gold", "Premium"] },
      { name: "Kaju Curry", isVeg: true, isPremium: true, tiers: ["Premium"] },
      { name: "Veg Jalfrezi", isVeg: true, tiers: ["Gold", "Premium"] },
    ],
  },
  {
    id: 3,
    title: "Breads",
    stateKey: "breads",
    icon: Wheat,
    dishes: [
      { name: "Tandoori Roti", isVeg: true, tiers: ["Silver", "Gold", "Premium"] },
      { name: "Butter Naan", isVeg: true, tiers: ["Silver", "Gold", "Premium"] },
      { name: "Lachha Paratha", isVeg: true, tiers: ["Gold", "Premium"] },
      { name: "Garlic Naan", isVeg: true, tiers: ["Gold", "Premium"] },
      { name: "Missi Roti", isVeg: true, tiers: ["Silver", "Gold", "Premium"] },
      { name: "Stuffed Kulcha", isVeg: true, isPremium: true, tiers: ["Premium"] },
    ],
  },
  {
    id: 4,
    title: "Rice",
    stateKey: "rice",
    icon: CookingPot,
    dishes: [
      { name: "Jeera Rice", isVeg: true, tiers: ["Silver", "Gold", "Premium"] },
      { name: "Veg Pulao", isVeg: true, tiers: ["Silver", "Gold", "Premium"] },
      { name: "Veg Dum Biryani", isVeg: true, tiers: ["Gold", "Premium"] },
      { name: "Kashmiri Pulao", isVeg: true, isPremium: true, tiers: ["Premium"] },
      { name: "Peas Pulao", isVeg: true, tiers: ["Silver", "Gold", "Premium"] },
    ],
  },
  {
    id: 5,
    title: "Desserts",
    stateKey: "desserts",
    icon: CakeSlice,
    dishes: [
      { name: "Gulab Jamun", isVeg: true, tiers: ["Silver", "Gold", "Premium"] },
      { name: "Rasmalai", isVeg: true, tiers: ["Gold", "Premium"] },
      { name: "Moong Dal Halwa", isVeg: true, tiers: ["Silver", "Gold", "Premium"] },
      { name: "Chocolate Mousse", isVeg: true, isPremium: true, tiers: ["Premium"] },
      { name: "Shahi Tukda", isVeg: true, tiers: ["Gold", "Premium"] },
      { name: "Kulfi Falooda", isVeg: true, isPremium: true, tiers: ["Premium"] },
    ],
  },
  {
    id: 6,
    title: "Beverages",
    stateKey: "beverages",
    icon: Coffee,
    dishes: [
      { name: "Fresh Lime Soda", isVeg: true, tiers: ["Silver", "Gold", "Premium"] },
      { name: "Masala Chai / Coffee", isVeg: true, tiers: ["Silver", "Gold", "Premium"] },
      { name: "Mint Mojito", isVeg: true, tiers: ["Gold", "Premium"] },
      { name: "Blue Lagoon Mocktail", isVeg: true, isPremium: true, tiers: ["Premium"] },
      { name: "Fruit Punch", isVeg: true, isPremium: true, tiers: ["Premium"] },
      { name: "Badam Milk", isVeg: true, tiers: ["Gold", "Premium"] },
    ],
  },
];

export default function BookingWizard() {
  const [currentStep, setCurrentStep] = useState(1);
  const [activeCategory, setActiveCategory] = useState(null);
  const [isCheckingAvailability, setIsCheckingAvailability] = useState(false);
  
  const [bookingData, setBookingData] = useState({
    eventType: "",
    date: "",
    timeSlot: "",
    guests: 50,
    package: "", 
    starters: [],
    mainCourse: [],
    breads: [],
    rice: [],
    desserts: [],
    beverages: [],
    extras: [],
  });

  const { minDateStr, maxDateStr } = useMemo(() => {
    const today = new Date();
    const minStr = today.toISOString().split("T")[0];
    const maxStr = `${today.getFullYear() + 1}-12-31`;
    return { minDateStr: minStr, maxDateStr: maxStr };
  }, []);

  const availabilityStatus = useMemo(() => {
    if (!bookingData.date || !bookingData.timeSlot) {
      return { checked: false, available: false, error: "Missing parameters" };
    }
    if (bookingData.date < minDateStr || bookingData.date > maxDateStr) {
      return { checked: true, available: false, message: "Selected calendar year sits outside our open booking window schedule." };
    }
    if (FULLY_BOOKED_DATES.includes(bookingData.date)) {
      return { checked: true, available: false, message: "We are fully booked on this date! Please choose an alternative." };
    }
    return { checked: true, available: true, message: "Slot Available! Your date is secured for booking setup." };
  }, [bookingData.date, bookingData.timeSlot, minDateStr, maxDateStr]);

  const pricingMetrics = useMemo(() => {
    const guests = Math.max(0, Number(bookingData.guests) || 0);
    const selectedPkg = CATERING_PACKAGES.find((p) => p.name === bookingData.package);
    
    if (!selectedPkg) {
      return {
        totalDishesCount: 0,
        isCustomizable: false,
        isFreshCustom: false,
        basePackageCost: 0,
        scalableDishPremium: 0,
        extrasCost: 0,
        totalAmount: 0,
        isPackageSelected: false
      };
    }

    const isCustomizable = selectedPkg.canCustomize || false;
    const isFreshCustom = selectedPkg.id === "custom";
    let totalDishesCount = 0;

    // Evaluate total current counts inside active selections
    totalDishesCount = [
      ...bookingData.starters,
      ...bookingData.mainCourse,
      ...bookingData.breads,
      ...bookingData.rice,
      ...bookingData.desserts,
      ...bookingData.beverages,
    ].length;

    // Base package tier calculation changes depending on if it's the 0-base custom tier or fixed Premium tier
    const basePackageCost = isFreshCustom ? 0 : (selectedPkg.price || 0) * guests;
    
    // Per-dish variable billing calculation only targets the clean slate 'Custom Menu' tier
    const scalableDishPremium = isFreshCustom ? totalDishesCount * 45 * guests : 0;
    
    const extrasCost = bookingData.extras.reduce((acc, extraName) => {
      const match = EXTRA_ADDONS.find((a) => a.name === extraName);
      return acc + (match?.price || 0);
    }, 0);

    const subtotal = basePackageCost + scalableDishPremium + extrasCost;
    const gstAmount = Math.round(subtotal * 0.18);
    const totalAmount = subtotal + gstAmount;

    return {
      totalDishesCount,
      isCustomizable,
      isFreshCustom,
      basePackageCost,
      scalableDishPremium,
      extrasCost,
      totalAmount,
      isPackageSelected: true
    };
  }, [bookingData]);

  const updateField = (field, value) => {
    if (field === "date" || field === "timeSlot") {
      setIsCheckingAvailability(true);
      setTimeout(() => setIsCheckingAvailability(false), 400);
    }
    setBookingData((prev) => ({ ...prev, [field]: value }));
  };

  const handlePackageSelection = (pkg) => {
    // Premium initializes with default catalog items pre-loaded, Custom Menu starts at true zero empty array slate
    const startingDishes = {};
    
    MENU_CATEGORIES.forEach((cat) => {
      if (pkg.name === "Premium") {
        startingDishes[cat.stateKey] = cat.dishes
          .filter((dish) => dish.tiers.includes("Premium"))
          .map((d) => d.name);
      } else if (pkg.name === "Custom Menu") {
        startingDishes[cat.stateKey] = [];
      } else {
        // Silver and Gold hold strict invariant arrays
        startingDishes[cat.stateKey] = cat.dishes
          .filter((dish) => dish.tiers.includes(pkg.name))
          .map((d) => d.name);
      }
    });

    setBookingData((prev) => ({
      ...prev,
      package: pkg.name,
      ...startingDishes
    }));
  };

  const toggleDishSelection = (categoryField, dishName) => {
    if (!pricingMetrics.isCustomizable) return;
    
    setBookingData((prev) => {
      const currentList = prev[categoryField] || [];
      const updatedList = currentList.includes(dishName)
        ? currentList.filter((item) => item !== dishName)
        : [...currentList, dishName];
      return { ...prev, [categoryField]: updatedList };
    });
  };

  const currentStepInfo = WIZARD_STEPS[currentStep - 1];
  const StepIcon = currentStepInfo.icon;

  return (
    <section className="relative bg-[#090909] py-24 min-h-screen text-white select-none">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* Step Navigation Indicators */}
        <div className="mb-16 overflow-x-auto pb-4 scrollbar-none">
          <div className="flex items-center justify-between min-w-[800px] px-4">
            {WIZARD_STEPS.map((step, idx) => {
              const Icon = step.icon;
              const isCompletedOrActive = currentStep >= step.id;
              return (
                <div key={step.id} className="flex flex-1 items-center">
                  <div className="flex flex-col items-center">
                    <div className={`flex h-12 w-12 items-center justify-center rounded-full border transition-all duration-300 ${
                      isCompletedOrActive ? "border-orange-500 bg-orange-500 text-white" : "border-white/10 bg-[#111] text-gray-500"
                    }`}>
                      <Icon size={18} />
                    </div>
                    <span className={`mt-2 text-xs font-semibold ${isCompletedOrActive ? "text-white" : "text-gray-500"}`}>
                      {step.title}
                    </span>
                  </div>
                  {idx !== WIZARD_STEPS.length - 1 && (
                    <div className={`mx-4 h-[2px] flex-1 ${currentStep > step.id ? "bg-orange-500" : "bg-white/10"}`} />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Master Content Layout Grid */}
        <div className="grid gap-8 lg:grid-cols-12 items-start">
          
          <div className="lg:col-span-8">
            <motion.div layout className="rounded-3xl border border-white/5 bg-[#111111] p-8 backdrop-blur-xl">
              
              <div className="mb-8 flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500/10 text-orange-500">
                  <StepIcon size={24} />
                </div>
                <div>
                  <p className="text-xs text-orange-400 uppercase tracking-wider font-bold">Step {currentStep} of {WIZARD_STEPS.length}</p>
                  <h3 className="text-2xl font-black text-white">{currentStepInfo.title}</h3>
                </div>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  {/* STEP 1: EVENT PARAMETERS */}
                  {currentStep === 1 && (
                    <div className="space-y-6">
                      <div>
                        <label className="text-xs font-bold uppercase tracking-wider text-gray-400 block mb-3">Event Occasion</label>
                        <div className="grid gap-3 grid-cols-2 sm:grid-cols-3">
                          {EVENT_TYPES.map((type) => (
                            <button
                              key={type}
                              type="button"
                              onClick={() => updateField("eventType", type)}
                              className={`rounded-xl border p-4 text-left transition-all ${
                                bookingData.eventType === type ? "border-orange-500 bg-orange-500 text-white" : "border-white/5 bg-[#141414] text-gray-400 hover:border-white/20"
                              }`}
                            >
                              <span className="text-sm font-bold">{type}</span>
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="grid gap-4 sm:grid-cols-2 pt-2">
                        <div>
                          <label className="text-xs font-bold uppercase tracking-wider text-gray-400 block mb-2">Select Date</label>
                          <div className="relative">
                            <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={16} />
                            <input
                              type="date"
                              min={minDateStr}
                              max={maxDateStr}
                              value={bookingData.date}
                              onChange={(e) => updateField("date", e.target.value)}
                              className="w-full rounded-xl border border-white/5 bg-[#141414] p-4 pl-12 text-white font-bold outline-none focus:border-orange-500 transition [color-scheme:dark]"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="text-xs font-bold uppercase tracking-wider text-gray-400 block mb-2">Select Shift Timing</label>
                          <div className="space-y-2">
                            {TIME_SLOTS.map((slot) => (
                              <button
                                key={slot.id}
                                type="button"
                                onClick={() => updateField("timeSlot", slot.id)}
                                className={`w-full text-left rounded-xl border p-3 flex items-center gap-3 transition ${
                                  bookingData.timeSlot === slot.id ? "border-orange-500 bg-orange-500/10 text-orange-400" : "border-white/5 bg-[#141414] text-gray-400 hover:border-white/10"
                                }`}
                              >
                                <Clock size={14} />
                                <span className="text-xs font-bold">{slot.label}</span>
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>

                      {bookingData.date && bookingData.timeSlot && (
                        <div className="pt-2">
                          {isCheckingAvailability ? (
                            <div className="p-4 rounded-xl border border-white/5 bg-[#141414] flex items-center justify-center gap-2 text-xs text-gray-400 font-bold">
                              <Loader2 size={14} className="animate-spin text-orange-500" />
                              Validating local catering slots system channels...
                            </div>
                          ) : !availabilityStatus.available ? (
                            <div className="p-4 rounded-xl border border-red-500/20 bg-red-950/20 text-red-400 flex items-start gap-3 border-l-4 border-l-red-500">
                              <CalendarX2 size={18} className="flex-shrink-0 mt-0.5" />
                              <div>
                                <h5 className="text-xs font-black">Date Range Blocked</h5>
                                <p className="text-[11px] opacity-80 mt-0.5">{availabilityStatus.message}</p>
                              </div>
                            </div>
                          ) : (
                            <div className="p-4 rounded-xl border border-emerald-500/20 bg-emerald-950/20 text-emerald-400 flex items-start gap-3 border-l-4 border-l-emerald-500 animate-fadeIn">
                              <CalendarCheck2 size={18} className="flex-shrink-0 mt-0.5" />
                              <div>
                                <h5 className="text-xs font-black">Date Verified</h5>
                                <p className="text-[11px] opacity-80 mt-0.5">{availabilityStatus.message}</p>
                              </div>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  )}

                  {/* STEP 2: GUEST COUNT */}
                  {currentStep === 2 && (
                    <div className="space-y-6">
                      <div className="grid gap-3 grid-cols-2 sm:grid-cols-4">
                        {GUEST_PRESETS.map((preset) => (
                          <button
                            key={preset}
                            type="button"
                            onClick={() => updateField("guests", preset)}
                            className={`rounded-xl border p-5 text-center transition-all ${
                              Number(bookingData.guests) === preset ? "border-orange-500 bg-orange-500 text-white" : "border-white/5 bg-[#141414] text-gray-400 hover:border-white/20"
                            }`}
                          >
                            <h5 className="text-xl font-black">{preset}</h5>
                            <p className="text-[10px] uppercase opacity-60 font-medium">Guests</p>
                          </button>
                        ))}
                      </div>
                      <div className="pt-2">
                        <label className="text-xs font-bold block text-gray-400 mb-2">Specify Exact Count</label>
                        <input
                          type="number"
                          min={1}
                          value={bookingData.guests}
                          onChange={(e) => updateField("guests", e.target.value)}
                          className="w-full rounded-xl border border-white/5 bg-[#141414] p-4 text-white font-bold outline-none focus:border-orange-500 transition"
                        />
                      </div>
                    </div>
                  )}

                  {/* STEP 3: RECONFIGURED PACKAGE SYSTEM LIST */}
                  {currentStep === 3 && (
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                      {CATERING_PACKAGES.map((pkg) => {
                        const PkgIcon = pkg.icon;
                        const isSelected = bookingData.package === pkg.name;
                        return (
                          <button
                            key={pkg.id}
                            type="button"
                            onClick={() => handlePackageSelection(pkg)}
                            className={`rounded-2xl border p-5 text-left transition-all flex flex-col justify-between ${
                              isSelected ? "border-orange-500 bg-orange-500 text-white" : "border-white/5 bg-[#141414] hover:border-white/10"
                            }`}
                          >
                            <div>
                              <div className="h-10 w-10 rounded-xl bg-white/10 flex items-center justify-center mb-4"><PkgIcon size={20} /></div>
                              <h4 className="text-base font-black">{pkg.name}</h4>
                              <p className="text-xs font-bold mt-1">
                                {pkg.price === 0 ? "₹0 Base Slate" : `₹${pkg.price} / pax`}
                              </p>
                              <p className="text-[11px] opacity-60 mt-2 leading-relaxed">{pkg.description}</p>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  )}

                  {/* STEP 4: CUSTOM SELECTION MENU */}
                  {currentStep === 4 && (
                    <div className="space-y-4">
                      {!pricingMetrics.isPackageSelected ? (
                        <div className="p-8 border border-white/5 bg-[#141414] rounded-2xl text-center space-y-3">
                          <HelpCircle className="mx-auto text-gray-500 animate-pulse" size={24} />
                          <h4 className="text-md font-bold">No Package Selected</h4>
                          <p className="text-xs text-gray-400 max-w-sm mx-auto leading-relaxed">
                            Please jump back to <span className="text-orange-400 font-semibold">Step 3: Package</span> to unlock your selected tiers.
                          </p>
                        </div>
                      ) : (
                        <>
                          <div className="p-4 rounded-xl border border-white/5 bg-[#161616] flex items-start gap-3">
                            <Info size={16} className="text-orange-400 mt-0.5 flex-shrink-0" />
                            <div>
                              <h4 className="text-xs font-bold text-white">
                                {bookingData.package === "Premium" 
                                  ? "Premium Customization (Pre-selected Core Dishes Available)" 
                                  : !pricingMetrics.isCustomizable 
                                    ? `Reviewing Standard Menu for ${bookingData.package} Tier`
                                    : "True Custom Menu Active (Blank Slate Start)"}
                              </h4>
                              <p className="text-[11px] text-gray-400 mt-0.5 leading-relaxed">
                                {bookingData.package === "Premium"
                                  ? "Core signature dishes are already checked for convenience. Modify, add, or drop items freely at your locked tier rate."
                                  : !pricingMetrics.isCustomizable 
                                    ? "The dishes shown below are fixed and pre-allocated for this package layout layer."
                                    : "Catering base configuration is ₹0. Check any dish below to begin tallying custom itemizations dynamically."}
                              </p>
                            </div>
                          </div>

                          <div className="space-y-3">
                            {MENU_CATEGORIES.map((cat) => {
                              const stateKey = cat.stateKey;
                              const isExpanded = activeCategory === stateKey;
                              const CatIcon = cat.icon;

                              // Display all available catalog choices if it's premium or completely custom
                              const displayDishes = pricingMetrics.isCustomizable 
                                ? cat.dishes 
                                : cat.dishes.filter(dish => dish.tiers.includes(bookingData.package));

                              const displayCount = (bookingData[stateKey] || []).length;

                              if (!pricingMetrics.isCustomizable && displayDishes.length === 0) return null;

                              return (
                                <div key={cat.id} className="border border-white/5 bg-[#141414] rounded-xl overflow-hidden">
                                  <div
                                    onClick={() => setActiveCategory(isExpanded ? null : stateKey)}
                                    className="p-4 flex items-center justify-between cursor-pointer hover:bg-white/[0.02]"
                                  >
                                    <div className="flex items-center gap-3">
                                      <div className="h-9 w-9 rounded-lg bg-orange-500/10 text-orange-500 flex items-center justify-center"><CatIcon size={18} /></div>
                                      <div>
                                        <h5 className="text-sm font-bold text-white">{cat.title}</h5>
                                        <p className="text-[10px] text-orange-400 font-bold">
                                          {displayCount} Selected / Active
                                        </p>
                                      </div>
                                    </div>
                                    <ChevronDown size={16} className={`text-gray-500 transition-transform ${isExpanded ? "rotate-180" : ""}`} />
                                  </div>

                                  <AnimatePresence>
                                    {isExpanded && (
                                      <motion.div initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }} className="overflow-hidden bg-[#0c0c0c] border-t border-white/5">
                                        <div className="p-4 grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
                                          {displayDishes.map((dish) => {
                                            const isSelected = (bookingData[stateKey] || []).includes(dish.name);

                                            return (
                                              <motion.div
                                                key={dish.name}
                                                whileHover={pricingMetrics.isCustomizable ? { y: -4 } : {}}
                                                whileTap={pricingMetrics.isCustomizable ? { scale: 0.98 } : {}}
                                                onClick={() => toggleDishSelection(stateKey, dish.name)}
                                                className={`group flex flex-col justify-between h-44 rounded-xl border bg-[#121212] overflow-hidden transition-all ${
                                                  !pricingMetrics.isCustomizable 
                                                    ? "border-white/5 cursor-default" 
                                                    : isSelected 
                                                      ? "border-orange-500 shadow-[0_0_15px_rgba(249,115,22,0.1)] ring-1 ring-orange-500/20 cursor-pointer" 
                                                      : "border-white/5 hover:border-white/10 cursor-pointer"
                                                }`}
                                              >
                                                {/* Fallback Display Graphic for Items */}
                                                <div className="relative h-[55%] w-full bg-gradient-to-br from-[#1c1c1c] to-[#141414] flex flex-col items-center justify-center border-b border-white/5 p-2">
                                                  <FlameKindling size={20} className="text-orange-500/20 group-hover:text-orange-500/40 transition-colors mb-1" />
                                                  <span className="text-[10px] font-medium text-gray-500 text-center px-1 truncate max-w-full">
                                                    {dish.name}
                                                  </span>
                                                  <div className="absolute top-2 left-2 flex flex-col gap-1">
                                                    {dish.isVeg && <span className="bg-emerald-950/90 text-emerald-400 text-[9px] font-bold px-2 py-0.5 rounded-full border border-emerald-500/20 backdrop-blur-sm">● Veg</span>}
                                                    {dish.isPremium && <span className="bg-amber-500 text-black text-[9px] font-black px-1.5 py-0.5 rounded-md tracking-wider">Premium</span>}
                                                  </div>
                                                </div>
                                                
                                                <div className="p-3 flex-1 flex flex-col justify-between bg-[#111]">
                                                  <h6 className="text-xs font-bold text-white truncate">{dish.name}</h6>
                                                  
                                                  {!pricingMetrics.isCustomizable ? (
                                                    <div className="text-[9px] text-center text-emerald-400 bg-emerald-500/10 py-1 rounded-md border border-emerald-500/20 font-bold">
                                                      Included in Tier
                                                    </div>
                                                  ) : isSelected ? (
                                                    <div className="flex items-center gap-1 text-[10px] font-bold text-orange-400 bg-orange-500/15 py-1 rounded-md justify-center border border-orange-500/20">
                                                      <Check size={10} /> Selected
                                                    </div>
                                                  ) : (
                                                    <div className="text-[10px] text-center text-gray-500 group-hover:text-gray-300 py-1 rounded-md border border-white/5 bg-white/[0.01] transition-colors">
                                                      + Select
                                                    </div>
                                                  )}
                                                </div>
                                              </motion.div>
                                            );
                                          })}
                                        </div>
                                      </motion.div>
                                    )}
                                  </AnimatePresence>
                                </div>
                              );
                            })}
                          </div>
                        </>
                      )}

                      <div className="pt-4 border-t border-white/5">
                        <h4 className="text-sm font-bold text-gray-400 mb-3">Optional Event Addons</h4>
                        <div className="grid gap-2 grid-cols-2 sm:grid-cols-3">
                          {EXTRA_ADDONS.map((extra) => {
                            const isSelected = bookingData.extras.includes(extra.name);
                            return (
                              <button
                                key={extra.id}
                                type="button"
                                onClick={() => {
                                  const list = bookingData.extras;
                                  updateField("extras", list.includes(extra.name) ? list.filter((x) => x !== extra.name) : [...list, extra.name]);
                                }}
                                className={`rounded-lg border p-3 text-center text-xs font-bold transition ${
                                  isSelected ? "border-orange-500 bg-orange-500 text-white" : "border-white/5 bg-[#141414] text-gray-400"
                                }`}
                              >
                                {extra.name}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* STEP 5: INVOICE */}
                  {currentStep === 5 && (
                    <div className="space-y-4">
                      {!pricingMetrics.isPackageSelected ? (
                        <div className="p-8 border border-white/5 bg-[#141414] rounded-2xl text-center space-y-2">
                          <HelpCircle className="mx-auto text-gray-500" size={24} />
                          <h4 className="text-sm font-bold">Invoice Empty</h4>
                          <p className="text-xs text-gray-400">Please choose a package in Step 3 to review pricing structures.</p>
                        </div>
                      ) : (
                        <>
                          <div className="grid gap-3 grid-cols-3">
                            <div className="bg-[#141414] p-3 rounded-xl border border-white/5"><span className="text-[10px] text-gray-500 font-bold block uppercase">Tier</span><span className="text-xs font-bold text-white">{bookingData.package}</span></div>
                            <div className="bg-[#141414] p-3 rounded-xl border border-white/5"><span className="text-[10px] text-gray-500 font-bold block uppercase">Guests</span><span className="text-xs font-bold text-white">{bookingData.guests} Pax</span></div>
                            <div className="bg-[#141414] p-3 rounded-xl border border-white/5"><span className="text-[10px] text-gray-500 font-bold block uppercase">Dishes</span><span className="text-xs font-bold text-white">{pricingMetrics.totalDishesCount} Items</span></div>
                          </div>
                          <div className="rounded-xl border border-white/5 bg-[#141414] p-5 space-y-2 text-xs text-gray-400">
                            <div className="flex justify-between"><span>Base Plate Volume Tariff</span><span className="text-white">₹{pricingMetrics.basePackageCost.toLocaleString()}</span></div>
                            {pricingMetrics.isFreshCustom && (
                              <div className="flex justify-between text-orange-400"><span>Dynamic Custom Food Scale ({pricingMetrics.totalDishesCount} dishes)</span><span>+ ₹{pricingMetrics.scalableDishPremium.toLocaleString()}</span></div>
                            )}
                            <div className="flex justify-between"><span>Service Addons Setup</span><span className="text-white">₹{pricingMetrics.extrasCost.toLocaleString()}</span></div>
                            <div className="h-px bg-white/5 my-2" />
                            <div className="flex justify-between text-sm font-black text-white"><span>Aggregate Total</span><span className="text-orange-500">₹{pricingMetrics.totalAmount.toLocaleString()}</span></div>
                          </div>
                        </>
                      )}
                    </div>
                  )}

                  {/* STEP 6: RESERVATION */}
                  {currentStep === 6 && (
                    <div className="text-center py-8 space-y-3">
                      <div className="mx-auto h-12 w-12 bg-emerald-500/10 text-emerald-400 rounded-full flex items-center justify-center"><CircleCheckBig size={24} /></div>
                      <h4 className="text-lg font-bold">Data Set Completed!</h4>
                      <p className="text-xs text-gray-400 max-w-xs mx-auto">Ready to initialize structural handshakes with backend reservation databases.</p>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>

              {/* Wizard Navigations Footer Controls */}
              <div className="mt-8 flex justify-between border-t border-white/5 pt-6">
                <button
                  type="button"
                  onClick={() => setCurrentStep((p) => p - 1)}
                  disabled={currentStep === 1}
                  className="inline-flex items-center gap-2 rounded-xl border border-white/5 px-5 py-3 text-xs font-bold disabled:opacity-20 transition"
                >
                  <ArrowLeft size={14} /> Back
                </button>
                {currentStep < WIZARD_STEPS.length ? (
                  <button
                    type="button"
                    onClick={() => {
                      if (currentStep === 1) {
                        if (!bookingData.eventType || !bookingData.date || !bookingData.timeSlot) {
                          alert("Please specify occasion, date, and time shift block to check availability channels.");
                          return;
                        }
                        if (!availabilityStatus.available) {
                          alert("Cannot continue on a blocked or restricted calendar date path node.");
                          return;
                        }
                      }
                      if (currentStep === 3 && !bookingData.package) {
                        alert("Please select a catering package layout before advancing.");
                        return;
                      }
                      setCurrentStep((p) => p + 1);
                    }}
                    className="inline-flex items-center gap-2 rounded-xl bg-orange-500 px-5 py-3 text-xs font-bold text-white hover:bg-orange-600 transition"
                  >
                    Continue <ArrowRight size={14} />
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => alert("Payload dispatched!")}
                    disabled={!bookingData.package || !availabilityStatus.available}
                    className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-5 py-3 text-xs font-bold text-white hover:bg-emerald-600 disabled:opacity-20 transition"
                  >
                    Confirm Order Matrix
                  </button>
                )}
              </div>

            </motion.div>
          </div>

          {/* Sticky Live Telemetry Sidebar */}
          <div className="lg:col-span-4 lg:sticky lg:top-8">
            <div className="rounded-3xl border border-white/5 bg-[#111111] p-5 space-y-4">
              <h4 className="text-xs font-black tracking-widest text-gray-400 uppercase border-b border-white/5 pb-2">Live Telemetry</h4>
              <div className="space-y-2.5 text-xs text-gray-400">
                <div className="flex justify-between">
                  <span>Schedule:</span>
                  <span className="text-white font-bold truncate max-w-[140px]">
                    {bookingData.date ? `${bookingData.date} (${bookingData.timeSlot || "?"})` : "Unscheduled"}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Selected Tier:</span>
                  <span className="text-white font-bold">{bookingData.package || "Not Chosen"}</span>
                </div>
                <div className="flex justify-between">
                  <span>Configurable?</span>
                  <span className={!bookingData.package ? "text-gray-500 font-bold" : pricingMetrics.isCustomizable ? "text-emerald-400 font-bold" : "text-red-500 font-bold"}>
                    {!bookingData.package ? "Pending" : pricingMetrics.isCustomizable ? "Active" : "Locked"}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Total Selected Dishes:</span>
                  <span className="text-white font-bold">{pricingMetrics.totalDishesCount} Items</span>
                </div>
                <div className="h-px bg-white/5 my-1" />
                <div className="flex justify-between text-sm font-black text-white">
                  <span>Est. Pricing:</span>
                  <span className={pricingMetrics.isPackageSelected ? "text-orange-500" : "text-gray-500 text-xs font-normal"}>
                    {pricingMetrics.isPackageSelected ? `₹${pricingMetrics.totalAmount.toLocaleString()}` : "Select a Package"}
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}