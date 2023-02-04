import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className='app__wrapper_img app__wrapper_img-reverse'>
      <img src= {images.chef} alt='chef'/>
    </div>

    <div className='app__wrapper_info'>
      <SubHeading title= 'Palavra do Chef'/>
      <h1 className='headtext__cormorant'>No que acreditamos</h1>
      
      <div className='app__chef-content'>
        <div className='app__chef-content_quote' >
          <img src={images.quote} alt='quote' />
          <p className='p__opensans'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui nisi voluptatem dolor a quo debitis impedit!</p>
        </div>
        <p className='p__opensans'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam doloremque, iste similique neque error sequi sed consequatur qui nostrum molestias facilis dolores enim accusamus porro quis optio dolore asperiores quidem?</p>
      </div>

      <div className='app__chef-sign'>
        <p>Kevin Luo</p>
        <p className='p__opensans'>Fundador & Chef</p>
        <img src= {images.sign} alt='sign' />
      </div>

    </div>
  </div>
);

export default Chef;
