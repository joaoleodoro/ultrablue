import React, { useState } from 'react';
import Sea from "../assets/sea.jpg"
import Food from "../assets/food.jpg"
import Travel from "../assets/travel.jpg"
import Celebration from "../assets/celebration.jpg"


function Cartaoideal() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    };
    
    const handlePrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
    };
  

    return (
        <>
            <section className="bg-black p-7 lg:p-20 pb-20">
                
                    <div className="flex flex-col mt-6 bg-white pb-4  rounded-xl lg:rounded-3xl pt-10 pl-4 pr-4 md:p-14 lg:p-20">
                        <div className='flex flex-col gap-3'>
                            <h1 className="text-[35px] lg:text-[60px] font-semibold bg-gradient-to-r from-[#08102D] to-[#5F739B] bg-clip-text text-transparent leading-tight">
                            Experiências exclusivas
                            </h1>
                            <p className='text-[#7A89A6] text-[20px] font-semibold'>
                                Conte com um concierge via WhatsApp para viver experiências únicas sem se preocupar.
                            </p>
                        </div>
                        

                        <div className="relative flex mt-[60px] overflow-hidden ">
                            <div
                                className="flex transition-transform duration-300 ease-in-out gap-5 lg:gap-4 lg:p-4"
                                style={{ transform: `translateX(-${currentIndex * 25}%)` }}
                            >
                                {data.map((d, index) => (
                                    <div
                                        key={index}
                                        className="bg-white flex flex-col gap-[20px] w-[250px] lg:w-[280px] rounded-3xl flex-shrink-0 shadow-md mb-2 lg:hover:scale-[1.05] transition-all"
                                    >
                                        <img src={d.img} alt={d.img} className='rounded-t-3xl h-[162px]' />
                                        <p className="text-[#A0AECA] text-[14px] font-semibold p-3 pb-10">
                                            {d.parag}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="2xl:hidden flex justify-start gap-5 mt-4 ">
                            <button
                                onClick={handlePrevious}
                                className="text-black p-3 rounded-full text-[35px] hover:text-zinc-500 transition-[1s]"
                            >
                                &#10094;
                            </button>
                            <button
                                onClick={handleNext}
                                className="text-black p-3 rounded-full text-[35px] hover:text-zinc-500 transition-[1s]"
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
        img: Sea,
        parag: "Explore destinos paradisíacos em todos os cantos do mundo de forma totalmente customizada, com a exclusividade e a sofisticação oferecidas por um serviço Ultrablue.",
    },
    {
        img: Food,
        parag: "Visite restaurantes premiados com prioridade na reserva, experiências privativas e recomendações de especialistas em viagem e gastronomia.",
    },
    {
        img: Travel,
        parag: "Organize eventos, faça compras e programe passeios com curadoria customizada para o que desejar.",
    },
    {
        img: Celebration,
        parag: "Tenha acesso facilitado à compra de ingressos para grandes eventos sem se preocupar com filas e outras dificuldades.",
    },
    
];

export default Cartaoideal;
