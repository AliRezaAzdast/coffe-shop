import { useState, useEffect } from "react";
import { formatPrice } from "../../Utility/FormatPrice";

export default function MobileHeader({ cart }) {

    const totalPrice = cart.reduce((sum, product) => sum + product.price, 0);


    const [isDarkMode, setIsDarkMode] = useState(localStorage.getItem("theme") === "dark")
    useEffect(() => {
        if (isDarkMode) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
        } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
        }
    }, [isDarkMode]);

    const [menuOpen, setMenuOpen] = useState(false)
    const [shopOpen, setShopOpen] = useState(false)
    const [submenu, setSubmenu] = useState(false)

  return (
    <>
    <div className="flex md:hidden items-center justify-between h-16 px-4 bg-white dark:bg-zinc-700 ">
        {/* Nav icon */}
        <div className="nav-icon" onClick={() =>{setMenuOpen(true)}}>
            <svg className=" w-6 h-6 text-zinc-700 dark:text-white">
                <use href="#bar-3">
                </use>
            </svg>
        </div>

        {/* Nav */}
        <div className={`nav-bar fixed top-0 bottom-0 ${menuOpen ? 'right-0' : '-right-64'} w-64 px-4 pt-3 bg-white dark:bg-zinc-700 z-20 overflow-y-auto transition-all`}>

            {/* nav header */}
            <div className="flex items-center justify-between border-b pb-5 mb-6 border-gray-100 dark:border-white/10">
                <div className="flex items-center justify-center gap-x-3.5">
                    <svg className="w-[41px] h-10 text-orange-300">
                    <use href="#logo">
                    </use>
                </svg>
                <svg className="w-25 h-10 text-orange-300">
                    <use href="#logo-type">
                    </use>
                </svg>
            </div>    
            <svg className="nav-close w-5 h-5 text-zinc-600 dark:text-white" onClick={() => {setMenuOpen(false)}}>
                <use href="#x-mark">
                </use>
            </svg>

            </div>


            <div className="flex items-center rounded-md bg-orange-200/20 mb-4 text-orange-300 pr-0 h-10">
                <a href="#" className="flex items-center gap-2">
                    <svg className="w-4 h-4">
                        <use href="#home"></use>
                    </svg>
                    <span>صفحه اصلی</span>
                </a>
            </div>
            {/* nav menu */}
            <ul className="*:px-2.5 text-zinc-600 space-y-6 dark:text-white">              
                <li>
                    <div className={`flex items-center justify-between transition-all ${submenu ? 'text-orange-300' : ''}`}>
                        <a href="#" className="flex items-center gap-2">
                            <svg className="w-4 h-4">
                                <use href="#shopping-bag"></use>
                            </svg>
                            فروشگاه
                        </a>
                            <svg className="submenu-open-btn w-4 h-4" onClick={() => {setSubmenu(pre => !pre)}}>
                                <use href="#chevron-down"></use>
                            </svg> 
                    </div>
                   
                    <div className={`submenu ${submenu ? 'submenu--open' : ''}`}>
                            <a href="#">قهوه ویژه</a>
                            <a href="#" className="submenu__item--active">ویژه در سطح جهانی</a>
                            <a href="#">قهوه درجه یک</a>
                            <a href="#">ترکیبات تجاری</a>
                            <a href="#">کپسول قهوه</a>
                            <a href="#">قهوه زینو برزیلی</a>
                    </div>
                </li>
                <li>
                    <a href="#" className="flex items-center gap-2">
                        <svg className="w-4 h-4">
                            <use href="#chat-bubble-left-ellipsis"></use>
                        </svg>
                        <span>دیکشنری</span>
                    </a>
                </li>
                <li>
                    <a href="#" className="flex items-center gap-2">
                        <svg className="w-4 h-4">
                            <use href="#briefcase"></use>
                        </svg>
                        <span>درباره ما</span>
                    </a>
                </li>
                <li>
                    <a href="#" className="flex items-center gap-2">
                        <svg className="w-4 h-4">
                            <use href="#document-text"></use>
                        </svg>
                        <span>بلاگ</span>
                    </a>
                </li>
                <li>
                    <a href="#" className="flex items-center gap-2">
                        <svg className="w-4 h-4">
                            <use href="#phone-arrow-up-right"></use>
                        </svg>
                        <span>تماس با ما</span>
                    </a>
                </li>
             </ul>

                 {/* nav footer */}
             <div className="border-t py-8 px-2.5 mt-8 border-gray-100 dark:border-white/10 text-orange-300 space-y-6">
                {/* longin & out*/}
                <a href="#" className="inline-flex items-center gap-2">
                    <svg className="w-5 h-5">
                        <use href="#arrow-right-end-on-rectangle"></use>
                    </svg>
                    <span>ورود | ثبت‌نام</span>
                </a>
    
                {/* switch */}
                <div className="toggle-theme w-fit" onClick={() => setIsDarkMode(!isDarkMode)}>
                    {/* dark them switch*/}
                    <div className="flex gap-2 dark:hidden items-center">
                        <svg className="w-5 h-5">
                            <use href="#moon"></use>
                        </svg>
                        <span>تم تیره</span>
                    </div>
                    {/* light them switch*/}
                    <div className="hidden dark:flex gap-2 items-center">
                        <svg className="w-5 h-5 ">
                            <use href="#sun"></use>
                        </svg>
                        <span>تم روشن</span>
                    </div>
                </div>

                {/* shoping card */}
                <a href="#" className="inline-flex items-center gap-2">
                    <svg className="w-5 h-5 ">
                            <use href="#shopping-cart"></use>
                    </svg>
                    <span>سبد خرید</span>
                </a>
            </div>
    
         </div>
    
        
        {/* logo */}
        <div>
            <svg className="w-[100px] h-10 text-orange-300">
                <use href="#logo-type"></use>
            </svg>
        </div>
         {/* shop icon */}
        <div className="shop-icon" onClick={() => {setShopOpen(true)}}>
            <svg className=" w-6 h-6 text-zinc-700 dark:text-white">
                <use href="#shopping-cart"></use>
            </svg>
        </div>
        {/* Shop */}
        <div className={`shop-bar flex flex-col fixed top-0 bottom-0 ${shopOpen ? 'left-0' : '-left-64'} w-64 px-4 pt-5 bg-white dark:bg-zinc-700 z-20 transition-all`}>
             {/* shop header */}
            <div className="flex items-center justify-between pb-[21px] border-b border-gray-300 dark:border-white/10 text-zinc-700 dark:text-white">
                <svg className="shop-close w-5 h-5 text-zinc-600 dark:text-white" onClick={() => {setShopOpen(false)}}>
                    <use href="#x-mark">
                    </use>
                </svg>
                <span>سبد خرید</span>               
            </div> 
            {/* shop items */}
             <div className="overflow-hidden overflow-y-auto">
             {cart.length === 0 ? <></> : (
                cart.map(data => (
                    <div key={data.id} className="flex items-center mt-5 gap-1 border-b border-gray-100 dark:border-white/10 pb-5">
                        <img src={data.img} alt="" className="w-[90px] h-[90px]" />
        
                        <div className="text-zinc-700 dark:text-white">
                            <p className="text-sm font-DanaMedium line-clamp-2">{data.productName}</p>
                            {data.off > 0 ? (<span className="font-DanaMedium text-xs gap-y-1.5 text-teal-600 dark:text-emerald-500 tracking-tighter">{formatPrice(data.price * data.off / 100)} تومان تخفیف</span>) : <></>}
                            <p className="font-DanaDemiBold">{data.off > 0 ? (formatPrice(data.price - (data.price * data.off / 100))) : (formatPrice(data.price))}<span className="text-sm font-Dana">تومان</span></p>
                        </div>
                    </div>
                    ))
             )}              
             </div>
            
           
            {/* shop footer */}
            <div className="flex items-end mt-5 mb-[30px]">
                <a href="#" className="flex items-center justify-center rounded-xl h-11 w-28 bg-teal-600 dark:bg-emerald-500 text-white ml-4">ثبت سفارش</a>
                <div>
                    <p className="font-DanaMedium text-xs text-gray-300">مبلغ قابل پرداخت</p>
                    <p className="font-DanaDemiBold text-zinc-700 dark:text-white">{formatPrice(totalPrice)}<span className="text-xs font-Dana">تومان</span></p>
                </div>
            </div>
    
         </div>
    </div>
    <div onClick={() => {setMenuOpen(false); setShopOpen(false)}} className={`overlay ${menuOpen || shopOpen ? 'visible opacity-100' : 'invisible opacity-0'} md:hidden fixed inset-0 w-full h-full bg-black/40 z-10 transition-all`}></div>
    </>
  )
}
