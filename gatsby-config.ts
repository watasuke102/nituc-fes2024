// NITUC fes 2024
// CopyRight (c) 2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import type {GatsbyConfig} from 'gatsby';

const config: GatsbyConfig = {
  graphqlTypegen: true,
  plugins: [
    'gatsby-plugin-sitemap',
    'gatsby-plugin-vanilla-extract',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'static/icon.jpg',
      },
    },
  ],
};

export default config;
