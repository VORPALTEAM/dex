import { MenuItemsType, DropdownMenuItemType } from 'vorpaltesttoolkit'
import { ContextApi } from 'contexts/Localization/types'
// import { nftsBaseUrl } from 'views/Nft/market/constants'

export type ConfigMenuItemsType = MenuItemsType & { hideSubNav?: boolean }

const config: (t: ContextApi['t']) => ConfigMenuItemsType[] = (t) => [
  /* {
    label: t('Trade'),
    icon: 'Swap',
    href: '/swap',
    showItemsOnMobile: false,
    items: [
      {
        label: t('Exchange'),
        href: '/swap',
      },
      {
        label: t('Liquidity'),
        href: '/liquidity',
      },
    ],
  },
  {
    label: t('Earn'),
    href: '/farms',
    icon: 'Earn',
    items: [
      {
        label: t('Farms'),
        href: '/farms',
      },
      {
        label: t('Pools'),
        href: '/pools',
      },
    ],
  }, */
  // {
  //   label: t('Win'),
  //   href: '/prediction',
  //   icon: 'Trophy',
  //   items: [
  //     {
  //       label: t('Trading Competition'),
  //       href: '/competition',
  //     },
  //     {
  //       label: t('Prediction (BETA)'),
  //       href: '/prediction',
  //     },
  //     {
  //       label: t('Lottery'),
  //       href: '/lottery',
  //     },
  //   ],
  // },
  /* {
    label: t('Soon'),
    href: '/soon',
    icon: 'Trophy',
    hideSubNav: false,
    items: [],
  }, */
  /* {
    label: t('Referral'),
    href: '/referral',
    icon: 'Trophy',
    hideSubNav: false,
    items: [],
  }, */
  {
    label: t('Starmap'),
    href: 'https://starmap.vorpal.finance/',
    icon: 'Star',
    template: 'star',
    hideSubNav: false,
    items: [],
  },
  {
    label: t('Sale'),
    href: 'https://sale.vorpal.finance/',
    icon: 'Green',
    template: 'green',
    hideSubNav: false,
    items: [],
  },
  // {
  //   label: t('NFT'),
  //   href: `${nftsBaseUrl}`,
  //   icon: 'Nft',
  //   items: [
  //     {
  //       label: t('Overview'),
  //       href: `${nftsBaseUrl}`,
  //     },
  //     {
  //       label: t('Collections'),
  //       href: `${nftsBaseUrl}/collections`,
  //     },
  //     {
  //       label: t('Activity'),
  //       href: `${nftsBaseUrl}/activity`,
  //     },
  //   ],
  // },
  {
    label: '...',
    href: null,
    icon: 'More',
    hideSubNav: true,
    items: [
      {
        label: t("LitePaper"),
        href: 'https://drive.google.com/file/d/1cIb9qYmjKwp0Br5g-tJvyCzQ6V_5iW8T/view?usp=sharing',
        target: "_blank"
      },
      {
        label: t('Blog'),
        href: 'https://vorpaldao.medium.com/',
        target: "_blank"
      },
      {
        label: t('Twitter'),
        href: 'https://twitter.com/VorpalDAO',
        target: "_blank"
      }, {
        label: t("Linkedin"),
        href: "https://www.linkedin.com/company/vorpaldao",
        target: "_blank"
      }, {
        label: t("Telegram"),
        href: "https://t.me/VorpalAnnouncements",
        target: "_blank"
      }, {
        label: t("Github"),
        href: "https://github.com/VORPALTEAM",
        target: "_blank"
      }, {
        label: t("Reddit"),
        href: "https://www.reddit.com/user/VorpalDAO",
        target: "_blank"
      }, {
        label: t("Youtube"),
        href: "https://www.youtube.com/@vorpaldao",
        target: "_blank"
      }, {
        label: t("Vimeo"),
        href: "https://vimeo.com/vorpaldao",
        target: "_blank"
      }, {
        label: t("Discord"),
        href: "https://discord.gg/epUsWEPaDA",
        target: "_blank"
      }
    ],
  },
]

export default config
