function Perguntas() {
    

    return (
        <>
            <section className="bg-black p-7 lg:p-20 pb-20" id="duvidas">
                <div className="flex flex-col bg-white rounded-xl lg:rounded-3xl p-8 md:p-14 lg:p-20 gap-5">
                    <h2 className="text-[30px] lg:text-[60px] font-semibold bg-gradient-to-r from-[#08102D] to-[#5F739B] bg-clip-text text-transparent text-center">
                        Perguntas frequentes
                    </h2>
                    {data.map((d, index) => (
                        <div key={index} className="flex flex-col bg-white rounded-xl lg:rounded-3xl p-8 md:p-14  gap-5 shadow-md lg:hover:scale-[1.05] transition-all" >
                            <h2 className="text-[18px] font-semibold bg-gradient-to-r from-[#08102D] to-[#5F739B] bg-clip-text text-transparent leading-tight">{d.title}</h2>
                            <div className="flex flex-col gap-5">
                            <p className="text-[14px] text-[#5F739B]  font-semibold">{d.parag}</p>
                                <div>
                                    <p className="text-[14px] text-[#5F739B]  font-semibold">{d.parag2}</p>
                                    <p className="text-[14px] text-[#5F739B]  font-semibold">{d.parag3}</p>
                                    <p className="text-[14px] text-[#5F739B]  font-semibold">{d.parag4}</p>
                                    <p className="text-[14px] text-[#5F739B]  font-semibold">{d.parag5}</p>
                                    <p className="text-[14px] text-[#5F739B]  font-semibold">{d.parag6}</p>
                                </div>
                                <p className="text-[14px] text-[#5F739B]  font-semibold">{d.parag7}</p>
                            </div>
                            
                            
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}

const data = [
    {
        title: "Quais são os critérios de elegibilidade do Cartão Ultrablue BTG Pactual?",
        parag: "Para ser elegível, é necessário investir ao menos R$ 1 milhão com o BTG Pactual. Se você ainda não alcançou esse valor, traga seus investimentos para o BTG e, após atingir o valor mínimo para elegibilidade, solicite o seu Ultrablue e comece a desfrutar de todos os benefícios.",
    },
    {
        title: "Como solicitar o Cartão Ultrablue BTG Pactual?",
        parag: "A solicitação do Ultrablue pode ser feita por clientes elegíveis diretamente no app BTG Banking. Para clientes portadores de outra categoria de Cartão de Crédito BTG Pactual, através do seguinte passo a passo: Menu > Cartão > Alterar Categoria do cartão.",
    },
    {
        title: "Como posso ter isenção de anuidade?",
        parag: "Haverá isenção de anuidade para os clientes que mantiverem investimentos acima de R$ 400 mil.",
        parag2: "Para aqueles que não atingirem este patamar, a anuidade do cartão será de R$ 400 por mês, com a política de isenção: a cada R$ 1 mil em gastos ou R$ 10 mil em investimentos, o cliente receberá um desconto de R$ 10 na anuidade."
    },
    {
        title: "Como funciona o concierge?",
        parag: "O concierge é um assistente pessoal que pode ser acionado diretamente pelo WhatsApp. Ele pode apoiar você no planejamento de viagens, eventos e passeios, na reserva de restaurantes, compra de ingressos e muito mais, garantindo a exclusividade e a sofisticação estimadas por quem vive o lifestyle Ultrablue.",
    },
    {
        title: "Quais recursos de segurança o BTG Pactual oferece?",
        parag: "No BTG Pactual, a sua segurança é prioridade. Para reforçá-la, oferecemos funcionalidades como modo lugar seguro, ocultar contas, gerenciador de dispositivos, bloqueio ágil da conta e do cartão pelo Portal Web e muito mais. Além disso, como cliente Ultrablue, você dispõe do Seguro Conta e Cartão para proteger o seu patrimônio contra perdas e roubos, com cobertura especial para que você fique despreocupado até mesmo nas suas viagens, sem nenhum custo adicional. Conheça todas as features na nossa página de segurança.",
    },
    {
        title: "Como posso acessar salas VIP em aeroportos?",
        parag: "Como cliente Ultrablue, você tem acesso a mais de mil salas VIP LoungeKey ao redor do mundo sem nenhum custo. Basta acessar o espaço com o seu Ultrablue e o desconto ou isenção do valor serão refletidos na sua fatura.",
    },
    {
        title: "Como posso acessar o Terminal BTG Pactual no aeroporto de Guarulhos (GRU), São Paulo?",
        parag: "O Terminal BTG Pactual inaugura até o final de 2024. Como cliente Ultrablue, você poderá comprar seu acesso com prioridade e ter 20% de desconto no site: https://terminal.btgpactual.com/.",
        parag2: "descendo a rampa do embarque do Terminal 3, com entrada exclusiva.O Terminal BTG Pactual, fica no no Aeroporto de Guarulhos, ",
    },
    {
        title: "Já tenho outro Cartão de Crédito BTG Pactual. Como deve ser feito o upgrade para o Ultrablue?",
        parag: "Caso atenda aos critérios de elegibilidade, você pode solicitar o upgrade para o Ultrablue diretamente pelo app BTG Banking seguindo o passo a passo abaixo.",
        parag2: "Faça login no app BTG Banking.",
        parag3: "No menu, toque em “Cartão”.",
        parag4: "Depois, toque em “Alterar categoria do cartão”.",
        parag5: "Selecione o Ultrablue e confirme a troca.",
        parag6: "Pronto! Aproveite os benefícios exclusivos de ser Ultrablue.",
        parag7: "Atenção: garanta que o app está atualizado para conseguir solicitar o upgrade.",
    },
    {
        title: " Não consegui solicitar o upgrade. Qual pode ser o problema?",
        parag: "O Ultrablue está disponível para clientes com a partir de R$ 1 milhão investido. Se você é elegível e não conseguiu solicitar o upgrade, siga o passo a passo a seguir para atualizar o app BTG Banking.",
        parag2: "Entre na sua loja de aplicativos.",
        parag3: "Procure por “BTG Banking”.",
        parag4: "Localize o app BTG Banking e toque em “Atualizar”.",
        parag5: "Quando a atualização for concluída, tente solicitar o upgrade novamente.",
    },
];

export default Perguntas;
