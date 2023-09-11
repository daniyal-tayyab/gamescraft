import React from 'react'
import PortfolioCard from '../portfolio-card/PortfolioCard';

import { portfolio } from "../../utils/portfolio.js";

const Portfolio = () => {
  return (
    <section className='home-portfolio'>
      <h2 className='section-heading'>Our <span className='heading-span'>Work</span></h2>
      <div className='portfolio-section'>
        {portfolio.map((game, index) => <PortfolioCard game={game}/>)}
      </div>
    </section>
  );
}

export default Portfolio;