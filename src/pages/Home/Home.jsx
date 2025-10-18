import React from 'react'
import Banner from "../../components/BannerSwiper/Banner";
import Kfcet from '../../components/cards/kfcet';
import Services from '../../components/kf-services/kaffenServices';
import Feedback from '../../components/Feedback/Feedback';
import './Home.css';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import AOS from "aos";
import "aos/dist/aos.css";
const services = [
    {
        title: "Latte",
        image: "https://kaffen-reactjs.netlify.app/images/grid_gal2.jpg",
    },
    {
        title: "Coffee Menu",
        image: "https://kaffen-reactjs.netlify.app/images/service2.jpg",
    },
    {
        title: "Cappuccino",
        image: "https://kaffen-reactjs.netlify.app/images/grid_gal3.jpg",
    },
    {
        title: "Espresso",
        image: "https://kaffen-reactjs.netlify.app/images/grid_gal5.jpg",
    },
    {
        title: "Black Coffee",
        image: "https://kaffen-reactjs.netlify.app/images/grid_gal1.jpg",
    },
];

export default function Home() {
  return (
      <>
          <Banner />
          <div className="about-us w-full h-[90vh] bg-[#000000] relative text-white flex justify-center items-center gap-31">
              <div className="w-[53vh] flex flex-col justify-center items-start gap-7 a0 px-[20px]" data-aos="fade-right">
                  <p className="text-[#b99272]">ABOUT US</p>
                  <h1 className="text-[34px] font-bold">Organic & Fresh Coffee Provider Center</h1>
                  <p className="text-[14px] w-[400px] opacity-70">Sed ut perspiciatis unde omnis iste natus error voluptate accusantium doloremque laudantium, totam rem aperiam...</p>
                  <div className="w-full h-[150px] bg-[#b99272] border border-[#b99272] rounded-[10px] flex justify-center items-center  gap-4 px-[20px]" data-aos="zoom-in">
                      <img src="https://kaffen-reactjs.netlify.app/images/quote_img.png" alt="" />
                      <h4 className="text-[20px] w-[300px]">Quis autem vel eum iure reprehenderit...</h4>
                  </div>
              </div>

              <img src="https://kaffen-reactjs.netlify.app/images/about_img.png" alt="" data-aos="fade-left" />
          </div>
          <div className="w-full h-[70vh] bg-black  relative text-white flex justify-center items-center gap-31">
              <Services />
          </div>
          <div className="w-full h-[120vh] relative flex flex-col justify-center items-center gap-[40px]">
              {/* الخلفية */}
              <div className="absolute inset-0 bg-[url('https://kaffen-reactjs.netlify.app/images/category_bg.jpg')] bg-cover bg-center bg-fixed z-0"></div>

              {/* العنوان */}
              <div className="relative z-10 text-center" data-aos="fade-down">
                  <p className="text-[#b99272]">Choose Best Coffee</p>
                  <h2 className="text-white text-[30px] font-bold">Kaffen Popular Coffee Menu</h2>
              </div>

              {/* الـ Container الكبير */}
              <div className="relative z-10 w-[1200px] h-[90vh] bg-[rgba(0,0,0,0.7)] flex justify-center items-center gap-4" data-aos="zoom-in">
                  <img className="absolute z-20 w-150 h-150" src="https://kaffen-reactjs.netlify.app/images/menu_logo.png" alt="" data-aos="fade-up" data-aos-delay="100" />

                  {/* المنيو */}
                  <div className="grid grid-cols-2 items-center gap-4">
                      {/* Item 1 */}
                      <div className="flex justify-center items-center gap-12 w-[500px] h-[200px]" data-aos="fade-right" data-aos-delay="100">
                          <div className="w-40 h-40 overflow-hidden">
                              <img className="w-40 h-40 hover:scale-110 transition-transform duration-1000 ease-in-out" src="https://kaffen-reactjs.netlify.app/images/menu1.jpg" alt="" />
                          </div>
                          <div className="flex flex-col justify-center items-start gap-2">
                              <h2 className="text-white text-[20px] font-bold">Americano Coffee</h2>
                              <p className="text-white opacity-70">2/3 espresso, 1/3 streamed milk</p>
                              <div>
                                  <span className="text-[#b99272] text-[20px]">......................</span>
                                  <span className="text-[#b99272] text-[20px]"> $10.00</span>
                              </div>
                          </div>
                      </div>

                      {/* Item 2 */}
                      <div className="flex justify-center items-center gap-12 w-[500px] h-[200px]" data-aos="fade-left" data-aos-delay="200">
                          <div className="w-40 h-40 overflow-hidden">
                              <img className="w-40 h-40 hover:scale-110 transition-transform duration-1000 ease-in-out" src="https://kaffen-reactjs.netlify.app/images/menu2.jpg" alt="" />
                          </div>
                          <div className="flex flex-col justify-center items-start gap-2">
                              <h2 className="text-white text-[20px] font-bold">Barista Pouring Syrup</h2>
                              <p className="text-white opacity-70">2/3 espresso, 1/3 streamed milk</p>
                              <div>
                                  <span className="text-[#b99272] text-[20px]">......................</span>
                                  <span className="text-[#b99272] text-[20px]">$3.5</span>
                              </div>
                          </div>
                      </div>

                      {/* Item 3 */}
                      <div className="flex justify-center items-center gap-12 w-[500px] h-[200px]" data-aos="fade-right" data-aos-delay="300">
                          <div className="w-40 h-40 overflow-hidden">
                              <img className="w-40 h-40 hover:scale-110 transition-transform duration-1000 ease-in-out" src="https://kaffen-reactjs.netlify.app/images/menu3.jpg" alt="" />
                          </div>
                          <div className="flex flex-col justify-center items-start gap-2">
                              <h2 className="text-white text-[20px] font-bold">Cappuccino Arabica</h2>
                              <p className="text-white opacity-70">2/3 espresso, 1/3 streamed milk</p>
                              <div>
                                  <span className="text-[#b99272] text-[20px]">......................</span>
                                  <span className="text-[#b99272] text-[20px]">$2.8</span>
                              </div>
                          </div>
                      </div>

                      {/* Item 4 */}
                      <div className="flex justify-center items-center gap-12 w-[500px] h-[200px]" data-aos="fade-left" data-aos-delay="400">
                          <div className="w-40 h-40 overflow-hidden">
                              <img className="w-40 h-40 hover:scale-110 transition-transform duration-1000 ease-in-out" src="https://kaffen-reactjs.netlify.app/images/menu4.jpg" alt="" />
                          </div>
                          <div className="flex flex-col justify-center items-start gap-2">
                              <h2 className="text-white text-[20px] font-bold">Espresso Coffee</h2>
                              <p className="text-white opacity-70">2/3 espresso, 1/3 streamed milk</p>
                              <div>
                                  <span className="text-[#b99272] text-[20px]">......................</span>
                                  <span className="text-[#b99272] text-[20px]">$4.9</span>
                              </div>
                          </div>
                      </div>

                      {/* Item 5 */}
                      <div className="flex justify-center items-center gap-12 w-[500px] h-[200px]" data-aos="fade-right" data-aos-delay="500">
                          <div className="w-40 h-40 overflow-hidden">
                              <img className="w-40 h-40 hover:scale-110 transition-transform duration-1000 ease-in-out" src="https://kaffen-reactjs.netlify.app/images/menu5.jpg" alt="" />
                          </div>
                          <div className="flex flex-col justify-center items-start gap-2">
                              <h2 className="text-white text-[20px] font-bold">Cold - Coffee</h2>
                              <p className="text-white opacity-70">2/3 espresso, 1/3 streamed milk</p>
                              <div>
                                  <span className="text-[#b99272] text-[20px]">......................</span>
                                  <span className="text-[#b99272] text-[20px]">$6.0</span>
                              </div>
                          </div>
                      </div>

                      {/* Item 6 */}
                      <div className="flex justify-center items-center gap-12 w-[500px] h-[200px]" data-aos="fade-left" data-aos-delay="600">
                          <div className="w-40 h-40 overflow-hidden">
                              <img className="w-40 h-40 hover:scale-110 transition-transform duration-1000 ease-in-out" src="https://kaffen-reactjs.netlify.app/images/menu6.jpg" alt="" />
                          </div>
                          <div className="flex flex-col justify-center items-start gap-2">
                              <h2 className="text-white text-[20px] font-bold">Milk Cream Coffee</h2>
                              <p className="text-white opacity-70">2/3 espresso, 1/3 streamed milk</p>
                              <div>
                                  <span className="text-[#b99272] text-[20px]">......................</span>
                                  <span className="text-[#b99272] text-[20px]">$7.5</span>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div className="about-us w-full z-11 h-[100vh] bg-[#090c0f] relative text-white flex justify-center items-center gap-31 ">
              {/* الصورة الرئيسية */}
              <img className="w-[70vh] h-[80vh]" src="https://kaffen-reactjs.netlify.app/images/choose_img.jpg" alt="" data-aos="fade-right" />

              {/* أيقونات ديكور (Parallax icons) */}
              <img className="w-[200px] absolute bottom-[50px] right-[150px]" src="https://kaffen-reactjs.netlify.app/images/parallax_icon3.png" alt="" data-aos="zoom-in" data-aos-delay="200" />
              <img className="w-[120px] absolute top-[150px] right-[150px]" src="https://kaffen-reactjs.netlify.app/images/parallax_icon2.png" alt="" data-aos="fade-down" data-aos-delay="300" />
              <img className="w-[150px] absolute top-[130px] left-[100px]" src="https://kaffen-reactjs.netlify.app/images/parallax_icon1.png" alt="" data-aos="fade-up" data-aos-delay="400" />

              {/* النصوص */}
              <div className="w-[53vh] flex flex-col justify-center items-start gap-6" data-aos="fade-left">
                  <p className="text-[#b99272]">Why Choose Us</p>
                  <h1 className="text-[30px] font-bold">New London Coffee Founded For Extraordinary Test</h1>
                  <p className="text-[14px] w-[400px] opacity-70">Sed ut perspiciatis unde omnis iste natus error voluptate accusantium doloremque laudantium...</p>

                  {/* Feature 1 */}
                  <div className="w-full flex items-center gap-7 px-[20px]" data-aos="fade-up" data-aos-delay="200">
                      <img className="w-[70px]" src="https://kaffen-reactjs.netlify.app/images/choose_icon1.png" alt="" />
                      <div>
                          <h4 className="text-[20px] w-[300px] font-black">Natural Coffee Beans</h4>
                          <p className="text-[14px] w-[300px] opacity-70">Sed ut perspiciatis unde omnis iste natus error voluptate accusantium doloremque</p>
                      </div>
                  </div>

                  {/* Feature 2 */}
                  <div className="w-full flex items-center gap-7 px-[20px]" data-aos="fade-up" data-aos-delay="400">
                      <img className="w-[70px]" src="https://kaffen-reactjs.netlify.app/images/choose_icon2.png" alt="" />
                      <div>
                          <h4 className="text-[20px] w-[300px] font-black">100% ISO Certification</h4>
                          <p className="text-[14px] w-[300px] opacity-70">Sed ut perspiciatis unde omnis iste natus error voluptate accusantium doloremque</p>
                      </div>
                  </div>
              </div>
          </div>
          <div className="w-full h-[100vh] bg-[#0e1317] flex items-center justify-center text-white">
              <Swiper
                  modules={[Autoplay]}
                  spaceBetween={30}
                  slidesPerView={4}
                  loop={true}
                  speed={2000}
                  autoplay={{
                      delay: 2500,
                      disableOnInteraction: false,
                  }}
                  className="w-full max-w-[1500px] h-[550px]">
                  {services.map((service, index) => (
                      <SwiperSlide key={index}>
                          <div
                              className={`group w-full h-full relative flex justify-center items-center overflow-hidden cursor-pointer rounded-2xl shadow-lg transition-all duration-300 hover:shadow-2xl
              ${index % 2 === 0 ? "translate-y-[-20px]" : "translate-y-[20px]"}`}>
                              <div
                                  className="absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out group-hover:opacity-30 group-hover:scale-110"
                                  style={{ backgroundImage: `url(${service.image})` }}></div>
                              <div className="relative w-[280px] h-[380px] bg-[#0e1317cc] border border-[#b99272] backdrop-blur-sm rounded-xl flex flex-col justify-center items-center text-center gap-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                  <h1 className="text-white font-bold text-xl tracking-wide">{service.title}</h1>
                                  <div className="w-16 h-[2px] bg-[#b99272]"></div>
                                  <p className="text-sm text-gray-300 px-4">Enjoy premium quality service with exceptional taste and ambiance.</p>
                              </div>
                          </div>
                      </SwiperSlide>
                  ))}
              </Swiper>
          </div>
          <Feedback />
          <div className="w-full h-[30vh] bg-[#0e1317] flex items-center justify-center gap-[50px] text-white">
              <div className="w-[340px] h-[200px] flex justify-between items-center" data-aos="fade-up">
                  <h1 className="text-[60px] text-[#b99272]">256+</h1>
                  <div className="flex flex-col justify-center items-start gap-2">
                      <h3 className="text-[20px] font-bold">Premium Clients</h3>
                      <p className="text-[18px] opacity-70">Sed ut perspiciatis unde</p>
                  </div>
              </div>

              <div className="w-[340px] h-[200px] flex justify-between items-center" data-aos="fade-up" data-aos-delay="200">
                  <h1 className="text-[60px] text-[#b99272]">362+</h1>
                  <div className="flex flex-col justify-center items-start gap-2">
                      <h3 className="text-[20px] font-bold">Expert Members</h3>
                      <p className="text-[18px] opacity-70">Sed ut perspiciatis unde</p>
                  </div>
              </div>

              <div className="w-[340px] h-[200px] flex justify-between items-center" data-aos="fade-up" data-aos-delay="400">
                  <h1 className="text-[60px] text-[#b99272]">753+</h1>
                  <div className="flex flex-col justify-center items-start gap-2">
                      <h3 className="text-[20px] font-bold">Winning Awards</h3>
                      <p className="text-[18px] opacity-70">Sed ut perspiciatis unde</p>
                  </div>
              </div>
          </div>
          <Kfcet />
      </>
  );
}
