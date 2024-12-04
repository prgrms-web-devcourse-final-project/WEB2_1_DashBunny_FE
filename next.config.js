const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
})
/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            icon: true,
            typescript: true,
          },
        },
      ],
    })
    return config
  },
  images: {
    dangerouslyAllowSVG: true,

    domains: ["placehold.co", "product-image.kurly.com"],
  },
}

module.exports = withBundleAnalyzer(nextConfig)
