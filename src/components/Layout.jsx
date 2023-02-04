import { Outlet, Link, useLocation, useLoaderData } from "react-router-dom";
import styled from "@emotion/styled";
import logo from "../assets/shared/logo.svg";
const Header = styled.header`
  width: 1360px;
  height: 100px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #f2f2f2;
`;
const Navegacion = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 0 auto;
`;
const Layout = () => {
  const location = useLocation();
  return (
    <>
      <Header>
        <Navegacion>
          <Link to="/">
            <img src={logo} alt="icon-logo" />
          </Link>
          <Link to={`${location.pathname === "/" ? `/Starry%20Night` : "/"}`}>
            {`${
              location.pathname === "/" ? "Start slideshow" : "Stop slideshow"
            }`}
          </Link>
        </Navegacion>
      </Header>
      <Outlet />
    </>
  );
};

export default Layout;
