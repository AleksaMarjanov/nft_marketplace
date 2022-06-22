const Banner = ({ name, childStyles, parentStyle }) => (
  <div className={`relative w-full flex items-center z-0 overflow-hidden nft-gradient ${parentStyle}`}>
    <p className={`font-bold text-5xl dark:text-white text-nft-black-1 font-poppins leading-70 ${childStyles}`}>{name}</p>
    <div className="absolute w-48 h-48 sm:w-32 sm:h-32 rounded-full -top-9 -left-16 -z-5 white-bg" />
    <div className="absolute w-72 h-72 sm:w-56 sm:h-56 rounded-full -bottom-24 -right-14 -z-5 white-bg" />
    <div className="absolute w-36 h-36 sm:w-24 sm:h-24 rounded-full white-bg -bottom-12 -left-10 -z-5" />
  </div>
);

export default Banner;

