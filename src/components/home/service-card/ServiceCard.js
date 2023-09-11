import React from 'react';

import Button from "../../Button";

import unityLogo from "../../../images/services/unity.png";

const ServiceCard = ({ service }) => {
    const {title} = service;

    return (
        <div class="card">
        <div class="card__side">
            <div class="card__side card__side--front"> 
                <video
                src="https://cdn.sandbox.game/home/Hero-Video-low.mp4"
                loop="loop"
                autoPlay="autoplay"
                playsInline
                muted="muted"
                preload="auto"
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
                ></video>
                <div className='content'>
                    <h3 className='service-name'>{title}</h3>
                    <img src={unityLogo} alt={title}/>
                </div>
            </div>
            <div class="card__side card__side--back">   
                <div className='content'>
                    <h3>Unity Game Developement</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                     Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                     when an unknown printer took a galley of type and scrambled it to make a type
                     specimen book.
                    </p>
                    <Button buttonType="default">View More</Button>
                </div>
            </div>
        </div>
    </div>
    );
}

export default ServiceCard
