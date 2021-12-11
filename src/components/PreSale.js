import React from 'react';

const PreSale = () => {
  return (
    <>
      <div className='PreSale' id='pre-sale' style={{}}>
        <div className='PreSale__inner Main__Margin px-5 lg:px-4 pb-12 md:pb-20'>
          <h2 className='text-2xl font-bold md:text-5xl uppercase mb-8 px-0 md:px-8 py-6 md:py-8 header-bg text-center rounded-2xl'>
            How to mint your Pharaohs
          </h2>
          <ol className='mb-8'>
            <li className='text-xl font-thin md:text-2xl mb-4 gray-100'>
              1. Connect your MetaMask wallet
            </li>{' '}
            <li className='text-xl font-thin md:text-2xl gray-100'>
              2. Invite at least 5 friends to our telegram community.
            </li>
          </ol>
        </div>
      </div>
    </>
  );
};

export default PreSale;
