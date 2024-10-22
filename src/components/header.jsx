import { useState, useEffect } from 'react';
import Btglogo from "../assets/btglogo.png";

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
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300  ${
          scrolling ? 'bg-black' : 'bg-transparent backdrop-blur-sm '
        } ${
          isOpen ? 'rounded-b-3xl' : 'rounded-none'
        }`}
      >
        <div className={"flex justify-between lg:justify-around items-center p-3 "}>
          <img src={Btglogo} alt="btg logo" className="w-[90px] lg:w-[111px]" />

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

          <ul className="hidden lg:flex gap-16 text-white lg:items-center">
            <li><a href="#ultrablue">Ultrablue</a></li>
            <li><a href="#experiencias">Experiências</a></li>
            <li><a href="#bonus">Bônus</a></li>
            <li><a href="#terminal">Terminal</a></li>
            <li><a href="#duvidas">Dúvidas</a></li>
          </ul>
        </div>

        {isOpen && (
          <ul className="flex flex-col lg:hidden text-[#EBF1F9] p-5 pb-14 space-y-4 text-[22px] font-semibold">
            <li><a href="#ultrablue" onClick={() => setIsOpen(false)}>Ultrablue</a></li>
            <li><a href="#experiencias" onClick={() => setIsOpen(false)}>Experiências</a></li>
            <li><a href="#bonus" onClick={() => setIsOpen(false)}>Bônus</a></li>
            <li><a href="#terminal" onClick={() => setIsOpen(false)}>Terminal</a></li>
            <li><a href="#duvidas" onClick={() => setIsOpen(false)}>Dúvidas</a></li>
            <div className="flex flex-col lg:flex-row gap-5 mt-5">
                        <button className="bg-[#F9FBFF] w-full  h-[43px] rounded-lg cursor-pointer hover:bg-[#e3e7f0] transition-[1s]">
                            <p className="text-[14px] font-medium text-black">Seja Ultrablue</p>
                        </button>
                        <button className="bg-black text-white w-full h-[43px]  rounded-lg border-solid border-2 border-[#A0AECA] cursor-pointer hover:bg-[#e3e7f01a] transition-[1s]">
                            <p className="text-[14px] font-medium text-[#EBF1F9]">Já sou cliente</p>
                        </button>
                    </div>
          </ul>
        )}
      </header>
    </>
  );
}

export default Header;
