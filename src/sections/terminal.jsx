import Bg3 from "../assets/bg3.png"
import Iconcartao from "../assets/iconcartao.png"

function Terminal () {
    return (
        <>
            <section className="flex flex-col bg-cover lg:bg-no-repeat bg-center h-[600px] md:h-[800px] lg:h-[980px] bg-black "
        style={{ backgroundImage: `url(${Bg3})` }}>
                
                    <div className="flex flex-col h-full items-center gap-[73px] p-8 md:p-20 pt-12">
                        <h2 className="text-[35px] md:text-[60px] font-semibold bg-gradient-to-r from-[#ffffff] to-[#A0AECA] bg-clip-text text-transparent leading-tight pr-5 md:text-center">
                            Descubra um novo conceito de viagem.
                        ​</h2>

                        <div className="flex flex-row gap-20 hidden lg:flex">
                            <p className="text-[22px] lg:text-[25px] text-[#E3E9F5] font-semibold max-w-[580px]">
                                O Terminal BTG Pactual é o primeiro terminal exclusivo da América Latina, com hospitalidade 5 estrelas e serviços diferenciados para tornar a sua jornada inesquecível.
                            ​</p>
                            <div className="flex flex-row items-center gap-3">
                                <img src={Iconcartao} alt="Icon cartão" className="w-[40px]" />
                                <p className="text-[#A0AECA] text-[16px] font-semibold max-w-[310px]">
                                    Clientes Ultrablue podem acessá-lo com prioridade e têm 20% de desconto.
                                </p>
                            </div>
                        </div>
                    </div>
            </section>
            
            <section className="bg-black lg:hidden">
                <div className="flex flex-col lg:flex-row gap-10 p-8">
                    <p className="text-[20px] lg:text-[25px] text-[#E3E9F5] font-semibold">
                        O Terminal BTG Pactual é o primeiro terminal exclusivo da América Latina, com hospitalidade 5 estrelas e serviços diferenciados para tornar a sua jornada inesquecível.
                    ​</p>
                    <div className="flex flex-row items-center gap-3">
                        <img src={Iconcartao} alt="Icon cartão" className="w-[40px]" />
                        <p className="text-[#A0AECA] text-[16px] font-semibold">
                            Clientes Ultrablue podem acessá-lo com prioridade e têm 20% de desconto.
                        </p>
                    </div>
                </div>
            </section>

            <section>

            </section>
        </>
    )
}

export default Terminal