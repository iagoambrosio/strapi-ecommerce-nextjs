const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.app.github.dev',
        port: '443',
        pathname: "/**",
      },
    ],
  },
};
module.exports = nextConfig;
