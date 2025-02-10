{/*import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

const Feature = () => {
  return (
    <div className="bg-black">
      <div className="flex h-28 items-center justify-center">
       <span className="text-5xl font-bold text-transparent bg-gradient-to-r from-purple-600 via-white to-purple-600 bg-clip-text ">Features</span> 
      </div>
      <HorizontalScrollCards />
      
    </div>
  );
};

const HorizontalScrollCards = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-black">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-16">
          {cards.map((card) => {
            return <FeatureCard card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const FeatureCard = ({ card }) => {
  const cardStyle = card.isTransparent
    ? { background: 'transparent' }
    : {
        backgroundImage: `url('data:/assets/Group.svg/svg+xml;charset=utf-8,<svg xmlns="/assets/Group.png" viewBox="0 0 1 1"><rect width="1" height="1" fill="%23280137"/><rect width="1" height="1" fill="%23421C5F" style="mix-blend-mode:overlay"/></svg>')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundColor: '#6B198B',
        position: 'relative',
      };

  return (
    <div
      className="group relative h-[400px] w-[375px] overflow-hidden rounded-xl"
      style={cardStyle}
    >
      {!card.isTransparent && (
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(113.84% 61.64% at 76.5% 54.97%, #0D0116 0%, #190F2F 29.05%, #3B2B5C 50%, #2D184D 61.74%, #31254D 72.67%, #190F2F 82.38%, #1A042B 100%)',
            mixBlendMode: 'overlay',
          }}
        />
      )}
      <div className="h-[40%] relative">
        <div
          style={{
            backgroundImage: `url(${card.url})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
        ></div>
      </div>
      <div className="p-6 h-[60%] relative text-center z-10">
        <h3 className="text-3xl font-bold mb-2 text-white">{card.title}</h3>
        <p className="text-white text-md font-Futura leading-relaxed">{card.description}</p>
      </div>
    </div>
  );
};

const cards = [
  {
    url: "",
    title: "",
    description: "",
    isTransparent: true,
    id: 0,
  },
  {
    url: "",
    title: "",
    description: "",
    isTransparent: true,
    id: 0.5,
  },
  {
    url: "/api/placeholder/400/320",
    title: "Auto Save Evidence",
    description:
      "Automatically captures and stores screenshots of harassment messages with timestamps and metadata. This ensures tamper-proof evidence that can be easily accessed for legal purposes without manual effort.",
    isTransparent: false,
    id: 1,
  },
  {
    url: "/api/placeholder/400/320",
    title: "Invisible Messages",
    description:
      "Harassing messages are hidden from the user while remaining stored for evidence. The harasser remains unaware, reducing the risk of retaliation and protecting the user from distress.",
    isTransparent: false,
    id: 2,
  },
  {
    url: "/api/placeholder/400/320",
    title: "Tag Harassers",
    description:
      "Allows users to tag and track harassers, making it easier to identify repeat offenders. This feature helps in better reporting and taking action against persistent abuse.",
    isTransparent: false,
    id: 3,
  },
  {
    url: "/api/placeholder/400/320",
    title: "Generate Reports",
    description:
      "Generates ready-to-send reports containing all necessary evidence, including screenshots and timestamps. These reports are formatted for submission to law enforcement or platform moderators.",
    isTransparent: false,
    id: 4,
  },
  {
    url: "/api/placeholder/400/320",
    title: "Cybercrime Integration",
    description:
      "Provides direct integration with cybercrime helplines for immediate assistance. Users can easily report incidents and receive guidance on the next steps for legal action.",
    isTransparent: false,
    id: 5,
  },
];

export default Feature;*/}

import React from 'react';
import One from '/src/assets/one.png';
import Two from '/src/assets/two.png';
import Grid from '/src/assets/Grid.png';

const Feature = () => {
  return (
    <div className="w-full bg-[#1a1b23] py-16 sm:py-24 md:py-32 lg:py-[10rem] px-4 relative" style={{
      background: 'linear-gradient(179deg, #000 1.34%, #1A1B23 64.44%, #000 99.13%)',
      boxShadow: '0px 4px 24px -1px rgba(0, 0, 0, 0.20)',
      backdropFilter: 'blur(20px)'
    }}>
      <div
        className="absolute inset-0 opacity-70"
        style={{
          backgroundImage: `url(${Grid})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          zIndex: 0
        }}
      />
      <div className="relative z-10">
        <div className="max-w-[700px] mx-auto text-center mb-8 sm:mb-16 md:mb-24 lg:mb-30 px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white my-6 sm:my-8 md:my-10">
            Advanced{' '}
            <span className="text-transparent bg-gradient-to-r from-purple-600 via-purple-300 to-purple-600 bg-clip-text">
              functionality.
            </span>{' '}
            Flawless{' '}
            <div className="relative inline-block">
              <span className="text-transparent bg-gradient-to-r from-purple-600 via-purple-200 to-purple-600 bg-clip-text">
                integration
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="323"
                height="19"
                viewBox="0 0 323 19"
                fill="none"
                className="absolute -bottom-6 left-4 w-full scale-75 sm:scale-90 md:scale-100"
              >
                <path
                  d="M0.18987 18.0002C90.956 6.55323 282.295 -10.3784 321.523 13.4712"
                  stroke="white"
                  strokeWidth="2"
                />
              </svg>
            </div>
          </h1>
          <p className="text-gray-400 text-base sm:text-lg md:text-xl px-4">
            Offering exceptional power paired with seamless compatibility for your workflow—delivering
            results without compromise.
          </p>
        </div>

        {/* Feature sections */}
        <div className="max-w-[1040px] mx-auto grid py-6 sm:py-8 md:py-10 text-white md:grid-cols-2 gap-8">
          <img className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] mx-auto my-4" src={One} alt="/" />
          <div className="m-auto flex flex-col px-4 md:ml-20 justify-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold py-4 sm:py-6 md:py-10">1. Hide Abusive Messages</h1>                   
            <p className="text-sm sm:text-base">Harassing messages are hidden from the user while remaining stored for evidence. The harasser remains unaware, reducing the risk of retaliation and protecting the user from distress.</p>
          </div>
        </div>

        <div className="max-w-[1040px] mx-auto py-6 sm:py-8 md:py-10 grid text-white md:grid-cols-2 gap-8">
          <div className="m-auto flex flex-col px-4 md:ml-20 justify-center order-2 md:order-1">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold py-4 sm:py-6 md:py-10">2. Tag Harassers</h1>
            <p className="text-sm sm:text-base">Allows users to tag and track harassers, making it easier to identify repeat offenders. This feature helps in better reporting and taking action against persistent abuse.</p>
          </div>
          <img className="w-full max-w-[250px] sm:max-w-[300px] md:max-w-[400px] mx-auto my-4 order-1 md:order-2" src={Two} alt="/" />
        </div>

        <div className="max-w-[1040px] mx-auto py-6 sm:py-8 md:py-10 grid text-white md:grid-cols-2 gap-8">
          <img className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] mx-auto my-4" src={One} alt="/" />
          <div className="m-auto flex flex-col px-4 md:ml-20 justify-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold py-4 sm:py-6 md:py-10">3. Auto-Save Evidence</h1>
            <p className="text-sm sm:text-base">Automatically captures and stores screenshots of harassment messages with timestamps and metadata. This ensures tamper-proof evidence that can be easily accessed for legal purposes without manual effort.</p>
          </div>
        </div>

        <div className="max-w-[1040px] mx-auto py-6 sm:py-8 md:py-10 grid text-white md:grid-cols-2 gap-8">
          <div className="m-auto flex flex-col px-4 md:ml-20 justify-center order-2 md:order-1">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold py-4 sm:py-6 md:py-10">4. Generate Reports</h1>
            <p className="text-sm sm:text-base">Generates ready-to-send reports containing all necessary evidence, including screenshots and timestamps. These reports are formatted for submission to law enforcement or platform moderators.</p>
          </div>
          <img className="w-full max-w-[250px] sm:max-w-[300px] md:max-w-[400px] mx-auto my-4 order-1 md:order-2" src={Two} alt="/" />
        </div>
      </div>
    </div>
  );
};

export default Feature;

