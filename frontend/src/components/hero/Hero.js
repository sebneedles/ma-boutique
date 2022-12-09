import React from 'react';
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
        <h1 className="hero__infos-title">Ma boutique</h1>
      </div>
    </div>
  );
};

export default Hero;
