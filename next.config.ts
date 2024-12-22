import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // compiler: {
  //   styledComponents: true,
  // },
  sassOptions: {
    silenceDeprecations: ['legacy-js-api'],
  },
  output: 'standalone',
};

export default nextConfig;
