import React from 'react'

export default function Footer() {

    const scrollToTop = () =>{
        window.scrollTo({top:0, behavior: 'smooth'})
    }
  return (
    <footer className="relative bg-zinc-700">
        {/* icon & curve */}
        <div onClick={scrollToTop}>
            <svg className="absolute hidden md:inline-block -top-0.5 left-0 right-0 mx-auto text-gray-100 dark:text-zinc-800 w-[100px] h-[22px]">
                <use href="#curve-down"></use>
            </svg>    
            <div className="absolute hidden md:flex items-center justify-center -translate-y-2/4 top-0 left-0 right-0 m-auto w-[30px] h-[30px] border-2 rounded-full border-orange-300">
                <svg className="w-5 h-5 text-zinc-700 dark:text-white rotate-180">
                    <use href="#chevron-down-minit"></use>
                </svg>
             </div>    
        </div>
        {/* contents */}
        <div className="w-[95%] lg:w-[90%] m-auto pt-16 pb-12 text-gray-300">
            <div className="flex flex-col lg:flex-row justify-between flex-wrap">
                <div className="max-w-[350px] sm:max-w-[550px]">
                    <div className="flex items-center justify-start gap-x-5 mb-4.5">
                        <svg className="w-[57px] h-[54px]">
                            <use href="#logo">
                            </use>
                        </svg>
                        <svg className="w-[138px] h-[54px]">
                            <use href="#logo-type">
                            </use>
                        </svg>
                    </div>
                    <p className="text-lg md:text-xl">ما برآنیم تا با پیشرو بودن در فرآیند تولید، نوع و کیفیت محصول، خدمات و توزیع، الگویی برای تولیدکنندگان ایرانی باشیم و به مرجع فرهنگ قهوه در ایران تبدیل شویم. می‌پنداریم که نظر مردم ایران و منطقه باید نسبت به کالای ایرانی بهبود یابد و در این راستا با اشتیاق می‌کوشیم.</p>            
                </div>
                <div>
                    <h5 className="font-DanaDemiBold text-2xl mt-10 lg:mt-0 mb-10 lg:mb-7">دسترسی سریع</h5>
                    <div className="flex flex-nowrap gap-x-16">
                        <ul className="*:mb-5">
                            <li className="flex flex-nowrap items-center gap-x-2">
                                    <span className="block bg-gray-300 w-[10px] h-1 rounded-full"></span>
                                    <span className="text-base md:text-xl">حریم خصوصی</span>
                                </li>
                                <li className="flex items-center gap-x-3">
                                    <span className="block bg-gray-300 w-[10px] h-1 rounded-full"></span>
                                    <span className="text-base md:text-xl">عودت کالا</span>
                                </li>
                                <li className="flex items-center gap-x-3">
                                    <span className="block bg-gray-300 w-[10px] h-1 rounded-full"></span>
                                    <span className="text-base md:text-xl">شرایط استفاده</span>
                                </li>
                                <li className="flex items-center gap-x-3">
                                    <span className="block bg-gray-300 w-[10px] h-1 rounded-full"></span>
                                    <span className="text-base md:text-xl">ثبت سفارش</span>
                                </li>
                        </ul>
                        <ul className="*:mb-5">
                            <li className="flex flex-nowrap items-center gap-x-2">
                                <span className="block bg-gray-300 w-[10px] h-1 rounded-full"></span>
                                <span className="text-base md:text-xl">پرسش های متداول</span>
                            </li>
                            <li className="flex items-center gap-x-3">
                                <span className="block bg-gray-300 w-[10px] h-1 rounded-full"></span>
                                <span className="text-base md:text-xl">فرصت های شغلی</span>
                            </li>
                            <li className="flex items-center gap-x-3">
                                <span className="block bg-gray-300 w-[10px] h-1 rounded-full"></span>
                                <span className="text-base md:text-xl">ضمانت نامه ها</span>
                            </li>
                            <li className="flex items-center gap-x-3">
                                <span className="block bg-gray-300 w-[10px] h-1 rounded-full"></span>
                                <span className="text-base md:text-xl">ارتباط با ما</span>
                            </li>
                        </ul>
                    </div>                   
                </div>
                <div>
                    <h5 className="font-DanaDemiBold text-2xl mt-10 lg:mt-0 md:mb-10 lg:mb-7">در تماس باشیم</h5>
                    <div className="">
                        <div className="flex items-center gap-x-3 mb-5">
                            <svg className="h-6 w-6">
                                <use href="#map-pin"></use>
                            </svg>
                            <span className="text-base md:text-xl">بلوار میرداماد، خیابان البرز، کوچه قبادیان شرقی، پلاک ۳۳</span>
                        </div>
                        <div className="flex flex-wrap gap-y-3 gap-x-5 mb-11">
                            <div className="flex items-center gap-x-3">
                                <svg className="h-6 w-6">
                                    <use href="#envelope"></use>
                                </svg>
                                <span className="text-base md:text-xl">info@Coffee.com</span>
                            </div>
                            <div className="flex items-center gap-x-3">
                                <svg className="h-6 w-6">
                                    <use href="#phone"></use>
                                </svg>
                                <span className="ltr-text text-base md:text-xl">0902 123 6628</span>
                            </div>
                            <div>
                                <span className="ltr-text text-base md:text-xl">021 - 6789012</span>
                            </div>
                        </div>
                        <div className="flex flex-wrap justify-center sm:justify-between gap-y-6 gap-x-6">
                            <a href="#" className="flex items-center gap-x-2 px-7.5 py-1.5 hover:text-zinc-700 hover:bg-gradient-to-r from-orange-200 to-orange-300 font-DanaMedium text-xl border border-orange-200 rounded-xl text-orange-200">
                                <svg className="h-[38px] w-[38px] ">
                                    <use href="#instagram"></use>
                                </svg>
                                @golden_coffee
                            </a>
                            <a href="#" className="flex items-center gap-x-2 px-7.5 py-1.5 text-zinc-700 bg-gradient-to-r from-orange-200 to-orange-300 font-DanaMedium text-xl border border-orange-200 rounded-xl">
                                <svg className="h-[38px] w-[38px] ">
                                    <use href="#telegram"></use>
                                </svg>
                                @golden_coffee
                            </a>
                        </div>
                    </div>               
                </div> 
            </div>
            <div className="flex justify-between flex-wrap gap-y-3 border-t border-white/10 pt-12 mt-12">
                <div className="flex items-center gap-x-[10px]">
                    <div >
                        <span className="flex justify-center items-center border border-white/10 w-[30px] h-[30px] rounded-full">
                            <span className="flex justify-center items-center border border-white/20 w-5 h-5 rounded-full ">
                                <span className="block w-[10px] h-[10px] bg-gradient-to-bl from-orange-200 to-orange-300 rounded-full"></span>
                            </span>
                        </span>                    
                    </div>
                    <p className="font-DanaMedium">تمام حقوق این رابط کاربری متعلق به <span className="text-orange-200">سبزلرن</span> میباشد و دانشجوی این دوره اجازه استفاده آن را در مصارف شخصی و تجاری ندارد.</p>
                </div>
                <div>
                    <p className="font-DanaMedium text-left">Copyright © 2023 Golden Coffee. All rights reserved.</p>
                </div>
            </div>
        </div>        
    </footer>
  )
}
