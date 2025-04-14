import type { IconMap, SocialLink, Site } from '@/types'

export const SITE: Site = {
  title: 'aytc',
  description:
    'artist portfolio and research blog',
  href: 'https://wispyplant.github.io',
  author: 'Angela YT Chan',
  locale: 'en-Uk',
  featuredPostCount: 2,
  postsPerPage: 3,
}

export const NAV_LINKS: SocialLink[] = [
    {
    href: '/',
    label: 'home',
  },
  {
    href: '/about',
    label: 'about',
  },  
  {
    href: '/blog',
    label: 'activities',
  },  
  {
    href: '/tags',
    label: 'areas of work',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: '',
    label: 'GitHub',
  },
  {
    href: '',
    label: 'Twitter',
  },
  {
    href: 'mailto:angela.yt,chan@gmail.com',
    label: 'Email',
  },
  {
    href: '/rss.xml',
    label: 'RSS',
  },
]

export const ICON_MAP: IconMap = {
  Website: 'lucide:globe',
  GitHub: 'lucide:github',
  LinkedIn: 'lucide:linkedin',
  Email: 'lucide:mail',
  RSS: 'lucide:rss',
}

