import GymLanding from "@/src/views/GymLanding";

export const metadata = {
  title: "GymOS — Gym Management Software for Indian Gyms",
  description:
    "GymOS by Devloft Technologies: all-in-one gym management software with member management, billing, attendance, WhatsApp reminders and analytics. Live in 48 hours.",
  openGraph: {
    title: "GymOS — Gym Management Software for Indian Gyms",
    description:
      "All-in-one gym ERP: members, billing, attendance, WhatsApp reminders. Built for Indian gyms. Book a free demo.",
    url: "https://gym.devlofttech.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "GymOS — Gym Management Software",
    description: "Run your entire gym from one dashboard. Book a free demo.",
  },
};

export default function GymPage() {
  return <GymLanding />;
}
