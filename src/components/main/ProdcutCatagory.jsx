import React from 'react'

export default function ProdcutCatagory() {
  return (
    <section className="mb-10 md:mb-20">
    <div className="container">
        <div className="flex items-center justify-center lg:justify-between gap-x-[29px] gap-y-[34px] sm:gap-[60px] flex-wrap">
            <div className="text-center w-25 md:w-50">
                <a href="">
                   <img src="../public/images/categories/category1.png" alt="" /> 
                </a>                        
                <span className="font-DanaDemiBold text-sm md:text-xl text-zinc-700 dark:text-white">قهوه دمی و اسپرسو</span>
            </div>
            <div className="text-center w-25 md:w-50">
                <a href="">
                    <img src="../public/images/categories/category2.png" alt="" /> 
                 </a>                          
                 <span className="font-DanaDemiBold text-sm md:text-xl text-zinc-700 dark:text-white">لوازم جانبی و تجهیزات</span>
            </div>
            <div className="text-center w-25 md:w-50">
                <a href="">
                    <img src="../public/images/categories/category3.png" alt="" /> 
                </a>                          
                <span className="font-DanaDemiBold text-sm md:text-xl text-zinc-700 dark:text-white">اسپرسو ساز</span>
            </div>
            <div className="text-center w-25 md:w-50">
                <a href="">
                    <img src="../public/images/categories/category4.png" alt="" /> 
                </a>                          
                <span className="font-DanaDemiBold text-sm md:text-xl text-zinc-700 dark:text-white">پک تستر قهوه</span>
            </div>
            <div className="text-center w-25 md:w-50">
                <a href="">
                    <img src="../public/images/categories/category5.png" alt="" /> 
                </a>  
                <span className="font-DanaDemiBold text-sm md:text-xl text-zinc-700 dark:text-white">قهوه ترک</span>
            </div>
        </div>
    </div>
 </section>
  )
}
