import Phone from "../assets/app-phone.png"

function Bonus () {
    return (
        <>
        <section className="bg-black p-7 lg:pt-1 pb-16">
                <div className="flex flex-col items-center justify-start lg:flex-row mt-6 gap-[0px]">
                    <img src={Phone} alt="app digital" className="hidden lg:block max-w-[650px] hover:scale-[1.05] transition-all" />

                    <div className="flex flex-col gap-[60px]">
                        <h1 className="text-[32px] lg:text-[40px] font-semibold bg-gradient-to-r from-[#ffffff] to-[#A0AECA] bg-clip-text text-transparent leading-tight pr-2 max-w-[560px] ">
                        Welcome Bônus Ultrablue: ganhe 100 mil pontos extras até dezembro de 2024
                        </h1>

                        <div className="flex flex-col gap-[30px] max-w-[560px]">
                            <div className="text-[#A0AECA] text-[20px] font-semibold flex flex-col lg:flex-row gap-[30px]">
                                <p>
                                Para gastos <span className="text-[#E3E9F5]">a partir de R$ 60 mil</span> no mesmo período, ganhe 50 mil pontos adicionais
                                </p>

                                <p>
                                Ao atingir <span className="text-[#E3E9F5]">R$ 120 mil em gastos</span> no seu Ultrablue entre <span className="text-[#E3E9F5]">01/11 e 31/12/2024</span>, ganhe 100 mil pontos adicionais
                                </p>
                            </div>

                            <div className="text-[#A0AECA] text-[20px] font-semibold">
                                <p>
                                No caso de clientes que optarem pelo <span className="text-[#E3E9F5]">cashback na fatura</span> como programa de fidelidade, os valores do benefício serão <span className="text-[#E3E9F5]">R$ 2.500 e R$ 1.250</span>, respectivamente
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col lg:flex-row gap-5 mt-5">
                            <button className="bg-[#F9FBFF] w-full lg:w-[275px] h-[43px] lg:h-[60px] rounded-lg cursor-pointer hover:bg-[#e3e7f0] transition-[1s]">
                                <p className="text-[14px] lg:text-[20px] font-medium text-black">Seja Ultrablue</p>
                            </button>
                            <button className="bg-transparent text-white w-full h-[43px] lg:w-[275px] lg:h-[60px]  rounded-lg border-solid border-2 border-[#A0AECA] cursor-pointer hover:bg-[#e3e7f01a] transition-[1s]">
                                <p className="text-[14px] lg:text-[20px] font-medium text-[#EBF1F9]">Já sou cliente</p>
                            </button>
                        </div>
                    </div>

                </div>
        </section>
        </>
    )
}

export default Bonus