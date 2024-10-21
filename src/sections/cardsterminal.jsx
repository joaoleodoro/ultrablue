import React, { useState } from 'react';
import Icondrink from "../assets/icondrink.png"
import Iconpassagem from "../assets/iconpassagem.png"
import Iconelevador from "../assets/iconelevador.png"
import Iconperson from "../assets/iconperson.png"



function Cardsterminal() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    };
    
    const handlePrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
    };
  

    return (
        <>
            <section className="bg-black pb-10 lg:pb-20 flex justify-center">
                
                    <div className="flex flex-col ">
                        <div className="relative flex overflow-hidden ">
                            <div
                                className="flex transition-transform duration-300 ease-in-out gap-8 lg:gap-14 lg:p-4"
                                style={{ transform: `translateX(-${currentIndex * 25}%)` }}
                            >
                                {data.map((d, index) => (
                                    <div
                                        key={index}
                                        className="flex flex-col gap-[20px] w-[275px] flex-shrink-0 lg:hover:scale-[1.05] transition-all items-center"
                                    >
                                        <img src={d.img} alt={d.img} className='w-[61px]' />
                                        <p className="text-[#E3E9F5] text-[18px] font-semibold p-3 text-center">
                                            {d.parag}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="flex justify-start gap-5 mt-8 xl:hidden ml-5">
                            <button
                                onClick={handlePrevious}
                                className="text-white p-3 rounded-full text-[35px] hover:text-zinc-300 transition-[1s]"
                            >
                                &#10094;
                            </button>
                            <button
                                onClick={handleNext}
                                className="text-white p-3 rounded-full text-[35px] hover:text-zinc-300 transition-[1s]"
                            >
                                &#10095;
                            </button>
                        </div>

                    </div>
                
                
            </section>
        </>
    );
}

const data = [
    {
        img: Iconelevador,
        parag: "Acesso independente dos demais terminais. ",
    },
    {
        img: Iconpassagem,
        parag: "Chegadas, partidas e conexões no próprio Terminal.",
    },
    {
        img: Iconperson,
        parag: "OrgaCheck-in, despacho de bagagens, raio-x e processos de embarque e desembarque dedicados e sem filas.",
    },
    {
        img: Icondrink,
        parag: "Espaços premium com lounges compartilhados, lounges privativos, sala de reunião e banheiros com duchas.",
    },
    
];

export default Cardsterminal;
