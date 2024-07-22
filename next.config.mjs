/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: 'utfs.io'
            },
            {
                hostname: "w7.pngwing.com"
            },
            {
                hostname: "img.favpng.com"
            },
            {
                hostname: "t3.ftcdn.net"
            }
        ]
    }
};

export default nextConfig;
