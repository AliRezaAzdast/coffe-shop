import React from 'react'

export default function CoffeeClub() {
  return (
    <section className="mb-8 md:mb-20">
            <div className="container">
                <div className="flex items-center flex-wrap lg:flex-nowrap gap-y-9 xl:gap-x-24  bg-gradient-to-r from-emerald-500 to-emerald-600 px-3 py-8 lg:py-0 xl:px-11 lg:h-36 rounded-2xl">
                    <div className="flex items-center md:shrink-0 gap-3 md:gap-x-6 text-white">
                        <img src="../public/images/club/diamond.png" className="w-[87px] md:w-[110px] h-[78px] md:h-[98px]" alt="diamond" />
                        <div>
                            <h3 className="font-MorabbaBold text-2xl md:text-5xl mb-0.5 md:mb-2">کافی کلاب</h3>
                            <p className="font-MorabbaLight text-lg md:text-2xl">میدونستی میتونی با امتیاز هات قهوه بگیری ؟</p>
                        </div>
                    </div>
                    <div className="flex items-end justify-between w-full">
                            <div className="flex gap-2 lg:gap-3 xl:gap-5">
                                <div className="flex flex-col items-center justify-center w-18 md:w-[98px] h-18 md:h-[98px] pt-1.5 md:pt-5 pb-1.5 md:pb-1 bg-white rounded-2xl ">
                                    <svg className="h-10 md:h-12 w-10 md:w-12">
                                        <use href="#discovery"></use>
                                    </svg>
                                    <p className="text-emerald-600 text-xs md:text-sm">چرخ و بخت</p>
                                </div>
                                <div className="flex flex-col items-center justify-center w-18 md:w-[98px] h-18 md:h-[98px] pt-1.5 md:pt-5 pb-1.5 md:pb-1 bg-white rounded-2xl ">
                                    <svg className="h-10 md:h-12 w-10 md:w-12">
                                        <use href="#activity"></use>
                                    </svg>
                                    <p className="text-emerald-600 text-xs md:text-sm">ماموریت ها</p>
                                </div>
                                <div className="flex flex-col items-center justify-center w-18 md:w-[98px] h-18 md:h-[98px] pt-1.5 md:pt-5 pb-1.5 md:pb-1 bg-white rounded-2xl ">
                                    <svg className="h-10 md:h-12 w-10 md:w-12">
                                        <use href="#ticket-star"></use>
                                    </svg>
                                    <p className="text-emerald-600 text-xs md:text-sm">جایزه ها</p>
                                </div>
                            </div>
                            <div className="flex flex-col text-white">
                                <span className="font-DanaDemiBold text-2xl md:text-3xl">542</span>
                                <span  className="text-xs md:text-sm">امتیـــــــاز شما</span>
                                <a href="#" className="flex items-center w-[90px] md:w-[110px] h-[26px] md:h-8 pr-1.5 md:pr-2.5 rounded-full bg-gradient-to-r from-orange-200 to-orange-300">
                                    <span className="font-DanaMedium text-xs md:text-sm">دریافت جایزه</span>
                                    <svg className="h-5 md:h-6 w-5 md:w-6">
                                        <use href="#chevron-left-mini"></use>
                                    </svg>
                                </a>
                            </div>
                    </div>
                    
                </div>
             
            </div>
         </section>
  )
}
