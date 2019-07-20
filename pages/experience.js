import Link from 'next/link'

import Page from '../components/page'
import Navbar from '../components/navbar'

export default function Exp() {
  return (
    <>
      <Navbar/>

      <Page title="Nicxes — Homepage">
        <main className="container-fluid">
          
          <header>
            <div>
              <span className="icon">💼</span>
              <h1 className="mb-4">Experience</h1>

              <h2 className="mb-1">UI Developer at Boopix</h2>
              <p className="mb-4">As the design team lead, I am responsible for curating the visual experience of our brand and products. Being the first designer of the company, I was enabled to develop the design system that we are currently using. We have a growing team of designers and developers which I am now guiding daily in the creative process.</p>
              
              <h3 className="mb-1">I’m responsible for:</h3>
              <ul className="unstyled">
                <li>UI Developer</li>
                <li>Wireframing</li>
                <li>Release Videos / Announcements</li>
                <li>Continually scaling the graphic system of ZEIT, Next.js and Hyper — among others</li>
                <li>Improving the user experience and the graphic interface of the platform</li>
                <li>Recruiting and hiring for the design team</li>
              </ul>

            </div>
          
            <aside className="hidden-mobile hidden-tablet">
              <ul className="unstyled">
                <li><a href="https://github.com/nicxes" target="_blank">Github repository</a></li>
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
        @media only screen and (max-width: 768px) {
          header {grid-template-columns: 1fr;}
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

        p {
          color: #333;
          font-weight: 400;
          line-height: 25px;
        }
        ul li {color: #222;}

      `}</style>
    </>
  )
}