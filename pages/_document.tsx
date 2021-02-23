import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class CustomDocument extends Document {
    render() {
        return (
            <Html lang="id" className="font-poppins">
                <meta charSet="UTF-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <Head></Head>
                <body className="bg-gray-1000">
                    <Main />
                </body>
                <NextScript />
            </Html>
        )
    }
}