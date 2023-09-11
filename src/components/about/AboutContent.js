import React from 'react'
import styled from "styled-components";


const Container = styled.section`
    margin: 8rem;

    h1 {
        margin-bottom: 2rem;
    }

    p {
        text-align: center;
        width: 70%;
        margin: 0 auto;
        margin-bottom: 1rem;
        font-size: 1.4rem;
    }
`;

const AboutContent = () => {
  return (
    <Container>
      <h1 className='heading-main'><span className='gr-txt'>8 Years</span> of Experience</h1>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
    </Container>
  )
}

export default AboutContent
