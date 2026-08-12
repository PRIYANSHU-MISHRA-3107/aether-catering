import { Resend } from "resend";

console.log(
    "RESEND_API_KEY exists:",
    Boolean(process.env.RESEND_API_KEY)
  );
const resend = new Resend(process.env.RESEND_API_KEY);
console.log(
    "Resend API key exists:",
    Boolean(process.env.RESEND_API_KEY)
  );

export const sendBookingConfirmationEmail = async ({
  customerName,
  customerEmail,
  bookingId,
  eventType,
  eventDate,
  guestCount,
  venue,
}) => {
  try {
    const { data, error } = await resend.emails.send({
      from: "Baabarchi Catering <onboarding@resend.dev>",
      to: [customerEmail],
      subject: "Booking Confirmation - Baabarchi Catering",
      html: `
        <h2>Booking Confirmed</h2>

        <p>Hello ${customerName},</p>

        <p>
          Thank you for choosing Baabarchi Catering.
          Your booking has been received successfully.
        </p>

        <h3>Booking Details</h3>

        <p><strong>Booking ID:</strong> ${bookingId}</p>
        <p><strong>Event:</strong> ${eventType}</p>
        <p><strong>Date:</strong> ${eventDate}</p>
        <p><strong>Guests:</strong> ${guestCount}</p>
        <p><strong>Venue:</strong> ${venue}</p>

        <p>
          Our team will review your booking and contact you shortly.
        </p>

        <p>Thank you,<br />Baabarchi Catering Team</p>
      `,
    });

    if (error) {
      throw new Error(error.message);
    }

    return data;
  } catch (error) {
    console.error("Booking confirmation email failed:", error.message);
    throw error;
  }
};