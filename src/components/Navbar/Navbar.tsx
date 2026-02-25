import { useState, useRef, useEffect } from 'react';
import { IoCloseSharp } from 'react-icons/io5';
import { TbMenu3 } from 'react-icons/tb';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLDivElement | null>(null);

  function handleClick() {
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);
  return (
    <>
      <header className="w-full flex font-medium justify-between items-center sticky top-0 bg-white z-10 py-6 px-5 md:px-20 text-lg">
        {/* menu */}
        {isOpen ? (
          <button className="text-2xl" onClick={handleClick}>
            <IoCloseSharp />
          </button>
        ) : (
          <span onClick={handleClick} className="flex  items-center gap-2  ">
            <button>Menu</button>
            <TbMenu3 />
          </span>
        )}

        <a href="/" className=" text-2xl specialText">
          David
        </a>
      </header>

      {isOpen && (
        <nav className="w-full  md:absolute  top-0 specialText flex justify-center">
          <div
            ref={navRef}
            className="  w-full md:w-[50%] md:mt-2 bg-white  md:rounded-full flex justify-center items-center fixed z-50 "
          >
            <div className="flex justify-between flex-col  md:flex-row items-center gap-5 py-7 w-[60%]">
              <a href="/">Home</a>
              <a href="#captures">Captures</a>
              <a href="#about">about</a>
              <a href="#why">Why</a>
              <a href="#testimonial">Testimonials</a>
            </div>
          </div>
        </nav>
      )}
    </>
  );
};
export default Navbar;
