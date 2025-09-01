import type { IconMap, SocialLink, Site } from '@/types'

export const SITE: Site = {
  title: 'Angela YT Chan',
  description:
    'artist portfolio and research blog',
  href: 'https://angelaytchan.net',
  author: 'Angela YT Chan',
  locale: 'en-Uk',
  featuredPostCount:6,
  postsPerPage: 20,
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
    href: 'https://bsky.app/profile/angelaytchan.net',
    label: 'Bluesky',
  },
  {
    href: 'mailto:hello@angelaytchan.net',
    label: 'Email',
  },
  {
    href: '/rss.xml',
    label: 'RSS',
  },
]

export const ICON_MAP: IconMap = {
  Bluesky: 'lucide:message-square-more',
  Email: 'lucide:mail',
  RSS: 'lucide:rss',
}

