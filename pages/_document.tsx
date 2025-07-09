import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" className="scroll-smooth">
        <Head>
          {}
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap"
          />
        </Head>
        {
		}
        <body className="
          font-sans 
          bg-pageLight text-pageDark 
          dark:bg-pageDark dark:text-pageLight
        ">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
