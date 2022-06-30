export const getCreators = (nfts) => {
  const creators = nfts.reduce((creatorObject, nft) => {
    const creator = creatorObject[nft.seller] || [];

    creator.push(nft);

    return creatorObject;
  }, {});

  Object.entries(creators).map((creator) => {
    const seller = creator[0];
    const sum = creator[1].map((item) => Number(item.price)).reduce((prev, curr) => prev + curr, 0);

    return ({ seller, sum });
  });
};

// Create a function that returns an array of top sellers
// A top seller is a person with a high sum of all NFTs they've listed
