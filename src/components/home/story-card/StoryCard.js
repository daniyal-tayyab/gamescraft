import React from 'react';

import client from "../../../images/nat-9.jpg";

const StoryCard = () => {
  return (
    <div class="story">
        <figure class="story__shape">
            <img src={client} alt="client" class="story__img" />
            <figcaption class="story__caption">Jack Wilson</figcaption>
        </figure>
        <div class="story__text">
            <h3 class="heading-tertiary u-margin-bottom-small">
                Wow: My life is completely different now
            </h3>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis commodi excepturi eveniet quam magni, eius
                accusantium numquam optio libero, tenetur facere? Consectetur
                placeat. eius accusantium numquam optio.
            </p>
        </div>
  </div>
  )
}

export default StoryCard
