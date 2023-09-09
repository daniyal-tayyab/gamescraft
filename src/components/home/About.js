import React, { useEffect } from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Button from '../Button';

import globe from "../../images/svgs/globe.svg";

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
    <div className='home-about'>
        <div className='left'>
            <img src={globe} alt="globe" />
        </div>
        <div className='right'>
            <h2>ABOUT US</h2>
            <p className='desc'>"Redefining the Future with <span>Creativity</span>, <span>Passion</span>, and <span>Integrity</span>"</p>
            <span className='para'>Here at GamesCraft, As a leading technology company, we are dedicated to fostering innovation and providing safe, clever, and long-lasting IT solutions to companies of all sizes. Our goal is to change how businesses function in the quickly changing digital environment of today.</span>
            <Button buttonType="inverted">Lear More</Button>
        </div>
    </div>
  )
}

export default About