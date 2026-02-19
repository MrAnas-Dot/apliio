import { Behance, Facebook, Github, LinkedIn } from './svgImages'
export const FooterData = {
  logo: '/images/logo.svg',
  logoDark: '/images/logo-light.svg',
  footerText: 'Fiscalacts is your trusted partner in FTA-approved tax, accounting, and business consultancy services since 2019.',
  copyright: `${new Date().getFullYear()} Fiscalacts. All Rights Reserved`,
  email: 'info@fiscalacts.com',
  phone: '+971 4 123 4567',
  expolre: [
    {
      id: 1,
      name: 'About Us',
      link: '/about',
    },
    {
      id: 2,
      name: 'Services',
      link: '/services',
    },
    {
      id: 3,
      name: 'Blogs',
      link: '/blog',
    },
  ],
  resources: [
    {
      id: 1,
      name: 'Privacy Policy',
      link: '/privacy',
    },
    {
      id: 2,
      name: 'Terms',
      link: '/terms',
    },
  ],

  socialLinks: [
    {
      id: 1,
      name: <Facebook />,
      link: '#',
    },
    {
      id: 2,
      name: <Github />,
      link: '#',
    },
    {
      id: 3,
      name: <LinkedIn />,
      link: '#',
    },
    {
      id: 4,
      name: <Behance />,
      link: '#',
    },
  ],
}
