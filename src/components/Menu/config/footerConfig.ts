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
        href: '',
      },
      {
        label: t('Instagram'),
        href: '',
      },
      {
        label: t('Twitter'),
        href: '',
      },
      {
        label: t('Medium'),
        href: '',
      },
      {
        label: t('Reddit'),
        href: '',
      },
    ],
  }
]
