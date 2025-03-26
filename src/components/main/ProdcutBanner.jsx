import React from 'react'

export default function ProdcutBanner() {
  return (
    <section className="mb-20">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-5 justify-items-center">
                    <div className="section__banner--right w-full h-[142px] sm:h-[248px] px-12 text-white flex flex-col justify-center items-start rounded-2xl">
                        <p className="font-DanaDemiBold text-2xl md:text-4xl mb-7">انواع قهوه</p>
                        <span className="font-DanaMedium md:text-xl">ترکیبی و تک خاستگاه</span>
                    </div>
                    <div className="section__banner--left w-full h-[142px] sm:h-[248px] px-12 text-white flex flex-col justify-center items-start rounded-2xl">
                        <p className="font-DanaDemiBold text-2xl md:text-4xl mb-7">پودر های فوری</p>
                        <span className="font-DanaMedium md:text-xl">نسکافه ، هات چاکلت ، ماسالا</span>
                    </div>
                </div>                
            </div>
        </section>
  )
}
