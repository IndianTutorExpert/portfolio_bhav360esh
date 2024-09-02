import React from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { FaInstagram, FaGithub, FaLinkedinIn, FaReact, FaBuysellads } from "react-icons/fa";
import { SiTailwindcss, SiFigma, } from "react-icons/si";

const LeftBanner = () => {
    const [text] = useTypewriter({
        words: ["Full Stack Web Developer.", "Freelancer.", "Civil Engineer.", "CAD 3D Designer."],
        loop: true,
        typeSpeed: 30,
        deleteSpeed: 20,
        delaySpeed: 2000,
    });

    return (
        <div className='w-1/2'>
            <div className='flex flex-col gap-3'>
                <h4 className='text-lg font-normal'>
                    WELCOME TO MY WORLD
                </h4>
                <h1 className='text-4xl md:text-6xl font-bold text-white'> Hi, I'm {" "}
                    <span className='text-designColor capitalize text-3xl md:text-6xl'>Bhavesh</span></h1>
                <h2 className='text-3xl md:text-4xl font-bold text-white'> a <span>{text}</span>
                    <Cursor
                        cursorBlinking="false"
                        cursorStyle="|"
                        cursorColor="#ff014f"
                    /></h2>
                <p className="hidden md:block text-base font-bodyFont leading-6 tracking-wide">
                    Versatile professional with expertise in web development, CAD design, and civil engineering.
                    As a web developer, I create dynamic, user-friendly websites.
                    As a CAD designer, I produce detailed technical drawings and 3D models.
                    In civil engineering, I plan and execute infrastructure projects with precision. My diverse skills drive innovative solutions and efficient project execution.
                </p>
            </div>
            <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 hidden md:block justify-between pt-10">
                <div>
                    <h2 className="text-base uppercase font-titleFont mb-4">
                        Find me in
                    </h2>
                    <div className="flex flex-row gap-4">
                        <span className="bannerIcon">
                            <a href="https://www.instagram.com/bhav360esh/">
                                <FaInstagram />
                            </a>
                        </span>
                        <span className="bannerIcon">
                            <a href="https://github.com/Bhav360esh">
                            <FaGithub />
                            </a>
                        </span>
                        <span className="bannerIcon">
                            <a href="https://www.linkedin.com/in/bhavesh-kumar-958764229">
                                <FaLinkedinIn />
                            </a>
                        </span>
                    </div>
                </div>
                <div>
                    <h2 className="text-base uppercase font-titleFont mb-4">
                        BEST SKILL ON
                    </h2>
                    <div className="flex flex-row gap-4">
                        <span className="bannerIcon">
                            <FaReact />
                        </span>
                        <span className="bannerIcon">
                            <SiTailwindcss />
                        </span>
                        <span className="bannerIcon">
                            <SiFigma />
                        </span>
                        <span className="bannerIcon">
                            <FaBuysellads />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LeftBanner