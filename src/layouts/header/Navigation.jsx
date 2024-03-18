import { useState } from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [isActiveNav, setIsActiveNav] = useState("");
  const [isNavToggle, setIsNavToggle] = useState(false);
  const navItem = [
    {
      name: "Men",
      path: "/",
      children: [
        { name: "Shop all", path: "/" },
        {
          name: "boots",
          path: "/",
        },
        { name: "best sellers", path: "/" },
        {
          name: "bags",
          path: "/",
        },
        { name: "new arrivals", path: "/" },
        { name: "shoes", path: "/" },
        {
          name: "shop by collection",
          path: "/",
        },
        {
          name: "accessories",
          path: "/",
        },
        { name: "gift cards", path: "/" },
        {
          name: "apparel",
          path: "/",
        },
      ],
    },
    {
      name: "Women",
      path: "/",
      children: [
        { name: "Shop all", path: "/" },
        {
          name: "boots",
          path: "/",
        },
        { name: "best sellers", path: "/" },
        {
          name: "bags",
          path: "/",
        },
        { name: "new arrivals", path: "/" },
        { name: "shoes", path: "/" },
        {
          name: "shop by collection",
          path: "/",
        },
        {
          name: "accessories",
          path: "/",
        },
        { name: "gift cards", path: "/" },
        {
          name: "apparel",
          path: "/",
        },
      ],
    },
    {
      name: "Explore",
      path: "/",
      children: [
        {
          name: "shop by collection",
          path: "/",
        },
        { name: "how we make'em", path: "/" },
        { name: "about us", path: "/" },
        { name: "true west stories", path: "/" },
        {
          name: "collaborations",
          path: "/",
        },
        {
          name: "more...",
          path: "/",
        },
      ],
    },
  ];
  return (
    <>
      {/* <!-- Hamburger button for mobile view --> */}
      <button
        onClick={() => setIsNavToggle(!isNavToggle)}
        className='block flex-1 lg:hidden px-2 border-0 text-white bg-transparent hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0'
        type='button'
      >
        {/* <!-- Hamburger icon --> */}
        <span className=''>
          {!isNavToggle ? (
            <svg
              className='w-8 h-8 text-white animate-jump animate-duration-500
'
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
                d='M5 7h14M5 12h14M5 17h10'
              />
            </svg>
          ) : (
            <svg
              className='w-8 h-8 text-white animate-jump-in animate-duration-500
'
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
                strokeLinejoin='round'
                strokeWidth='2'
                d='M6 18 17.94 6M18 18 6.06 6'
              />
            </svg>
          )}
        </span>
      </button>
      {/* Mobile */}
      <div>
        <ul
          className={`list-style-none border-t pl-8 py-4 duration-300 top-full shadow-2xl -z-50 ${
            isNavToggle ? "left-0 right-0" : "-left-full right-full"
          }  bg-primary absolute flex flex-col lg:hidden`}
        >
          {navItem.map((item, index) => {
            const { name, path, children } = item;
            {
              /* <!-- Parent link --> */
            }
            return (
              <li key={name + index}>
                <div
                  onClick={() =>
                    isActiveNav.toLowerCase() === name.toLowerCase()
                      ? setIsActiveNav("")
                      : setIsActiveNav(name)
                  }
                  to={path}
                  className='relative group inline-flex flex-col gap-4 uppercase text-white py-4 drop-shadow-md motion-reduce:transition-none/60 leading-[1.125rem] tracking-widest text-[1.16rem]'
                >
                  <div className='inline-flex items-center'>
                    {name} {/* chevron icon */}
                    <svg
                      className={`w-8 h-8 text-white duration-300 ${
                        isActiveNav.toLowerCase() === name.toLowerCase()
                          ? "rotate-90"
                          : "rotate-0"
                      }`}
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
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='m10 16 4-4-4-4'
                      />
                    </svg>
                  </div>

                  {/* child dropdown */}
                  <ul
                    className={`${
                      isActiveNav.toLowerCase() === name.toLowerCase()
                        ? "grid"
                        : "hidden"
                    } grid-cols-2 gap-10 px-4 py-2 -mx-4 -my-2 text-[1rem] bg-third text-primary animate-flip-down animate-duration-150`}
                  >
                    <li className='col-span-2 grid grid-cols-2'>
                      {children.map((child, index) => {
                        const { name: childName, path: childPath } = child;
                        return (
                          <Link
                            onClick={() => setIsNavToggle(!isNavToggle)}
                            to={childPath}
                            key={index + childName}
                            className='font-medium py-4 px-2 underline-offset-2 underline'
                          >
                            {childName}
                          </Link>
                        );
                      })}
                    </li>
                  </ul>
                </div>
              </li>
            );
          })}
          {/* <!-- Last Call link --> */}
          <li className='mt-2'>
            <Link
              to='/'
              className='inline-flex items-center uppercase p-4 -m-4 lg:p-0 lg:m-0 text-hightlight py-2 pb-8 lg:py-6 lg:px-3 drop-shadow-md hover:bg-[#ddd] transition duration-150 hover:text-secondary ease-in-out focus:text-secondary focus:bg-[#ddd] active:text-secondary motion-reduce:transition-none/60 leading-[1.125rem] tracking-wide text-[1.16rem]'
            >
              Last Call
            </Link>
          </li>
        </ul>
      </div>
      {/* Mobile */}
      {/* Tablet & Desktop */}
      <div className='!visible hidden items-center lg:!flex lg:flex-1'>
        {/* <!-- Left navigation links --> */}
        <ul className='list-style-none left-0 shadow-2xl top-full right-0 bg-primary absolute flex flex-col lg:relative lg:ps-0 lg:flex lg:me-auto lg:items-center lg:flex-row'>
          {navItem.map((item, index) => {
            const { name, path, children } = item;
            {
              /* <!-- Parent link --> */
            }
            return (
              <li key={name + index}>
                <div
                  to={path}
                  className='relative group inline-flex items-center cursor-pointer uppercase p-4 -m-4 lg:p-0 lg:m-0 text-white py-2 lg:py-6 lg:px-3 drop-shadow-md hover:bg-[#ddd] transition duration-150 hover:text-secondary ease-in-out focus:text-secondary focus:bg-[#ddd] active:text-secondary motion-reduce:transition-none/60 leading-[1.125rem] tracking-widest text-[1.16rem]'
                >
                  {name}
                  {/* child drop */}
                  <ul className='absolute w-max max-w-[80vw] px-4 py-6 left-0 top-full right-0 bg-third hidden min-h-[25rem] group-hover:grid grid-cols-4 gap-10 text-[1rem] animate-flip-down animate-duration-300 animate-normal'>
                    <li
                      className={`col-span-2 ${
                        name.toLowerCase() === "explore"
                          ? " flex flex-col"
                          : "grid grid-cols-2"
                      } gap-x-4`}
                    >
                      {children.map((child, index) => {
                        const { name: childName, path: childPath } = child;
                        return (
                          <Link
                            to={childPath}
                            key={index + childName}
                            className='font-medium py-4 pr-2 pl-4 inline-flex items-center underline-offset-2 hover:bg-[#fff] hover:text-primary hover:underline transition-all duration-200 tracking-normal leading-snug'
                          >
                            {childName}
                          </Link>
                        );
                      })}
                    </li>
                    {name.toLowerCase() !== "explore" && (
                      <Link
                        to='/'
                        className={`col-span-2 relative bg-[url('https://cdn.pixabay.com/photo/2023/03/19/17/08/ai-generated-7862992_1280.jpg')] bg-cover`}
                      >
                        <p className='uppercase absolute bottom-0 px-2 py-6 text-center left-0 right-0 text-[1.5rem] font-bold tracking-wide text-primary bg-white bg-opacity-80'>
                          The Festival shop
                        </p>
                      </Link>
                    )}
                  </ul>
                </div>
              </li>
            );
          })}
          {/* <!-- Last Call link --> */}
          <li className=''>
            <Link
              to='/'
              className='inline-flex items-center uppercase p-4 -m-4 lg:p-0 lg:m-0 text-hightlight py-2 lg:py-6 lg:px-3 drop-shadow-md hover:bg-[#ddd] transition duration-150 hover:text-secondary ease-in-out focus:text-secondary focus:bg-[#ddd] active:text-secondary motion-reduce:transition-none/60 leading-[1.125rem] tracking-wide text-[1.16rem]'
            >
              Last Call
            </Link>
          </li>
        </ul>
        {/* <!-- Left links --> */}
      </div>
      {/* Tablet & Desktop */}
    </>
  );
};

export default Navigation;
