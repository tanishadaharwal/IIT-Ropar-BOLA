import React from 'react';
import NavBar from './Navbar';

export default function AboutUs() {
  
  return (
   
      <div name="aboutUs" className=' px-36  p-4  h-screen '>
      <div className="fixed top-0 left-0 w-full  z-50">
        <NavBar />
      </div>
      <div className="mt-40">
        <h1 className='text-4xl text-[#f9c23c] font-bold mb-6'>About Board of Literary Affairs</h1>
        <hr className="w-full border-2 border-gray-700 mt-8" />
   
      <div className='mt-8 p-2 font-semibold text-gray-100 text-left leading-10'>
        IITs have earned a distinguished reputation for their exceptional academic standards and their ability to produce not only technically proficient individuals but also well-rounded leaders who excel in various fields, including management and the art of public speaking. A vital component in this pursuit is the Board of Literary Affairs (BOLA), which assumes the responsibility of fostering and promoting literary talent within the IIT Ropar community.
      </div>
      <div className='mt-4 p-2 font-semibold text-gray-100 text-left leading-10 '>
      BOLA serves as a catalyst for cultivating effective communication skills and providing a platform for students to showcase their literary prowess. Through a wide range of workshops, competitions, debates, writing sessions, quizzes, poetry, and other literary events, BOLA creates opportunities for students to engage in intellectually stimulating activities beyond the realm of technical education.

      </div>
      <div className='mt-4 p-2 font-semibold text-gray-100 text-left leading-10'>
        
        The BOLA Council consists of eminent individuals, including the Dean SA, Faculty Advisor, General Secretary BOLA, Club Secretaries, Representatives, and Coordinators. Their united vision is to create a supportive environment that nurtures student growth, fosters belonging, and promotes literary excellence within the student community.
      </div>

    </div>
    </div>
 
    
  );
}
