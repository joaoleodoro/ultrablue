import Bg3 from "../assets/bg3.png"
import Iconcartao from "../assets/iconcartao.png"
import Cardsterminal from "./cardsterminal"
import Iconcoin from "../assets/iconcoin.png"
import Iconsofa from "../assets/sofa.png"
import Iconplane from "../assets/plane.png"
import Iconphone from "../assets/phone.png"

function Terminal () {
    return (
        <>
            <section className="flex flex-col bg-cover lg:bg-no-repeat bg-center h-[600px] md:h-[800px] lg:h-[980px] bg-black "
            style={{ backgroundImage: `url(${Bg3})` }}
            id="terminal"
            >
                
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
            
            <section className="bg-black lg:hidden pb-8">
                <div className="flex flex-col lg:flex-row gap-10 p-8 max-w-[700px]">
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

            <section className="bg-black flex justify-start xl:justify-center p-3 overflow-hidden">
                <Cardsterminal />
            </section>

            <section className="bg-black flex justify-center">
                <div>
                    <div className="flex flex-col lg:flex-row">
                        <div className="flex flex-col">
                            <div className="flex flex-col lg:flex-row">
                                <div className="bg-[#07101D] flex flex-col p-6 m-5 rounded-3xl border-solid border-2 border-[#838893] max-w-[370px] lg:max-w-[412px] gap-3">
                                    <img src={Iconsofa} alt="sofa" className="w-[200px]" />
                                    <div className="flex flex-col gap-[30px]">
                                        <h2 className="text-[25px] font-semibold bg-gradient-to-r from-[#ffffff] to-[#A0AECA] bg-clip-text text-transparent leading-tight">
                                        Conforto ilimitado em qualquer lugar do mundo
                                        </h2>
                                        <div className="flex flex-col gap-2">
                                            <p className="text-[#E3E9F5] text-[17px]">
                                            Tenha acesso ilimitado a mais de 1.000 salas VIP LoungeKey e relaxe com conforto e sofisticação ao lado do
                                            seu acompanhante*.
                                            </p>
                                            <p className="text-[#E3E9F5] text-[9px]">
                                            Consulte a lista de salas VIP e veja as instalações e facilidades de cada uma.

                                            Acesso ilimitado para o titular do Ultrablue, com direito a até 12 convidados por ano.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-[#07101D] flex flex-col p-6 m-5 rounded-3xl border-solid border-2 border-[#838893] max-w-[370px] lg:max-w-[412px] gap-3">
                                    <img src={Iconplane} alt="avião" className="w-[200px]" />
                                    <div className="flex flex-col gap-[30px]">
                                        <div>
                                            <h2 className="text-[40px] font-semibold bg-gradient-to-r from-[#ffffff] to-[#A0AECA] bg-clip-text text-transparent">-3,28%</h2>
                                            <h2 className="text-[25px] font-semibold bg-gradient-to-r from-[#ffffff] to-[#A0AECA] bg-clip-text text-transparent leading-tight">
                                            Compras no exterior mais seguras, sem pagar mais por isso
                                            </h2>
                                        </div>
                                        
                                        <div className="flex flex-col gap-2">
                                            <p className="text-[#E3E9F5] text-[17px]">
                                            Faça compras no exterior de forma prática e segura usando o Ultrablue e pague o mesmo valor do papel-moeda com o IOF Especial, que oferece cashback de 3,28%
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-[#07101D] flex flex-col lg:flex-row-reverse p-6 m-5 rounded-3xl border-solid border-2 border-[#838893] max-w-[370px] lg:max-w-[864px] gap-3 items-center">
                                    <img src={Iconcoin} alt="moeda" className="w-[200px]" />
                                    <div className="flex flex-col gap-[30px]">
                                        <div>
                                            <p className="text-[#E3E9F5] text-[17px]">
                                            Sob medida para você
                                            </p>
                                            <h2 className="text-[25px] font-semibold bg-gradient-to-r from-[#ffffff] to-[#A0AECA] bg-clip-text text-transparent leading-tight">
                                            Compras no exterior mais seguras, sem pagar mais por isso
                                            </h2>
                                        </div>
                                        
                                        <div className="flex flex-col gap-2">
                                            <p className="text-[#E3E9F5] text-[17px]">
                                            Faça compras no exterior de forma prática e segura usando o Ultrablue e pague o mesmo valor do papel-moeda com o IOF Especial, que oferece cashback de 3,28%
                                            </p>
                                        </div>
                                    </div>
                            </div>
                        </div>
                        <div className="bg-[#07101D] flex flex-col p-6 m-5 rounded-3xl border-solid border-2 border-[#838893] max-w-[370px] lg:max-w-[412px] gap-3 justify-around">
                                    <img src={Iconphone} alt="moeda" className="w-[200px]" />
                                    <div className="flex flex-col gap-[30px]">
                                        <div>
                                            <h2 className="text-[25px] font-semibold bg-gradient-to-r from-[#ffffff] to-[#A0AECA] bg-clip-text text-transparent leading-tight">
                                            Escolha entre cashback ou pontos
                                            </h2>
                                        </div>
                                        
                                        <div className="flex flex-col gap-2">
                                            <p className="text-[#E3E9F5] text-[17px] gap-2">
                                            Vá além com um programa de fidelidade que oferece cashback de até 1,7% para qualquer compra realizada com o Cartão, em lojas físicas ou on-line, ou até 3,5 pontos no programa da sua escolha*, por dólar gasto, para trocar por produtos, viagens e experiências únicas.
                                            </p>
                                            <p className="text-[#E3E9F5] text-[9px]">
                                            *Livelo ou Esfera
                                            </p>
                                        </div>
                                    </div>
                            </div>
                    </div>
                </div>
            </section>
            

            
        </>
    )
}

export default Terminal