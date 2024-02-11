/** @type {import('next').NextConfig} */

import exp from 'constants';

const nextConfig = {
    reactStrictMode: true,
    async redirects(){
        return [
            {
                source: '/politiococloud',
                destination: 'https://e42.io',
                permanent: false
            },
            {
                source: '/politioco',
                destination: 'https://e42.io/join',
                permanent: false
            }
        ]
    }
};

export default nextConfig;