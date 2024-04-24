import deployment from '../assets/deployment.png'
import ideation from '../assets/ideation.png'
import development from '../assets/development.png'
import aboutUs1 from '../assets/aboutUs1.png'
import aboutUs2 from '../assets/aboutUs2.png'

import React from '../assets/react.png'
import Node from '../assets/node.png'
import Typescript from '../assets/typescript.png'
import Tailwind from '../assets/tailwind.png'
import Bootstrap from '../assets/bootstrap.png'

import Laravel from '../assets/laravel.png'
import MySQL from '../assets/sql.png'
import Python from '../assets/python.png'
import Java from '../assets/java.png'
import PostgreSQL from '../assets/postgresql.png'
const Home = () => {
  return ( 
    <>
<section className="pb-[5rem] bg-white ">
            <h1 className=" text-center font-semibold font-[inter] text-[#909090] text-[10px] sm:text-[16px]">
                Kaizen Tech and Software Solutions
            </h1>

            <h1 className="text-center font-bold font-[inter] pt-[16px] text-black text-[65px] sm:text-[100px] ">
                Where <span style={{ color: '#22B5F3' }}>Ideas</span><br />Meets <span style={{ color: '#22B5F3' }}>Executions</span>
            </h1>

            <p className="text-center text-[12px] sm:text-[16px] font-regular font-[inter] text-black">
                Kaizen Tech and Software Solutions, based in the Philippines, pioneers bespoke <br />
                website development, elevating brands and driving online growth.
            </p>
            <div className="text-center flex justify-center pt-5">
                <button className="btn  bg-[#22B5F3] font-[inter] font-semibold text-white drop-shadow-sm">Schedule a free consultation</button>
            </div>

</section>

<section className="bg-black pt-[86px] pb-10">
        <h1 className="text-center text-white font-semibold text-[30px] sm:text-[42px] font-[inter]">From Ideation to Development to Deployment</h1>
        <p className="text-center text-[10px] sm:text-[16px] font-regular font-[inter] text-white pt-[24px]">
                It all starts with an idea. We help those that have reached the <br />
                point of being ready to extend their business with a relevant < br />
                and impactful software.
        </p>
        <div className="pt-[40px] pb-10 flex flex-col items-center sm:flex-row sm:justify-center sm:space-x-[44px] "> 
                <div className="text-center"> 
                                <img src={ideation} alt="ideation" className="w-[373px] h-[337px] sm:max-w-full pt-10" />
                                <h1 className="pt-10 text-[40px] font-semibold font-[inter] text-white">
                                Ideation
                                </h1>
                                <p className="text-center text-[16px] font-regular font-[inter] text-white pt-[24px]">
                                Ideation sparks the flame of innovation, where <br />
                                ideas take flight and possibilities abound. <br />
                                Its the creative process of generating, refining, <br />
                                and shaping concepts into actionable plans.
                                </p>
                </div>

  <div className="text-center"> 
    <img src={development} alt="development" className="w-[373px] h-[337px] sm:max-w-[373px] pt-10" />
    <h1 className="pt-10 text-[40px] font-semibold font-[inter] text-white">
      Development
    </h1>
    <p className="text-center text-[16px] font-regular font-[inter] text-white pt-[24px]">
      Development is where ideas come to life, <br />
      as skilled hands craft code, design interfaces, <br />
      and build functionality. Its a journey of problem  <br />
      solving and iteration, where every line of code  <br />
      and pixel perfected brings the vision to reality. <br />
    </p>
  </div>

  <div className="text-center"> 
    <img src={deployment} alt="deployment" className="w-[373px] h-[337px] sm:max-w-full pt-10" />
    <h1 className="pt-10 text-[40px] font-semibold font-[inter] text-white">
      Deployment
    </h1>
    <p className="text-center text-[16px] font-regular font-[inter] text-white pt-[24px]">
      Deployment marks the culmination of hard work  <br />
      and dedication, as solutions are unleashed into the <br />
      world. Its the moment of truth, where ideas meet the  <br />
      real world, making an impact and driving change. <br />
    </p>
  </div>
</div>

</section>

<section className="pb-[5rem] bg-white pt-[78px]">
  <h1 className="text-center text-[#22B5F3] font-semibold text-[32px] font-[inter]">About Us</h1>

  <div className="flex flex-col items-center sm:flex-row sm:justify-center sm:items-start sm:space-x-[56px] pt-[40px] sm:pt-[100px]"> 
  <p className="text-[16px] font-regular font-[inter] text-black sm:text-left">
    At Kaizen Tech and Software Solutions, we embody the spirit of <br /> innovation and dedication. Our team is driven by a youthful <br /> energy and a passion for crafting cutting-edge solutions. Our <br /> mission is clear: to deliver transformative technologies that <br /> propel businesses to new heights while enriching the lives of <br /> individuals through meaningful innovation. With a steadfast <br /> commitment to excellence, we empower our clients to thrive in <br /> an ever-evolving digital landscape. By harnessing the power of <br /> technology, we drive growth, foster positive change, and shape <br /> a brighter future for all. Join us on this journey of innovation and <br /> progress.
  </p>
  <img src={aboutUs1} alt="deployment" className="w-[530px] h-[474px] max-w-full" />
</div>


  <div className="flex flex-col items-center sm:flex-row sm:justify-center sm:items-start sm:space-x-[56px] pt-[40px] sm:pt-[100px]"> 
    <img src={aboutUs2} alt="deployment" className="w-[530px] h-[474px] max-w-full" />
    <p className="text-[16px] font-regular font-[inter] text-black text-center sm:text-left">
      Meet the dynamic team behind Kaizen Tech and Software <br /> Solutions: Carl Saginsin, Ken Santos, Kevin Yu, and Katelyn Ebuiza.<br /> Together, we bring a blend of expertise in development <br /> and UI design to the table. With our combined talents and <br /> passion for innovation, we are committed to delivering top <br />-notch solutions that exceed expectations. Our close-knit team <br /> fosters collaboration, creativity, and a relentless pursuit of <br /> excellence in every project we undertake. At Kaizen, we're not <br /> just a team — we're a family, dedicated to pushing boundaries <br /> and shaping the future of technology.
    </p>  
  </div>
</section>


<section className="bg-black pt-[86px] pb-10">
<h1 className="text-center text-white font-semibold  text-[32px] sm:text-[42px] font-[inter]">Our Tech Stack</h1>
<p className="text-center text-[11px] sm:text-[16px] font-regular font-[inter] text-white pt-[24px]">
With a carefully curated tech stack, we are equipped to tackle any project with ease. <br />
Harnessing the power of PHP and JavaScript, alongside frameworks like Laravel and React,  <br />
we build exceptional solutions. Coupled with robust databases, cloud infrastructure, and DevOps  < br />
proficiency, we are ready to overcome any challenge. Rest assured, our tech expertise ensures  < br />
top-notch delivery every time.
        </p>

        <div className='flex justify-center pt-[40px]'>
            <hr className="border-white  w-[50rem]" />    
        </div>

<div className=" lg:space-x-[22rem] sm:flex justify-center pt-[40px]"> 
                <div className='pb-10 sm:flex justify-center'> 
                        <h1 className="text-center text-[24px] font-light font-[inter] text-white">
                            Front end Tech Stack
                        </h1>
                </div>
<div>
<div className='flex space-x-3'> 
                        <img src={React} alt="React" className="w-[37px] h-[37px]" />
                        <p className='text-white pt-1 font-[inter]'>React</p>
                </div>

                <div className='flex space-x-3 pt-[24px]'> 
                        <img src={Node} alt="React" className="w-[37px] h-[37px]" />
                        <p className='text-white pt-1 font-[inter]'>Node js</p>
                </div>

                <div className='flex space-x-3 pt-[24px]'> 
                        <img src={Typescript} alt="React" className="w-[37px] h-[37px]" />
                        <p className='text-white pt-1 font-[inter]'>Next js</p>
                </div>

                <div className='flex space-x-3 pt-[24px]'> 
                        <img src={Tailwind} alt="React" className="w-[50px] h-[30px]" />
                        <p className='text-white pt-1 font-[inter]'>Tailwind</p>
                </div>

                <div className='flex space-x-3 pt-[24px]'> 
                        <img src={Bootstrap} alt="React" className="w-[37px] h-[37px]" />
                        <p className='text-white pt-1 font-[inter]'>Bootstrap</p>
                </div>
</div>

</div>

<div className=" lg:space-x-[22rem] sm:flex justify-center pt-[40px]">
                <div className='pb-10 sm: justify-center'>  
                        <h1 className="text-center text-[24px] font-light font-[inter] text-white">
                            Back end Tech Stack
                        </h1>
                </div>
<div>
<div className='flex space-x-3'> 
                        <img src={Laravel} alt="React" className="w-[37px] h-[37px]" />
                        <p className='text-white pt-1 font-[inter]'>Laravel</p>
                </div>

                <div className='flex space-x-3 pt-[24px]'> 
                        <img src={MySQL} alt="React" className="w-[37px] h-[37px]" />
                        <p className='text-white pt-1 font-[inter]'>MySQL</p>
                </div>

                <div className='flex space-x-3 pt-[24px]'> 
                        <img src={Python} alt="React" className="w-[37px] h-[37px]" />
                        <p className='text-white pt-1 font-[inter]'>Python</p>
                </div>

                <div className='flex space-x-3 pt-[24px]'> 
                        <img src={Java} alt="React" className="w-[37px] h-[50px]" />
                        <p className='text-white pt-1 font-[inter]'>Java</p>
                </div>

                <div className='flex space-x-3 pt-[24px]'> 
                        <img src={PostgreSQL} alt="React" className="w-[37px] h-[37px]" />
                        <p className='text-white pt-1 font-[inter]'>PostgreSQL</p>
                </div>
</div>
</div>
</section>

<section className="pb-[5rem] bg-white pt-[100px]  ">
<h1 className="text-center text-[#22B5F3] font-semibold text-[32px] font-[inter]">Our Services</h1>



<div className='sm:flex justify-center pt-[100px] space-x-[130px]'> 
                        <h1 className="text-left sm:text-center text-[60px] text-[#22B5F3] font-bold font-[inter]">
                            UI/UX Design
                        </h1>
                        <p className='pt-11 text-[#939395] '>
                          We Research and Design Stunning UI’s for your business needs
                        </p>
</div>
<div className='flex justify-center'>
            <hr className="border-[#22B5F3]  w-[72rem]" />    
</div>

<div className='sm:flex justify-center pt-[100px] space-x-[64px]'> 
<h1 className="text-left sm:text-center text-[60px] text-[#22B5F3] font-bold font-[inter]">
                            Web Development
                        </h1>
                        <p className='pt-11 text-[#939395]'>
                        Stunning, Functional and Responsive websites that solves your needs
                        </p>
</div>
<div className='flex justify-center'>
            <hr className="border-[#22B5F3]  w-[72rem]" />    
</div>

<div className='sm:flex justify-center pt-[100px] space-x-[53px]'> 
<h1 className="text-left sm:text-center text-[60px] text-[#22B5F3] font-bold font-[inter]">
                        E-Commerce Store
                        </h1>
                        <p className='pt-11 text-[#939395]'>
                        Seamless experience for your business from appealing UI into secure Database
                        </p>
</div>
<div className='flex justify-center'>
            <hr className="border-[#22B5F3]  w-[72rem]" />    
</div>

<div className='sm:flex justify-center pt-[100px] space-x-[72px]'> 
<h1 className="text-left sm:text-center text-[60px] text-[#22B5F3] font-bold font-[inter]">
                        Custom Solutions
                        </h1>
                        <p className='pt-11 text-[#939395]'>
                        We provide tailored software to optimize and enhance your Business
                        </p>
</div>
<div className='flex justify-center'>
            <hr className="border-[#22B5F3]  w-[72rem]" />    
</div>
</section>

<section className="pb-[5rem] bg-white pt-[100px]">
<h1 className="text-center text-[#939395] font-semibold text-[20px] font-[inter]">Want to start a project?</h1>
<h1 className="text-center text-black font-bold text-[124px] font-[inter]">Let’s Talk</h1>
<div className="text-center flex justify-center pt-5">
                <button className="btn  bg-[#22B5F3] font-[inter] font-semibold text-white drop-shadow-sm">Schedule a free consultation</button>
            </div>
</section>
    </>
  )
}

export default Home