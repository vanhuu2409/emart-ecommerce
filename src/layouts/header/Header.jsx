import { Collapse, Dropdown, initTWE } from "tw-elements";
import SaleBar from "./SaleBar";

const Header = () => {
  initTWE({ Collapse, Dropdown });
  return (
    <div>
      {/* SaleBar */}
      <SaleBar>Set Your Stage for Spring</SaleBar>
      {/* <!-- Main navigation container --> */}
      <nav className=' w-full relative py-2 lg:py-2 flex items-center justify-between lg:justify-start flex-no-wrap lg:flex-wrap bg-primary text-white'>
        <div className='w-full px-3 flex flex-wrap items-center justify-between'>
          {/* <!-- Hamburger button for mobile view --> */}
          <button
            className='block flex-1 lg:hidden px-2 border-0 text-white bg-transparent hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0'
            type='button'
            data-twe-collapse-init
            data-twe-target='#navbarSupportedContent1'
            aria-controls='navbarSupportedContent1'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            {/* <!-- Hamburger icon --> */}
            <span className='[&>svg]:w-7 [&>svg]:stroke-white'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='currentColor'
              >
                <path
                  fillRule='evenodd'
                  d='M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z'
                  clipRule='evenodd'
                />
              </svg>
            </span>
          </button>

          {/* <!-- Collapsible navigation container --> */}
          <div
            className='!visible hidden items-center lg:!flex  flex-1'
            id='navbarSupportedContent1'
            data-twe-collapse-item
          >
            {/* <!-- Left navigation links --> */}
            <ul
              className='list-style-none me-auto flex flex-col ps-0 lg:flex-row'
              data-twe-navbar-nav-ref
            >
              <li className='mb-4 lg:mb-0 lg:pe-2' data-twe-nav-item-ref>
                {/* <!-- Dashboard link --> */}
                <a
                  className='text-white transition duration-200 hover:text-secondary hover:ease-in-out focus:text-secondary active:text-secondary motion-reduce:transition-none/60 lg:px-2'
                  href='#'
                  data-twe-nav-link-ref
                >
                  Dashboard
                </a>
              </li>
              {/* <!-- Team link --> */}
              <li className='mb-4 lg:mb-0 lg:pe-2' data-twe-nav-item-ref>
                <a
                  className='text-white transition duration-200 hover:text-secondary hover:ease-in-out focus:text-secondary active:text-secondary motion-reduce:transition-none/60 lg:px-2'
                  href='#'
                  data-twe-nav-link-ref
                >
                  Team
                </a>
              </li>
              {/* <!-- Projects link --> */}
              <li className='mb-4 lg:mb-0 lg:pe-2' data-twe-nav-item-ref>
                <a
                  className='text-white transition duration-200 hover:text-secondary hover:ease-in-out focus:text-secondary active:text-secondary motion-reduce:transition-none/60 lg:px-2'
                  href='#'
                  data-twe-nav-link-ref
                >
                  Projects
                </a>
              </li>
              {/* <!-- Projects link --> */}
              <li className='mb-4 lg:mb-0 lg:pe-2' data-twe-nav-item-ref>
                <a
                  className='text-white transition duration-200 hover:text-secondary hover:ease-in-out focus:text-secondary active:text-secondary motion-reduce:transition-none/60 lg:px-2'
                  href='#'
                  data-twe-nav-link-ref
                >
                  Projects
                </a>
              </li>
              {/* <!-- Projects link --> */}
              <li className='mb-4 lg:mb-0 lg:pe-2' data-twe-nav-item-ref>
                <a
                  className='text-white transition duration-200 hover:text-secondary hover:ease-in-out focus:text-secondary active:text-secondary motion-reduce:transition-none/60 lg:px-2'
                  href='#'
                  data-twe-nav-link-ref
                >
                  Projects
                </a>
              </li>
            </ul>
            {/* <!-- Left links --> */}
          </div>

          {/* <!-- Logo --> */}
          <a
            className='font-medium text-4xl text-white hover:text-secondary active:text-secondary focus:text-secondary transition-all tracking-[.2em]'
            href='#'
          >
            TECOVAS
          </a>
          {/* <!-- Logo --> */}

          {/* <!-- Right elements --> */}
          <div className='relative flex flex-1 items-center justify-end'>
            {/* <!-- Search Icon --> */}
            <a
              className='me-4 hover:text-secondary active:text-secondary transition-all text-white'
              href='#'
            >
              <span className='[&>svg]:w-6'>
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
            </a>
            {/* <!-- Search Icon --> */}
            {/* <!-- Cart Icon --> */}
            <a
              className='me-4 hover:text-secondary active:text-secondary transition-all text-white'
              href='#'
            >
              <span className='[&>svg]:w-6'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  fill='currentColor'
                >
                  <path d='M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z' />
                </svg>
              </span>
            </a>
            {/* <!-- Cart Icon --> */}

            {/* <!-- First dropdown container --> */}
            <div
              className='relative'
              data-twe-dropdown-ref
              data-twe-dropdown-alignment='end'
            >
              {/* <!-- First dropdown trigger --> */}
              <a
                className='me-4 hover:text-secondary active:text-secondary transition-all flex items-center text-white'
                href='#'
                id='dropdownMenuButton1'
                role='button'
                data-twe-dropdown-toggle-ref
                aria-expanded='false'
              >
                {/* <!-- Dropdown trigger icon --> */}
                <span className='[&>svg]:w-6'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    fill='currentColor'
                  >
                    <path
                      fillRule='evenodd'
                      d='M5.25 9a6.75 6.75 0 0113.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 01-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 11-7.48 0 24.585 24.585 0 01-4.831-1.244.75.75 0 01-.298-1.205A8.217 8.217 0 005.25 9.75V9zm4.502 8.9a2.25 2.25 0 104.496 0 25.057 25.057 0 01-4.496 0z'
                      clipRule='evenodd'
                    />
                  </svg>
                </span>
                {/* <!-- Notification counter --> */}
                <span className='absolute -top-1/4 right-1/4 rounded-full bg-danger px-[0.35em] py-[0.15em] text-[0.6rem] font-bold leading-none text-white'>
                  1
                </span>
              </a>
              {/* <!-- First dropdown menu --> */}
              <ul
                className='absolute z-[1000] right-full top-0 m-0 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg data-[twe-dropdown-show]:block'
                aria-labelledby='dropdownMenuButton1'
                data-twe-dropdown-menu-ref
              >
                {/* <!-- First dropdown menu items --> */}
                <li>
                  <a
                    className='block w-full whitespace-nowrap bg-white px-4 py-2 text-sm font-normal text-primary hover:bg-third focus:bg-third focus:outline-none active:bg-third active:no-underline'
                    href='#'
                    data-twe-dropdown-item-ref
                  >
                    Action
                  </a>
                </li>
                <li>
                  <a
                    className='block w-full whitespace-nowrap bg-white px-4 py-2 text-sm font-normal text-primary hover:bg-third focus:bg-third focus:outline-none active:bg-third active:no-underline'
                    href='#'
                    data-twe-dropdown-item-ref
                  >
                    Another action
                  </a>
                </li>
                <li>
                  <a
                    className='block w-full whitespace-nowrap bg-white px-4 py-2 text-sm font-normal text-primary hover:bg-third focus:bg-third focus:outline-none active:bg-third active:no-underline'
                    href='#'
                    data-twe-dropdown-item-ref
                  >
                    Something else here
                  </a>
                </li>
              </ul>
            </div>

            {/* <!-- Second dropdown container --> */}
            <div
              className='relative'
              data-twe-dropdown-ref
              data-twe-dropdown-alignment='end'
            >
              {/* <!-- Second dropdown trigger --> */}
              <a
                className='flex items-center whitespace-nowrap transition duration-150 ease-in-out motion-reduce:transition-none'
                href='#'
                id='dropdownMenuButton2'
                role='button'
                data-twe-dropdown-toggle-ref
                aria-expanded='false'
              >
                {/* <!-- User avatar --> */}
                <img
                  src='https://tecdn.b-cdn.net/img/new/avatars/2.jpg'
                  className='rounded-full'
                  style={{ height: "25px", width: "25px" }}
                  alt=''
                  loading='lazy'
                />
              </a>
              {/* <!-- Second dropdown menu --> */}
              <ul
                className='absolute right-full top-0 z-[1000] hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg data-[twe-dropdown-show]:block'
                aria-labelledby='dropdownMenuButton2'
                data-twe-dropdown-menu-ref
              >
                {/* <!-- Second dropdown menu items --> */}
                <li>
                  <a
                    className='block w-full whitespace-nowrap bg-white px-4 py-2 text-sm font-normal text-primary hover:bg-third focus:bg-third focus:outline-none active:bg-third active:no-underline'
                    href='#'
                    data-twe-dropdown-item-ref
                  >
                    Action
                  </a>
                </li>
                <li>
                  <a
                    className='block w-full whitespace-nowrap bg-white px-4 py-2 text-sm font-normal text-primary hover:bg-third focus:bg-third focus:outline-none active:bg-third active:no-underline'
                    href='#'
                    data-twe-dropdown-item-ref
                  >
                    Another action
                  </a>
                </li>
                <li>
                  <a
                    className='block w-full whitespace-nowrap bg-white px-4 py-2 text-sm font-normal text-primary hover:bg-third focus:bg-third focus:outline-none active:bg-third active:no-underline'
                    href='#'
                    data-twe-dropdown-item-ref
                  >
                    Something else here
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* <!-- Right elements --> */}
        </div>
      </nav>
    </div>
  );
};

export default Header;
