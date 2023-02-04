import {
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import styled from "@emotion/styled";
import arrowLeft from "../assets/shared/icon-back-button.svg";
import arrowRight from "../assets/shared/icon-next-button.svg";
const Footer = styled.footer`
  width: 1360px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 2rem;
  h3 {
    color: #000;
    font-size: 1.8rem;
  }
  h4 {
    color: #0005;
    font-size: 1.5rem;
  }
`;

const Slider = ({ datos }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();
  const {
    name,
    artist: { nameArtist },
  } =
    location.pathname !== "/"
      ? datos.find((pintura) => pintura.name === id)
      : { name: "", artist: "" };

  const navegacion = (salto) => {
    let index;
    if (salto === "next") {
      index =
        datos.findIndex((dato) => dato.name === id) + 1 > 14
          ? 0
          : datos.findIndex((dato) => dato.name === id) + 1;
    } else {
      index =
        datos.findIndex((dato) => dato.name === id) - 1 < 0
          ? 14
          : datos.findIndex((dato) => dato.name === id) - 1;
    }
    const url = datos[index].name.trim();
    navigate(`/${url}`);
  };
  
  return (
    <>
      <div className="container__slider">
        <div
          className="slider"
          style={{
            width: `${
              (datos.findIndex((dato) => dato.name === id) * 100) / 14
            }%`,
          }}
        ></div>
      </div>
      <Footer>
        <div>
          <h3>{name}</h3>
          <h4>{nameArtist}</h4>
        </div>
        <div>
          <img
            src={arrowLeft}
            onClick={() => navegacion("before")}
            alt="icon-arrow"
          />
          <img
            src={arrowRight}
            onClick={() => navegacion("next")}
            alt="icon-arrow"
          />
        </div>
      </Footer>
    </>
  );
};

export default Slider;
