// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import { color } from "framer-motion";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { FaStar } from "react-icons/fa6";
import { Avatar } from "flowbite-react";

const data = [
  {
    name: `Dr. Shakuntla Kumar`,
    img: `https://i1.rgstatic.net/ii/profile.image/543062931632129-1506487700949_Q512/Shakuntla-Kumar.jpg`,
    review: `MBBS, DGO, Fellow of Indian College of Obstetrics and Gynecology (FICOG) Gynecologist,Obstetrician
37 Years Experience Overall  (31 years as specialist)`,
    link: `https://www.practo.com/delhi/doctor/dr-shakuntla-kumar-gynecologist-obstetrician?practice_id=769628&specialization=PCOS&referrer=doctor_listing&page_uid=4760ab1d-b17b-4bb2-8d1d-4440051926ec&category_name=symptom&category_id=35`,
  },
  {
    name: `Dr. Nikita Trehan`,
    img: `https://www.sunrisehospitals.in/wp-content/uploads/2023/04/dr-nikita-trehan-1-464x487-1.jpg`,
    review: `MBBS, DNB - Obstetrics & Gynecology Gynecologist,Obstetrician,Laparoscopic Surgeon (Obs & Gyn),Infertility Specialist
20 Years Experience Overall  (18 years as specialist)`,
    link: `https://www.practo.com/delhi/doctor/nikita-trehan-gynecologist-obstetrician?practice_id=848254&specialization=PCOS&referrer=doctor_listing&page_uid=4760ab1d-b17b-4bb2-8d1d-4440051926ec&category_name=symptom&category_id=35`,
  },
  {
    name: `Dr. Jasleen Kaur Malhotra`,
    img: `https://www.pregawish.com/uploads/doctor/thumbnail/1139/dr-jasleen-kaur-malhotra.jpg`,
    review: `MBBS, DGO, DNB - Obstetrics & Gynecology Gynecologist,Obstetrician,Infertility Specialist
25 Years Experience Overall  (17 years as specialist)`,
    link: `https://www.practo.com/delhi/doctor/dr-jasleen-kaur-malhoma-gynecologist-obstetrician?practice_id=1159479&specialization=PCOS&referrer=doctor_listing&page_uid=4760ab1d-b17b-4bb2-8d1d-4440051926ec&category_name=symptom&category_id=35`,
  },
  {
    name: `Dr. Meghana A`,
    img: `https://images1.doctoriduniya.com/doctors-img/dr-meghana-lal-gynaecologist-and-obstetrician-delhi-11136.jpg`,
    review: `MBBS, DNB - Obstetrics & Gynecology, DGO Obstetrician,Gynecologist,Infertility Specialist,Reproductive Endocrinologist (Infertility)
16 Years Experience Overall  (13 years as specialist)`,
    link: `https://www.practo.com/delhi/doctor/dr-meghana-lal-gynecologist-obstetrician?practice_id=1296936&specialization=PCOS&referrer=doctor_listing&page_uid=4760ab1d-b17b-4bb2-8d1d-4440051926ec&category_name=symptom&category_id=35`,
  },
  {
    name: `Dr. Yachna Grover`,
    img: `https://assets.lybrate.com/img/documents/doctor/dp/799d02c9b36b8d2fa0f88e131497ebe0/Gynaecology-YachnaGrover-Delhi-9e5259.jpg`,
    review: `MBBS, DGO Infertility Specialist,Gynecologist
32 Years Experience Overall  (29 years as specialist)
`,
    link: `https://www.practo.com/delhi/doctor/dr-yachna-grover-gynecologist-obstetrician-1?practice_id=702946&specialization=PCOS&referrer=doctor_listing&page_uid=4760ab1d-b17b-4bb2-8d1d-4440051926ec&category_name=symptom&category_id=35`,
  },
];

const DocAsst = () => {
  return (
    <div className="my-12 px-4 lg:px-24 mb-10 leading-snug">
      <h1 className="text-5xl text-gray-700">Ask Doctors</h1>
      <div>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {data.map((d) => (
            <SwiperSlide
              className="shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border"
              key={d.name}
            >
              <div className="space-y-6">
                <div className="h-56 bg-pink-500 flex justify-center items-center rounded-t-xl">
                  <img src={d.img} alt="" className="h-44 w-44 rounded-full" />
                </div>

                <div className="flex flex-col items-center justify-center gap-4 p-4">
                  <h5 className="text-lg font-medium">{d.name}</h5>

                  <p className="mb-5">{d.review}</p>
                  <Link
                    to={d.link}
                    target="_blank"
                    className="bg-pink-500 text-white text-lg px-6 py-1 rounded-xl"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default DocAsst;
