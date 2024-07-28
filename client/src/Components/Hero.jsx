import React from 'react';
import HeroImg from './../assets/Images/hero.png';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import cv from './../assets/CV/ShashankCV.pdf';

function Hero() {
  const [text] = useTypewriter({
    words: ['Full Stack Developer', 'Freelancer', 'Android Developer'],
    loop: true,
    typeSpeed :120,
    deleteSpeed : 80,
  });

  return (
    <div id='About'>
      <div className='flex flex-col items-center mt-2'>
        <img src={HeroImg} className='h-60 w-50' alt="Hero" />
        <h1 className='text-lg sm:text-4xl lg:text-5xl tracking-wide mt-5'>
          Hi, I am <span className='text-secondary'>Shashank Umarekar</span>
        </h1>
        <h1 className='text-xl sm:text-4xl lg:text-5xl tracking-wide mt-7 text-secondary'>
          <span>{text}</span>
          <Cursor />
        </h1>
        <p className='mt-10 text-sm lg:text-lg sm:text-lg text-center text-neutral-500 max-w-4xl'>
          Hello and thank you for visiting my profile! I'm Shashank Umarekar, a dedicated and enthusiastic software developer. I've spent the past 3 years navigating the complexities of software design and development, always with the goal of making a meaningful impact through my work.
        </p>

        <div className='flex mt-10 justify-center my-10'>
          <a target="_blank" href='https://github.com/Shashank-1904/' className='py-3 px-4 mx-3 rounded-md border text-sm lg:text-lg sm:text-sm'>Github</a>
          <a target="_blank" href={cv} className='py-3 px-4 mx-3 rounded-md border text-sm bg-tertiary lg:text-lg sm:text-sm'>Download CV</a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
