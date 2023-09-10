import React from 'react'
import PortfolioCard from '../portfolio-card/PortfolioCard';

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