import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useTheme } from 'next-themes';

import images from '../assets';

const SearchBar = () => {
  const [search, setSearch] = useState('');
  const [toggle, setToggle] = useState(false);
  const { theme } = useTheme();

  return (
    <>
      <div className="flex-1 flexCenter dark:bg-nft-black-2 bg-white border dark:border-nft-black-2 border-nft-gray-2 px-4 rounded-md">
        <Image src={images.search} objectFit="contain" width={20} height={20} alt="search" className={theme === 'light' ? 'filter invert' : undefined} />
        <input
          type="text"
          placeholder="search NFT here..."
          className="dark:bg-nft-black-2 bg-white mx-4 w-full dark:text-white text-nft-black-1 font-normal font-xs outline-none"
          onChange={() => {}}
          value=""
        />
      </div>

      <div onClick={() => setToggle(!toggle)} className="relative flexBetween ml-4 sm:ml-0 sm:mt-2 min-w-190 cursor-pointer dark:bg-nft-black-2 bg-white border dark:border-nft-black-2 border-nft-gray-2 px-4 rounded-md">
        <p className="font-poppins dark:text-white text-nft-black-1 font-normal text-xs">Recently Listed</p>
        <Image
          src={images.arrow}
          objectFit="contain"
          width={15}
          height={15}
          alt="arrow"
          className={theme === 'light' ? 'filter invert' : undefined}
        />
      </div>

      {toggle && (
      <div>
        {['Recently Added', 'Price(low to high)', 'Price(high to low)'].map((item) => (
          <p>
            {item}
          </p>
        ))}
      </div>

      )}
    </>
  );
};

export default SearchBar;
