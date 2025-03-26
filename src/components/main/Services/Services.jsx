import React from 'react'

export default function Services() {
    // becuse svg of this section eatch haev diffrent size it will be coplicated to make
    // this section a data and use map so i let it stay like this
  return (
    <section className="services mb-12 md:mb-36">
            <div className="container">
                <div className="flex justify-between items-center flex-wrap *:w-1/2 lg:*:w-auto gap-y-11 text-center lg:text-right">
                    <div className="flex flex-col md:flex-row items-center gap-x-4">
                        <svg className="h-[73px] w-[66px] dark:hidden">
                            <use href="#support"></use>
                        </svg>
                        <svg className="h-[73px] w-[66px] hidden dark:block">
                            <use href="#support-dark"></use>
                        </svg>
                        <div className="flex flex-col justify-center gap-y-3.5 text-zinc-700 dark:text-white">
                            <span className="font-DanaDemiBold text-sm md:text-lg">پشتیبانی شبانه روزی</span>
                            <span className="text-xs md:text-sm">7 روز هفته ، 24 ساعته</span>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row items-center gap-x-4">
                        <svg className="h-[73px] w-[108px] dark:hidden">
                            <use href="#express-delivery"></use>
                        </svg>
                        <svg className="h-[73px] w-[108px] hidden dark:block">
                            <use href="#express-delivery-dark"></use>
                        </svg>
                        <div className="flex flex-col justify-center gap-y-3.5 text-zinc-700 dark:text-white">
                            <span className="font-DanaDemiBold text-sm md:text-lg">امکان تحویل اکسپرس</span>
                            <span className="text-xs md:text-sm">ارسال بسته با سرعت باد</span>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row items-center gap-x-4">
                        <svg className="h-[73px] w-[51px] dark:hidden">
                            <use href="#coffe"></use>
                        </svg>
                        <svg className="h-[73px] w-[51px] hidden dark:block">
                            <use href="#coffe-dark"></use>
                        </svg>
                        <div className="flex flex-col justify-center gap-y-3.5 text-zinc-700 dark:text-white">
                            <span className="font-DanaDemiBold text-sm md:text-lg">رست تخصصی</span>
                            <span className="text-xs md:text-sm">تازه برشته شده و با کیفیت</span>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row items-center gap-x-4">
                        <svg className="h-[73px] w-[75px] dark:hidden">
                            <use href="#pitcher"></use>
                        </svg>
                        <svg className="h-[73px] w-[75px] hidden dark:block">
                            <use href="#pitcher-dark"></use>
                        </svg>
                        <div className="flex flex-col justify-center gap-y-3.5 text-zinc-700 dark:text-white">
                            <span className="font-DanaDemiBold text-sm md:text-lg">اکسسوری قهوه</span>
                            <span className="text-xs md:text-sm">وسایل و ادوات دم آوری</span>
                        </div>
                    </div>
                </div>
            </div>
    </section>
  )
}
