import React, { useEffect } from 'react'

import gsap from 'gsap';

import ServiceCard from './service-card/ServiceCard';

import { services } from '../../utils/services';


const Services = ({ reference }) => {
    useEffect(() => {
        const element = reference.current;
        gsap.fromTo(
          element.querySelector('.services-card-section'),
          {
            display: 'none',
            opacity: 0,
            y: 100
          }, 
          {
            display: 'block',
            opacity: 1,
            y: 0,
            scrollTrigger: {
              trigger: element.querySelector(".heading"),
              start: "50px center",
              end: "50px top",
              scrub: true
            }
          }
        );
      }, []);
  return (
    <div className='home-services'>
      <h2 className='heading'>Our Professional Services</h2>
      <section className='services-card-section'>
        {services.map((service, index) => <ServiceCard key={index} service={service} />)}
      </section>
    </div>
  )
}

export default Services
