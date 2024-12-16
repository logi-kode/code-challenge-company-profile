/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'fore.coffee',
                port: '',
                pathname: '/wp-content/uploads/2014/12/Logo-2.png'
            },
            {
                protocol: 'https',
                hostname: 'fore.coffee',
                port: '',
                pathname: '/wp-content/uploads/2020/08/C6WFwHr1_400x400-56x56_c.jpg'
            },
            {
                protocol: 'https',
                hostname: 'fore.coffee',
                port: '',
                pathname: '/wp-content/uploads/2020/08/WhatsApp-Image-2023-08-30-at-10.11.57-56x56_c.jpeg'
            },
            {
                protocol: 'https',
                hostname: 'fore.coffee',
                port: '',
                pathname: '/wp-content/uploads/2020/06/download-1-56x56_c.png'
            },
            {
                protocol: 'https',
                hostname: 'fore.coffee',
                port: '',
                pathname: '/wp-content/uploads/2020/06/GoFood_Square-56x56_c.png'
            }
        ]
    }
};

export default nextConfig;
