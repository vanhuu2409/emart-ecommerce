import { IoIosArrowDown } from "react-icons/io";
import { BiSearch } from "react-icons/bi";
import { FiShoppingBag } from "react-icons/fi";
import { AiOutlineHeart } from "react-icons/ai";
import { FiUser } from "react-icons/fi";
import { CiUser } from "react-icons/ci";
const Header = () => {
  const navItems = [
    {
      parentNav: "Demo",
      childNav: (
        <div className='relative border-y px-24 w-full'>
          <div>
            <img
              src='https://emart.wpthemedemos.com/big-fashion/wp-content/uploads/sites/7/2023/03/fashion-menu-01.webp'
              alt='shopnow'
            />
            <h3>New product on the market</h3>
            <a href='/' className='capitalize'>
              Shop now
            </a>
          </div>
        </div>
      ),
    },
    {
      parentNav: "Product",
      childNav: (
        <div className='border-y px-24 w-full'>
          <div>
            <img
              src='https://emart.wpthemedemos.com/big-fashion/wp-content/uploads/sites/7/2023/03/fashion-menu-01.webp'
              alt='shopnow'
            />
            <h3>New product on the market</h3>
            <a href='/' className='capitalize'>
              Shop now
            </a>
          </div>
        </div>
      ),
    },
    {
      parentNav: "Shop",
      childNav: (
        <div className='border-y px-24 w-full'>
          <div>
            <img
              src='https://emart.wpthemedemos.com/big-fashion/wp-content/uploads/sites/7/2023/03/fashion-menu-01.webp'
              alt='shopnow'
            />
            <h3>New product on the market</h3>
            <a href='/' className='capitalize'>
              Shop now
            </a>
          </div>
        </div>
      ),
    },
    {
      parentNav: "Blog",
      childNav: "Demo4",
    },
    {
      parentNav: "Contact",
      childNav: "Demo5",
    },
  ];
  const discount = (
    <div className='bg-[#ad5c5c] text-[18.4px] py-[5px]'>
      <p className='text-white text-center text-base font-light w-full tracking-[.4px] leading-[28px]'>
        Free delivery on orders over $1499. Don’t miss discount.
      </p>
    </div>
  );
  const navList = (
    <nav className='flex justify-between items-center mx-4'>
      {/* brand */}
      <a href='/'>
        <img
          alt='Emart'
          className='w-[148px] h-[38px]'
          src='https://emart.wpthemedemos.com/big-fashion/wp-content/uploads/sites/7/2022/12/emart-011.webp'
        />
      </a>
      {/* navbar - parent nav */}
      <ul className='flex gap-2'>
        {navItems.map((item) => {
          {
            /* nav item */
          }
          return (
            <li key={item.parentNav + "id"} className='group capitalize'>
              {/* <div className='h-0 w-0 group-hover:h-14 bg-red-800 top-0 left-0 z-10 absolute'></div> */}
              <a
                href='/'
                className='relative text-base text-[#000a12] font-medium px-4 py-6 inline-flex items-center gap-1 justify-center text-center tracking-[.2px] leading-[28px'
              >
                {item.parentNav}
                <IoIosArrowDown className='group-hover:-rotate-180 transition-all duration-500' />
              </a>
              {/* Child nav */}
              <ul className=' bg-white absolute top-full left-0 right-0 w-full opacity-0 -translate-y-5 group-hover:opacity-100 group-hover:-translate-y-0 transition-all duration-500'>
                <li className=''>{item.childNav}</li>
              </ul>
            </li>
          );
        })}
      </ul>
      {/* infobar */}
      <div className='flex items-center gap-4'>
        <button className='p-1'>
          <BiSearch className='text-2xl text-[#000a12]' />
        </button>
        <button className='p-1'>
          <FiUser className='text-2xl text-[#000a12]' />
        </button>
        <button className='relative p-1'>
          <AiOutlineHeart className='text-2xl text-[#000a12]' />
          <span className='absolute -top-1 -right-[6px] font-semibold flex items-center justify-center text-[14px] text-[#000a12] '>
            0
          </span>
        </button>
        <button className='relative p-1'>
          <FiShoppingBag className='text-2xl text-[#000a12]' />
          <span className='absolute -top-1 -right-[6px] font-semibold flex items-center justify-center text-[14px] text-[#000a12] '>
            0
          </span>
        </button>
      </div>
    </nav>
  );
  return (
    <header className='sticky bg-white top-0'>
      {discount}
      {navList}
    </header>
  );
};

export default Header;
