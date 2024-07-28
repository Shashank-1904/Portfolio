import React from 'react'
import { GraduationCap, BriefcaseBusinessIcon } from 'lucide-react';
import { EducationData, ExperienceData } from '../assets/utils/Data';
import Title from './Title';

function Experience() {
  return (
    <div className='mt-20' id='Eduex'>
        <Title title="Education & Experience" />
        <div className='flex flex-wrap justify-center mt-5 gap-0'>
            <div className='pt-12 w-full lg:w-1/2'>
                {EducationData.map((item, index) => (
                    <div key={index} className='flex mb-12'>
                        <div className='text-tertiary mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full'>{<GraduationCap />}</div>
                        <div>
                            <h5 className='mt-1 mb-2 text-lg lg:text-xl'>{item.title}</h5>
                            <p className='text-sm lg:text-lg text-neutral-500'>{item.institution}</p>
                            <p className='text-sm lg:text-lg text-neutral-500'>{item.location}</p>
                            <p className='text-sm lg:text-lg text-neutral-500'>{item.gpa}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className='pt-12 w-full lg:w-1/2'>
                {ExperienceData.map((item, index) => (
                    <div key={index} className='flex mb-12'>
                        <div className='text-tertiary mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full'>{<BriefcaseBusinessIcon />}</div>
                        <div>
                            <h5 className='mt-1 mb-2 text-lg lg:text-xl'>{item.title}</h5>
                            <p className='text-sm lg:text-lg text-neutral-500 font-bold'>{item.role}</p>
                            <p className='text-sm lg:text-lg text-neutral-500'>{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Experience
