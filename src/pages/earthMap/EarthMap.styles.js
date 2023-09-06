import styled from "@emotion/styled";
import tiled from "../../images/tiled_cleanup.webp";

export const Box = styled.div`
  margin-left: 55px;
  position: relative;

  @media (max-width: 900px) {
    margin-left: 0;
  }

  @media (max-width: 700px) {
    margin-left: -250px;
  }
`;

export const TileCanvas = styled("div")({
  width: 1802,
  minHeight: 1122,
  position: "relative",
  background: "#232838",
  border: "none",
});

export const CanvasWrapper = styled("div")((props) => ({
  display: "grid",
  placeItems: "center",
  marginLeft: "250px",
}));

export const CanvasInner = styled.div`
  width: 100%;
  height: 1122;
  overflow: hidden;

  margin-top: 50px;

  &::-webkit-scrollbar {
    display: none;
  }
  background: url(${tiled});
  background-size: cover;
  background-repeat: no-repeat;
`;

export const Filter = styled.div`
  position: fixed;
  left: 320px;
  top: 60px;
  height: 30px;
  background-color: transparent;
  z-index: 1000;

  display: flex;

  img {
    border: 1px solid #0084ff;
    border-radius: 5px;
    margin-right: 20px;
    background-color: #22262a;
    transition: all 0.15s;
    padding: 5px;
    cursor: pointer;

    &:hover {
      border: 1px solid #fff;
    }
  }

  div {
    background-color: #22262a;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    border-radius: 10px;
    font-weight: bold;
  }

  @media (max-width: 900px) {
    left: 270px;
  }

  @media (max-width: 700px) {
    left: 20px;
  }
`;
