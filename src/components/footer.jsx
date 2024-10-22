import Btglogo from "../assets/btglogo.png"

function Footer () {
    return (
        <>
        <footer className="bg-black p-8">
            <div className="flex flex-col lg:flex-row gap-10 justify-around items-center">
                <div className="w-[200px] lg:w-[300px]">
                    <img src={Btglogo} alt="btg logo" />
                </div>
                
                <p className="text-[13px] lg:text-[14px] text-[#E3E9F5] max-w-[920px]">As informações contidas nesta apresentação não podem ser consideradas como única fonte de informações no processo decisório do investidor, que, antes de tomar qualquer decisão, deverá realizar uma avaliação minuciosa do produto e respectivos riscos em face dos seus objetivos pessoais e do seu perfil de risco ("Suitability"). RENTABILIDADE PASSADA NÃO REPRESENTA GARANTIA DE RENTABILIDADE FUTURA. Assim, não é possível prever o desempenho futuro de um investimento a partir da variação de seu valor de mercado no passado. O BTG não assume que os investidores vão obter lucros nem se responsabiliza pelas perdas. FUNDOS DE INVESTIMENTO NÃO CONTAM COM GARANTIA DO ADMINISTRADOR, DO GESTOR, DE QUALQUER MECANISMO DE SEGURO OU DO FUNDO GARANTIDOR DE CRÉDITO – FGC. É recomendada a leitura cuidadosa do Formulário de Informações Complementares e do regulamento do fundo de investimento pelo investidor ao aplicar seus recursos.​

Telefone: 0800-772-2827</p>
            </div>
        </footer>
        </>
    )
}

export default Footer