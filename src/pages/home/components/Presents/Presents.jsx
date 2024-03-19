import { Link } from "react-router-dom";

const Presents = () => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2'>
      <div className='relative'>
        <img
          src='https://cdn.sanity.io/images/v8kybopt/production/bf44e617e7ac639c5b8c5c7b9705eb7c6ea08769-1921x1081.jpg?w=2000&h=1125&fit=max&auto=format'
          alt=''
          className=' w-full max-w-full max-h-full m-auto'
        />
        <div className='absolute inset-1 border-[0.1rem]'></div>
      </div>
      <div className='flex flex-col items-center justify-center gap-6 p-8 bg-primary w-full'>
        <h3 className='font-bold uppercase text-[1.65rem] lg:text-4xl text-white text-center tracking-wide leading-snug'>
          Nine artists shaping the future of country music
        </h3>
        <p className='text-white text-center text-normal font-extralight text-[1.25rem] capitalize tracking-normal'>
          2024 Opry NextStage Presented By Tecovas
        </p>
        <Link
          to='/'
          className='uppercase underline text-white focus:text-secondary active:text-secondary tracking-widest'
        >
          Learn more
        </Link>
      </div>
    </div>
  );
};

export default Presents;
