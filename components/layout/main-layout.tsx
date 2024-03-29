import Link from "next/link";
import Image from "next/image";
import logo from "../../public/img/logo.png";
import { Nav, Header, HeaderLogo } from "./styles";
import { Container } from "../styles";

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <>
      <Header>
        <Container>
          <Nav>
            <HeaderLogo>
              <Link href="/" passHref>
                <a>
                  <Image priority src={logo} width="45px" height="45px" alt="logo"></Image>
                </a>
              </Link>
            </HeaderLogo>
          </Nav>
        </Container>
      </Header>
      <main>{children}</main>
    </>
  );
};
