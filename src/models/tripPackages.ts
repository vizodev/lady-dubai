export type TripPackage = {
  id: string;
  gallery: string[];
  tag: string;
  title: string;
  subtitle: string;
  description: string;
  services: PackagesServices[];
  guideLanguages: string[];
  price: {
    usd: number;
    ils: number;
    aed: number;
  };
  downsale_price: {
    usd: number;
    ils: number;
    aed: number;
  };
  nextAvailableDates: {
    from: Date;
    to: Date;
  }[];
  cancelationPolicy: string[];
  disclaimer: string[];
  // Specific to the package card
  headline: string;
};

export enum PackagesServices {
  FLIGHT_TICKETS = "FLIGHT_TICKETS",
  ACCOMMODATION = "ACCOMMODATION",
  ATTRACTION_TICKETS = "ATTRACTION_TICKETS",
  MEALS = "MEALS",
  TRANSFER = "TRANSFER",
  LAUNDRY = "LAUNDRY",
  TOWELS = "TOWELS",
}

export type Attraction = {
  id: string;
  banner: string;
  videoUrl: string;
  title: string;
  subtitle: string;
  description: string;
  asideImg: string;
  gallery: string[];
  link: string;
};

export enum GuideLanguages {
  ENGLISH = "ENGLISH",
  ARABIC = "ARABIC",
  FRENCH = "FRENCH",
  SPANISH = "SPANISH",
  RUSSIAN = "RUSSIAN",
  GERMAN = "GERMAN",
}

export const defaultTripPackage: TripPackage = {
  id: handleRandomId(),
  gallery: [
    "/banner1.jpg",
    "/banner2.jpg",
    "/banner3.jpg",
    "/banner3.jpg",
    "/banner3.jpg",
  ],
  title: "The Dubai Experience",
  subtitle: "5 Day All Inclusive Tour",
  headline: "Explore the main turistic attractions of the city.",
  description:
    "Experience the wonders of Dubai in our woman only tour. Visit the landmarks, learn the culture, enjoy nature and pamper yourself with a luxurious spa treament. Visit the best shopping spots, delight yourself with delicious meals, relax and enjoy while we take care of every little detail!",
  guideLanguages: [
    GuideLanguages.ENGLISH,
    GuideLanguages.ARABIC,
    GuideLanguages.FRENCH,
  ],
  services: [
    PackagesServices.FLIGHT_TICKETS,
    PackagesServices.ACCOMMODATION,
    PackagesServices.ATTRACTION_TICKETS,
    PackagesServices.MEALS,
    PackagesServices.TRANSFER,
  ],
  price: {
    usd: 6499,
    ils: 6499,
    aed: 6499,
  },
  downsale_price: {
    usd: 10399,
    ils: 10399,
    aed: 10399,
  },
  tag: "Open Gallery",
  nextAvailableDates: [
    // 18 jan 2025 to 24 jan 2025
    {
      from: new Date(2025, 0, 18),
      to: new Date(2025, 0, 24),
    },
    // 19 feb 2025 to 24 feb 2025
    {
      from: new Date(2025, 1, 19),
      to: new Date(2025, 1, 24),
    },
    // 29 may 2025 to 03 jun 2025
    {
      from: new Date(2025, 4, 29),
      to: new Date(2025, 5, 3),
    },
    // 29 dec 2025 to 03 jan 2026
    {
      from: new Date(2025, 11, 29),
      to: new Date(2026, 0, 3),
    },
    // 19 feb 2026 to 24 feb 2026
    {
      from: new Date(2026, 1, 19),
      to: new Date(2026, 1, 24),
    },
  ],
  cancelationPolicy: [
    "Up to 72 hours after booking - free of charge.",
    "Any cancelation request made 72 hours after booking carries a USD 500 fee",
  ],
  disclaimer: [
    "Travelers' insurance and health insurance are not included.",
    "Airline allows 1 carry-on bag up to 8 kg and one luggage up to 20 kg.",
    "Waiver's must be signed when booking this tour.",
    "Extreme Sports insurance is mandatory.",
  ],
};

export const packagesServicesList: {
  value: PackagesServices;
  icon: string;
  label: {
    en: string;
    he: string;
  };
}[] = [
  {
    value: PackagesServices.FLIGHT_TICKETS,
    icon: "/planeIcon.svg",
    label: {
      en: "Plane tickets",
      he: "כרטיסי טיסה",
    },
  },
  {
    value: PackagesServices.ACCOMMODATION,
    icon: "/accommodationIcon.svg",
    label: {
      en: "Accommodation",
      he: "אירוח",
    },
  },
  {
    value: PackagesServices.ATTRACTION_TICKETS,
    icon: "/attractionIcon.svg",
    label: {
      en: "Attractions",
      he: "אטרקציות",
    },
  },
  {
    value: PackagesServices.MEALS,
    icon: "/mealsIcon.svg",
    label: {
      en: "All Meals",
      he: "כל הארוחות",
    },
  },
  {
    value: PackagesServices.TRANSFER,
    icon: "/transportationIcon.svg",
    label: {
      en: "Transportation to all venues and activities",
      he: "הסעות לכל האטרקציות והפעילויות",
    },
  },
  {
    value: PackagesServices.LAUNDRY,
    icon: "/laundryIcon.svg",
    label: {
      en: "Laudry services",
      he: "שירותי כביסה",
    },
  },
  {
    value: PackagesServices.TOWELS,
    icon: "/towelIcon.svg",
    label: {
      en: "Towels and bed sheets",
      he: "מגבות ומצעים",
    },
  },
];

export const defaultAttraction: Attraction = {
  id: handleRandomId(),
  banner: "/banner1.jpg",
  videoUrl:
    "https://www.youtube.com/embed/XyfYoU1ta3w?autoplay=1&mute=1&controls=0&showinfo=0&loop=1&captions=0",
  title: "The Dubai Experience",
  subtitle: "5 Day All Inclusive Tour",
  description:
    "The Museum of the Future welcomes people of all ages to see, touch, and shape our shared future. Go on a journey through possible futures and bring hope and knowledge back to the present. The Museum of the Future is a unique initiative and a global destination for inventors and creative professionals, as well as a place of inspiration for the leaders of tomorrow.",
  asideImg: "/banner2.jpg",
  gallery: [
    "/banner1.jpg",
    "/banner2.jpg",
    "/banner3.jpg",
    "/banner3.jpg",
    "/banner3.jpg",
  ],
  link: "https://www.museumofthefuture.ae/",
};
