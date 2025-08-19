import { create } from 'next/config';

const withImages = require('next-images');

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [], // replace with your actual image domain
    formats: ['image/avif', 'image/webp']
},
  webpack(config) {
    
    return config;
  },
  i18n: {
    locales: ['en'],
    defaultLocale: 'en'
},
  env: {
    BRAND_NAME: 'GlamCS',
    PRIMARY_COLOR: '#FFA500', // orange
    SECONDARY_COLOR: '#FFFFFF', // white
  }
};

export default withImages(nextConfig);