// NITUC fes 2024
// CopyRight (c) 2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import type {GatsbyConfig} from 'gatsby';

const config: GatsbyConfig = {
  siteMetadata: {
    siteUrl: 'https://nituc-fes61.org',
  },
  graphqlTypegen: true,
  plugins: [
    'gatsby-plugin-sitemap',
    'gatsby-plugin-vanilla-extract',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: '宇部高専 第61回高専祭 公式サイト',
        short_name: '宇部高専 第61回高専祭',
        icon: 'static/icon.jpg',
        background_color: '#e3e2dd',
        theme_color: '#e3e2dd',
        display: 'minimal-ui',
      },
    },
  ],
};

export default config;
