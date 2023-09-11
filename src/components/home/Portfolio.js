import React from 'react'
import PortfolioCard from '../portfolio-card/PortfolioCard';

import styled from "styled-components";

import bg from "../../images/service-bg.jpg";

const Container = styled.section`
  background: url(${bg});
  background-size: cover;
  background-repeat: no-repeat;
  padding-bottom: 4rem;
`;

const Portfolio = () => {
  return (
    <section className='home-portfolio'>
      <h2 className='section-heading'>Our Work</h2>
      <div className='portfolio-section'>
        <PortfolioCard />
        <PortfolioCard />
        <PortfolioCard />
        <PortfolioCard />
        <PortfolioCard />
        <PortfolioCard />
      </div>
    </section>
  );
}

export default Portfolio;