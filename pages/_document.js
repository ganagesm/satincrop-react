import Document, { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
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

          <script
            dangerouslySetInnerHTML={{
              __html: `
          function initApollo(){var n=Math.random().toString(36).substring(7),o=document.createElement("script");
          o.src="https://assets.apollo.io/micro/website-tracker/tracker.iife.js?nocache="+n,o.async=!0,o.defer=!0,
          o.onload=function(){window.trackingFunctions.onLoad({appId:"6631189a75a94c0438fce0f4"})},
          document.head.appendChild(o)}initApollo();
          `,
            }}
          />

          {/* ZOho Code 01/03/2024 */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
              var w=window;
              var p = w.location.protocol;
              if(p.indexOf("http") < 0){p = "http"+":";}
              var d = document;
              var f = d.getElementsByTagName('script')[0],s = d.createElement('script');
              s.type = 'text/javascript'; s.async = false;
              if (s.readyState){
                s.onreadystatechange = function(){
                  if (s.readyState=="loaded"||s.readyState == "complete"){
                    s.onreadystatechange = null;
                    try{
                      loadwaprops("3zb3629bd0ee5d5d8303f8ec75914e3816","3zff858e9853183a7d4f680e1b9484843d","3z39a66442af13c2e9545a2f86e2dc74e8fd0810ac6c1d48f81b6170078680ba1c","3ze1a87b159057988c1bf6ad26580ffc7a","0.0");
                    }catch(e){}
                  }
                };
              }else {
                s.onload = function(){
                  try{
                    loadwaprops("3zb3629bd0ee5d5d8303f8ec75914e3816","3zff858e9853183a7d4f680e1b9484843d","3z39a66442af13c2e9545a2f86e2dc74e8fd0810ac6c1d48f81b6170078680ba1c","3ze1a87b159057988c1bf6ad26580ffc7a","0.0");
                  }catch(e){}
                };
              }
              s.src = p + "//ma.zoho.in/hub/js/WebsiteAutomation.js";
              f.parentNode.insertBefore(s, f);
            `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script type="text/javascript">
            {`
      _linkedin_partner_id = "7289105";
      window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
      window._linkedin_data_partner_ids.push(_linkedin_partner_id);
      `}
          </script>
          <script type="text/javascript">
            {`
      (function(l) {
        if (!l) {
          window.lintrk = function(a, b) {
            window.lintrk.q.push([a, b])
          };
          window.lintrk.q = []
        }
        var s = document.getElementsByTagName("script")[0];
        var b = document.createElement("script");
        b.type = "text/javascript";
        b.async = true;
        b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
        s.parentNode.insertBefore(b, s);
      })(window.lintrk);
      `}
          </script>
          <noscript>
            <img
              height="1"
              width="1"
              style={{ display: "none" }}
              alt=""
              src="https://px.ads.linkedin.com/collect/?pid=7289105&fmt=gif"
            />
          </noscript>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
