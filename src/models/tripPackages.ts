export type TripPackage = {
  gallery: string[];
  tag: string;
  title: string;
  subtitle: string;
  services: PackagesServices[];
  guideLanguages: string[];
  price: {
    usd: number;
    ils: number;
    aed: number;
  };
  downSalePrice: {
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
  banner: string;
  title: string;
  description: string;
  link?: string;
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
  gallery: ["/banner1.jpg", "/banner2.jpg", "/banner3.jpg"],
  title: "The Dubai Experience",
  subtitle: "5 Day All Inclusive Tour",
  headline: "Explore the main turistic attractions of the city.",
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
  downSalePrice: {
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
