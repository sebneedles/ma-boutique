import React from 'react';
import { Helmet } from 'react-helmet-async';
import ImageHero from '../../assets/hero-homepage.jpg';

const Hero = () => {
  return (
    <div className="hero">
      <img
        className="hero__image"
        src={ImageHero}
        alt="Femme qui passe une commande avec son ordinateur"
      />
      <div className="hero__infos">
        <Helmet>
          <title>Ma boutique</title>
        </Helmet>
        <h1 className="hero__infos-title">
          Bienvenue sur <span>Ma boutique</span>
        </h1>
      </div>
    </div>
  );
};

export default Hero;
