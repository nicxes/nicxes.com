import Logo from './logo'
import Link from 'next/link'

export default () => (
  <nav className="navbar">
    <Logo color="white" size="80"/>

    <ul>
      <li><Link href="/"><a>home</a></Link></li>
      <li><Link href="/"><a>resume</a></Link></li>
      <li><Link href="/"><a>login</a></Link></li>
    </ul>

    <style jsx>{`
      .navbar {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        width: 100%;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
      .navbar ul {
        padding: 0;
        margin: 0;

        display: flex;
      }
      .navbar ul li {
        list-style: none;
        padding: 0 10px;
      }
      .navbar ul li a {
        color: #999;
        font-family: Monospace;
        text-decoration: none;
      }
      .navbar ul li a:hover {color: #fff;}

      @media only screen and (min-width: 769px) {
        .navbar {top: 50px;}
        .navbar ul {margin: 10px 0;}
      }

    `}</style>
  </nav>
)