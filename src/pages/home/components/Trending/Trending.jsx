import Glide from "@glidejs/glide";
import { useEffect } from "react";
import TrendingProduct from "./TrendingProduct";

const Trending = () => {
  useEffect(() => {
    const slider = new Glide(".glide-trending", {
      type: "carousel",
      focusAt: "center",
      perView: 2,
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
      name: "the nolan",
      price: 375,
      description: "women's dolly jacket",
      subUrl:
        "https://cdn.sanity.io/images/v8kybopt/production/6fc535a3fb08ed5c3623a17ebaa8f7fc867cb813-2000x2500.png?w=400&fit=max&auto=format",
      url: "https://cdn.sanity.io/images/v8kybopt/production/9a2471354e58d5faa35e53bac6f6d50a7f7ff114-2400x2400.jpg?rect=240,0,1920,2400&w=400&h=500&fit=max&auto=format",
    },
    {
      id: 2,
      name: "the stella",
      price: 255,
      description: "women's smile pocket denim skirt",
      subUrl:
        "https://cdn.sanity.io/images/v8kybopt/production/6fc535a3fb08ed5c3623a17ebaa8f7fc867cb813-2000x2500.png?w=400&fit=max&auto=format",
      url: "https://cdn.sanity.io/images/v8kybopt/production/c482379c01b02b7b6454be6dfe1a0f38fab8c6f4-2000x2500.png?w=400&h=500&fit=max&auto=format",
    },
    {
      id: 3,
      name: "the annie",
      price: 375,
      description: "women's honey / bone bovine cowgirl boot",
      subUrl:
        "https://cdn.sanity.io/images/v8kybopt/production/6fc535a3fb08ed5c3623a17ebaa8f7fc867cb813-2000x2500.png?w=400&fit=max&auto=format",
      url: "https://cdn.sanity.io/images/v8kybopt/production/6fc535a3fb08ed5c3623a17ebaa8f7fc867cb813-2000x2500.png?w=400&fit=max&auto=format",
    },
    {
      id: 4,
      name: "the earl",
      price: 285,
      description: "women's medium blue wash denim jeans",
      subUrl:
        "https://cdn.sanity.io/images/v8kybopt/production/6fc535a3fb08ed5c3623a17ebaa8f7fc867cb813-2000x2500.png?w=400&fit=max&auto=format",
      url: "https://cdn.sanity.io/images/v8kybopt/production/e94df3aba50df97335ba489b3df5375b01613c63-2000x2500.jpg?w=400&h=500&fit=max&auto=format",
    },
    {
      id: 5,
      name: "the dean",
      price: 285,
      description: "men's light blue ditsy cotton button down",
      subUrl:
        "https://cdn.sanity.io/images/v8kybopt/production/6fc535a3fb08ed5c3623a17ebaa8f7fc867cb813-2000x2500.png?w=400&fit=max&auto=format",
      url: "https://cdn.sanity.io/images/v8kybopt/production/08ddd7b023e987c3c0c000785c3a96c65770446f-2000x2500.jpg?w=400&h=500&fit=max&auto=format",
    },
  ];
  return (
    <div className='lg:grid lg:grid-cols-2 lg:gap-6'>
      <img
        src='https://cdn.sanity.io/images/v8kybopt/production/6f833965bd0656bc90164778c8362c79eae62a00-2000x2500.png?w=1024&h=1280&fit=max&auto=format'
        alt='trending'
        className='object-cover w-full max-w-full max-h-[85%] m-auto rounded-md'
      />
      <div className='gap-6 mt-4 flex flex-col justify-center'>
        <div className='flex flex-col'>
          <h3 className='text-bred text-[1.5rem] uppercase font-semibold tracking-wide leading-snug'>
            TRENDING
          </h3>
          <a
            href='/'
            className='flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between cursor-pointer'
          >
            <h4 className='text-primary font-extrabold uppercase text-3xl tracking-wide leading-tight'>
              WESTERN GOTHIC
            </h4>
            <button className='px-[4.5rem] block text-center lg:text-left py-3 rounded-md text-white bg-primary uppercase tracking-widest font-normal leading-snug hover:opacity-85'>
              Shop all
            </button>
          </a>
        </div>
        <div>
          {" "}
          <div className='mx-auto'>
            {/*<!-- Component: Carousel with controls inside --> */}
            <div className='glide-trending bg-white relative w-full'>
              {/*    <!-- Slides --> */}
              <div className='overflow-hidden' data-glide-el='track'>
                <ul className='whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0'>
                  {products.map((product) => (
                    <li key={product.id + product.name}>
                      <TrendingProduct {...product} />
                    </li>
                  ))}
                </ul>
              </div>
              {/*    <!-- Controls --> */}
              <div
                className='absolute left-0 px-10 sm:px-16 md:px-4 top-[40%] hidden sm:flex justify-between items-center w-full'
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
        </div>
      </div>
    </div>
  );
};

export default Trending;
