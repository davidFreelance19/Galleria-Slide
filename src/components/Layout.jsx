import { Outlet, Link, useLocation, useLoaderData } from "react-router-dom";
import styled from "@emotion/styled";
import Slider from "./Slider";
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
  const datos = useLoaderData();
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
      {location.pathname === "/" ? <></> : <Slider datos={datos}></Slider>}
    </>
  );
};

export default Layout;
