import React, { useState, useRef, useEffect } from "react";
import copy from "../assets/copy.png";
import del from "../assets/del.png";
import redo from "../assets/redo.png";
import undo from "../assets/undo.png";
import share from '../assets/shar.png'
import user from '../assets/user.png'
import logo from '../assets/logo.jpg'
import { Link } from 'react-router-dom'
import tri from '../assets/bleach.png'
import noUser from '../assets/noUser.png';
import { BsTriangleFill } from 'react-icons/bs'
import { Typewriter } from 'react-simple-typewriter'
import facebook from '../assets/facebook.png'
import linkedin from '../assets/link.png'
import youtube from '../assets/youtube.png'
import x from '../assets/x.png'
import down from '../assets/down.png'
import bg from '../assets/stole.png'

import {
  EmailShareButton,
  FacebookShareButton,

  LinkedinShareButton,
  TwitterShareButton,

} from "react-share";

const Top = () => {
  const [view, setView] = useState(false);
  const [popUp, setPopUp] = useState(false)
  const profileRef = useRef(null);
  const socialRef = useRef(null)

  const facebookUrl = "https://www.facebook.com/profile.php?id=100074959677873"
  const linkedUrl = "https://www.linkedin.com/in/daniel-boadu-b2779a243"
  const twiterUrl = "https://x.com/DanielB91241861?t=b5iwE0unjKigwgShjVA1cQ&s=09"

  const handleClickUser = () => {
    setView(!view);
  }

  const handlePopUp = () => {
    setPopUp(!popUp)
  }

  const handleType = (count) => {
    // access word count number
    // console.log(count)
  }

  const handleDone = () => {
    console.log(`Done after 5 loops!`)
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setView(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);
  

  useEffect(() => {
    const handleOutside = (event) => {
      if (socialRef.current && !socialRef.current.contains(event.target)) {
        setPopUp(false);
      }
    };

    document.addEventListener('click', handleOutside);

    return () => {
      document.removeEventListener('click', handleOutside);
    };
  }, []);

  // const selectedImage = selectedStoleId
  //   ? images.find((data) => data.id === selectedStoleId)
  //   : null;


  return (
    <>

      <div className=" bg-[#f5f5f5]  object-center ">

        <div className="flex flex-row items-center p-2 justify-center gap-x-[2.8rem]  border border-gray-300 border-opacity-30">
          <a href='home' className=" resize-contain ">
            <img src={logo} alt="" className="h-10 w-12 cursor-pointer resize-contain" />
          </a>
          <div className="w-72">

            <span className="text-lg  font-bold text-red-600">

              <Typewriter
                words={['Welcome to our Kente Stole', 'Customize Your Kente Stole', 'Personalize Your Kente Stole', 'Craft Your Welcoming Kente']}
                loop={''}
                cursor
                cursorStyle='_'
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={3000}
                onLoopDone={handleDone}
                onType={handleType}
              />
            </span>
          </div>
          <div className="h-6 w-6 resize-contain gap-y-4">
            <img src={copy} alt="" className="cursor-pointer" />
          </div>
          {/* <div className="w-[0.06rem] h-[3rem] bg-gray-300 bg-opacity-50"></div> */}
          <div className="h-6 w-6 resize-contain">
            <img src={del} alt="" className="cursor-pointer" />
          </div>
          {/* <div className="w-[0.06rem] h-[2.5rem] bg-gray-300 bg-opacity-50"></div> */}
          <div className="flex flex-row items-center gap-x-6 bg-white px-5 py-2 rounded-md border border-gray-400 border-opacity-30">
            <div className="h-5 w-5 resize-contain">
              <img src={undo} alt="" className="cursor-pointer" />
            </div>
            <div className="h-5 w-5 resize-contain">
              <img src={redo} alt="" className="cursor-pointer" />
            </div>
          </div>
          {/* <div className="w-[0.06rem] h-[2.5rem] bg-gray-300 bg-opacity-50"></div> */}
          <div className="flex flex-row items-center gap-x-1">
            <div className="cursor-pointer border border-gray-500 border-opacity-50 px-8 py-1.5 rounded-md bg-white ">
              <button className=" text-sm">Save</button>

            </div>
            <span className="text-sm">or </span>
            <span className="text-sm text-yellow-400">Ctrl S</span>
          </div>
          <div className="flex flex-col">
            <div ref={socialRef} onClick={handlePopUp} className="cursor-pointer flex flex-row items-center gap-x-2 rounded-md px-4 py-2 bg-yellow-400">
              <button className="text-sm">Share</button>
              <div className="w-4 h-4 resize-contain" >
                <img src={share} alt="" className="" />
              </div>
            </div>
            {
              popUp && (
                <div className="w-[14.8rem] z-10 absolute right-[18.5rem] p-3 top-12 transform translate-x-1/2 bg-white border rounded shadow-lg">

                  {/* <div className=" flex  text-sm flex-col font-custom cursor-pointer text-white">
                    <Link to='/' className="hover:bg-red-700 p-2.5" >Go to Home</Link>
                    <div className="bg-white w-full h-[0.25px]"></div>
                    <span className="hover:bg-red-700 p-2.5">Logout</span>
                  </div> */}
                  <div className="flex flex-row items-center gap-x-6">
                    <div className="flex flex-col items-center">
                      <a href={bg} download="custom-stole.png">
                        <img src={down} alt="Download" className="w-6 h-6 object-contain cursor-pointer" />
                      </a>
                      <span className="text-[0.5rem]  mt-[0.2rem]">Download</span>

                    </div>

                    <div className="flex flex-col items-center">
                      <FacebookShareButton url={facebookUrl} >
                        <img src={facebook} alt="" className="w-6 h-6 object-contain" />
                      </FacebookShareButton>
                      <span className="text-[0.5rem] mt-[0.2rem]">facebook</span>

                    </div>

                    <div className="flex flex-col items-center">
                      <LinkedinShareButton url={linkedUrl}>
                        <img src={linkedin} alt="" className="w-6 h-6 object-contain" />
                      </LinkedinShareButton>
                      <span className="text-[0.5rem] mt-1">linkedin</span>

                    </div>
                    <div className="flex flex-col items-center">
                      <TwitterShareButton url={twiterUrl}>
                        <img src={x} alt="" className="w-6 h-6 object-contain" />
                      </TwitterShareButton>
                      <span className="text-[0.5rem]  mt-1">X</span>
                    </div>
                  </div>
                </div>
              )
            }
          </div>
          <div className=" px-5 py-1.5 rounded-md cursor-pointer bg-yellow-400 ">
            <span className="text-sm">Order Now</span>
          </div>
          <div className="h-8 w-8 resize-contain " onClick={handleClickUser} ref={profileRef}>
            <img src={noUser} alt="" className="cursor-pointer rounded-full" />
          </div>

        </div>
        <div className="">
          {
            view && (
              <div className="w-[10rem] z-10 absolute right-[6.5rem]  top-12 transform translate-x-1/2 bg-white border rounded shadow-lg">
                {/* <div className=" absolute -top-2 left-36  w-4 h-4 transform -translate-x-1/2 -mt-1">
                  <BsTriangleFill color="#393A34" />
                </div> */}
                <div className=" flex  text-sm flex-col font-custom cursor-pointer ">
                  <a href='home' className="hover:bg-yellow-400 p-2.5" >Go to Home</a>
                  <div className="bg-gray-400 w-full h-[0.25px]"></div>
                  <a href='login' className="hover:bg-yellow-400 p-2.5">Logout</a>
                </div>

              </div>
            )
          }
        </div>
      </div>
    </>
  );
};

export default Top;