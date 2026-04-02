export interface Location {
  slug: string;
  name: string;
  area: string;
}

export const locations: Location[] = [
  { slug: "boring-road", name: "Boring Road", area: "Boring Road Patna" },
  { slug: "kankarbagh", name: "Kankarbagh", area: "Kankarbagh Patna" },
  { slug: "rajendra-nagar", name: "Rajendra Nagar", area: "Rajendra Nagar Patna" },
  { slug: "fraser-road", name: "Fraser Road", area: "Fraser Road Patna" },
  { slug: "bailey-road", name: "Bailey Road", area: "Bailey Road Patna" },
  { slug: "bhuthnath", name: "Bhuthnath", area: "Bhuthnath Patna" },
  { slug: "gola-road", name: "Gola Road", area: "Gola Road Patna" },
  { slug: "raja-bazar", name: "Raja Bazar", area: "Raja Bazar Patna" },
  { slug: "jagdev-path", name: "Jagdev Path", area: "Jagdev Path Patna" },
  { slug: "bariya-bus-stand", name: "Bariya Bus Stand", area: "Bariya Bus Stand Patna" },
  { slug: "mithapur", name: "Mithapur", area: "Mithapur Patna" },
  { slug: "danapur", name: "Danapur", area: "Danapur Patna" },
  { slug: "patna-junction", name: "Patna Junction", area: "Patna Junction" },
  { slug: "patliputra-station", name: "Patliputra Station", area: "Patliputra Station Patna" },
  { slug: "patliputra-colony", name: "Patliputra Colony", area: "Patliputra Colony Patna" },
  { slug: "dakbangla-chauraha", name: "Dakbangla Chauraha", area: "Dakbangla Chauraha Patna" },
  { slug: "exhibition-road", name: "Exhibition Road", area: "Exhibition Road Patna" },
  { slug: "gandhi-maidan", name: "Gandhi Maidan", area: "Gandhi Maidan Patna" },
  { slug: "jamal-road", name: "Jamal Road", area: "Jamal Road Patna" },
];

export function getLocation(slug: string): Location | undefined {
  return locations.find((l) => l.slug === slug);
}
