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
              trigger: element.querySelector(".section-heading"),
              start: "100px center",
              end: "100px top",
              scrub: true
            }
          }
        );
      }, []);

  return (
    <section className='home-services'>
      <h2 className='section-heading'>Our<span className='heading-span'>Professional Services</span></h2>
      <section className='services-card-section'>
        {services.map((service, index) => <ServiceCard key={index} service={service} />)}
      </section>
    </section>
  )
}

export default Services
