// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
// }

// module.exports = nextConfig

// module.exports = {
//   webpack(config) {
//     config.module.rules.push({
//       test: /\.svg$/,
//       issuer: {
//         test: /\.(js|ts)x?$/,
//       },
//       use: ['@svgr/webpack'],
//       reactStrictMode: true,
//       swcMinify: true,
//     })
//     return config
//   }
// }

module.exports = {
  images: {
    domains: ['courses-top.ru'],
  },
  webpack(config, options) {
    config.module.rules.push({
      loader: '@svgr/webpack',
      issuer: /\.[ts]sx?$/,
      options: {
        prettier: false,
        svgo: true,
        svgoConfig: {
          // plugins: [{ removeViewBox: false }],
          plugins: [
            {
              name: 'preset-default',
              params: {
                override: {
                  removeViewBox: false,
                },
              },
            },
          ],
        },
        titleProp: true,
      },
      test: /\.svg$/,
    })

    return config
  },
}
