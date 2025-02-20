export const navigationItems: {
  label: string;
  href: string;
  isBlank?: boolean;
  showInFooter?: boolean;
}[] = [
  {
    label: 'Profile',
    href: 'https://techpanda.netlify.app/',
    isBlank: true,
  },
  {
    label: 'Blog',
    href: '/blog'
  },
  {
    label: 'Contact',
    href: '/contact'
  },
  {
    label: 'Source',
    href: 'https://github.com/itsukichan/techlogwalk',
    isBlank: true,
  }
] as const;
