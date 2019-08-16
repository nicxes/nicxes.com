import Link from 'next/link'

import Page from '../components/page'
import Logo from '../components/logo'

export default function Home() {
  return (
    <>
      <Page title="Nicxes — Homepage">
        <main className="zi-main">
          <div className="zi-layout">

            <div className="avatar">
              <Logo size="140"/>
            </div>
          
            <h1 className="name">Nicxes</h1>

            <ul className="unstyled">
              <li><a>💼 Experience</a></li>
              <li><a>💾 OSS Projects</a></li>
              <li><a>📺 Watch</a></li>
              <li><a>👀 Information</a></li>
            </ul>

            <p className="contact zi-comment">Got more questions? <br/> Email me at <a href="mailto:nicxesh@gmail.com">nicxesh@gmail.com</a></p>
          </div>
        </main>
      </Page>

      <style jsx>{`
        .zi-main {
          position: relative;
          width: 100%;
          height: 100vh;

          display: flex;
          align-items: center;
          
        }
        .zi-layout {
          display: flex;
          flex-direction: column;

          max-width: 420px;
          min-width: 0;
        }
        .name {
          margin: 10px 0;
        }
        ul li {
          margin: 0;
          border-top: 1px solid #e4e3e2;
        }
        ul li a {
          color: #222;
          font-size: 16px;

          display: block;
          padding: 10px 5px;
        }
        ul li a:hover {
          background: #eee;
          text-decoration: none;
        }

        .contact {
          font-size: 14px;
        }

        @media only screen and (max-width: 425px) {
          .avatar,
          .name {
            text-align: center;
          }
        }
      `}</style>
    </>
  )
}
