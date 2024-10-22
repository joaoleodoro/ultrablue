import Bg1 from "../assets/bg1.png";

function Herosection() {
  return (
    <>
      <section
        className="flex flex-col items-center justify-end bg-cover bg-center h-[650px] lg:h-screen pb-12 lg:gap-8"
        style={{ backgroundImage: `url(${Bg1})` }}
        
      >
        <div className="flex flex-col items-center text-center m-6 gap-5 lg:gap-2 pl-4 pr-4">
            <h2 className="text-[26px] lg:text-[40px] font-medium text-white">É tempo de ir além.</h2>
            <h1 className="text-[35px] lg:text-[60px] font-semibold bg-gradient-to-r from-[#ffffff] to-[#A0AECA] bg-clip-text text-transparent leading-tight">Cartão Ultrablue BTG Pactual</h1>
        </div>

        <div className="flex gap-5">
            <button className="bg-[#F9FBFF] w-[139px] lg:w-[300px] h-[43px] lg:h-[60px] rounded-lg cursor-pointer hover:bg-[#e3e7f0] transition-[1s]">
                <p className="text-[14px] lg:text-[20px] font-medium text-black">Seja Ultrablue</p>
            </button>
            <button className="bg-transparent text-white w-[139px] h-[43px] lg:w-[300px] lg:h-[60px]  rounded-lg border-solid border-2 border-[#A0AECA] cursor-pointer hover:bg-[#e3e7f01a] transition-[1s]">
                <p className="text-[14px] lg:text-[20px] font-medium text-[#EBF1F9]">Já sou cliente</p>
            </button>
        </div>
        
      </section> 
    </>
  );
}

export default Herosection;
