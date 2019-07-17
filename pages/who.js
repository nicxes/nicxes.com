import Link from 'next/link'

import Page from '../components/page'
import Navbar from '../components/navbar'

export default function Who() {
  return (
    <>
      <Navbar/>

      <Page title="Nicxes — Homepage">
        <main className="container-fluid">
          
          <header>
            <div>
              <span className="icon">🧐</span>
              <h1>Who I am?</h1>
              <p>Real Notion pages built by our team and community. Explore and duplicate any page below with one click so you can make it your own! Want to share your creations? Share them here so others can benefit from what you've built! ✌️</p>
              
              <h2>Skills</h2>
              <ul className="unstyled">
                <li>Node.js</li>
                <li>React.js [Next.js]</li>
                <li>Deployment [Heroku/Now]</li>
                <li>Git [Github/Gitlab]</li>
                <li>CMS [Contentful/Prismic]</li>
                <li>CSS [Less/Sass]</li>
                <li>HTML [HTML5/Jade]</li>
              </ul>
            </div>
          
            <aside>
              <ul className="unstyled">
                <li><a href="https://linkedin.com/in/nicxesh">Linkedin</a></li>
                <li><a href="https://github.com/nicxes">Github</a></li>
                <li><a href="mailto:nicxesh@gmail.com">Email</a></li>
              </ul>
            </aside>
          </header>

          <hr/>

        </main>
      </Page>

      <style jsx>{`
        header {
          display: grid;
          grid-template-columns: 2fr 1fr;
          column-gap: 20px;
        }
        header .icon {
          font-size: 42px;
          display: block;
          margin: 20px 0;
        }
        aside {
          display: flex;
          align-items: flex-end;
        }
        aside a {
          color: #999;
          font-size: 14px;
          font-weight: 400;
        }
        h1 {font-size: 32px;}
        h2 {font-size: 22px;}
        p {
          color: #333;
          font-weight: 400;
          line-height: 25px;
        }
        ul li {margin: 8px 0;}
        hr {
          border: 1px solid rgba(55, 53, 47, 0.09);
          margin: 40px 0;
        }
      `}</style>
    </>
  )
}