const TrendingProduct = (props) => {
  return (
    <>
      {/*<!-- Component: E-commerce card --> */}
      <a
        href='/'
        className='overflow-hidden rounded bg-[#FCF9F4] text-primary  hover:scale-110 duration-200 ease-linear hover:opacity-85 cursor-pointer shadow-md shadow-gray-300 h-full flex border-primary z-40 flex-col'
      >
        {/*  <!-- Image --> */}
        <figure className=''>
          <img
            src={`${props?.url}`}
            alt={`${props?.name}`}
            className='m-auto max-h-full w-full max-w-full'
          />
        </figure>
        {/*  <!-- Body--> */}
        <div className='p-6 flex-1'>
          <header className='mb-4'>
            <div className='flex'>
              <h3 className='flex-1 uppercase max-w-[18rem] lg:max-w-[12rem] text-normal font-normal text-primary line-clamp-3'>
                {props?.name}
              </h3>
              <p className='uppercase text-right font-bold text-primary'>
                {" "}
                ${props?.price}
              </p>
            </div>
          </header>
          <p className='pt-4 uppercase font-light line-clamp-2'>
            {props?.description}
          </p>
          <div className='pt-4 uppercase font-light line-clamp-2'>
            color ···
          </div>
        </div>
      </a>
      {/*<!-- End E-commerce card --> */}
    </>
  );
};

export default TrendingProduct;
