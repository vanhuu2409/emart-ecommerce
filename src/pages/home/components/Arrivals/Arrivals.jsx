import { useEffect } from "react";
import ArrivalsProduct from "./ArrivalsProduct";
import Glide from "@glidejs/glide";

const Arrivals = () => {
  const a = "";
  useEffect(() => {
    const slider = new Glide(".glide-arrivals", {
      type: "carousel",
      focusAt: "center",
      perView: 4,
      autoplay: 3000,
      animationDuration: 700,
      gap: 10,
      breakpoints: {
        1024: {
          perView: 2,
        },
        640: {
          perView: 1,
        },
      },
    }).mount();

    return () => {
      slider.destroy();
    };
  }, []);
  const products = [
    {
      id: 1,
      name: "women's dolly jacket",
      price: 250,
      description: "women's black/white cotton outerwear outer",
      url: "https://cdn.sanity.io/images/v8kybopt/production/f3b9d8b545ff451d62cb970ca320cc88d1f341be-2000x2500.png?w=400&h=500&fit=max&auto=format",
    },
    {
      id: 2,
      name: "women's smile pocket denim skirt",
      price: 95,
      description: "women's medium blue wash denim skirt",
      url: "https://cdn.sanity.io/images/v8kybopt/production/44187b3521eea29ccd49a9616cee880bd877b394-2000x2500.png?w=400&h=500&fit=max&auto=format",
    },
    {
      id: 3,
      name: "the annie",
      price: 375,
      description: "women's honey / bone bovine cowgirl boot",
      url: "https://cdn.sanity.io/images/v8kybopt/production/6fc535a3fb08ed5c3623a17ebaa8f7fc867cb813-2000x2500.png?w=400&fit=max&auto=format",
    },
    {
      id: 4,
      name: "women's mid-rise bootcut jeans",
      price: 115,
      description: "women's medium blue wash denim jeans",
      url: "https://cdn.sanity.io/images/v8kybopt/production/15e7a645dfdfd04b33d463b9cae83cc435f808a9-2000x2500.png?w=400&h=500&fit=max&auto=format",
    },
    {
      id: 5,
      name: "men's vintage weight sawtooth short sleeve pearl snap",
      price: 88,
      description: "men's light blue ditsy cotton button down",
      url: "https://cdn.sanity.io/images/v8kybopt/production/7cc905b78e934bcedc6cadc51c3d7f46e6b75cd8-2000x2500.png?w=400&h=500&fit=max&auto=format",
    },
  ];
  return (
    <div className='mx-auto'>
      <h2 className='px-0 sm:px-6 md:px-10 lg:px-16 pt-8 pb-4 uppercase font-bold text-4xl text-primary drop-shadow-sm bg-white w-full'>
        NEW ARRIVALS
      </h2>
      {/*<!-- Component: Carousel with controls inside --> */}
      <div className='glide-arrivals bg-white relative w-full  px-0 sm:px-6 md:px-10 lg:px-16'>
        {/*    <!-- Slides --> */}
        <div className='overflow-hidden rounded-md' data-glide-el='track'>
          <ul className='whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0'>
            {products.map((product) => (
              <li key={product.id + product.name}>
                <ArrivalsProduct {...product} />
              </li>
            ))}
          </ul>
        </div>
        {/*    <!-- Controls --> */}
        <div
          className='absolute left-0 px-10 sm:px-16 md:px-20 top-[40%] hidden sm:flex justify-between items-center w-full'
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
              className='h-5 w-5'
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
              className='h-5 w-5'
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
      </div>

      <script src='https://cdnjs.cloudflare.com/ajax/libs/Glide.js/3.0.2/glide.js'></script>
      {/*<!-- End Carousel with controls inside --> */}
    </div>
  );
};

export default Arrivals;
