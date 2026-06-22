import GymLanding from "@/src/views/GymLanding";

export const metadata = {
  title: "Gym Management Software India | Best Gym Software | GymOS by Devloft",
  description:
    "GymOS is India's best gym management software. Manage members, billing, attendance, WhatsApp reminders & analytics — all in one place. Trusted by 120+ gyms. Free demo available.",
  keywords: [
    "gym management software",
    "gym software india",
    "gym management system",
    "gym management app",
    "fitness gym software",
    "gym computer software",
    "gym billing software",
    "gym membership management software",
    "gym attendance software",
    "gym erp software",
    "fitness centre management software",
    "yoga studio management software",
    "fitness management software india",
    "software gym management",
    "easy gym software",
    "gym management software free trial",
    "best gym software india",
    "gym crm software",
    "gym software bangalore",
  ],
  openGraph: {
    title: "GymOS — India's Best Gym Management Software",
    description:
      "All-in-one gym management software: members, billing, attendance, WhatsApp reminders, trainer scheduling & analytics. Trusted by 120+ gyms across India. Book a free demo.",
    url: "https://gym.devlofttech.com",
    type: "website",
    images: [
      {
        url: "/images/gym-og.png",
        width: 1200,
        height: 630,
        alt: "GymOS — Gym Management Software India",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GymOS — India's Best Gym Management Software",
    description:
      "Manage your gym from one dashboard. Members, billing, attendance, WhatsApp reminders. Free demo.",
  },
  alternates: {
    canonical: "https://gym.devlofttech.com",
  },
  robots: {
    index: true,
    follow: true,
  },
};

// JSON-LD structured data for Google & AI search engines
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "GymOS",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web, Android, iOS",
      description:
        "GymOS is an all-in-one gym management software for Indian gyms. It includes member management, billing, attendance tracking, WhatsApp reminders, trainer scheduling, diet plans, and analytics.",
      url: "https://gym.devlofttech.com",
      offers: [
        {
          "@type": "Offer",
          name: "Monthly Plan",
          price: "799",
          priceCurrency: "INR",
          priceSpecification: {
            "@type": "UnitPriceSpecification",
            price: "799",
            priceCurrency: "INR",
            unitText: "MONTH",
          },
        },
        {
          "@type": "Offer",
          name: "Annual Plan",
          price: "8999",
          priceCurrency: "INR",
          priceSpecification: {
            "@type": "UnitPriceSpecification",
            price: "8999",
            priceCurrency: "INR",
            unitText: "ANN",
          },
        },
      ],
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.8",
        reviewCount: "120",
        bestRating: "5",
      },
      author: {
        "@type": "Organization",
        name: "Devloft Technologies",
        url: "https://devlofttech.com",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Bengaluru",
          addressRegion: "Karnataka",
          addressCountry: "IN",
        },
      },
      featureList: [
        "Member Management",
        "Billing and Invoicing",
        "Attendance Tracking",
        "WhatsApp Automated Reminders",
        "Trainer and Class Scheduling",
        "Diet and Workout Plans",
        "Reports and Analytics",
        "Multi-Branch Support",
        "Member Mobile App",
        "Biometric Integration",
        "Lead Management",
        "GST Billing",
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is GymOS gym management software?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "GymOS is an all-in-one gym management software built for Indian gyms and fitness studios. It helps gym owners manage members, collect payments, track attendance, send WhatsApp renewal reminders, schedule trainers and classes, and view business analytics — all from one dashboard.",
          },
        },
        {
          "@type": "Question",
          name: "How much does gym management software cost in India?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "GymOS pricing starts at ₹1,499/month for the Starter plan (up to 300 members) and ₹2,999/month for the Pro plan (unlimited members, biometric integration, WhatsApp automation). Enterprise pricing is available for multi-branch gym chains.",
          },
        },
        {
          "@type": "Question",
          name: "Does GymOS support WhatsApp reminders for gym renewals?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. GymOS automatically sends WhatsApp and SMS reminders to members before their membership expires, on their birthday, and for pending dues — without any manual work from the gym owner.",
          },
        },
        {
          "@type": "Question",
          name: "Can GymOS work for multiple gym branches?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. GymOS Enterprise supports multi-branch management, allowing you to manage all your gym locations from a single login with branch-wise reports and member data.",
          },
        },
        {
          "@type": "Question",
          name: "Does GymOS support biometric attendance for gyms?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. GymOS integrates with biometric devices, QR code scanners, and a member mobile app for gym check-ins and attendance tracking.",
          },
        },
        {
          "@type": "Question",
          name: "Is there a free trial for GymOS gym software?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. GymOS offers a free demo where our team gives you a personalised walkthrough of the software. We also migrate your existing member data for free and get you live within 48 hours.",
          },
        },
        {
          "@type": "Question",
          name: "Which gyms use GymOS in India?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "GymOS is trusted by 120+ gyms and fitness studios across India, including standalone gyms, yoga studios, CrossFit boxes, and multi-branch fitness chains.",
          },
        },
      ],
    },
    {
      "@type": "Organization",
      name: "Devloft Technologies",
      url: "https://devlofttech.com",
      logo: "https://devlofttech.com/logo.png",
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+91-8147814232",
        contactType: "sales",
        areaServed: "IN",
        availableLanguage: ["English", "Hindi", "Kannada"],
      },
      address: {
        "@type": "PostalAddress",
        streetAddress: "No 21, Srigandha Kaval, 40 Feet Road",
        addressLocality: "Bengaluru",
        addressRegion: "Karnataka",
        postalCode: "560091",
        addressCountry: "IN",
      },
    },
  ],
};

export default function GymPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <GymLanding />
    </>
  );
}
