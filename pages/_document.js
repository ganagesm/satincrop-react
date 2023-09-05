import Document, { Html, Head, Main, NextScript } from "next/document";
import Script from 'next/script'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="zxx">
        <Head>
          <link
            href="https://fonts.googleapis.com/css?family=Dosis:200,300,400,500,600,700,800&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i&display=swap"
            rel="stylesheet"
          />
          <link rel="icon" type="image/png" href="/favicon.png"></link>
          <link rel="icon" type="image/png" href="/180x180.png"></link>
          {/* <link rel="icon" type="image/png" href="/outsource.svg"></link> */}
          <Script id="google-analytics">
            {`
          window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;
          ga('create', 'UA-228721401-1', 'auto');
          ga('send', 'pageview');
        `}
          </Script>
          <Script src="https://www.google-analytics.com/analytics.js" />
          <Script id="google-tagmanager">
            {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-TVV382K');
        `}
          </Script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
