import { Html, Head, Main, NextScript } from 'next/document';
const PF = process.env.NEXT_PUBLIC_PF;

export default function Document() {
    return (
        <Html>
            <Head>
                <meta charSet="utf-8" />
                <meta httpEquiv="x-ua-compatible" content="ie=edge" />
                <link rel="apple-touch-icon" sizes="16x16" href={`${PF}logo16.png`} />
                <link rel="apple-touch-icon" sizes="32x32" href={`${PF}logo32.png`} />
                <link rel="apple-touch-icon" sizes="180x180" href={`${PF}logo180.png`} />
                <link rel="apple-touch-icon" sizes="192x192" href={`${PF}logo192.png`} />
                <link rel="apple-touch-icon" sizes="512x512" href={`${PF}logo512.png`} />
                <link rel="manifest" href={`${PF}manifest.json`} />
                <meta name="msapplication-TileColor" content="#333333" />
                <meta name="theme-color" content="#333333" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true' />
                <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
// Document.allowedScriptTags = ['ul'];