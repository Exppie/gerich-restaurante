import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className='app__footer section__padding'>
    <FooterOverlay />
    <Newsletter />

    <div className='app__footer-links'>
      <div className='app__footer-links_contact'>
        <h1 className='app__footer-headtext'>Fale conosco</h1>
        <p className='p__opensans'>R. Barão De Capanema, 549 - Jardins, São Paulo - SP, 01411-011</p>
        <p className='p__opensans'>4002 8922</p>
        <p className='p__opensans'>3222 7663</p>
      </div>
      <div className='app__footer-links_logo'>
        <img src={images.gericht} alt='footer_logo'/>
        <p className='p__opensans'>"A gastronomia não é apenas cozinhar e elaborar pratos, é amar e contemplar o mundo e os que nele vivem."</p>
        <img src={images.spoon} alt='spoon' className='spoon__img' style={{marginTop: 15}} />
        <div className='app__footer-links_icons'>
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>
      <div className='app__footer-links_work'>
        <h1 className='app__footer-headtext'>Horarios de funcionamento</h1>
        <p className='p__opensans'>Segunda-Sexta:</p>
        <p className='p__opensans'>10:00 am - 12:00 am</p>
        <p className='p__opensans'>Sábado-Domingo</p>
        <p className='p__opensans'>7:00 am - 11:00 pm</p>
      </div>
    </div>

    <div className='footer__copyright'>
      <p className='p__opensans'>2023 Gerícht. Todos os direitos reservados</p>
    </div>
  </div>
);

export default Footer;
