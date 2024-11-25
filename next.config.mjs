/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'fore.coffee',
                port: '',
                pathname: '/wp-content/uploads/2014/12/Logo-2.png'
            }
        ]
    }
};

export default nextConfig;
