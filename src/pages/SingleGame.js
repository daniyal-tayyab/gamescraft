import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import HeroCommon from '../components/HeroCommon';

import { portfolio } from '../utils/portfolio';
import { Rating } from '@mui/material';


const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  div {
    display: flex;
    flex-direction: column;

    img {
      height: 400px;
      width: 90%;

      @media (max-width: 750px) {
        width: 100%;
      }
    }

    h2 {
      font-size: 25px;
      /* width: 80%; */
      margin-top: 2rem;

      @media (max-width: 600px) {
        font-size: 18px;
        width: 100%;
      }
    }

    p {
      font-size: 1.5rem;
      /* width: 80%; */
      margin: 1rem 0;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;

      &:last-child {
        margin: 0;
      }

      @media (max-width: 600px) {
        font-size: 11px;
        width: 100%;
      }
    }
  }

  @media (max-width: 750px) {
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;
  }
`;

const SingleGame = () => {
  const {id} = useParams(null);
  const [game, setGame] = useState({});

  useEffect(() => {
    setGame(portfolio[id]);
  }, []);

  useEffect(() => {
    window.scrollTo({left: 0, top: 0, behavior: "smooth"});
  }, []);

  const {name, image, desc, genre, releaseDate, rating, price} = game;
//   console.log("RATING: ", typeof Number(rating));
  return (
    <main className='single-game'>
        <HeroCommon page={name}/>
        <div className='game-content'>
            <Container>
                <div>
                    <img src={image} alt={name}
                    />
                </div>
                <div>
                    <h2>{name}</h2>
                    <p>{desc}</p>
                    <Rating readOnly defaultValue={5} size='large'/>
                    <p style={{fontSize: "1.5rem"}}>Price: <span className='gr-txt'>${price}</span></p>
                    <p>Genre: <span className='gr-txt'>{genre}</span></p>
                </div>
            </Container>
        </div>
        <div className='lower-content'>
            <div className='heading'>
                <h3>Game Description</h3>
                <p>It is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse doloremque at eos dolore consequatur aliquam, in sunt doloribus delectus labore quae autem necessitatibus a magni cumque debitis? Et voluptatum tempore provident repellat, non officia dolore praesentium corporis quibusdam odit aperiam ut fuga, illum eius pariatur ad id inventore illo, veritatis dicta.</p>
            </div>
        </div>
    </main>
  )
}

export default SingleGame