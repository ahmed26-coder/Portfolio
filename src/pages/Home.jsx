import { useState } from "react";
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
import img2 from "../assets/img2.png";
import box from "../assets/box.png"

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
  const categories = ["", ...new Set(cards.map((card) => card.category))];

  const [selectedCategory, setSelectedCategory] = useState("Education Qualification");

  const filteredCards =
    selectedCategory === "All"
      ? cards
      : cards.filter((card) => card.category === selectedCategory);

  return (
    <>
      <div id="home">
        <img className="relative" src={imgbg} alt="Background" />
        <img className="absolute -mt-193" src={filter} alt="Filter" />
      </div>
      <div className="flex gap-50 absolute -mt-187 ml-70">
        <img src={logo} alt="Logo" />
        <ul className="flex gap-10 text-lg mt-2 text-white font-bold">
          <li className="hover:text-Sky-blue"><a href="#">Home</a></li>
          <li className="hover:text-Sky-blue"><a href="#about">About</a></li>
          <li className="hover:text-Sky-blue"><a href="#skills">Skills</a></li>
          <li className="hover:text-Sky-blue"><a href="#Services">Services</a></li>
          <li className="hover:text-Sky-blue"><a href="#Portfolio">Portfolio</a></li>
          <li className="hover:text-Sky-blue"><a href="#Contact">Contact</a></li>
        </ul>
      </div>
      <div className="text-white absolute -mt-110 flex gap-10 ml-75 mr-85">
        <div>
          <h1 className="text-4xl font-bold">Ahmad Adham Shrara🔥</h1>
          <h5 className="text-2xl">
            And I&apos;m a <span className="text-Sky-blue">Frontend Developer</span>
          </h5>
          <p className=" pt-1">
            I&apos;m a professional web developer with strong skills in HTML, CSS, JavaScript, Tailwind, JQuery, etc. I have working in this field almost 3 years and all projects are complited successfully with 100% client satisfiction.
          </p>
          <div className="flex gap-7 ml-5 text-3xl pt-5 text-Sky-blue">
           <a href="https://www.facebook.com/profile.php?id=100089991578793&mibextid=ZbWKwL" target="black"><SiFacebook className="hover:text-blue-600" /></a>
           <a href="https://www.linkedin.com/in/ahmed-adham-479334331?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="black"><ImLinkedin /></a>
           <a href="https://github.com/ahmed26-coder" target="black"><VscGithub className="hover:text-gray-600" /></a>
           <a href="https://api.whatsapp.com/send?phone=0101626452" target="black"><BsWhatsapp className="hover:text-green-500" /></a>
           <a className=" text-4xl" href="https://www.instagram.com/ahmad_.shrara/profilecard/?igsh=Ym55YXl2eWN6em1x" target="black"><FaInstagram className=" hover:text-red-800" /></a>
          </div>
          <div className="flex gap-10 mt-10">
            <button className="bg-Sky-blue px-8 py-2 rounded-2xl text-lg text-black hover:text-white">
              <a href={cv} download="CV_Ahmad_Adham.pdf">Download CV</a>
            </button>
            <button className ="bg-Sky-blue px-8 py-2 rounded-2xl text-lg text-black hover:text-white">
              Portfolio
            </button>
          </div>
        </div>
        <img className="w-[40%] -mt-20 ml-17" src={img1} alt="Profile" />
      </div>
      <div id="about" className=" bg-second-bg-color h-150 pt-15 pl-20 text-text-white">
        <h1 className=" text-4xl font-bold pb-20 text-center">
          About <span className="text-Sky-blue">Me</span>
        </h1>
        <div className=" flex gap-30 mx-60">
          <div className="">
            <img className=" w-[80%] relative z-10 -ml-5.5" src={img2} alt="Profile" />
            <img className=" absolute z-0 -mt-20 w-[15%] -ml-10" src={box} alt="error" />
            <h2 className=" z-10 absolute text-3xl font-bold -ml-8 mt-2">Ahmad Adham</h2>
            <h4 className=" z-10 absolute text-black mt-12 text-base -ml-1 font-bold">Frontend Developer</h4>
            <h4 className=" z-10 absolute text-black mt-18 text-base font-bold">Backend Developer</h4>
            <h4 className=" z-10 absolute text-black mt-24 text-base ml-0.5 font-bold">Graphic Designer</h4>
          </div>
          <div className=" -mt-10">
            <div className=" flex gap-10 text-lg font-bold -ml-10">
              {categories.map((category) => (
                <button
                  key={category}
                  className={selectedCategory === category ? " text-Sky-blue pb-2 border-b-3 border-Sky-blue" : ""}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="">
              {filteredCards.map((card) => (
                <div
                  className={`card ${flippedCategories.includes(card.category) ? "flipped" : ""}`}
                  key={card.id}
                >
                  <div className=" mt-8">
                    <h2 className=" text-lg text-Sky-blue font-bold">{card.title1}</h2>
                    <p className=" text-sm font-bold ml-3 mt-1.5">{card.dish1}</p>
                    <p className=" text-sm font-bold ml-3 mt-1">{card.dish2}</p>
                    <p className=" text-sm font-bold ml-3 mt-1 mb-1.5">{card.dish3}</p>
                    <h2 className=" text-lg text-Sky-blue font-bold">{card.title2}</h2>
                    <p className=" text-sm font-bold ml-3 mt-1.5">{card.dish4}</p>
                    <p className=" text-sm font-bold ml-3 mt-1">{card.dish5}</p>
                    <p className=" text-sm font-bold ml-3 mt-1 mb-1.5">{card.dish6}</p>
                    <h2 className=" text-lg text-Sky-blue font-bold">{card.title3}</h2>
                    <p className=" text-sm font-bold ml-3 mt-1.5">{card.dish7}</p>
                    <p className=" text-sm font-bold ml-3 mt-1">{card.dish8}</p>
                    <p className=" text-sm font-bold ml-3 mt-1 mb-1.5">{card.dish9}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-bg-color" id="skills">
        <h1 className=" text-4xl font-bold text-center pt-15 text-text-white">My <span className=" text-Sky-blue">Skills</span></h1>
        <div className=" grid grid-cols-2 ml-70 gap-7 pb-20 pt-10">
          {DataLine.map((line) => (
            <article className=" flex gap-3 text-text-white" key={line.id}>
              <img className=" w-[10%]" src={line.img} alt="error" />
              <div className="">
                <p className=" text-lg font-bold">{line.title}</p>
                {line.line}
              </div>
            </article>
          ))}
        </div>
      </div>
      <div className=" bg-second-bg-color pb-25" id="Services">
        <h1 className=" text-4xl font-bold text-center pt-15 text-text-white">My <span className=" text-Sky-blue">Services</span></h1>
        <div className=" flex gap-10 text-text-white mx-50 pt-10">
          {DataServices.map((Services) => (
            <article className=" bg-bg-color rounded-lg hover:shadow-Sky-blue hover:shadow-sm hover:border-1 hover:border-Sky-blue hover:scale-[1.06] transition-transform duration-[1000ms]" key={Services.id}>
              <div className=" text-7xl text-Sky-blue mt-5 mx-33">
                {Services.icon}
              </div>
              <h2 className=" text-center text-Sky-blue text-2xl font-bold py-3 ">{Services.title}</h2>
              <p className=" text-center mx-5">{Services.dish}</p>
              <button className=" text-black bg-text-white mt-5 mb-10 py-1 px-15 rounded-2xl mx-20 hover:bg-Sky-blue hover:text-text-white">{Services.button}</button>
            </article>
          ))}
        </div>
      </div>
      <div className=" bg-bg-color pb-25" id="Portfolio">
        <h1 className="text-4xl font-bold text-center pt-15 text-text-white">My <span className=" text-Sky-blue">Portfolio</span></h1>
        <div className=" mt-10 grid grid-cols-3 mx-20 gap-7">
        <div className="relative group overflow-hidden rounded-xl">
      <img src={Portfolio1} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Web Design"/>
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-400/80 to-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <h3 className="text-lg font-bold underline decoration-text-white">Web Design</h3>
        <BsBoxArrowUpRight className="text-3xl mt-2 text-cyan-300" />
      </div>
    </div>
    <div className="relative group overflow-hidden rounded-xl">
      <img src={Portfolio2} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Web Design"/>
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-400/80 to-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <h3 className="text-lg font-bold underline decoration-text-white">Web Design</h3>
        <BsBoxArrowUpRight className="text-3xl mt-2 text-cyan-300" />
      </div>
    </div>
    <div className="relative group overflow-hidden rounded-xl">
      <img src={Portfolio3} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Web Design"/>
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-400/80 to-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <h3 className="text-lg font-bold underline decoration-text-white">Web Design</h3>
        <BsBoxArrowUpRight className="text-3xl mt-2 text-cyan-300" />
      </div>
    </div>
    <div className="relative group overflow-hidden rounded-xl">
      <img src={Portfolio4} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Web Design"/>
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-400/80 to-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <h3 className="text-lg font-bold underline decoration-text-white">Web Design</h3>
        <BsBoxArrowUpRight className="text-3xl mt-2 text-cyan-300" />
      </div>
    </div>
    <div className="relative group overflow-hidden rounded-xl">
      <img src={Portfolio5} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Web Design"/>
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-400/80 to-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <h3 className="text-lg font-bold underline decoration-text-white">Web Design</h3>
        <BsBoxArrowUpRight className="text-3xl mt-2 text-cyan-300" />
      </div>
    </div>
    <div className="relative group overflow-hidden rounded-xl">
      <img src={Portfolio6} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Web Design"/>
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-400/80 to-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <h3 className="text-lg font-bold underline decoration-text-white">Web Design</h3>
        <BsBoxArrowUpRight className="text-3xl mt-2 text-cyan-300" />
      </div>
    </div>
        </div>
      </div>
      <div className=" bg-second-bg-color" id="Contact ">
          <h1 className=" text-4xl text-text-white text-center pt-10 font-bold">Contact <span className=" text-Sky-blue">Me</span></h1>
          <div className=" flex gap-60">
            <div className=" mt-25 ml-40 ">
            <img src={logo} alt="error" />
            <p className=" w-[350px] pt-3 text-gray-950">Iam professional Web designer. I have designed more than 50 web template for my client. You can hire me for design your personal, business or other website template. You can trust me. I complied your work with your full satisfiction </p>
            <div className=" flex gap-10 text-4xl mt-5 ml-5 pb-4">
              <a href="https://www.facebook.com/profile.php?id=100089991578793&mibextid=ZbWKwL" target="black"><SiFacebook className=" hover:text-blue-600" /></a>  
              <a href="https://api.whatsapp.com/send?phone=0101626452" target="black"><BsWhatsapp className=" hover:text-green-500" /></a>  
              <a href="https://www.linkedin.com/in/ahmed-adham-479334331?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="black"><ImLinkedin className=" hover:text-Sky-blue" /></a>  
              <a href="https://github.com/ahmed26-coder" target="black"><VscGithub className=" hover:text-gray-600" /></a>
              <a href="https://www.instagram.com/ahmad_.shrara/profilecard/?igsh=Ym55YXl2eWN6em1x" target="black"><FaInstagram className=" hover:text-red-800" /></a>  
            </div>
            </div>
          <div className=" mt-10">
            <form action="">
              <div className=" grid grid-cols-2 gap-7">
                <input className=" bg-bg-color pl-5 rounded-lg py-2 w-[300px] text-white font-bold  outline-none focus:ring-0 focus:border-transparent" type="text" placeholder="First Name" />
                <input className=" bg-bg-color pl-5 rounded-lg py-2 w-[300px] text-white font-bold  outline-none focus:ring-0 focus:border-transparent" type="text" placeholder="Last Name" />
                <input className=" bg-bg-color pl-5 rounded-lg py-2 w-[300px] text-white font-bold  outline-none focus:ring-0 focus:border-transparent" type="number" placeholder="Phone" />
                <input className=" bg-bg-color pl-5 rounded-lg py-2 w-[300px] text-white font-bold  outline-none focus:ring-0 focus:border-transparent" type="text" placeholder="Subject" />
              </div>
              <div className=" grid grid-cols-1 gap-7 mt-4 text-white">
                <input className=" bg-bg-color text-white font-bold pl-5 py-3 rounded-lg  outline-none focus:ring-0 focus:border-transparent" type="email" placeholder="Email" />
                <textarea className=" bg-bg-color text-white font-bold pl-5 pt-3 rounded-lg  outline-none focus:ring-0 focus:border-transparent" cols="30" rows="6" placeholder="Message"></textarea>
                <button className=" bg-bg-color text-white font-bold py-3 mb-10 rounded-lg">Submit</button>
              </div>
            </form>
          </div>
      </div>
      </div>
    </>
  );
}

export default Home;
