import Head from 'next/head'

import '../static/zeit-ui.css'

export default function Page ({ title, description, children }) {
  return (
    <div>
      <Head>
        <title>{title || 'Nicxes'}</title>

        <meta name="description" content={description || 'UI Developer — from Buenos Aires, Argentina. Got more questions? Email me at hello@nicxes.com'} />
        <meta name="keywords" content="Nicxes, nicxes, nxs, nico, nicxes.com, nxs.sh, nico.sh, nicxes.dev"/>
        <meta name="author" content="@Nicxes"/>
        
        <meta name="theme-color" content="#000000"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

        <link rel="shortcut icon" type="image/png" href="/static/favicon.png"/>

        <script dangerouslySetInnerHTML={{ __html: `
          var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on"];analytics.factory=function(t){return function(){var e=Array.prototype.slice.call(arguments);e.unshift(t);analytics.push(e);return analytics}};for(var t=0;t<analytics.methods.length;t++){var e=analytics.methods[t];analytics[e]=analytics.factory(e)}analytics.load=function(t,e){var n=document.createElement("script");n.type="text/javascript";n.async=!0;n.src="https://cdn.segment.com/analytics.js/v1/"+t+"/analytics.min.js";var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(n,a);analytics._loadOptions=e};analytics.SNIPPET_VERSION="4.1.0";
            analytics.load("lqzhyjtqdbvRPYZP2ocXYOJUleQHDIXD");
            analytics.page();
          }`
        }}/>
      </Head>

      {children}

      <style global jsx>{`
        ul.unstyled {
          margin: 0;
          padding: 0;
        }
        ul.unstyled li::before {
          content: none;
        }
        
      `}</style>
    </div>
  )
}
