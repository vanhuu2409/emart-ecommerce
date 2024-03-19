import { Link } from "react-router-dom";

const ArrivalsProduct = (props) => {
  return (
    <>
      {/*<!-- Component: E-commerce card --> */}
      <Link
        to='/'
        className='overflow-hidden rounded bg-[#FCF9F4] text-primary  duration-200 ease-linear cursor-pointer shadow-md shadow-gray-300 flex h-full border-primary z-40 flex-col'
      >
        {/*  <!-- Image --> */}
        <figure className='relative'>
          <img
            src={`${props?.url}`}
            alt={`${props?.name}`}
            className='m-auto max-h-[96%] h-full w-full max-w-full hover:scale-110  duration-200 ease-linear'
          />
          {props?.status && (
            <span className='absolute top-4 left-4 uppercase px-2 py-1 text-secondary text-[.875rem] font-light tracking-widest bg-[#eee] rounded-sm'>
              {props?.status}
            </span>
          )}
        </figure>
        {/*  <!-- Body--> */}
        <div className='p-6 flex-1'>
          <header className='mb-4'>
            <div className='flex justify-between min-h-[5.25rem]'>
              <h3 className='flex-1 uppercase max-w-[18rem] lg:max-w-[12rem] min-h-[4rem] text-normal font-normal text-primary line-clamp-3'>
                {props?.name}
              </h3>
              <p className='uppercase text-right font-bold text-secondary'>
                {" "}
                ${props?.price}
              </p>
            </div>
          </header>
          <p className='border-t border-secondary text-secondary py-4 uppercase font-light line-clamp-2'>
            {props?.description}
          </p>
        </div>
      </Link>
      {/*<!-- End E-commerce card --> */}
    </>
  );
};

export default ArrivalsProduct;
