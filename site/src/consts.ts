/**
 * Single source of truth for business facts and navigation.
 *
 * The old GoDaddy site contradicted itself: the footer said 204 N. Main St /
 * 724.900.3853 while the contact page said 104 N. Main St / 724.900.8353.
 * Confirmed values are 204 / 3853 — every page pulls from here so the two can
 * never drift apart again.
 */
export const BUSINESS = {
  name: 'Germ Solutions USA',
  legalName: 'Germ Solutions Service USA',
  street: '204 North Main Street',
  city: 'Zelienople',
  state: 'PA',
  stateLong: 'Pennsylvania',
  zip: '16063',
  country: 'United States',
  phone: '724.900.3853',
  phoneHref: '+17249003853',
  email: 'info@GermSolutionsUSA.com',
  hours: '9:00 am – 5:00 pm',
  hoursShort: 'Mon–Fri, 9:00 am – 5:00 pm',
} as const;

/** Replace with your Formspree form ID (https://formspree.io -> New Form). */
export const FORMSPREE_ID = 'YOUR_FORM_ID';
export const FORMSPREE_ENDPOINT = `https://formspree.io/f/${FORMSPREE_ID}`;

export const SITE = {
  title: 'Germ Solutions USA',
  tagline: 'Breathe Clean. Live Your Best Life.',
  description:
    'ActivePure® air and surface purification for schools, government facilities, grow rooms, retail and homes. Independent dealer of Beyond by Aerus. Zelienople, PA.',
} as const;

export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

export const NAV: NavItem[] = [
  { label: 'Products', href: '/products' },
  { label: 'Technology', href: '/technology' },
  {
    label: 'Industries',
    href: '/industries',
    children: [
      { label: 'Education', href: '/industries/education' },
      { label: 'Government Facilities', href: '/industries/government-facilities' },
      { label: 'Grow Rooms', href: '/industries/manufacturing' },
      { label: 'Retail: Cigar & Tobacco', href: '/industries/retail' },
      { label: 'Residences & Home Offices', href: '/industries/residences' },
    ],
  },
  { label: 'Funding', href: '/funding' },
  { label: 'Articles', href: '/articles' },
  { label: 'Contact', href: '/contact' },
];
