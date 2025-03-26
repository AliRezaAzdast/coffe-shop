import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { pouoularProductData } from "./PopularProductsData";
import Alert from "../../../Utility/Alert";
import { formatPrice } from "../../../Utility/FormatPrice";

const PopularProducts = ({ cart, setCart }) => {

  const [showAlert, setShowAlert] = useState(false);
  
      const addToCart = (product) => {
          if(product.quantity == 0){
              setShowAlert(true)
              return setCart([...cart]);
          }else{
              return setCart([...cart, product]); // Add product to cart
          }
        };

  return (
    <section className="mb-8 md:mb-20">
      {showAlert && (
                <Alert type="error" message="محصول مورد نظر در حال حاظر مجود نیست"  onClose={() => setShowAlert(false)} />
            )}
      <div className="container">
        {/* Product Header */}
        <div className="flex items-end justify-between mb-5 md:mb-12">
          <div>
            <h2 className="section-title">محصولات پر فروش</h2>
            <span className="section-subtitle">پیشنهاد قهوه خور ها ...</span>
          </div>
          <div className="flex gap-x-3 md:gap-x-[18px]">
                <div className="swiper-button-next-custom flex items-center justify-center w-9 md:w-11 h-9 md:h-11 rounded-full bg-white dark:bg-zinc-700 dark:text-white hover:bg-gray-300 dark:hover:bg-white dark:hover:text-zinc-700 transition-all">
                    <svg className="h-6 w-6 rotate-180">
                        <use href="#chevron-left">
                        </use>
                    </svg>
                </div>
                <div className="swiper-button-prev-custom flex items-center justify-center w-9 md:w-11 h-9 md:h-11 rounded-full bg-white dark:bg-zinc-700 dark:text-white hover:bg-gray-300 dark:hover:bg-white dark:hover:text-zinc-700 transition-all">
                    <svg className="h-6 w-6">
                        <use href="#chevron-left">
                        </use>
                    </svg>
                </div>
            </div>
        </div>
        
        {/* Swiper Slider */}
        <Swiper
          modules={[Navigation]}
          slidesPerView={2}
          spaceBetween={14}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
          navigation={{
            prevEl: ".swiper-button-next-custom",
            nextEl: ".swiper-button-prev-custom",
          }}
          breakpoints={{
            768: { slidesPerView: 3, spaceBetween: 14 },
            1024: { slidesPerView: 4, spaceBetween: 20 },
          }}
        >
          {pouoularProductData.map(data => {
            if(data.quantity == 0){
              return (
                          <SwiperSlide  key={data.id}>
                            <div className="dark:bg-zinc-700 bg-white shadow-normal rounded-2xl p-5">
                        <img src={data.img} alt="" loading="lazy" className="w-32 mx-auto md:w-auto" />
                        <p className="font-DanaMedium text-sm lg:text-xl h-[40px] md:h-[56px] text-zinc-700 dark:text-white mt-5 mb-[10px] line-clamp-2">{data.productName}</p>
                        <div className="mb-5">
                            <p className="text-red-400 md:text-xl">فعلا موجود نیست</p>
                        </div>
                    {/* product item svg */}
                        <div className="flex items-center justify-between">
                            {/* arrows & cart svg */}
                            <div className="flex items-center gap-x-[10px] lg:gap-x-3 text-gray-400">
                                <div onClick={() => {addToCart(data); setShowAlert(true)}} className="flex items-center justify-center h-[26px] lg:h-9 w-[26px] lg:w-9 bg-gray-100 hover:bg-teal-600 hover:text-white dark:hover:bg-emerald-500 dark:bg-zinc-800 rounded-full">
                                    <svg className="h-4 lg:h-6 w-4 lg:w-6">
                                        <use href="#shopping-cart"></use>
                                    </svg>
                                </div>                                
                                <svg className="h-4 lg:h-6 w-4 lg:w-6 dark:hover:text-emerald-500 hover:text-teal-600 ">
                                    <use href="#arrows-right-left"></use>
                                </svg>  
                            </div> 
                            {/* stars svg */}
                            <div className="flex text-gray-300 dark:text-gray-400">
                                <svg className="h-4 lg:h-6 w-4 lg:w-6">
                                    <use href="#star"></use>
                                </svg>
                                <svg className="h-4 lg:h-6 w-4 lg:w-6">
                                    <use href="#star"></use>
                                </svg>
                                <svg className="h-4 lg:h-6 w-4 lg:w-6 text-yellow-400">
                                    <use href="#star"></use>
                                </svg>
                                <svg className="h-4 lg:h-6 w-4 lg:w-6 text-yellow-400">
                                    <use href="#star"></use>
                                </svg>
                                <svg className="h-4 lg:h-6 w-4 lg:w-6 text-yellow-400">
                                    <use href="#star"></use>
                                </svg> 
                            </div>
                        </div>    
                    </div>
                    </SwiperSlide>
                        )
                    }else if(data.off > 0){
                       return (
                        <SwiperSlide  key={data.id}>
                        <div className="dark:bg-zinc-700 bg-white shadow-normal rounded-2xl p-5">
                        <div className="relative">
                            <img src={data.img} alt="" loading="lazy" className="w-32 mx-auto md:w-auto" />
                            <span className="absolute top-1.5 right-1.5 px-3.5 py-1 text-xs lg:text-base bg-orange-300 text-white dark:text-zinc-700 rounded-full">{data.off}%</span>                            
                        </div>
                        <p className="font-DanaMedium text-sm lg:text-xl h-[40px] md:h-[56px] text-zinc-700 dark:text-white mt-5 mb-[10px] line-clamp-2">{data.productName}</p>
                        <div className="flex items-end gap-x-[10px] mb-5">
                            <p className="font-DanaDemiBold text-base md:text-xl text-teal-600 dark:text-emerald-500">{formatPrice(data.price - (data.price * data.off / 100))}<span className="text-xs md:text-sm tracking-tighter">تومان</span></p>
                            <p className="offer text-xs md:text-sm text-gray-400">{formatPrice(data.price)}<span className="tracking-tighter hidden lg:inline">تومان</span></p>                            
                        </div>
                        {/* product item svg */}
                        <div className="flex items-center justify-between">
                            {/* arrows & cart svg */}
                           <div className="flex items-center gap-x-[10px] lg:gap-x-3 text-gray-400">
                                <div onClick={() => addToCart(data)} className="flex items-center justify-center h-[26px] lg:h-9 w-[26px] lg:w-9 bg-gray-100 hover:bg-teal-600 hover:text-white dark:hover:bg-emerald-500 dark:bg-zinc-800 rounded-full">
                                    <svg className="h-4 lg:h-6 w-4 lg:w-6">
                                        <use href="#shopping-cart"></use>
                                    </svg>
                                </div>
                                
                                <svg className="h-4 lg:h-6 w-4 lg:w-6 dark:hover:text-emerald-500 hover:text-teal-600 ">
                                    <use href="#arrows-right-left"></use>
                                </svg>  
                            </div> 
                            {/* stars svg */}
                            <div className="flex text-gray-300 dark:text-gray-400">
                                <svg className="h-4 lg:h-6 w-4 lg:w-6">
                                    <use href="#star"></use>
                                </svg>
                                <svg className="h-4 lg:h-6 w-4 lg:w-6">
                                    <use href="#star"></use>
                                </svg>
                                <svg className="h-4 lg:h-6 w-4 lg:w-6">
                                    <use href="#star"></use>
                                </svg>
                                <svg className="h-4 lg:h-6 w-4 lg:w-6">
                                    <use href="#star"></use>
                                </svg>
                                <svg className="h-4 lg:h-6 w-4 lg:w-6">
                                    <use href="#star"></use>
                                </svg> 
                            </div>
                        </div>
                    </div>
                    </SwiperSlide>
                       )
                    }else{
                        return(
                          <SwiperSlide  key={data.id}>
                            <div className="dark:bg-zinc-700 bg-white shadow-normal rounded-2xl p-5">
                            <img src={data.img} alt="" loading="lazy" className="w-32 mx-auto md:w-auto" />
                            <p className="font-DanaMedium text-sm lg:text-xl h-[40px] md:h-[56px] text-zinc-700 dark:text-white mt-5 mb-[10px] line-clamp-2">{data.productName}</p>
                            <div className="mb-5">
                                <p className="font-DanaDemiBold text-base md:text-xl text-teal-600 dark:text-emerald-500">{formatPrice(data.price)}<span className="text-xs lg:text-sm tracking-tighter"> تومان</span></p>
                            </div>
                        {/* product item svg */}
                            <div className="flex items-center justify-between">
                                {/* arrows & cart svg */}
                                <div className="flex items-center gap-x-[10px] lg:gap-x-3 text-gray-400">
                                    <div onClick={() => addToCart(data)} className="flex items-center justify-center h-[26px] lg:h-9 w-[26px] lg:w-9 bg-gray-100 hover:bg-teal-600 hover:text-white dark:hover:bg-emerald-500 dark:bg-zinc-800 rounded-full">
                                        <svg className="h-4 lg:h-6 w-4 lg:w-6">
                                            <use href="#shopping-cart"></use>
                                        </svg>
                                    </div>                                
                                    <svg className="h-4 lg:h-6 w-4 lg:w-6 dark:hover:text-emerald-500 hover:text-teal-600 ">
                                        <use href="#arrows-right-left"></use>
                                    </svg>  
                                </div> 
                                {/* stars svg */}
                                <div className="flex text-gray-300 dark:text-gray-400">
                                    <svg className="h-4 lg:h-6 w-4 lg:w-6 text-yellow-400">
                                        <use href="#star"></use>
                                    </svg>
                                    <svg className="h-4 lg:h-6 w-4 lg:w-6 text-yellow-400">
                                        <use href="#star"></use>
                                    </svg>
                                    <svg className="h-4 lg:h-6 w-4 lg:w-6 text-yellow-400">
                                        <use href="#star"></use>
                                    </svg>
                                    <svg className="h-4 lg:h-6 w-4 lg:w-6 text-yellow-400">
                                        <use href="#star"></use>
                                    </svg>
                                    <svg className="h-4 lg:h-6 w-4 lg:w-6 text-yellow-400">
                                        <use href="#star"></use>
                                    </svg> 
                                </div>
                            </div>                                                 
                        </div>
                        </SwiperSlide>
                        )
                    }
          })}

          {/* Add more slides here */}
        </Swiper>
      </div>
    </section>
  );
};

export default PopularProducts;
