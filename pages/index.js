import Link from 'next/link'

import Page from '../components/page'
import Logo from '../components/logo'

export default function Home() {
  return (
    <>
      <Page title="Nicxes — Homepage">
        <main>
          <div className="container">

            <header>
              <Logo size="140"/>
              <h1 className="name">Nicxes</h1>
            </header>

            <ul className="navigation">
              <li><a href="https://www.notion.so/nicxes/UI-Developer-at-Boopix-66d482f92cd14de8bf3b95ff1b6d7136" target="_blank">💼 Experience</a></li>
              <li><a>💾 OSS Projects</a></li>
              <li><Link href="/watch"><a>📺 Watch</a></Link></li>
              <li><a href="https://www.notion.so/nicxes/Information-2547483a7bca43feb829f311bc8f3b5a" target="_blank">👀 Information</a></li>
            </ul>

            <footer>
              <p>Got more questions? <br/> Email me at <a href="mailto:hello@nicxes.com">hello@nicxes.com</a></p>
            </footer>

          </div>
        </main>
      </Page>

      <style jsx>{`
        main {
          position: relative;
          height: 100vh;
          
          display: flex;
          align-items: center;
        }
        main .container {width: 100%;}

        header {
          position: relative;
          padding: 20px 0;
        }
        header .name {
          color: #000;
          font-size: 36px;
          font-weight: bold;

          margin: 12px 0 0 0;
        }
        
        .navigation {
          padding: 0;
          margin: 0 0 20px 0;
        }
        .navigation li {
          list-style: none;
          transition: 0.1s all ease-in;

          border-radius: 2px;
          border-top: 1px solid #e4e3e2;
        }
        .navigation li a {
          color: #333;
          display: block;
          padding: 12px 5px;
        }
        .navigation li:hover {background: #e4e3e2;}

        footer p {
          color: #999;
          font-size: 15px;
          font-weight: 300;
          line-height: 25px;
        }
        footer p a {
          color: #999;
          text-decoration: underline;
        }

        @media only screen and (max-width: 425px) {
          main {max-height: 600px;}
          header {text-align: center;}
        }
      `}</style>
    </>
  )
}
