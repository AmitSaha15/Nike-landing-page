import React from 'react';
import { useInView } from 'react-intersection-observer';

const ServiceCard = ({ imgURL, label, subtext }) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1
  });

  return (
    <div 
        ref={ref} 
        className={`flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl px-10 py-16 transition-opacity duration-500 ${inView ? 'opacity-100' : 'opacity-0'}`}>
        <div className="w-11 h-11 flex justify-center items-center bg-coral-red rounded-full">
            <img src={imgURL} alt={label} width={24} height={24} />
        </div>
        <h3 className="mt-5 font-palanquin text-3xl leading-normal font-bold">{label}</h3>
        <p className="mt-3 break-words font-montserrat leading-normal text-lg text-slate-gray">{subtext}</p>
    </div>
  );
}

export default ServiceCard;

