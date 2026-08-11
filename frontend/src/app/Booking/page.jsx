import BookingWizard from "@/app/Booking/components/booking/BookingWizard";

export const metadata = {
  title: "Book Event Catering | Interactive Catering Wizard",
  description: "Customize your event catering menu, guest count, and instantly calculate billing.",
};

export default function BookingPage() {
  return <BookingWizard />;
}