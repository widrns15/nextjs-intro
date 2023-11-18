/** @type {import('next').NextConfig} */

const API_KEY = process.env.API_KEY;

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  async redirects() {
    return [
      {
        source: "/contact/:path*", // 들어오는 request 경로 패턴
        destination: "/form/:path*", // 라우팅하려는 경로 (redirect할 경로)
        permanent: false, // 브라우저가 계속 기억해야 하는 여부
      },
    ];
  },

  async rewrites() {
    // redirect랑 비슷하지만, url이 변경되지 않음
    return [
      {
        source: "/api/movies",
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
      },
    ];
  },
};

module.exports = nextConfig;
