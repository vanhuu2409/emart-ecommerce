const Induction = () => {
  return (
    <div className='mx-auto bg-third w-full h-full flex flex-col items-center justify-center'>
      <div className='p-8 bg-transparent w-[99%] border-2 border-primary flex flex-col justify-center items-center gap-5'>
        <img
          src='https://cdn.shopify.com/oxygen-v2/26986/12111/24887/353455/build/_assets/logo-minimal-green-400-ESO3SNGD.svg'
          alt='Logo'
          className='w-[3rem] h-[3rem]'
        />
        <h2 className='uppercase min-w-[12.5rem] text-center text-primary text-4xl font-bold'>
          HOWDY, WELCOME TO TECOVAS
        </h2>
        <div className='grid grid-rows-3 md:grid-rows-1 md:grid-cols-3 lg:grid-rows-1 lg:grid-cols-3 gap-2 sm:gap-4 md:gap-10 lg:gap-16'>
          <div className='col-span-1 flex flex-col gap-2'>
            <h4 className='uppercase text-center font-bold text-primary text-2xl'>
              BORN IN THE WEST
            </h4>
            <p className='max-w-[14.25rem] text-center text-primary font-light text-[1.125rem] leading-5 tracking-tight'>
              In everything we do, we work to honor the true spirit of the West.
            </p>
          </div>
          <div className='col-span-1 flex flex-col gap-2'>
            <h4 className='uppercase text-center font-bold text-primary text-2xl'>
              TREAT ‘EM RIGHT
            </h4>
            <p className='max-w-[14.25rem] text-center text-primary font-light text-[1.125rem] leading-5 tracking-tight'>
              We hang our hat on quality, hospitality, and shooting you
              straight.
            </p>
          </div>
          <div className='col-span-1 flex flex-col gap-2'>
            <h4 className='uppercase text-center font-bold text-primary text-2xl'>
              Y’ALL MEANS ALL
            </h4>
            <p className='max-w-[14.25rem] text-center text-primary font-light text-[1.125rem] leading-5 tracking-tight'>
              Our West is wide open and big enough for anyone bold enough to go.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Induction;
