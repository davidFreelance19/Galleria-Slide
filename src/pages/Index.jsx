import styled from "@emotion/styled";
import { useNavigate, useLoaderData } from "react-router-dom";
const Container = styled.main`
  width: 1360px;
  height: 1320px;
  margin: 0 auto;
  margin-top: 4rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 3.8rem;
  grid-template-areas:
    "item1 item2 item3 item4"
    "item1 item2 item3 item4"
    "item5 item2 item3 item8"
    "item5 item2 item7 item8"
    "item5 item6 item7 item8"
    "item9 item6 item11 item8"
    "item9 item10 item11 item15"
    "item9 item10 item14 item15"
    "item9 item13 item14 item15"
    "item12 item13 item14 item15"
    "item12 item13 item14 item15";
  margin-bottom: 5rem;
`;
const Card = styled.div`
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  position: relative;
  display: flex;
  padding: 1.5rem 2rem;
  flex-direction: column;
  justify-content: end;
  div {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #0004;
    :hover {
      background-color: #fff0;
      transition: background-color 0.1s ease-in-out;
      cursor: pointer;
    }
  }
`;
export async function loader() {
  const respuesta = await fetch("http://127.0.0.1:5173/../../db/data.json");
  const resultado = await respuesta.json();
  return resultado;
}
const Index = () => {
  const navigate = useNavigate();
  const datos = useLoaderData();
  return (
    <Container>
      {datos.map((info) => (
        <Card
          key={info.name}
          className="card"
          style={{
            backgroundImage: `url(${info.images.thumbnail})`,
            gridArea: `item${
              datos.findIndex((dato) => dato.name === info.name) + 1
            }`,
          }}
          onClick={() => navigate(`/${info.name.trim()}`)}
        >
          <div></div>
          <h2>{info.name}</h2>
          <h3>{info.artist.nameArtist}</h3>
        </Card>
      ))}
    </Container>
  );
};

export default Index;
