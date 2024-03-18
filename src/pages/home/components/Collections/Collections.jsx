import Glide from "@glidejs/glide";
import { useEffect } from "react";

const Collections = () => {
  useEffect(() => {
    const slider = new Glide(".glide-collections", {
      type: "carousel",
      focusAt: "center",
      startAt: 1,
      perView: 2,
      autoplay: 3000,
      animationDuration: 700,
      gap: 10,
      classes: {
        nav: {
          active: "[&>*]:bg-white",
        },
      },
      breakpoints: {
        640: {
          perView: 1,
        },
      },
    }).mount();

    return () => {
      slider.destroy();
    };
  }, []);
  const collections = [
    {
      id: 1,
      path: "/",
      imgUrl:
        "https://cdn.sanity.io/images/v8kybopt/production/4797b2521991186b2c99d99fefd9237cd93c1551-2000x2500.png?w=1024&h=1280&fit=max&auto=format",
      name: "Red hot boots",
    },
    {
      id: 2,
      path: "/",
      imgUrl:
        "https://cdn.sanity.io/images/v8kybopt/production/73749449ffcbfabec2a26a9b2dd0939bf64ff411-2000x2500.png?rect=1,0,1999,2500&w=554&h=693&fit=max&auto=format",
      name: "Ranch & work wear",
    },
    {
      id: 3,
      path: "/",
      imgUrl:
        "https://cdn.sanity.io/images/v8kybopt/production/eed3aa63d17628cce2198e56ba5088a0c75c13d2-2007x2500.png?rect=5,0,1999,2500&w=554&h=693&fit=max&auto=format",
      name: "All the annies",
    },
  ];
  return (
    <div className='mx-auto grid grid-cols-1 lg:grid-cols-3 gap-4'>
      {collections.map((item) => (
        <div key={item.name + item?.id} className='relative hidden lg:block'>
          <a href={item?.path}>
            <img
              src={item?.imgUrl}
              alt={item?.name}
              className='object-fit w-full max-w-full max-h-full m-auto rounded-md'
            />
            <div className='absolute rounded-md inset-0 bg-gradient-to-b from-transparent via-transparent to-[rgb(2,2,2)]'></div>
            <div className='absolute p-10 bottom-0 left-0 flex flex-col gap-2'>
              <h3 className='uppercase font-bold text-third text-2xl transition-all drop-shadow-lg hover:text-primary'>
                {item?.name}
              </h3>
              <button className='uppercase text-left font-normal text-third drop-shadow-lg md:text-sm lg:text-base underline underline-offset-4 transition-all hover:text-primary tracking-widest'>
                Shop now
              </button>
            </div>
          </a>
        </div>
      ))}
      {/*<!-- Component: Card Slider --> */}
      <div className='glide-collections relative lg:hidden w-full overflow-hidden bg-white rounded shadow-xl'>
        {/*    <!-- Slides --> */}
        <div className='overflow-hidden' data-glide-el='track'>
          <ul className='whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0'>
            {collections.map((item) => (
              <li key={item?.id + item?.name + item?.id} className='relative'>
                <a href={item?.path}>
                  <img
                    src={item?.imgUrl}
                    alt={item?.name}
                    className='object-fit w-full max-w-full max-h-full m-auto'
                  />
                  <div className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[rgb(2,2,2)]'></div>
                  <div className='absolute p-10 bottom-0 left-0 flex flex-col gap-2'>
                    <h3 className='uppercase font-bold text-secondary text-2xl transition-all drop-shadow-lg hover:text-primary'>
                      {item?.name}
                    </h3>
                    <button className='uppercase text-left font-extralight text-secondary drop-shadow-lg text-lg md:text-xl underline underline-offset-4 transition-all hover:text-primary'>
                      Shop now
                    </button>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
        {/*    <!-- Controls --> */}
        <div
          className='absolute left-0 hidden sm:flex items-center justify-between w-full h-0 px-4 top-1/2 '
          data-glide-el='controls'
        >
          <button
            className='inline-flex h-12 w-12 items-center justify-center rounded-full border border-white bg-white/20 text-white transition duration-300 hover:border-secondary hover:text-secondary focus-visible:outline-none lg:h-12 lg:w-12'
            data-glide-dir='<'
            aria-label='prev slide'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth='1.5'
              stroke='currentColor'
              className='w-5 h-5'
            >
              <title>prev slide</title>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18'
              />
            </svg>
          </button>
          <button
            className='inline-flex h-12 w-12 items-center justify-center rounded-full border border-white bg-white/20 text-white transition duration-300 hover:border-secondary hover:text-secondary focus-visible:outline-none lg:h-12 lg:w-12'
            data-glide-dir='>'
            aria-label='next slide'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth='1.5'
              stroke='currentColor'
              className='w-5 h-5'
            >
              <title>next slide</title>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3'
              />
            </svg>
          </button>
        </div>
        {/*    <!-- Indicators --> */}
        <div
          className='absolute bottom-0 flex items-center justify-center w-full gap-2'
          data-glide-el='controls[nav]'
        >
          <button
            className='group p-4'
            data-glide-dir='=0'
            aria-label='goto slide 1'
          >
            <span className='block h-2 w-2 rounded-full bg-white/20 ring-1 ring-slate-700 transition-colors duration-300 focus:outline-none'></span>
          </button>
          <button
            className='group p-4'
            data-glide-dir='=1'
            aria-label='goto slide 2'
          >
            <span className='block h-2 w-2 rounded-full bg-white/20 ring-1 ring-slate-700 transition-colors duration-300 focus:outline-none'></span>
          </button>
          <button
            className='group p-4'
            data-glide-dir='=2'
            aria-label='goto slide 3'
          >
            <span className='block h-2 w-2 rounded-full bg-white/20 ring-1 ring-slate-700 transition-colors duration-300 focus:outline-none'></span>
          </button>
        </div>
      </div>
      {/*<!-- End Card Slider --> */}
    </div>
  );
};

export default Collections;
