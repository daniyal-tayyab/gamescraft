import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 40rem;
  height: 40rem;
  border-radius: 1.4rem;
  z-index: 1111;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 0.5;

  @media (max-width: 940px) {
    width: 40rem;
  }

  @media (max-width: 700px) {
    width: 60rem;
    height: 60rem;
  }

  @media (max-width: 540px) {
    width: 450px;
  }

  @media (max-width: 480px) {
    width: 350px;
  }

`;

export const Background = styled.div`
  position: absolute;
  top: 5px;
  left: 5px;
  width: 40rem;
  height: 40rem;
  z-index: 2;
  background: rgba(255, 255, 255);
  /* background: #181d24; */
  border-radius: 1rem;
  overflow: hidden;
  outline: 2px solid white;

  @media (max-width: 940px) {
    width: 39rem;
  }

  @media (max-width: 700px) {
    width: 59rem;
    height: 59rem;
  }

  @media (max-width: 540px) {
    width: 450px;
  }

  @media (max-width: 480px) {
    width: 350px;
  }
`;

export const Blob = styled.div`
  position: absolute;
  z-index: 1;
  top: 50%;
  left: 50%;
  width: 16rem;
  height: 16rem;
  border-radius: 50%;
  background-color: #ff0000;
  opacity: 1;
  filter: blur(12px);
  animation: blob-bounce 5s infinite ease;

  @media (max-width: 940px) {
    width: 20rem;
    height: 20rem;
  }

  @media (max-width: 700px) {
    width: 59rem;
    height: 59rem;
  }

  @media (max-width: 540px) {
    width: 450px;
  }

  @media (max-width: 480px) {
    width: 350px;
  }
`;