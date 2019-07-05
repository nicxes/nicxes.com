import Link from 'next/link'

import Page from '../components/page'
import Navbar from '../components/navbar'

function Home() {
  return (
    <>
      <Navbar/>

      <Page title="Nicxes — Homepage">
        <main className="container">
          
          <header className="head">
            <img src="/static/logo.png" alt="Nicxes" className="avatar"/>
            <h1 className="name">Nicxes</h1>
          </header>

          <ul className="navigation">
            <li><Link href="/who"><a>🧐 Who I am?</a></Link></li>
            <li><Link href="/oss"><a>💼 OSS Contributions</a></Link></li>
            <li><Link href="/press"><a>📰 Press</a></Link></li>
            <li><Link href="/education"><a>🎓 Education</a></Link></li>
            <li><Link href="/information"><a>👀 Information</a></Link></li>
          </ul>

          <footer className="footer">
            <p>Got more questions?<br/>
              Email me at <a href="mailto:hello@nicxes.com">hello@nicxes.com</a>
            </p>
          </footer>

        </main>
      </Page>

      <style jsx>{`
        main {
          position: relative;
          
          padding: 120px 20px 0 20px;
        }
        main .head {
          position: relative;
          padding: 20px 0;
        }
        main .head .avatar {
          width: 140px;
          height: 140px;
        }
        main .head .name {
          color: #000;
          font-size: 36px;
          font-weight: bold;

          margin: 20px 0 0 0;
        }
        
        .navigation {
          padding: 0;
          margin: 0;
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
      `}</style>
    </>
  )
}

export default Home