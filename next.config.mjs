/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["www.shutterstock.com", "images.unsplash.com", "res.cloudinary.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "qiko-dev.s3.ap-southeast-2.amazonaws.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "qiko-prod.s3.ap-southeast-2.amazonaws.com",
        port: "",
      },
    ],
  },
  webpack(config, { dev: isDev, isServer }) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      resourceQuery: /svgr/,
      use: ["@svgr/webpack"],
    });
    // Re-add default nextjs loader for svg
    config.module.rules.push({
      test: /\.svg$/i,
      loader: "next-image-loader",
      issuer: { not: /\.(css|scss|sass)$/ },
      dependency: { not: ["url"] },
      resourceQuery: { not: [/svgr/] }, // Ignore this rule if the path ends with *.svg?svgr
      options: { isServer, isDev, basePath: "", assetPrefix: "" },
    });
    return config;
  },
};

export default nextConfig;
