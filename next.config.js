const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'expert-waddle-qxjvxp4p56phgwr-1337.app.github.dev',
        port: '443',
        pathname: "/**",
      },
    ],
  },
};
module.exports = nextConfig;
