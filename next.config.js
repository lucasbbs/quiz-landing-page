/** @type {import('next').NextConfig} */
const nextConfig = {
    rewrites() {
        return [
            {
                source: '/:path*',
                destination: '/:path*',
            },
            {
                source: '/:path*',
                destination: 'https://main.d2qvgw8mvqn9ck.amplifyapp.com/:path*',
            }
        ]
    }
}

module.exports = nextConfig
