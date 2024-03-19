import { FaUserCog } from "react-icons/fa";
import SaleBar from "./SaleBar";
import { useState } from "react";
import Headroom from "react-headroom";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const Header = () => {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <>
      {/* SaleBar */}
      <SaleBar>Set Your Stage for Spring</SaleBar>
      <Headroom>
        {/* <!-- Main navigation container --> */}
        <nav className='relative z-50 w-full px-2 py-3 lg:py-0 flex items-center justify-between lg:justify-start flex-no-wrap lg:flex-wrap bg-primary text-white'>
          <div className='w-full px-3 flex flex-wrap items-center justify-between'>
            {/* <!-- Collapsible navigation container --> */}
            <Navbar />

            {/* <!-- Logo --> */}
            <Link
              className='font-medium uppercase text-4xl text-white hover:text-secondary active:text-secondary focus:text-secondary transition-all tracking-[.2em]'
              href='/'
            >
              TECOVAS
            </Link>
            {/* <!-- Logo --> */}

            {/* <!-- Right elements --> */}
            <div className='relative flex flex-1 gap-5 items-center justify-end'>
              {/* <!-- Search Icon --> */}
              <button className='hover:text-secondary hidden sm:inline-flex items-center active:text-secondary transition-all text-white'>
                <span className='[&>svg]:w-6 inline-flex items-center gap-4 '>
                  <div className='relative mb-3 hidden lg:inline-flex items-center'>
                    <input
                      type='text'
                      id='search-field'
                      className='peer lg:inline-flex items-center block min-h-[auto] w-full rounded border-0 border-b bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-white data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-secondary dark:autofill:shadow-autofill dark:peer-focus:text-white [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0'
                      placeholder='Search...'
                    />
                    <label
                      htmlFor='search-field'
                      className='pointer-events-none absolute lg:inline-flex items-center left-3 top-0 mb-0 max-w-[80%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-secondary transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-white peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-secondary dark:peer-focus:text-white'
                    >
                      Search...
                    </label>
                  </div>
                  <svg
                    aria-hidden='true'
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    fill='none'
                    viewBox='0 0 24 24'
                  >
                    <path
                      stroke='currentColor'
                      strokeLinecap='round'
                      strokeWidth='2'
                      d='m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z'
                    />
                  </svg>
                </span>
              </button>
              {/* <!-- Search Icon --> */}

              {/* <!-- User dropdown container --> */}
              <div
                className='group relative hidden sm:flex items-center'
                data-twe-dropdown-ref
                data-twe-dropdown-alignment='end'
              >
                {/* <!-- User dropdown trigger --> */}
                {isLogin ? (
                  <Link className='px-2 lg:py-6 lg:-my-4 inline-flex p-4 -m-4 lg:p-0 lg:m-0 items-center whitespace-nowrap transition duration-300 ease-in-out cursor-pointer motion-reduce:transition-none hover:text-secondary'>
                    <FaUserCog className='w-[25px] inline-flex items-center h-[25px]' />
                  </Link>
                ) : (
                  <button
                    className='uppercase px-2 hidden sm:inline-flex items-center text-white py-2 lg:py-6 drop-shadow-md hover:bg-[#ddd] transition duration-200 hover:text-secondary hover:ease-in-out focus:text-secondary active:text-secondary motion-reduce:transition-none/60 lg:px-2 leading-[18px] tracking-widest text-[16.8px]'
                    // href='/login'
                    onClick={() => setIsLogin(!isLogin)}
                  >
                    {/* <!-- Login Btn --> */}
                    Login
                  </button>
                )}
                {/* <!-- User dropdown menu --> */}
                {isLogin && (
                  <div className='absolute hidden group-hover:block animate-flip-down animate-duration-300 animate-normal top-full right-0 mt-2 border'>
                    <Link
                      to='/'
                      className='block w-full whitespace-nowrap bg-white pl-8 pr-4 py-2 text-right text-sm font-normal text-primary hover:bg-third focus:bg-third focus:outline-none active:bg-third active:no-underline'
                    >
                      Profile
                    </Link>
                    <Link
                      to='/'
                      className='block w-full whitespace-nowrap bg-white pl-8 pr-4 py-2 text-right text-sm font-normal text-primary hover:bg-third focus:bg-third focus:outline-none active:bg-third active:no-underline'
                    >
                      Orders
                    </Link>
                    <Link
                      to='/'
                      className='block w-full whitespace-nowrap bg-white pl-8 pr-4 py-2 text-right text-sm font-normal text-primary hover:bg-third focus:bg-third focus:outline-none active:bg-third active:no-underline'
                    >
                      Log out
                    </Link>
                  </div>
                )}
              </div>
              {/* <!-- Cart dropdown container --> */}
              <div
                className='relative group hidden sm:block'
                data-twe-dropdown-ref
                data-twe-dropdown-alignment='end'
              >
                {/* <!-- Cart dropdown trigger --> */}
                <button className='me-4 group-hover:text-secondary active:text-secondary transition-all flex items-center text-white'>
                  {/* <!-- Cart trigger icon --> */}
                  <span className='[&>svg]:w-6'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 24 24'
                      fill='currentColor'
                    >
                      <path d='M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z' />
                    </svg>
                  </span>
                  {/* <!-- Notification counter --> */}
                  <span className='absolute group-hover:opacity-50 active:text-secondary transition-all items-center -top-[35%] right-[10%] rounded-full bg-hightlight inline-flex justify-center px-[0.4em] py-[0.1em] text-[0.6rem] font-bold leading-none text-white'>
                    10
                  </span>
                </button>
              </div>
            </div>
            {/* <!-- Right elements --> */}
          </div>
        </nav>
      </Headroom>
    </>
  );
};

export default Header;
