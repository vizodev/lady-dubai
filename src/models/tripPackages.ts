export type TripPackage = {
  banners: string[];
  title: string;
  subtitle: string;
  headline: string;
  guideLanguages: string[];
  services: PackagesServices[];
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
  banners: ["https://picsum.photos/1920/1080"],
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
};
