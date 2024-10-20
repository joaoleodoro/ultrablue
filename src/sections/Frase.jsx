import Bg2 from "../assets/bg2.png"

function Frase () {
    return (
        <>
        <section className="flex flex-col justify-center bg-cover lg:bg-contain lg:bg-no-repeat bg-center h-[650px] bg-black "
        style={{ backgroundImage: `url(${Bg2})` }}>
            <div className="m-6 pl-4 pr-4 lg:pl-32 lg:pr-32">
                <h2 className="text-[30px] lg:text-[40px] font-semibold bg-gradient-to-r from-[#ffffff] to-[#A0AECA] bg-clip-text text-transparent leading-tight text-center">Vá mais longe em tudo o que imaginar, com a máxima sofisticação que um cartão pode oferecer.</h2>
            </div>
        </section>
        </>
    )
}

export default Frase