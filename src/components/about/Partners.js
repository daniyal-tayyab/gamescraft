import React from "react";

import styled from "styled-components";

const partners = [
  "https://www.sandbox.game/cdn-cgi/image/f=auto,origin-auth=share-publicly,onerror=redirect,dpr=1.5/img/14_Home/partners/Logo_Snoop.png",
  "https://www.sandbox.game/cdn-cgi/image/f=auto,origin-auth=share-publicly,onerror=redirect,dpr=1.5/img/14_Home/partners/Logo_HomePartner_TWalkingD.svg",
  "https://www.sandbox.game/cdn-cgi/image/f=auto,origin-auth=share-publicly,onerror=redirect,dpr=1.5/img/14_Home/partners/Logo_Adidas.png",
  "https://www.sandbox.game/cdn-cgi/image/f=auto,origin-auth=share-publicly,onerror=redirect,dpr=1.5/img/14_Home/partners/Logo_SCMP.png",
  "https://www.sandbox.game/cdn-cgi/image/f=auto,origin-auth=share-publicly,onerror=redirect,dpr=1.5/img/14_Home/partners/Logo_HomePartner_ASevenfold.svg",
  "https://www.sandbox.game/cdn-cgi/image/f=auto,origin-auth=share-publicly,onerror=redirect,dpr=1.5/img/14_Home/partners/Logo_HomePartner_RHawtin.png",
  "https://www.sandbox.game/cdn-cgi/image/f=auto,origin-auth=share-publicly,onerror=redirect,dpr=1.5/img/14_Home/partners/smurf-logo.svg",
  "https://www.sandbox.game/cdn-cgi/image/f=auto,origin-auth=share-publicly,onerror=redirect,dpr=1.5/img/14_Home/partners/Logo_HomePartner_Hell_s_Kitchen.png",
  "https://www.sandbox.game/cdn-cgi/image/f=auto,origin-auth=share-publicly,onerror=redirect,dpr=1.5/img/14_Home/partners/roller-coaste-tycoon-logo-2x.png",
  "https://www.sandbox.game/cdn-cgi/image/f=auto,origin-auth=share-publicly,onerror=redirect,dpr=1.5/img/14_Home/partners/Logo_HomePartner_Deadmau5_small.png",
  "https://www.sandbox.game/cdn-cgi/image/f=auto,origin-auth=share-publicly,onerror=redirect,dpr=1.5/img/14_Home/partners/Logo_HomePartner_Atari.svg",
  "https://www.sandbox.game/cdn-cgi/image/f=auto,origin-auth=share-publicly,onerror=redirect,dpr=1.5/img/14_Home/partners/Logo_HomePartner_CareBears.png",
  "https://www.sandbox.game/cdn-cgi/image/f=auto,origin-auth=share-publicly,onerror=redirect,dpr=1.5/img/14_Home/partners/Logo_HomePartner_Blondish.png",
  "https://www.sandbox.game/cdn-cgi/image/f=auto,origin-auth=share-publicly,onerror=redirect,dpr=1.5/img/14_Home/partners/Logo_HomePartner_Aminoca.png",
  "https://www.sandbox.game/cdn-cgi/image/f=auto,origin-auth=share-publicly,onerror=redirect,dpr=1.5/img/14_Home/partners/standard_chartered.png",
  "https://www.sandbox.game/cdn-cgi/image/f=auto,origin-auth=share-publicly,onerror=redirect,dpr=1.5/img/14_Home/partners/adrian_cheng.png",
  "https://www.sandbox.game/cdn-cgi/image/f=auto,origin-auth=share-publicly,onerror=redirect,dpr=1.5/img/14_Home/partners/shk.png",
  "https://www.sandbox.game/cdn-cgi/image/f=auto,origin-auth=share-publicly,onerror=redirect,dpr=1.5/img/14_Home/partners/metatimes.png",
  "https://www.sandbox.game/cdn-cgi/image/f=auto,origin-auth=share-publicly,onerror=redirect,dpr=1.5/img/14_Home/partners/graticule.png",
  "https://www.sandbox.game/cdn-cgi/image/f=auto,origin-auth=share-publicly,onerror=redirect,dpr=1.5/img/14_Home/partners/sound.png",
];

const Container = styled.section`
  padding: 5rem 8rem;
  display: flex;
  flex-direction: column;
  padding-bottom: 0;

  h2 {
    font-size: 3rem;
  }

  div {
    margin-top: 2rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    column-gap: 2rem;
    row-gap: 4rem;

    img {
      width: 100px;
    }

    @media (max-width: 900px) {
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }

    @media (max-width: 700px) {
      grid-template-columns: 1fr 1fr 1fr;
    }

    @media (max-width: 530px) {
      grid-template-columns: 1fr 1fr;
      column-gap: 4rem;
    }
  }
`;

const Partners = () => {
  return (
    <Container>
      <h2>Partners</h2>
      <div>
        {partners.map((item, index) => (
          <img src={item} alt="partner" />
        ))}
      </div>
    </Container>
  );
};

export default Partners;
