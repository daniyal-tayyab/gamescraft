import React, { useState, useRef, useEffect } from 'react';

import styled from "styled-components";

const Container = styled.div`
    position: relative;
    background: url(https://themescare.com/demos/faf-v2/assets/img/footer_bg.jpg) no-repeat fixed center center/cover;
    z-index: 1;
    height: 290px;
    opacity: 0.8;
`;

const StatsContainer = styled.div`
   width: 80%;
   height: 100%;
   display: grid;
   grid-template-columns: auto auto auto auto;
   place-items: center;
   margin: 0 auto;
`;

const StatContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    h3 {
        margin-bottom: 0;
        &::after {
            margin-top: -10px;
        }
    }
    p {
        font-size: 1.5rem;
        margin-top: 10px;
        font-weight: bold;
    }
`;

const StatsComponents = () => {
  return (
    <Container>
        <StatsContainer>
            <Stat count="2356"/>
            <Stat count="350"/>
            <Stat count="1245"/>
            <Stat count="102"/>
        </StatsContainer>
    </Container>
  )
}

export default StatsComponents;

const Stat = ({count}) => {
    const [isIntersecting, setIsIntersecting] = useState(false);
    const [counter, setCounter] = useState(0);
    const ref = useRef(null);
  
    useEffect(() => {
      const observer = new IntersectionObserver(([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      });
      observer.observe(ref.current);
      return () => observer.disconnect();
    }, []);

    useEffect(() => {
        console.log(isIntersecting);
        let counter = (minimum, maximum) => {
            for (let count = minimum; count <= maximum; count++) {
                setTimeout(() => {
                    setCounter(count);
                }, 0.5 * (count - minimum));
            }
        }
        if(isIntersecting) {
            counter(0, count);
        }
    }, [isIntersecting]);

    return (
        <StatContainer ref={ref}>
            <h3 className='section-heading'><span className='heading-span'>{counter}</span></h3>
            <p>Happy Clients</p>
        </StatContainer>
    );
}