import styled from "@emotion/styled";
import { useParams, useLoaderData, Link } from "react-router-dom";

const ContainerImage = styled.div`
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 470px;
  height: 560px;
  z-index: -1;
`;
const Main = styled.main`
  width: 1360px;
  height: 620px;
  margin: 0 auto;
  margin-top: 6.5rem;
  display: grid;
  grid-template-columns: 870px auto;
  position: relative;
  blockquote {
    position: relative;
    width: 100%;
  }
  .container__name {
    position: absolute;
    right: 0;
    top: 0;
    width: 450px;
    height: 280px;
    padding: 1rem 6rem;
    z-index: 2;
    background-color: #fff;
    h3 {
      color: #0005;
      font-size: 1.7rem;
    }
  }
  img {
    position: absolute;
    bottom: 0;
    right: 28%;
  }
`;
const ContainerDescription = styled.div`
  position: relative;
  height: 100%;
  .year {
    position: absolute;
    right: 0;
    font-size: 20rem;
    z-index: -1;
    color: #f2f2f2;
    font-weight: bold;
  }
  .description {
    max-width: 68%;
    font-size: 1.4rem;
    line-height: 2.5rem;
    z-index: 2;
  }
  .info {
    display: flex;
    flex-direction: column;
    gap: 4rem;
    justify-content: center;
    height: 100%;
  }
`;
const Gallery = () => {
  const { id } = useParams();
  const datos = useLoaderData();
  const {
    name,
    description,
    source,
    year,
    images: {
      hero: { large },
    },
    artist: { image, nameArtist },
  } = datos.find((pintura) => pintura.name === id);

  return (
    <>
      <Main>
        <blockquote>
          <div className="container__name">
            <h1 className="nombre">{name}</h1>
            <h3>{nameArtist}</h3>
          </div>
          <ContainerImage
            style={{
              backgroundImage: `url(${large})`,
            }}
          ></ContainerImage>
          <img src={image} alt='picture-hero'/>
        </blockquote>
        <ContainerDescription>
          <p className="year">{year}</p>
          <div className="info">
            <p className="description">{description}</p>
            <Link to={source}>go to source</Link>
          </div>
        </ContainerDescription>
      </Main>
    </>
  );
};

export default Gallery;
