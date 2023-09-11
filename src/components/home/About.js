import React, { useEffect } from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Button from '../Button';

import globe from "../../images/svgs/globe.svg";


import bg from "../../images/about-img.jpg";


const About = ({reference}) => {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const element = reference.current;
    gsap.fromTo(
      element.querySelector('.left'),
      {
        display: 'none',
        opacity: 0,
        y: -400
      }, 
      {
        display: 'block',
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: element.querySelector(".about"),
          start: "500px center",
          end: "500px top",
          scrub: true
        }
      }
    );
  }, []);

  useEffect(() => {
    const element = reference.current;
    gsap.fromTo(
      element.querySelector('.right'),
      {
        opacity: 0,
        y: 400
      }, 
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: element.querySelector(".about"),
          start: "500px center",
          end: "500px top",
          scrub: true
        }
      }
    );
  }, []);

  return (
    <section className='home-about'>
        <div className='left'>
            <img src={bg} alt="globe" />
        </div>
        <div className='right'>
            <h2 className='section-heading'>ABOUT <span className='heading-span'>Us</span></h2>
            <p className='desc'>"Redefining the Future with <span className='gr-txt'>Creativity</span>, <span className='gr-txt'>Passion</span>, and <span className='gr-txt'>Integrity</span>"</p>
            <span className='para'>Here at GamesCraft, As a leading technology company, we are dedicated to fostering innovation and providing safe, clever, and long-lasting IT solutions to companies of all sizes. Our goal is to change how businesses function in the quickly changing digital environment of today.</span>
            <Button buttonType="inverted">Learn More</Button>
        </div>
    </section>
  )
}

export default About