import React from 'react'
import { blogPosts } from './BlogPosts';

export default function Blog() {

    const formatDateParts = (dateString) => {
        const date = new Date(dateString);
        return {
          year: date.toLocaleDateString("fa-IR", { year: "numeric" }),
          month: date.toLocaleDateString("fa-IR", { month: "long" }),
          day: date.toLocaleDateString("fa-IR", { day: "numeric" }),
        };
      };
      

  return (
    <section className="mb-7 md:mb-28">
            <div className="container">
                 {/* blog header */}
                 <div className="flex items-end justify-between mb-5 md:mb-12">
                    <div>
                        <h2 className="section-title">مطالب خواندنی</h2>
                    </div>
                    <div className="section-link">
                        <span className="hidden md:inline-block">مشاهده همه مطالب</span>
                        <span className="md:hidden inline-block">مشاهده همه</span>
                        <svg className="w-5 h-5">
                            <use href="#chevron-left-mini"></use>
                        </svg>
                    </div>
                </div>
                {/* blog body */}
                <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-[14px] lg:gap-5">
                    {blogPosts.map(data => {
                    const {year , month , day} = formatDateParts(data.date);
                    return (
                    <div key={data.id} className="group flex gap-x-2.5 sm:block dark:bg-zinc-700 bg-white shadow-normal rounded-2xl p-[10px] md:p-5">
                        {/* image */}
                        <div className="relative w-[130px] h-[130px] shrink-0 sm:w-auto sm:h-auto rounded-2xl rounded-bl-4xl overflow-hidden">
                            <img src={data.img} className="h-full sm:h-auto object-cover" alt="" />
                            <div className="absolute hidden md:flex justify-center items-center invisible group-hover:visible opacity-0 group-hover:opacity-100 inset-0 bg-gradient-to-r from-orange-300/80 to-orange-200/80 transition-all delay-100">
                                <svg className="w-[138px] h-[54px] text-amber-900">
                                    <use href="#logo-type"></use>
                                </svg>
                            </div>
                        </div>
                         {/* content */}
                        <div className="w-full flex flex-col sm:flex-row justify-between sm:mt-[15px]">
                            <div className="flex items-center">
                                <a href="#" className="font-DanaMedium basis-0 grow line-clamp-2 overflow-hidden text-ellipsis md:font-Dana text-sm/7 sm:text-base ml-1.5 sm:ml-1 lg:ml-2 md:text-lg max-w-[193px] mt-2.5 sm:mt-0 text-zinc-700 dark:text-white">{data.title}</a>
                            </div>                            
                            <div className="text-teal-600 dark:text-emerald-500 hidden sm:flex flex-col ml-[18px] pr-5 items-end border-r border-gray-100 dark:border-white/10">
                                <span className="font-DanaDemiBold text-2xl line-clamp-2">{day}</span>
                                <span className="text-sm">{month}</span>
                                <span className="text-sm">{year}</span>
                            </div>
                            <div className="flex items-end mb-4 pt-4.5 mt-5 justify-between sm:hidden border-t border-gray-100 dark:border-white/10">
                                <span className="text-teal-600 dark:text-emerald-500 text-xs">{year} {month} {day}</span>
                                <a href="#" className="flex items-center justify-center gap-x-1 h-5 pr-2.5 pl-2 ml-1.5 font-DanaDemiBold text-xs text-orange-300 rounded-md bg-orange-200/20">
                                    <span className='mt-0.5'>مطالعه</span>
                                    <svg className="h-3.5 w-3.5">
                                        <use href="#arrow-left"></use>
                                    </svg>
                                </a>
                            </div>
                        </div>                       
                    </div>
                    )})}                   
                                  
                </div>                
            </div>
        </section>
  )
}
