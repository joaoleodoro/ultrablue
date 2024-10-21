import React, { useState } from 'react';

function Cartaoideal () {

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


    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    };

    const handlePrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
    };

    return (
        <>
            <section className="bg-black p-7 lg:p-20 pb-16">
                <div className="flex flex-col mt-6">
                    <h1 className="text-[35px] lg:text-[60px] font-semibold bg-gradient-to-r from-[#ffffff] to-[#A0AECA] bg-clip-text text-transparent leading-tight lg:w-[625px]">
                        Esse é o Cartão ideal para quem:
                    </h1>

                    <div className="flex justify-start mt-[60px]">
                        <div className="flex flex-col gap-[20px] w-[300px]">
                            <h2 className="text-[#E3E9F5] text-[22px] lg:text-[25px] font-semibold lg:w-[336px] ">
                                {data[currentIndex].title}
                            </h2>
                            <p className="text-[#A0AECA] text-[18px] lg:text-[20px] font-semibold h-[95px]">
                                {data[currentIndex].parag}
                            </p>
                        </div>
                    </div>

                    <div className='mt-8'>
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



export default Cartaoideal;
