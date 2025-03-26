import React from 'react'

export default function HeroSection() {
    const scrollToBottom = () =>{
        window.scrollTo({top: document.body.scrollHeight, behavior: 'smooth'});
    };
  return (
    <section className="home relative  h-[200px] sm:h-auto sm:aspect-[2/1] md:aspect-auto  md:bg-[url(../images/headerBgDesktop.webp)] home-mobile bg-no-repeat bg-cover bg-[center_top]">
    <div className="container relative overflow-hidden h-full md:min-h-screen flex flex-col items-end justify-center">
        <div className="text-white">
            <h1 className="font-MorabbaBold md:text-6xl text-2xl md:mb-3">قهوه عربیکا تانزانیا</h1>
            <span className="font font-MorabbaLight md:text-5xl text-xl">یک فنجان بالانس !</span>
            <span className="block h-0.5 w-[100px] bg-orange-300 md:my-8 my-3"></span>
            <p className="md:text-2xl text-xs md:w-[460px] w-50">قطعا نام آشنای عربیکا را شنیده اید، عربیکا یکی از گونه های قهوه است که در نواحی مختلف کمربند قهوه کشت میشود.</p>
        </div>
         {/* circles */}
    <div className="absolute bottom-0 left-0 right-0 m-auto hidden md:flex items-center justify-center w-[203px] h-[203px] rounded-full border border-white/25 translate-y-2/4">
        <div className="flex items-center justify-center w-[145px] h-[145px] rounded-full border border-white/50">
            <div className="w-[95px] h-[95px] rounded-full border border-white/80"></div>
        </div>
    </div>
    </div>
    {/* curve */}
    <svg className="absolute hidden md:inline-block bottom-0 left-0 right-0 mx-auto text-gray-100 dark:text-zinc-800 w-[100px] h-[22px]">
        <use href="#curve"></use>
    </svg>
   
    {/* arrow-btn */}
     <div onClick={scrollToBottom} className="absolute hidden md:flex items-center justify-center translate-y-2/4 bottom-0 left-0 right-0 m-auto w-[30px] h-[30px] border-2 rounded-full border-orange-300">
        <svg className="w-5 h-5 text-zinc-700 dark:text-white">
            <use href="#chevron-down-minit"></use>
        </svg>
     </div>
</section>
  )
}
