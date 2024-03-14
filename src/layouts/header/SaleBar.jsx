const SaleBar = ({ children }) => {
  return (
    <div className='w-full hidden lg:flex items-center justify-between py-3 px-10 bg-secondary text-white'>
      <div className='lg:block hidden min-w-[166px]'></div>
      <div className='w-full flex justify-center items-center gap-3 divide-x divide-gray-500'>
        <p className='text-center text-[14px] font-light tracking-wide leading-4'>
          {children}
        </p>
        <a
          href='all-products'
          className='px-3 capitalize text-center text-[14px] font-medium tracking-widest leading-4 underline underline-offset-4 hover:opacity-80 transition-all'
        >
          Shop Now
        </a>
      </div>
      <div className='lg:flex hidden min-w-[166px] divide-x divide-gray-500'>
        <a
          href='/help'
          className='px-2 uppercase text-[14px] text-center font-light tracking-widest leading-4 hover:opacity-80 transition-all'
        >
          HELP
        </a>
        <a
          href='/find-stores'
          className='px-2 uppercase text-[14px] text-center font-light tracking-widest leading-4 hover:opacity-80 transition-all'
        >
          FIND STORES
        </a>
      </div>
    </div>
  );
};

export default SaleBar;
