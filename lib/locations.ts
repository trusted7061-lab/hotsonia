export const locations = [
  { slug: 'bailey-road', name: 'Bailey Road' },
  { slug: 'bariya-bus-stand', name: 'Bariya Bus Stand' },
  { slug: 'bhuthnath', name: 'Bhuthnath' },
  { slug: 'boring-road', name: 'Boring Road' },
  { slug: 'dakbangla-chauraha', name: 'Dakbangla Chauraha' },
  { slug: 'danapur', name: 'Danapur' },
  { slug: 'exhibition-road', name: 'Exhibition Road' },
  { slug: 'fraser-road', name: 'Fraser Road' },
  { slug: 'gandhi-maidan', name: 'Gandhi Maidan' },
  { slug: 'gola-road', name: 'Gola Road' },
  { slug: 'jagdev-path', name: 'Jagdev Path' },
  { slug: 'jamal-road', name: 'Jamal Road' },
  { slug: 'kankarbagh', name: 'Kankarbagh' },
  { slug: 'mithapur', name: 'Mithapur' },
  { slug: 'patliputra-colony', name: 'Patliputra Colony' },
  { slug: 'patliputra-station', name: 'Patliputra Station' },
  { slug: 'patna-junction', name: 'Patna Junction' },
  { slug: 'raja-bazar', name: 'Raja Bazar' },
  { slug: 'rajendra-nagar', name: 'Rajendra Nagar' },
];

export function getLocationBySlug(slug: string) {
  return locations.find(loc => loc.slug === slug);
}
