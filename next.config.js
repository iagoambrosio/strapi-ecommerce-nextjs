const nextConfig = {
  //reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'expert-waddle-qxjvxp4p56phgwr-1337.app.github.dev',
        pathname: "/**",
      },
      {
        protocol: 'https',
        hostname: 'proxy-nginx-1.duckdns.org',
        pathname: '/strapi-cms',
      },
    ],
  },
};
module.exports = nextConfig;
