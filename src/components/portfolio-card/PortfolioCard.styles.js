import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 30rem;
  height: 30rem;
  border-radius: 1.4rem;
  z-index: 1111;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Background = styled.div`
  position: absolute;
  top: 5px;
  left: 5px;
  width: 29rem;
  height: 29rem;
  z-index: 2;
  background: rgba(255, 255, 255);
  /* backdrop-filter: blur(24px); */
  border-radius: 1rem;
  overflow: hidden;
  outline: 2px solid white;
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
`;