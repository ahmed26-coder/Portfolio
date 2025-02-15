import { useState } from "react";
import { FaXmark } from "react-icons/fa6";
import imgbg from "../assets/imgbg.png";
import filter from "../assets/filter.png";
import logo from "../assets/logo.png";
import img1 from "../assets/img1.png";
import cv from "../assets/cv.pdf";
import { SiFacebook } from "react-icons/si";
import { ImLinkedin } from "react-icons/im";
import { VscGithub } from "react-icons/vsc";
import { BsWhatsapp } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import about from "../assets/about.png";

import html from "../assets/html.png"
import css from "../assets/css.png"
import react from "../assets/react.png"
import tailwind from "../assets/tailwind.png"
import fimga from "../assets/figma.png"
import js from "../assets/js.png"
import photos from "../assets/photos.png"
import adobe from "../assets/adobe.png"
import Line from "../Components/Line";

import { TbWorld } from "react-icons/tb";
import { FaCode } from "react-icons/fa";
import { BiSolidPaintRoll } from "react-icons/bi";

import Portfolio1 from "../assets/portifio1.png"
import Portfolio2 from "../assets/portifio2.png"
import Portfolio3 from "../assets/portifio3.png"
import Portfolio4 from "../assets/portifio4.png"
import Portfolio5 from "../assets/portifio5.png"
import Portfolio6 from "../assets/portifio6.png"
import { BsBoxArrowUpRight } from "react-icons/bs";
import TypingEffect from "./TypingEffect";


function Home() {
  const cards = [
    {
      id: 1,
      category: "Education Qualification",
      title1:"BSC in CSE 🔥",
      title2:"Diploma In Computer Technology🔥",
      title3:"Secondary School Certificate (SSC)🔥",
      dish1:'Institute : Uttara University, Dhaka',
      dish2:'Session   : 2024 - 25  ',
      dish3:'Result     : Running (1st Semester)',
      dish4:'Institute : Kurigram Polytechnic Institute, Kurigram',
      dish5:'Session   : 2019 - 20  ',
      dish6:'Result     : CGPA 3.83 out of 4.00',
      dish7:'Institute : Adarsha High School, Dhaka',
      dish8:'Session   : 2016 - 17  ',
      dish9:'Result     : GPA 4.61 out of 5.00',
    },
    {
      id: 2,
      category: "Short Course",
      title1:"BSC in CSE😎",
      title2:"Diploma In Computer Technology😎",
      title3:"Secondary School Certificate (SSC)😎",
      dish1:'Institute : Uttara University, Dhaka',
      dish2:'Session   : 2024 - 25  ',
      dish3:'Result     : Running (1st Semester)',
      dish4:'Institute : Kurigram Polytechnic Institute, Kurigram',
      dish5:'Session   : 2019 - 20  ',
      dish6:'Result     : CGPA 3.83 out of 4.00',
      dish7:'Institute : Adarsha High School, Dhaka',
      dish8:'Session   : 2016 - 17  ',
      dish9:'Result     : GPA 4.61 out of 5.00',
    },
    {
      id: 3,
      category: "Experience",
      title1:"BSC in CSE❤️",
      title2:"Diploma In Computer Technology❤️",
      title3:"Secondary School Certificate (SSC)❤️",
      dish1:'Institute : Uttara University, Dhaka',
      dish2:'Session   : 2024 - 25  ',
      dish3:'Result     : Running (1st Semester)',
      dish4:'Institute : Kurigram Polytechnic Institute, Kurigram',
      dish5:'Session   : 2019 - 20  ',
      dish6:'Result     : CGPA 3.83 out of 4.00',
      dish7:'Institute : Adarsha High School, Dhaka',
      dish8:'Session   : 2016 - 17  ',
      dish9:'Result     : GPA 4.61 out of 5.00',
    },
    {
      id: 4,
      category: "Details",
      title1:"BSC in CSE😁",
      title2:"Diploma In Computer Technology😁",
      title3:"Secondary School Certificate (SSC)😁",
      dish1:'Institute : Uttara University, Dhaka',
      dish2:'Session   : 2024 - 25  ',
      dish3:'Result     : Running (1st Semester)',
      dish4:'Institute : Kurigram Polytechnic Institute, Kurigram',
      dish5:'Session   : 2019 - 20  ',
      dish6:'Result     : CGPA 3.83 out of 4.00',
      dish7:'Institute : Adarsha High School, Dhaka',
      dish8:'Session   : 2016 - 17  ',
      dish9:'Result     : GPA 4.61 out of 5.00',
    },
  ];

  const DataLine = [
    {
      id:'1',
      img:html,
      title:'HTML - 5',
      line:<Line  progressValue={90} />,
    },
    {
      id:'2',
      img:css,
      title:'CSS - 3',
      line:<Line  progressValue={80} />,
    },
    {
      id:'3',
      img:tailwind,
      title:'Tailwind CSS',
      line:<Line  progressValue={80} />,
    },
    {
      id:'4',
      img:js,
      title:'Java Script',
      line:<Line  progressValue={60} />,
    },
    {
      id:'5',
      img:react,
      title:'React',
      line:<Line  progressValue={60} />,
    },
    {
      id:'6',
      img:fimga,
      title:'Figma',
      line:<Line  progressValue={90} />,
    },
    {
      id:'7',
      img:photos,
      title:'Adobe Photoshop',
      line:<Line  progressValue={65} />,
    },
    {
      id:'8',
      img:adobe,
      title:'Adobe Illustrator',
      line:<Line  progressValue={70} />,
    },
  ]

  const DataServices = [
    {
      id:'1',
      icon: <TbWorld/> ,
      title: 'Web Design',
      dish: 'I am professional Web Developer. I have designed more than 50 web template for my client. You can hire me for design your personal, business or other website template. You can trust me. I complied your work with your full satisfaction ',
      button:'Hire Me',
    },
    {
      id:'2',
      icon: <FaCode/>,
      title: 'Web Development',
      dish: 'I am professional Web Developer. I have designed more than 50 web template for my client. You can hire me for design your personal, business or other website template. You can trust me. I complied your work with your full satisfaction ',
      button:'Hire Me',
    },
    {
      id:'3',
      icon: <BiSolidPaintRoll/>,
      title: 'Graphic Design',
      dish: 'I am professional Web Developer. I have designed more than 50 web template for my client. You can hire me for design your personal, business or other website template. You can trust me. I complied your work with your full satisfaction ',
      button:'Hire Me',
    },
  ]

  const flippedCategories = ["Design", "Application"];
  const [isOpen, setIsOpen] = useState(false);

  const categories = ["", ...new Set(cards.map((card) => card.category))];

  const [selectedCategory, setSelectedCategory] = useState("Education Qualification");

  const filteredCards =
    selectedCategory === "All"
      ? cards
      : cards.filter((card) => card.category === selectedCategory);

  return (
    <>
      <div id="home" className="relative w-full">
      {/* صورة الخلفية */}
      <img className="w-full h-screen object-cover" src={imgbg} alt="Background" />

      {/* الفلتر فوق الصورة */}
      <img className="absolute top-0 left-0 w-full h-screen object-cover" src={filter} alt="Filter" />

      {/* شريط التنقل */}
      <div className="flex items-center justify-between absolute top-5 left-1/2 transform -translate-x-1/2 w-[80%] lg:w-auto gap-10">
        {/* الشعار */}
        <img className="w-20 md:w-24 lg:w-28" src={logo} alt="Logo" />

        {/* قائمة التنقل العادية */}
        <ul className="hidden md:flex gap-5 lg:gap-10 text-lg mt-2 text-white font-bold">
          <li className="hover:text-Sky-blue"><a href="#">Home</a></li>
          <li className="hover:text-Sky-blue"><a href="#about">About</a></li>
          <li className="hover:text-Sky-blue"><a href="#skills">Skills</a></li>
          <li className="hover:text-Sky-blue"><a href="#Services">Services</a></li>
          <li className="hover:text-Sky-blue"><a href="#Portfolio">Portfolio</a></li>
          <li className="hover:text-Sky-blue"><a href="#Contact">Contact</a></li>
        </ul>

        {/* زر القائمة الجانبية */}
        <button onClick={() => setIsOpen(true)} className="md:hidden text-white text-3xl">
          &#9776;
        </button>
      </div>

      {/* القائمة الجانبية */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/40 z-50 backdrop-blur-lg flex justify-end">
          <div className="w-64 bg-white/10 backdrop-blur-xl h-100 p-6 text-white shadow-lg">
            {/* زر الإغلاق */}
            <button onClick={() => setIsOpen(false)} className="text-2xl absolute top-4 right-4">
              <FaXmark />
            </button>

            {/* عناصر القائمة */}
            <ul className="mt-10 flex flex-col gap-5 text-lg font-bold">
              <li className="hover:text-Sky-blue"><a href="#" onClick={() => setIsOpen(false)}>Home</a></li>
              <li className="hover:text-Sky-blue"><a href="#about" onClick={() => setIsOpen(false)}>About</a></li>
              <li className="hover:text-Sky-blue"><a href="#skills" onClick={() => setIsOpen(false)}>Skills</a></li>
              <li className="hover:text-Sky-blue"><a href="#Services" onClick={() => setIsOpen(false)}>Services</a></li>
              <li className="hover:text-Sky-blue"><a href="#Portfolio" onClick={() => setIsOpen(false)}>Portfolio</a></li>
              <li className="hover:text-Sky-blue"><a href="#Contact" onClick={() => setIsOpen(false)}>Contact</a></li>
            </ul>
          </div>
        </div>
      )}
    </div>
    <div className="text-white absolute -mt-165 md:-mt-110 flex flex-col md:flex-row items-center md:items-start gap-10 ml-5 md:ml-75 md:mr-85 text-center md:text-left">
  {/* الصورة - ستظهر في الأعلى على الشاشات الصغيرة */}
  <img className="w-[70%] md:w-[40%] -mt-10 md:-mt-20" src={img1} alt="Profile" />

  {/* النصوص والمحتوى */}
  <div>
    <h1 className="text-3xl md:text-4xl font-bold">Ahmad Adham Shrara🔥</h1>
    <h5 className="text-xl md:text-2xl">
      <TypingEffect />
    </h5>
    <p className="pt-2 md:pt-1 text-sm md:text-base">
      I&apos;m a professional web developer with strong skills in HTML, CSS, JavaScript, Tailwind, JQuery, etc. I have been working in this field for almost 3 years, and all projects have been completed successfully with 100% client satisfaction.
    </p>

    {/* أيقونات التواصل الاجتماعي */}
    <div className="flex justify-center md:justify-start gap-5 text-2xl md:text-3xl pt-5 text-Sky-blue">
      <a href="https://www.facebook.com/profile.php?id=100089991578793&mibextid=ZbWKwL" target="black"><SiFacebook className="hover:text-blue-600" /></a>
      <a href="https://www.linkedin.com/in/ahmed-adham-479334331?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="black"><ImLinkedin /></a>
      <a href="https://github.com/ahmed26-coder" target="black"><VscGithub className="hover:text-gray-600" /></a>
      <a href="https://api.whatsapp.com/send?phone=0101626452" target="black"><BsWhatsapp className="hover:text-green-500" /></a>
      <a className="text-3xl md:text-4xl" href="https://www.instagram.com/ahmad_.shrara/profilecard/?igsh=Ym55YXl2eWN6em1x" target="black"><FaInstagram className="hover:text-red-800" /></a>
    </div>

    {/* أزرار الـ CV والـ Portfolio */}
    <div className="flex flex-row gap-5 mt-8 md:mt-10 justify-center md:justify-start items-center">
  <button className="bg-Sky-blue px-6 md:px-8 py-2 rounded-2xl text-lg text-black hover:text-white">
    <a href={cv} download="CV_Ahmad_Adham.pdf">Download CV</a>
  </button>
  <button className="bg-Sky-blue px-6 md:px-8 py-2 rounded-2xl text-lg text-black hover:text-white">
    Portfolio
  </button>
</div>

  </div>
</div>

<div id="about" className="bg-second-bg-color h-auto py-15 px-5 md:px-20 text-text-white">
  <h1 className="text-4xl font-bold pb-10 text-center">
    About <span className="text-Sky-blue">Me</span>
  </h1>
  <div className="flex flex-col md:flex-row gap-10 md:gap-30 md:mx-20 lg:mx-60">
    {/* الصورة والتفاصيل */}
    <div className="relative flex flex-col items-center md:items-start">
      <img className="md:w-[70%] relative z-10 md:-ml-2" src={about} alt="Profile" />
      <h2 className="z-10 absolute md:text-3xl font-bold md:mt-[12vw] ml-2.5 mt-[70vw] text-3xl">Ahmad Adham</h2>
    </div>

    {/* محتوى النصوص والأزرار */}
    <div className="mt-5 md:mt-0">
      <div className="flex gap-3 text-sm md:text-base font-bold md:-ml-10 justify-center md:justify-start">
        {categories.map((category) => (
          <button
            key={category}
            className={`pb-2 ${
              selectedCategory === category
                ? "text-Sky-blue border-b-2 border-Sky-blue"
                : "text-white"
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="mt-5 md:mt-8">
        {filteredCards.map((card) => (
          <div
            className={`card ${flippedCategories.includes(card.category) ? "flipped" : ""}`}
            key={card.id}
          >
            <div className="text-center md:text-left">
              <h2 className="text-lg text-Sky-blue font-bold">{card.title1}</h2>
              <p className="text-sm font-bold mt-1.5">{card.dish1}</p>
              <p className="text-sm font-bold mt-1">{card.dish2}</p>
              <p className="text-sm font-bold mt-1 mb-1.5">{card.dish3}</p>
              <h2 className="text-lg text-Sky-blue font-bold">{card.title2}</h2>
              <p className="text-sm font-bold mt-1.5">{card.dish4}</p>
              <p className="text-sm font-bold mt-1">{card.dish5}</p>
              <p className="text-sm font-bold mt-1 mb-1.5">{card.dish6}</p>
              <h2 className="text-lg text-Sky-blue font-bold">{card.title3}</h2>
              <p className="text-sm font-bold mt-1.5">{card.dish7}</p>
              <p className="text-sm font-bold mt-1">{card.dish8}</p>
              <p className="text-sm font-bold mt-1 mb-1.5">{card.dish9}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>

      <div className=" bg-bg-color" id="skills">
        <h1 className=" text-4xl font-bold text-center pt-15 text-text-white">My <span className=" text-Sky-blue">Skills</span></h1>
        <div className=" md:grid grid-cols-2 md:ml-[20%] md:gap-6 pb-20 pt-10">
          {DataLine.map((line) => (
            <article className=" flex gap-1.5 mb-4 md:mb-0 text-text-white " key={line.id}>
              <img className=" w-[12%]" src={line.img} alt="error" />
              <div className="">
                <p className=" text-lg font-bold">{line.title}</p>
                {line.line}
              </div>
            </article>
          ))}
        </div>
      </div>
      <div className="bg-second-bg-color pb-25 sm:h-full" id="Services">
  <div className="container mx-auto px-4">
    <h1 className="text-4xl font-bold text-center pt-15 text-text-white">
      My <span className="text-Sky-blue">Services</span>
    </h1>

    <div className="flex flex-wrap justify-center md:mx-[10%] sm:mx-[0%]  gap-5 md:gap-10 text-text-white pt-10">
      {DataServices.map((Services) => (
        <article
          className="bg-bg-color rounded-lg hover:shadow-Sky-blue hover:shadow-sm hover:border hover:border-Sky-blue hover:scale-[1.06] transition-transform duration-[1000ms] w-full sm:w-[90%] md:w-[48%] lg:w-[30%]"
          key={Services.id}
        >
          <div className="text-5xl md:text-7xl text-Sky-blue mt-5 flex justify-center">
            {Services.icon}
          </div>
          <h2 className="text-center text-Sky-blue text-xl md:text-2xl font-bold py-3">
            {Services.title}
          </h2>
          <p className="text-center mx-5">{Services.dish}</p>
          <button className="text-black bg-text-white mt-5 mb-10 py-1 px-10 md:px-15 rounded-2xl mx-auto block hover:bg-Sky-blue hover:text-text-white">
            {Services.button}
          </button>
        </article>
      ))}
    </div>
  </div>
</div>

      <div className="bg-bg-color pb-25" id="Portfolio">
  <div className="container px-4">
    <h1 className="text-4xl font-bold text-center pt-15 text-text-white">
      My <span className="text-Sky-blue">Portfolio</span>
    </h1>

    {/* الشبكة تستجيب للشاشات الصغيرة */}
    <div className="mt-10 grid grid-cols-1 md:grid-cols-3 place-items-center gap-7 md:mx-[12%] sm:mx-[8%]">
      {[Portfolio1, Portfolio2, Portfolio3, Portfolio4, Portfolio5, Portfolio6].map((portfolio, index) => (
        <div key={index} className="relative group overflow-hidden rounded-xl w-full max-w-[350px]">
          <img src={portfolio} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Web Design"/>
          <div className="absolute inset-0 bg-gradient-to-b from-cyan-400/80 to-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <h3 className="text-lg font-bold underline decoration-text-white">Web Design</h3>
            <BsBoxArrowUpRight className="text-3xl mt-2 text-cyan-300" />
          </div>
        </div>
      ))}
    </div>
  </div>
</div>

<div className="bg-second-bg-color" id="Contact">
  <h1 className="text-4xl text-text-white text-center pt-10 font-bold">
    Contact <span className="text-Sky-blue">Me</span>
  </h1>
  <div className="flex flex-col md:flex-row gap-10 sm:mx-[5%] md:mx-[0%] md:gap-60 items-center md:items-start">
    <div className="mt-10 sm:ml-5 md:ml-40 text-center md:text-left">
      <img src={logo} alt="error" className="mx-auto md:mx-0" />
      <p className="w-full sm:w-[350px] pt-3 text-gray-950">
        I am a professional Web designer. I have designed more than 50 web templates for my clients. 
        You can hire me to design your personal, business, or other website templates. 
        You can trust me. I complete your work with your full satisfaction.
      </p>
      <div className="flex justify-center md:justify-start gap-5 text-4xl mt-5 pb-4">
        <a href="https://www.facebook.com/profile.php?id=100089991578793&mibextid=ZbWKwL" target="black">
          <SiFacebook className="hover:text-blue-600" />
        </a>
        <a href="https://api.whatsapp.com/send?phone=0101626452" target="black">
          <BsWhatsapp className="hover:text-green-500" />
        </a>
        <a href="https://www.linkedin.com/in/ahmed-adham-479334331?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="black">
          <ImLinkedin className="hover:text-Sky-blue" />
        </a>
        <a href="https://github.com/ahmed26-coder" target="black">
          <VscGithub className="hover:text-gray-600" />
        </a>
        <a href="https://www.instagram.com/ahmad_.shrara/profilecard/?igsh=Ym55YXl2eWN6em1x" target="black">
          <FaInstagram className="hover:text-red-800" />
        </a>
      </div>
    </div>
    
    <div className="mt-10 w-full max-w-[600px] sm:mx-[10%] md:mx-[0%]">
      <form action="">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
          <input className="bg-bg-color pl-5 rounded-lg py-2 w-full sm:w-[300px] text-white font-bold outline-none focus:ring-0 focus:border-transparent" type="text" placeholder="First Name" />
          <input className="bg-bg-color pl-5 rounded-lg py-2 w-full sm:w-[300px] text-white font-bold outline-none focus:ring-0 focus:border-transparent" type="text" placeholder="Last Name" />
          <input className="bg-bg-color pl-5 rounded-lg py-2 w-full sm:w-[300px] text-white font-bold outline-none focus:ring-0 focus:border-transparent" type="number" placeholder="Phone" />
          <input className="bg-bg-color pl-5 rounded-lg py-2 w-full sm:w-[300px] text-white font-bold outline-none focus:ring-0 focus:border-transparent" type="text" placeholder="Subject" />
        </div>
        <div className="grid grid-cols-1 gap-7 mt-4 text-white">
          <input className="bg-bg-color text-white font-bold pl-5 py-3 rounded-lg outline-none focus:ring-0 focus:border-transparent" type="email" placeholder="Email" />
          <textarea className="bg-bg-color text-white font-bold pl-5 pt-3 rounded-lg outline-none focus:ring-0 focus:border-transparent" cols="30" rows="6" placeholder="Message"></textarea>
          <button className="bg-bg-color text-white font-bold py-3 mb-10 rounded-lg transition-all duration-300 bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500">
            Submit
          </button>
        </div>
      </form>
    </div>
  </div>
</div>

    </>
  );
}

export default Home;
