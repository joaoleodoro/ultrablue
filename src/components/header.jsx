import { useState, useEffect } from 'react';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolling ? 'bg-transparent backdrop-blur-md' : 'bg-transparent'
        }`}
      >
        <div className="flex justify-between lg:justify-around items-center p-4">
          <img src="../src/assets/btglogo.png" alt="btg logo" className="w-[90px] lg:w-[111px]" />

          <button
            className="text-white lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>

          <ul className="hidden lg:flex space-x-24 text-white ">
            <li>Ultrablue</li>
            <li>Experiências</li>
            <li>Dúvidas</li>
          </ul>
        </div>

        {isOpen && (
          <ul className="flex flex-col lg:hidden text-white p-4 space-y-4 backdrop-blur-md">
            <li>Ultrablue</li>
            <li>Experiências</li>
            <li>Dúvidas</li>
          </ul>
        )}
      </header>
    </>
  );
}

export default Header;
