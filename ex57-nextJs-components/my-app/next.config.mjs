/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'thumbs.dreamstime.com',
            port: '',
          },
        ],
      },
};

export default nextConfig;
