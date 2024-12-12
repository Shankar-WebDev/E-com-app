import React from 'react';
import Title from '../componets/Title';
import { assets } from '../assets/assets';
import NewsLetterBox from '../componets/NewsLetterBox';
const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={'ABOUT '} text2={'US'} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px]"
          src={assets.about_img}
          alt="about"
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            forevr was bron out passion for innovation and desire to revolation{' '}
          </p>
          <p>
            {' '}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
            consequuntur eius nesciunt minus, veritatis dignissimos pariatur
            cupiditate ducimus autem architecto voluptas fuga placeat illum
            quaerat dicta, maxime deleniti saepe? Unde?
          </p>
          <b className="text-gray-800">Our Mission </b>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias
            delectus minima distinctio dolor, aliquam voluptate ex eius tempore
            nam animi nobis ipsam sit libero error, iste excepturi corporis
            aliquid consequuntur?
          </p>
        </div>
      </div>
      <div className="text-xl py-4">
        <Title text1={'WHY '} text2={'CHOOSE US'} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa est
            labore, nemo magni quaerat inventore, alias expedita, possimus in
            optio assumenda saepe quod doloribus iste! Quia tempora vel quam
            dolore!
          </p>
        </div>
        <div className="border px-10 md:px-16 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa est
            labore, nemo magni quaerat inventore, alias expedita, possimus in
            optio assumenda saepe quod doloribus iste! Quia tempora vel quam
            dolore!
          </p>
        </div>
        <div className="border px-10 md:px-16 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa est
            labore, nemo magni quaerat inventore, alias expedita, possimus in
            optio assumenda saepe quod doloribus iste! Quia tempora vel quam
            dolore!
          </p>
        </div>
      </div>

      <NewsLetterBox />
    </div>
  );
};

export default About;
