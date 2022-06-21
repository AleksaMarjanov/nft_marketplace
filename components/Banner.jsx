const Banner = ({ name, childStyles, parentStyle }) => (
  <div className={`relative w-full flex items-center z-0 overflow-hidden nft-gradient ${parentStyle}`}>
    <p className={`font-bold text-5xl text-white font-poppins leading-70 ${childStyles}`}>{name}</p>
    <div className="absolute w-48 h-48 sm:w-32 sm:h-32 rounded-full -top-9 -left-16 -z-5 white-bg" />
    <div className="absolute w-72 h-72 sm:w-56 sm:h-56 rounded-full -bottom-24 -right-14 -z-5 white-bg" />
  </div>
);

export default Banner;

// import React from 'react';

// const Banner = ({ parentStyles, banner, childStyles }) => (
//   <div className={`relative w-full flex items-center z-0 overflow-hidden nft-gradient  ${parentStyles} `}>
//     <p className={`font-bold text-5xl font-poppins leading-70 ${childStyles}`}>{banner}</p>
//     <div className="absolute w-48 h-48 sm:w-32 sm:h-32 rounded-full white-bg -top-9 -left-16 -z-5" />
//     <div className="absolute w-72 h-72 sm:w-56 sm:h-56 rounded-full white-bg -bottom-24 -right-14 -z-5" />
//     <div className="absolute w-36 h-36 sm:w-24 sm:h-24 rounded-full white-bg -bottom-12 -left-10 -z-5" />
//   </div>
// );

// export default Banner;
