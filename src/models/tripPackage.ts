export type TripPackage2 = {
  id: string;
  created_at?: Date;
  title: string;
  subtitle: string;
  headline: string;
  description: string;
  downsale_price: {
    usd: number;
    ils: number;
    aed: number;
  };
  price: {
    usd: number;
    ils: number;
    aed: number;
  };
  gallery: string[];
  services: SingleService[];
  guidelanguages: Language[];
  nextAvailableDates: {
    from: Date;
    to: Date;
  }[];
  cancelationPolicy: {
    label: {
      en: string[];
      he: string[];
    };
  };
  disclaimer: {
    label: {
      en: string[];
      he: string[];
    };
  };
};

export type Language = {
  id: number;
  created_at: Date;
  acronym: {
    en: string;
    he: string;
  };
  label: {
    en: string;
    he: string;
  };
  name: string;
  is_system_language: boolean;
};

export type SingleService = {
  id: number;
  created_at: Date;
  label: {
    en: string;
    he: string;
  };
  icon: string;
};
