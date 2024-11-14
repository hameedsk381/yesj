import React from "react";
import { motion } from "framer-motion";
import textbackground from "../assets/text-background.png"
import donors from "../imagesfiles/donars";

const DonorRecognition = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-rose-600" style={{ backgroundImage: `url(${textbackground})`, backgroundClip:"text", color:'transparent'}}>
          Our Collaborators
        </h2>
        <div className="flex flex-wrap justify-center m-auto  lg:gap-10 container max-w-4xl">
          {donors.map((donor, index) => (
            <img
              key={index}
              src={donor.logo}
              alt={donor.name}
              className="object-cover mx-4 rounded-full w-12 h-12 md:w-24 md:h-24 mb-6"
            />
          ))}
        </div>
      </div>
    </section>
  );
};
export default DonorRecognition;
