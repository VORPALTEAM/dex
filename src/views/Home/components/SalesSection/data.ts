import { SalesSectionProps } from '.'

export const swapSectionData: SalesSectionProps = {
  headingText: 'VORPAL DEX is the heart of the VORPAL ecosystem',
  bodyText: 'Limited emission and deflationary model',
  reverse: false,
  primaryButton: {
    to: '/swap',
    text: 'Trade Now!',
    external: false,
  },
  secondaryButton: {
    to: '',
    text: 'Learn',
    external: true,
  },
  images: {
    path: '/images/home/trade/',
    attributes: [
      { src: 'BNB', alt: 'BNB token' },
      { src: 'BTC', alt: 'BTC token' },
      { src: 'vorpal', alt: 'VORPAL token' },
    ],
  },
}

export const earnSectionData: SalesSectionProps = {
  headingText: 'Earn passive income with crypto and NFT',
  bodyText: 'VORPAL DEX makes it easy to make your crypto and NFT  work for you',
  reverse: true,
  primaryButton: {
    to: 'https://starmap.vorpal.finance/',
    text: 'Explore',
    external: true,
  },
  secondaryButton: {
    to: 'https://drive.google.com/file/d/1cIb9qYmjKwp0Br5g-tJvyCzQ6V_5iW8T/view?usp=sharing',
    text: 'Learn',
    external: true,
  },
  images: {
    path: '/images/home/earn/',
    attributes: [
      { src: 'pie', alt: 'Pie chart' },
      { src: 'stonks', alt: 'Stocks chart' },
      { src: 'folder', alt: 'Folder with cake token' },
    ],
  },
}

export const cakeSectionData: SalesSectionProps = {
  headingText: 'VORPAL DEX MAKES OUR WORLD GO ROUND',
  bodyText:  'VORPAL DEX token is at the heart of the VORPAL DEX ecosystem.  Buy it, win it, farm it, spend it, stake it...',
  reverse: false,
  primaryButton: {
    to: 'https://sale.vorpal.finance/',
    text: 'Buy',
    external: true,
  },
  secondaryButton: {
    to: 'https://drive.google.com/file/d/1cIb9qYmjKwp0Br5g-tJvyCzQ6V_5iW8T/view?usp=sharing',
    text: 'Learn',
    external: true,
  },
  images: {
    path: '/images/home/cake/',
    attributes: [
      { src: 'bottom-right', alt: 'Small chartline' },
      { src: 'coin', alt: 'Vorpal icon' },
      { src: 'top-left', alt: 'Small chartline' },
    ],
  },
}

