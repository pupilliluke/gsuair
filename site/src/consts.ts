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
  hours: '09:00 am – 05:00 pm',
  hoursShort: 'Mon–Fri, 9:00 am – 5:00 pm',
} as const;

/** All three offices, as listed on the Locations page. */
export const LOCATIONS = [
  {
    name: 'PITTSBURGH PA',
    lines: ['204 N. Main St.', 'Zelienople PA 16063'],
    phone: '724.900.3853',
    phoneHref: '+17249003853',
  },
  {
    name: 'IRVINE CA',
    lines: ['15520 Rockfield Blvd.', 'Suite G', 'Irvine CA 92618'],
    phone: '949.900.0047',
    phoneHref: '+19499000047',
  },
  {
    name: 'CLERMONT FL',
    lines: ['15745 Bay Vista Dr.', 'Clermont FL 34714'],
    phone: '407.717.5141',
    phoneHref: '+14077175141',
  },
] as const;

/** Replace with your Formspree form ID (https://formspree.io -> New Form). */
export const FORMSPREE_ID = 'YOUR_FORM_ID';
export const FORMSPREE_ENDPOINT = `https://formspree.io/f/${FORMSPREE_ID}`;

export const SITE = {
  title: 'Germ Solutions USA',
  tagline: 'Breathe Clean - Live Your Best Life!',
  description:
    'ActivePure® air and surface purification for schools, government facilities, grow rooms, retail and homes. Independent dealer of Beyond by Aerus. Zelienople, PA.',
} as const;

export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

/** Mirrors the gsuair.com menu exactly — same items, same labels, same order. */
export const NAV: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'PRODUCTS', href: '/products' },
  { label: 'TECHNOLOGY', href: '/technology' },
  {
    label: 'INDUSTRIES',
    href: '/industries',
    children: [
      { label: 'EDUCATION', href: '/industries/education' },
      { label: 'GOVERNMENT FACILITIES', href: '/industries/government-facilities' },
      { label: 'MANUFACTURING', href: '/industries/manufacturing' },
      { label: 'MEDICAL', href: '/industries/medical' },
      { label: 'RESIDENCES/HOME OFFICES', href: '/industries/residences' },
      { label: 'RETAIL SECTOR', href: '/industries/retail' },
    ],
  },
  {
    label: 'PRESS',
    href: '/articles',
    children: [{ label: 'ARTICLES', href: '/articles' }],
  },
  { label: 'Funding', href: '/funding' },
  {
    label: 'ABOUT',
    href: '/about-us',
    children: [
      { label: 'ABOUT US', href: '/about-us' },
      { label: 'TESTIMONIALS', href: '/testimonials' },
      { label: 'ACCREDITATIONS', href: '/accreditations' },
    ],
  },
  {
    label: 'CONTACT US',
    href: '/contact',
    children: [
      { label: 'CONTACT US', href: '/contact' },
      { label: 'LOCATIONS', href: '/locations' },
    ],
  },
];
