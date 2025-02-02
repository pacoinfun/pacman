/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/index.html',
      },
      {
        source: '/:path*',
        destination: '/:path*',
      }
    ]
  },
  // Statik dosyaları işlemek için
  webpack: (config, { isServer }) => {
    // Statik dosya işleme kuralları
    config.module.rules.push({
      test: /\.(mp3|wav|png|jpg|gif|svg)$/,
      use: {
        loader: 'file-loader',
        options: {
          publicPath: '/_next/static/',
          outputPath: 'static/',
        },
      },
    });

    return config;
  },
}

module.exports = nextConfig
