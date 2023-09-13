import React from "react";

import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  div {
    display: flex;
    flex-direction: column;

    img {
      width: 100%;
    }

    h2 {
      font-size: 25px;
      width: 80%;
      margin-top: 2rem;

      @media (max-width: 600px) {
        font-size: 18px;
        width: 100%;
      }
    }

    p {
      font-size: 13px;
      width: 80%;
      margin-top: 1rem;

      @media (max-width: 600px) {
        font-size: 11px;
        width: 100%;
      }
    }
  }

  @media (max-width: 750px) {
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;
  }
`;

const ImageContentGrid = () => {
  return (
    <Container>
      <div>
        <img
          src="https://www.sandbox.game/cdn-cgi/image/f=auto,origin-auth=share-publicly,onerror=redirect,dpr=1.5,w=720/img/37_Builders_Page/expert-banner01.webp"
          alt="partner"
        />
      </div>
      <div>
        <h2>Who works with Agency Partners?</h2>
        <p>
          All sizes and types of brands and IPs work with our Agency Partners,
          from artists and celebrities to fashion brands and institutions. When
          you join The Sandbox, you also join Snoop Dogg, Gucci, Ubisoft, and
          more than 400 other brands, where entertainment and culture meet the
          next generation of the creators.
        </p>
      </div>
    </Container>
  );
};

export default ImageContentGrid;
