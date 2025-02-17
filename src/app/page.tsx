"use client"
import Card from "@/components/card";
import next from '../../public/next.svg'
import react from '../../public/logo512.png'
import angular from '../../public/angular-icon.svg'
import animated from '../../public/animated-man-removebg-preview.png'
import Image from "next/image";
import Dock from '@/components/Dock';
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

export default function Home() {

  const items = [
    { icon: <CiLinkedin size={18} />, label: 'LinkedIn', onClick: () => alert('LinkedIn!') },
    { icon: <FaGithub size={18} />, label: 'GitHub', onClick: () => alert('GitHub!') },
  ];

  return (
    
    <div className="px-6">
      <span className="text-3xl font-extrabold full-stack-text css-typing" id="typedtext"><p>Frontend Developer</p></span>
    <div className="flex justify-between">
      <div>
      <Card src={next} title="Next JS" darkInvert={true} />
      <Card src={react} title="React JS" darkInvert={false} />
      <Card src={angular} title="Angular JS" darkInvert={false} />
      </div>
      <div className="flex items-center flex-col justify-evenly ml-220">
        <blockquote className="q-card q-card-color-1">
        <div className="content">Your <u>KEY</u> to success is simple: <u>K</u>nowledge to learn, <u>E</u>xperience to grow, and <u>Y</u>ou to make it happen.</div>
          <div className='author'>Harshil Shah</div>
        </blockquote>
        <div>
        <Dock 
    items={items}
    panelHeight={68}
    baseItemSize={50}
    magnification={70}
  />
        </div>
      </div>
      <Image src={animated} alt="animated-man" width={500} height={500} className="scale-x-[-1]"></Image>
    </div>
    </div>
  );
}
