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
        label: t('Blog'),
        href: '',
      },
      {
        label: t('Community'),
        href: '',
      },
      {
        label: t('VORPAL token'),
        href: 'http://vm-4a5f6f50.na4u.ru:3001/add/0xbB4bAcF2bF47Aa4ea54abfda014107Fb9dCC07D4/0x676F285194AbF08f12B00110dcD510E36DF1237b',
      },
      {
        label: '—',
      },
      {
        label: t('Online Store'),
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
        label: t('Bug Bounty'),
        href: '',
      },
      {
        label: t('Audits'),
        href: '',
      },
      {
        label: t('Careers'),
        href: '',
      },
    ],
  },
]
