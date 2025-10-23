const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        domains: '*.app.github.dev',
        port: '443',
        pathname: "/**",
      },
    ],
  },
};
module.exports = nextConfig;
