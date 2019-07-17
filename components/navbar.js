import Logo from './logo'
import Link from 'next/link'

export default () => (
  <nav className="navbar">
    <div className="container">

      <div className="brand">
        <Link href="/"><img src="/static/logo.png"/></Link>
      </div>
      
    </div>

    <style jsx>{`
      .navbar {
        position: sticky;
        top: 0;
        left: 0;
        right: 0;
        z-index: 998;
      
        padding: 15px 0;
        background: #fff;
      }
      .container {max-width: none;}

      .brand {cursor: pointer;}
      .brand img {max-height: 20px;}
    `}</style>
  </nav>
)