import { FooterLinkType } from 'vorpaltesttoolkit'
import { ContextApi } from 'contexts/Localization/types'

export const footerLinks: (t: ContextApi['t']) => FooterLinkType[] = (t) => [
  {
    label: t('About'),
    items: [
      {
        label: t('Contact'),
        href: '',
      },
      {
        label: t('Media kit'),
        href: '',
      },
      {
        label: t('Blog'),
        href: '',
      },
      {
        label: t('Community'),
        href: '',
        isHighlighted: true,
      },
    ],
  },
  {
    label: t('Help'),
    items: [
      {
        label: t('Customer Support'),
        href: '',
      },
      {
        label: t('Troubleshooting'),
        href: '',
      },
      {
        label: t('Guides'),
        href: '',
      },
    ],
  },
  {
    label: t('Developers'),
    items: [
      {
        label: 'Github',
        href: 'https://github.com/VORPALTEAM',
      },
      {
        label: t('Documentation'),
        href: '',
      },
      {
        label: t('Audits'),
        href: '',
      },
      {
        label: t('Bughunting'),
        href: '',
      }
    ],
  },
  {
    label: t('Socials'),
    items: [
      {
        label: 'Telegram',
        href: 'https://t.me/VorpalAnnouncements',
        target: "_blank"
      },
      {
        label: t('Linkedin'),
        href: 'https://www.linkedin.com/company/vorpaldao',
        target: "_blank"
      },
      {
        label: t('Discord'),
        href: 'https://discord.com/invite/epUsWEPaDA',
        target: "_blank"
      },
      {
        label: t('Twitter'),
        href: 'https://twitter.com/VorpalDAO',
        target: "_blank"
      },
      {
        label: t('Medium'),
        href: 'https://vorpaldao.medium.com/',
        target: "_blank"
      },
      {
        label: t('Reddit'),
        href: 'https://www.reddit.com/user/VorpalDAO',
        target: "_blank"
      },
    ],
  }
]
