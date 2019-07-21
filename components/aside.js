import Link from 'next/link'

export default function Exp() {
  return (
    <>
      <aside className="hidden-mobile hidden-tablet">
        <div className="sticky">
          <h4>Technology:</h4>
          <ul className="unstyled mb-4">
            <li>HTML (Hypertext Markup Language)</li>
            <li>CSS (Cascading Style Sheets)</li>
            <li>SASS (Syntactically Awesome Style Sheets)</li>
            <li>Gitlab (Version-control)</li>
          </ul>

          <ul className="unstyled">
            <li><a href="https://github.com/nicxes/boopix" target="_blank">Live Preview</a></li>
            <li><a href="https://github.com/nicxes/boopix" target="_blank">Github repository</a></li>
          </ul>
        </div>
      </aside>

      <style jsx>{`
        aside {
          grid-auto-rows: min-content;

          font-size: 15px;
        }
        aside a {
          color: #999;
          font-size: 14px;
          font-weight: 400;
        }
        .sticky {
          position: sticky;
          top: 140px;
        }
      `}</style>
    </>
  )
}