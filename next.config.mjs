/** @type {import('next').NextConfig} */
// const nextConfig = {};
import path from 'path';

function defineNextConfig(config) {
  return config;
}

export default defineNextConfig({
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            icon: true,
          },
        },
      ],  
    });

    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(process.cwd()), // This maps '@' to the root directory
    };
    return config
  },
});
