import React from "react";

const Preloader = () => {
  return (
    <>
      <div id='preloader' className='preloader'>
        <div className='animation-preloader'>
          <div className='spinner'></div>
          <div className='txt-loading'>
            <span data-text-preloader='M' className='letters-loading'>
              M
            </span>
            <span data-text-preloader='J' className='letters-loading'>
              J
            </span>
            <span data-text-preloader='E' className='letters-loading'>
              E
            </span>
            <span data-text-preloader='A' className='letters-loading'>
              A
            </span>
          </div>
          <p className='text-center'>Loading</p>
        </div>
        <div className='loader'>
          <div className='row'>
            <div className='col-3 loader-section section-left'>
              <div className='bg'></div>
            </div>
            <div className='col-3 loader-section section-left'>
              <div className='bg'></div>
            </div>
            <div className='col-3 loader-section section-right'>
              <div className='bg'></div>
            </div>
            <div className='col-3 loader-section section-right'>
              <div className='bg'></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Preloader;
