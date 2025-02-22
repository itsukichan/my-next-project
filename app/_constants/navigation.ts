export const navigationItems: {
  label: string;
  href: string;
  isBlank?: boolean;
  showInFooter?: boolean;
}[] = [
  {
    label: 'Blog',
    href: '/blog',
    showInFooter: false,
  },
  {
    label: 'Contact',
    href: '/contact',
    showInFooter: false,
  },
] as const;
