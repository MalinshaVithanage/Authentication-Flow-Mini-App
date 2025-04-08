'use client';

import Image from 'next/image';
import { useState, useEffect  } from 'react';


const testimonials = [
  {
    quote:
      'We love the screen sharing and whiteboarding features, which have improved our presentations. Room.me has become an essential tool for our team, allowing us to collaborate effectively. Highly recommended!',
    name: 'Sarah Markivoc',
    role: 'Project Manager',
    image: '/images/testimonial1.png', 
  },
  {
    quote:
      'We love the screen sharing and whiteboarding features, which have improved our presentations. Room.me has become an essential tool for our team, allowing us to collaborate effectively. Highly recommended!',
    name: 'Sarah Markivoc',
    role: 'Project Manager',
    image: '/images/testimonial1.png', 
  },
  {
    quote:
      'Room.me has become an essential tool for our team, allowing us to collaborate effectively. Highly recommended!',
    name: 'Sarah Markivoc',
    role: 'Project Manager',
    image: '/images/testimonial1.png', 
  },
  {
    quote:
      'We love the screen sharing and whiteboarding features, which have improved our presentations.',
    name: 'Sarah Markivoc',
    role: 'Project Manager',
    image: '/images/testimonial1.png', 
  },
];

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  const { quote, name, role, image } = testimonials[current];

  return (
    <div className="mt-5 pb-5  min-h-screen  relative h-full max-w-xl  rounded-lg overflow-hidden ">
      <Image
        src={image}
        alt={name}
        width={704}
        height={976}
        className="w-full h-full object-cover rounded-[20px]"
      />

      <div className="absolute bottom-0 mx-4 mb-16 p-6 text-white bg-white/30 backdrop-blur-sm rounded-[20px] ">
        <p className="text-[16px] sm:text-base md:text-[24px] lg:text-[32px] mb-4 font-normal leading-[1.2]">“{quote}”</p>
        <p className="text-[10px] sm:text-base md:text-[14px] lg:text-[24px] mb-4 font-medium leading-[1.2] ">{name} - {role}</p>
      </div>

     
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-4 h-1.5 rounded-full transition-all duration-300 ${
                index === current ? 'bg-purple-500 w-6' : 'bg-white/30'
              }`}
            />
          ))}
        </div>
    </div>
  );
}
