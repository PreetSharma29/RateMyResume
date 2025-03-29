import React from "react";
import image1 from "../assets/image-1.png";
import image2 from "../assets/image-2.png";
import image3 from "../assets/image-3.png";
import image4 from "../assets/image-4.png";
import image5 from "../assets/image-5.png";
import image6 from "../assets/image-6.png";
import image7 from "../assets/image-7.png";
import image8 from "../assets/image-8.png";
import image9 from "../assets/image-9.png";
import image10 from "../assets/image-10.png";
import image11 from "../assets/image-11.png";
import image12 from "../assets/image-12.png";
import image13 from "../assets/image-13.png";
import image14 from "../assets/image-14.png";
import image15 from "../assets/image-15.png";
import { motion } from "motion/react";

const imageDeck1 = [image1, image2, image3, image4, image5];
const imageDeck2 = [image6, image7, image8, image9, image10];
const imageDeck3 = [image11, image12, image13, image14, image15];

const ImageSlider = () => {
  return (
    <motion.div className="hidden h- lg:h-screen w-[400px] md:w-[550px] lg:w-[700px] overflow-y-hidden md:flex flex-row justify-end">
      <motion.div
        className="mx-4"
        animate={{
          y: [0, -590, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {imageDeck1.map((image, index) => (
          <img
            src={image}
            key={index}
            alt="Resume Example"
            className="my-4 w-[120px] lg:w-[175px]"
          />
        ))}
      </motion.div>
      <motion.div
        animate={{
          y: [-590, 0, -590],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {imageDeck2.map((image, index) => (
          <img
            src={image}
            key={index}
            alt="Resume Example"
            className="my-4 w-[120px] lg:w-[175px]"
          />
        ))}
      </motion.div>
      <motion.div
        className="mx-4"
        animate={{
          y: [0, -590, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {imageDeck3.map((image, index) => (
          <img
            src={image}
            key={index}
            alt="Resume Example"
            className="my-4 w-[120px] lg:w-[175px]"
          />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default ImageSlider;
