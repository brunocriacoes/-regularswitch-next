import Image from "next/image";
import Link from "next/link";
import Logo from "../../img/logo.png";
export default function Home() {
  return (
    <div>
      <div className="container mx-auto pt-10">
        <header>
          <div style={{display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr", paddingTop: "20px"}}>
            <nav style={{display: "flex", justifyContent: "center"}}>
              <Link href="https://regularswitch.com/" legacyBehavior>
                <Image src={Logo} alt="RSW" className="" width={80} />
              </Link>
            </nav>
            <nav>
              <ul>
                <li>
                  <span>São Paulo / Lyon</span>
                </li>
                <li>
                  <span>+55 11 (9) 4540-8448</span>
                </li>
                <li>
                  <Link href="mailto:contact@regularswitch.com" legacyBehavior>
                    <a>contact@regularswitch.com</a>
                  </Link>
                </li>
              </ul>
            </nav>
            <nav>
              <ul>
                <li>
                  <Link href="" legacyBehavior>
                    <a>Selected works</a>
                  </Link>
                </li>
                <li>
                  <Link href="" legacyBehavior>
                    <a>Branding</a>
                  </Link>
                </li>
                <li>
                  <Link href="" legacyBehavior>
                    <a>Digital exprirence</a>
                  </Link>
                </li>
                <li>
                  <Link href="" legacyBehavior>
                    <a>Graphic architecture</a>
                  </Link>
                </li>
              </ul>
            </nav>
            <nav>
              <ul>
                <li>
                  <Link href="" legacyBehavior>
                    <a>Sobre</a>
                  </Link>
                </li>
                <li>
                  <Link href="" legacyBehavior>
                    <a>Contato</a>
                  </Link>
                </li>
                <li>
                  <Link href="" legacyBehavior>
                    <a>Instagram</a>
                  </Link>
                </li>
              </ul>
            </nav>
            <div style={{display: "flex", justifyContent: "center"}}>
              <span>EN PT</span>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
}
