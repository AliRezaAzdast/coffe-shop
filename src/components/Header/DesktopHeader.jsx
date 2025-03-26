import { useState, useEffect } from "react";
import { formatPrice } from "../../Utility/FormatPrice";

export default function DesktopHeader({ cart }) {
  const totalPrice = cart.reduce((sum, product) => sum + product.price, 0);

  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  return (
    <header className="fixed top-9 right-0 left-0 hidden md:flex items-center z-50 w-[95%] lg:w-[90%] h-24 px-7 lg:px-10 py-5 mx-auto rounded-3xl bg-black/50 backdrop-blur-[6px]">
      <div className="flex justify-between items-center w-full">
        {/* logo & menu */}
        <nav className="flex items-center gap-x-4 lg:gap-x-9 h-24">
          {/* logo */}
          <div className="shrink-0">
            <img src="images/app-logo.png" alt="golden coffe" />
          </div>
          {/* menu */}
          <ul className="flex items-center gap-x-4 lg:gap-x-9 text-xl h-full text-gray-300 tracking-tightes *:leading-[56px]">
            <li className="font-DanaMedium text-orange-300">
              <a href="#">صفحه اصلی</a>
            </li>
            <li className="relative group">
              <a
                href="#"
                className="group-hover:text-orange-300 transition-colors"
              >
                فروشگاه
              </a>
              {/* sub menu */}
              <div
                className="absolute top-full opacity-0 invisible group-hover:opacity-100 group-hover:visible w-52 p-6 space-y-4 bg-white text-zinc-700 dark:text-white dark:bg-zinc-700 text-base border-t-[3px] tracking-normal shadow-normal border-orange-300 rounded-2xl
                    transition-all *:inline-block *:transition-colors *:hover:text-orange-300 delay-75"
              >
                <a href="#">قهوه ویژه</a>
                <a href="#">ویژه در سطح جهانی</a>
                <a href="#">قهوه درجه یک</a>
                <a href="#">ترکیبات تجاری</a>
                <a href="#">کپسول قهوه</a>
                <a href="#">قهوه زینو برزیلی</a>
              </div>
            </li>
            <li>
              <a href="#">دیکشنری</a>
            </li>
            <li>
              <a href="#">بلاگ</a>
            </li>
            <li>
              <a href="#">درباره ما</a>
            </li>
            <li>
              <a href="#">تماس با ما</a>
            </li>
          </ul>
        </nav>
        {/* cart & theme toggle & login links */}
        <div className="flex gap-x-4 lg:gap-x-10 text-orange-200 text-xl">
          {/* cart icont & them switch */}
          <div className="flex items-center gap-x-3 lg:gap-x-5">
            {/* cart */}
            <div className="relative group">
              <div className="py-3 cursor-pointer">
                {/* cart icon hover */}
                <svg className="w-8 h-8">
                  <use href="#shopping-cart"></use>
                </svg>
              </div>
              {/* cart box  */}
              <div className="absolute top-full left-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible w-[400px] p-5 bg-white text-zinc-700 dark:text-white dark:bg-zinc-700 text-base border-t-[3px] tracking-normal shadow-normal border-orange-300 rounded-2xl transition-all delay-75">
                {/* header */}
                <div className="flex justify-between items-center tracking-tightes font-DanaMedium text-xs">
                  <span className="text-gray-300">{cart.length} مورد</span>
                  <a href="#" className="flex items-center text-orange-300">
                    مشاهده سبد خرید
                    <svg className="h-5 w-5">
                      <use href="#chevron-left"></use>
                    </svg>
                  </a>
                </div>

                {/* body */}
                <div className="pb-1 border-b border-b-gray-300 dark:border-b-white/10 divide-y divide-gray-100 dark:divide-white/10 *:py-5 max-h-120 overflow-hidden overflow-y-auto">
                  {cart.length === 0 ? (
                    <></>
                  ) : (
                    cart.map((data) => (
                      <div key={data.id} className="flex flex-row gap-x-2.5">
                        <img
                          src={data.img}
                          alt="product 1"
                          className="w-30 h-30"
                        />
                        <div className="flex flex-col justify-around">
                          <div>
                            <h4 className="text-zinc-700 text-base font-DanaMedium dark:text-white line-clamp-2">
                              {data.productName}
                            </h4>
                          </div>
                          <div>
                            {data.off > 0 ? (
                              <span className="text-teal-600 dark:text-emerald-500 text-xs font-DanaMedium tracking-tightes">
                                {formatPrice((data.price * data.off) / 100)}{" "}
                                تومان تخفیف
                              </span>
                            ) : (
                              <></>
                            )}
                            <div className="text-sm text-zinc-700 dark:text-white">
                              <span className="font-DanaDemiBold text-xl">
                                {data.off > 0
                                  ? formatPrice(
                                      data.price - (data.price * data.off) / 100
                                    )
                                  : formatPrice(data.price)}
                              </span>{" "}
                              تومان
                            </div>
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </div>

                {/* btn */}
                <div className="flex justify-between items-center mt-5">
                  <div>
                    <span className="text-xs text-gray-300 font-DanaMedium tracking-tightes">
                      مبلغ قابل پرداخت
                    </span>
                    <div className="text-sm text-zinc-700 dark:text-white">
                      <span className="font-DanaDemiBold text-xl">
                        {formatPrice(totalPrice)}{" "}
                      </span>
                      تومان
                    </div>
                  </div>
                  <a
                    href="#"
                    className="flex items-center justify-center text-xl w-36 h-14 bg-teal-600 dark:bg-emerald-500 text-white rounded-xl hover:bg-teal-700 dark:hover:bg-emerald-600 transition-colors tracking-tighter"
                  >
                    ثبت سفارش
                  </a>
                </div>
              </div>
            </div>
            {/* switch */}
            <div
              className="cursor-pointer toggle-theme"
              onClick={() => setIsDarkMode(!isDarkMode)}
            >
              <svg className="w-8 h-8 inline-block dark:hidden">
                <use href="#moon"></use>
              </svg>
              <svg className="w-8 h-8 hidden dark:inline-block">
                <use href="#sun"></use>
              </svg>
            </div>
          </div>
          {/* line */}
          <span className="w-px h-14 bg-white/20"></span>
          {/* login link */}
          <a href="#" className="flex items-center gap-x-2.5">
            <svg className="w-8 h-8">
              <use href="#arrow-right-end-on-rectangle"></use>
            </svg>
            <span className="hidden xl:inline-block">ورود | ثبت‌نام</span>
          </a>
        </div>
      </div>
    </header>
  );
}
