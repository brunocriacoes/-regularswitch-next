import Image from "next/image";
import Link from "next/link";
import Logo from "../../img/logo.png";
import menu from "../../img/menu.png";

export default function HeaderComponents() {
  return (
    <div>
      <div className="mx-auto px-5 pt-5">
        <header>
          <div className=" sm: flex justify-between xl:grid grid-cols-5">
            <nav className="flex justify-center">
              <Link href="https://regularswitch.com/" legacyBehavior>
                <Image
                  src={Logo}
                  alt="RSW"
                  className="w-20 h-8 cursor-pointer"
                />
              </Link>
            </nav>
            <nav className="hidden sm:flex items-center" >
              <div className="">
              <Image
                  src={menu}
                  alt="MENU"
                  className="w-5 h-5 cursor-pointer"
                />
              </div>
            </nav>
            <nav className="sm: hidden xl:flex justify-center">
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
            <nav className="sm: hidden xl:flex justify-center">
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
            <nav className="sm: hidden xl:flex justify-center">
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
            <div className="sm: hidden xl:flex justify-center">
              <span>EN PT</span>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
}
