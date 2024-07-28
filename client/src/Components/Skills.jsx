import React from 'react';
import { motion } from 'framer-motion';
import { skillsData } from '../assets/utils/Data';
import Title from './Title';
const hoverEffects = {
  scale: 1.1,
  opacity: 1,
  transition: { duration: 0.3 },
};

function Skills() {
  return (
    <div className='mt-20' id='Tech'>
      <Title title="Technologies" />
      <div className='flex flex-wrap justify-center items-center mt-5'>
        {skillsData.map((item, index) => (
          <motion.div
            key={index}
            className='anime-block py-4 sm:p-4 w-full sm:w-1/2 lg:w-1/3 flex justify-center'
            whileHover={hoverEffects}
            initial={{ scale: 1, opacity: 0.8 }}
            transition={{ duration: 0.3 }}
          >
            <div className='max-w-sm p-6 bg-neutral-900 border border-gray-200 rounded-lg shadow text-center'>
              <motion.img
                src={item.img}
                className='h-20 w-30 mx-auto'
                alt={item.title}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              />
              <h5 className='mb-2 text-2xl font-bold tracking-wide text-white mt-5'>{item.title}</h5>
              <p className='mb-2 font-normal text-neutral-500'>{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
