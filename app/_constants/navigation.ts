export const navigationItems: {
  label: string;
  href: string;
  isBlank?: boolean;
  showInFooter?: boolean;
}[] = [
  {
    label: 'Profile',
    href: 'https://resplendent-faloodeh-da4fb1.netlify.app',
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
    href: 'https://github.com/techlog-dev/techlog',
    isBlank: true,
  }
] as const;
