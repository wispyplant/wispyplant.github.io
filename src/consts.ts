import type { IconMap, SocialLink, Site } from '@/types'

export const SITE: Site = {
  title: 'wispyplant',
  description:
    'hello!',
  href: 'https://wispyplant.github.io',
  author: 'wispy',
  locale: 'en-Uk',
  featuredPostCount: 2,
  postsPerPage: 3,
}

export const NAV_LINKS: SocialLink[] = [
  {
    href: '/blog',
    label: 'blog',
  },  
  {
    href: '/about',
    label: 'about',
  },
  {
    href: '/',
    label: 'home',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: 'https://github.com/jktrn',
    label: 'GitHub',
  },
  {
    href: 'https://twitter.com/enscry',
    label: 'Twitter',
  },
  {
    href: 'mailto:jason@enscribe.dev',
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
  Twitter: 'lucide:twitter',
  Email: 'lucide:mail',
  RSS: 'lucide:rss',
}
