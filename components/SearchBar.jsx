import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useTheme } from 'next-themes';

import images from '../assets';

const SearchBar = () => {
  const [search, setSearch] = useState('');
  const { theme } = useTheme();

  return (
    <div className="">
      <Image src={images.search} objectFit="contain" width={20} height={20} alt="search" className={theme === 'light' ? 'filter invert' : undefined} />
      <input
        type="text"
        placeholder="search NFT here"
        className="dark:bg-nft-black-2 bg-white mx-4 w-full dark:text-white text-nft-black-1 font-normal font-xs outline-none"
        onChange={() => {}}
        value=""

      />
    </div>
  );
};

export default SearchBar;
