import dotenv from 'dotenv';

dotenv.config();

const config = {
    api: {
        baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL,
    },
    app: {
        baseUrl: process.env.NEXT_PUBLIC_BASE_URL,
        memberPageUrl: process.env.NEXT_PUBLIC_MEMBERPAGE_URL,
    },
};

export default config;
