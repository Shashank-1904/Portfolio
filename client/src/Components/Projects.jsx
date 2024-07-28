import React from 'react';
import { ProjectsData } from '../assets/utils/Data';
import Title from './Title';

function Projects() {
  return (
    <div className='mt-20' id='Projects'>
      <Title title="Projects" />
      <div className='flex flex-wrap justify-center items-center mt-5 space-x-0 sm:space-x-4'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {ProjectsData.map((item, index) => (
            <div 
              key={index} 
              className='rounded-xl shadow-lg mx-1 md:mx-3 bg-neutral-900 mt-5 transform transition duration-500 ease-in-out hover:scale-105 hover:shadow-2xl'
              style={{ animation: `fadeInUp 0.5s ${index * 0.1}s both` }}
            >
              <div className='anime-block p-3 flex flex-col h-full'>
                <div className='rounded-xl overflow-hidden'>
                  <img src={item.img} alt={item.title} className='transition-transform duration-500 ease-in-out transform hover:scale-110' />
                </div>
                <h5 className='text-md md:text-3xl font-medium mt-3'>{item.title}</h5>
                <div className='flex-grow'>
                  <p className='text-slate-500 text-sm mt-3 h-30 overflow-hidden'>{item.description}</p>
                </div>
                <a href={item.url} target='_blank' rel='noopener noreferrer' className='text-center bg-tertiary text-white py-2 rounded-lg font-semibold mt-4 focus:scale-95 transition-transform duration-200 ease-out text-sm md:text-md lg:text-lg'>View Site</a>
              </div> 
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
