import React, { useState } from 'react';

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
            <section className="bg-black p-7 lg:p-20">
                <div className="flex flex-col mt-6">
                    <h1 className="text-[35px] lg:text-[60px] font-semibold bg-gradient-to-r from-[#ffffff] to-[#A0AECA] bg-clip-text text-transparent leading-tight max-w-[650px]">
                        Esse é o Cartão ideal para quem:
                    </h1>

                    <div className="relative flex mt-[60px] overflow-hidden">
                        <div
                            className="flex transition-transform duration-300 ease-in-out gap-4"
                            style={{ transform: `translateX(-${currentIndex * 25}%)` }}
                        >
                            {data.map((d, index) => (
                                <div
                                    key={index}
                                    className="flex flex-col gap-[20px] w-[25%] flex-shrink-0 p-4"
                                >
                                    <h2 className="text-[#E3E9F5] text-[22px] lg:text-[25px] font-semibold">
                                        {d.title}
                                    </h2>
                                    <p className="text-[#A0AECA] text-[18px] lg:text-[20px] font-semibold">
                                        {d.parag}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex justify-start gap-5 mt-8">
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

                    <div className="flex flex-col lg:flex-row gap-5 mt-5">
                        <button className="bg-[#F9FBFF] w-full lg:w-[300px] h-[43px] lg:h-[60px] rounded-lg cursor-pointer hover:bg-[#e3e7f0] transition-[1s]">
                            <p className="text-[14px] lg:text-[20px] font-medium text-black">Seja Ultrablue</p>
                        </button>
                        <button className="bg-transparent text-white w-full h-[43px] lg:w-[300px] lg:h-[60px]  rounded-lg border-solid border-2 border-[#A0AECA] cursor-pointer hover:bg-[#e3e7f01a] transition-[1s]">
                            <p className="text-[14px] lg:text-[20px] font-medium text-[#EBF1F9]">Já sou cliente</p>
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
}

const data = [
    {
        title: "Experiências diferenciadas",
        parag: "Prioriza viver experiências além do convencional",
    },
    {
        title: "Serviço personalizado",
        parag: "Quer um especialista à disposição para planejamento de viagens e outros serviços",
    },
    {
        title: "Segurança",
        parag: "Valoriza a segurança e a solidez de ser cliente do maior Banco de Investimentos da América Latina",
    },
    {
        title: "Conforto",
        parag: "Não dispensa conforto e exclusividade",
    },
    {
        title: "Exclusividade",
        parag: "Deseja acessar produtos e serviços sofisticados.",
    },
    {
        title: "Atendimento único",
        parag: "Busca atendimento 24/7 impecável em cada detalhe.",
    },
];

export default Cartaoideal;
