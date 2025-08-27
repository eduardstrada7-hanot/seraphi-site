/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: "/soma-sound-therapy", destination: "/soma/sound-therapy", permanent: true },
      { source: "/soma-superfoods-elixirs", destination: "/soma/superfoods-elixirs", permanent: true },
    ];
  },
};
module.exports = nextConfig;
