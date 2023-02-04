import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';


const FindUs = () => (
  <div className='app__bg app__wrapper section__padding' id='contact'>
    <div className='app__wrapper_info'>
      <SubHeading title='Contato' />
      <h1 className='headtext__cormorant' style={{ marginBotton: '3rem' }}>Onde nos encontrar</h1>
      <div className='app__wrapper-content'>
        <p className='p__opensans'>R. Barão de Capanema, 549 - Jardins, São Paulo - SP, 01411-011</p>
        <p className='p__cormorant' style={{color: '#DCCA87', margin: '2rem 0'}}>Horarios de abertura</p>
        <p className='p__opensans'>Seg - Sex: 10:00 am - 2:00 am</p>
        <p className='p__opensans'>Sab - Dom: 10:00 am - 3:00 am</p>
      </div>
      <button className='custom__button' style={{marginTop: '2rem'}}>Faça sua reserva</button>
    </div>

    <div className='app__wrapper_img'>
      <img src={images.findus} alt='findus'/>
    </div>
  </div>
);

export default FindUs;
