import React from 'react'

export default function ContactUs() {
  return (
    <section className="mb-16 md:mb-28">
    <div className="container">
        <div className="flex flex-col md:flex-row gap-x-5">
            <img src="../public/images/contact.png" className="w-[296px] m-auto" alt="" />
            <div className="text-zinc-700 dark:text-white">
                {/* product header */}
                <div className="flex items-end justify-between mb-5 md:mb-6">
                    <div>
                        <h2 className="section-title">یکی از بهترین قهوه ها !</h2>
                        <span className="section-subtitle">کیفیت قهوه را از ما بخواهید ...</span>
                    </div>
                </div>
                <div className="flex gap-x-2.5 mb-6">
                   <span className="inline-block w-1 h-1 bg-zinc-700 dark:bg-gray-400 rounded-full"></span>
                   <span className="inline-block w-1 h-1 bg-zinc-700 dark:bg-gray-400 rounded-full"></span>
                   <span className="inline-block w-1 h-1 bg-zinc-700 dark:bg-gray-400 rounded-full"></span>
                </div>
                <p className="text-lg md:text-2xl mb-6">فضای گرم و دنج ما را احساس کنید، جایی که همه می توانند قهوه معطری پیدا کنند و دسرهای خوشمزه ما را که کاملاً با قهوه داغ همراه شده است، امتحان کنند. فضای داخلی شیک و کارکنان خوش برخورد ما روز شما را می سازد!</p>
                <div className="flex items-center justify-center cursor-pointer w-[216px] h-15 gap-x-2 text-orange-300 border-2 border-orange-300 hover:bg-orange-300 dark:hover:text-zinc-700 hover:text-white rounded-full">
                    <svg className="w-[22px] md:w-8 h-[22px] md:h-8">
                        <use href="#phone"></use>
                    </svg>
                    <span className="text-base md:text-xl tracking-tightes">ثبت سفارش تلفنی</span>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}
