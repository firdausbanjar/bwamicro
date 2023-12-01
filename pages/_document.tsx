import { Html, Head, Main, NextScript } from 'next/document';
import config from '../src/configs/config';

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <link
                    rel="icon"
                    href={`${config.app.baseUrl}/images/logo.png`}
                />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
