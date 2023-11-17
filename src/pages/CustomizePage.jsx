import React, { useState } from 'react';
import SideBar from '../components/SideBar';
import Middle from '../components/Middle';
// import Right from '../components/Right';
import Top from '../components/Top';
import { BsGrid3X2 } from "react-icons/bs";
import { BiSearch } from 'react-icons/bi'
import tri from '../assets/bleach.png'
import images from '../Data/Image';
import { BsTriangleFill } from 'react-icons/bs'
import { BsGrid1X2 } from 'react-icons/bs'
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import kent2 from '../assets/stole.png';
import symbolsData from '../Data/Symbols'
import Stole from '../components/Stole';
import Symbol from '../components/Symbol';



const CustomizePage = () => {
  const [dropDownOpen, setDropDown] = useState(false);
  const [hover, setHover] = useState(false);
  const [focus, setFocus] = useState(false);
  const [selectD, setSelect] = useState('kente Symbols')
  const [compact, setCompact] = useState(false);
  const [focusDrop, setFocusDrop] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);
  const [toggle, setToggle] = useState(true);
  const [dropdown, setDropdown] = useState(false);

  const [selected, setSelected] = useState(false);
  // const [selectedImage, setSelectedImage] = useState(null);

  // const selectedImage = selectedStoleId
  // ? images.find((data) => data.id === selectedStoleId)
  // : null;

  const handleSelect = (id) => {
    setSelectedImage(id);

  };
  const handleToggle = () => {
    setDropDown(!dropDownOpen);
  };


  const handleSelectChange = (e) => {
    setSelect(e.target.value)
  }

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  const handleClick = () => {
    setToggle(!toggle)
  }

  // const handleImageSelect = (id) => {
  //   setSelectedImage(id);
  // };



  const handleInputChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);

    const filtered = symbolsData.filter((item) =>
      item.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredItems(filtered)

  }
  const [selectedStoleId, setSelectedStoleId] = useState(null);


  const [searchTerm, setSearchTerm] = useState("");
  // console.log(searchTerm)
  return (
    <div className=''>
      <Top />

      <div className='flex mt-[0.16rem] gap-x-[0.16rem]'>
        <Middle images={images} selectedStoleId={selectedStoleId} />
        {/* <Middle/> */}
        {/* <Right/> */}
        <div className="w-1/4   border border-gray-300 border-opacity-30">
          <div className="bg-[#f5f5f5] p-3">
            <div className="flex flex-row items-center gap-x-4 ">
              <div className={`border
           border-gray-400 border-opacity-30 
            cursor-pointer ease-in-out rounded-sm ${focusDrop && 'border border-gray-700'}`}>
                <select

                  name="component"
                  onFocus={() => setFocusDrop(true)}
                  onBlur={() => setFocusDrop(false)}
                  id="components"
                  onChange={handleSelectChange}
                  className="w-[15.5rem]  text-sm text-gray-400 cursor-pointer font-custom group-hover:block focus:outline-none border-gray-300 bg-gray-100 p-2 "
                >

                  <option value="kente Symbols" >Kente Symbols</option>
                  <option value="kente Stool">Kente Stole</option>

                </select>
              </div>
              {
                selectD === 'kente Symbols' ? (
                  <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>


                    <div onClick={handleClick}>
                      {
                        toggle ? (
                          <BsGrid3X2 size={24}
                            className="text-gray-500 cursor-pointer" />
                        ) : (
                          <BsGrid1X2 size={24}
                            className="text-gray-500 cursor-pointer" />
                        )
                      }

                    </div>

                    <div className="">
                      {
                        hover && (
                          <div className="w-[12rem] absolute z-10 right-24  top-8 transform translate-x-1/2 bg-[#393A34] p-2 border rounded shadow-lg">
                            <div className=" absolute -top-2 left-44  w-4 h-4 transform -translate-x-1/2 -mt-1">
                              <BsTriangleFill color="#393A34" />
                            </div>
                            {
                              toggle ? (
                                <span className="font-custom text-white text-center text-sm">Switch to detail view</span>

                              ) : (
                                <span className="font-custom text-white text-center text-sm">Switch to compact view</span>
                              )
                            }

                          </div>
                        )
                      }
                    </div>
                  </div>
                ) : (
                  <img src={kent2} className="object-contain h-7 w-7" />
                )
              }
            </div>
            {
              selectD === 'kente Symbols' ? (
                <div className={`mt-3 flex 
          flex-row gap-x-1 items-center
           bg-white p-1 border border-gray-400 border-opacity-50 rounded-sm ${focus && 'border border-gray-700'}`} >
                  <input
                    type="text"
                    placeholder="Search Symbols..."
                    onFocus={() => setFocus(true)}
                    onBlur={() => setFocus(false)}
                    value={searchQuery}
                    onChange={handleInputChange}
                    className="outline-none bg-transparent w-[17rem] text-sm p-1.5 " />
                  <BiSearch color="" size={20} className="hover:transform hover:scale-105 transistion transform duration-75 text-gray-400" />
                </div>
              ) : (
                <div className="mt-3 flex flex-row gap-x-1 items-center bg-white p-1 border border-gray-400 border-opacity-50 rounded-sm" >
                  <input disabled type="text" placeholder="Please select a stole..." onChange={(e) => setSearchTerm(e.target.value)} className="font-custom outline-none bg-transparent w-[17rem] text-sm p-1.5 " />

                </div>
              )
            }
          </div>
          {selectD === 'kente Symbols' ? (
            <div className="bg-[#E6E7EB] ">
              {
                toggle ? (


                  <div className='h-[460px] overflow-y-scroll p-2 grid grid-cols-3 gap-x-2 gap-y-2 '>

                    {searchQuery === '' ? (

                      symbolsData.map(({ id, img, title }) => (
                        <div key={id} className=' flex flex-col items-center  hover:bg-white hover:transition-all hover:duration-100 hover:border-2 hover:border-gray-300 cursor-pointer bg-[#f5f5f5] rounded-lg  h-24 p-2'>
                          <div className='w-10 h-10 resize-contain '>
                            <Symbol key={id} img={img} />
                          </div>
                          <span className='font-custom text-center text-xs pt-3 w-[5rem]'>{title}</span>
                        </div>
                      ))

                    ) : (
                      searchQuery !== '' ? (
                        filteredItems.map(({ id, img, title }) => (
                          <div key={id} className=' flex flex-col items-center  hover:bg-white hover:transition-all hover:duration-100 hover:border-2 hover:border-gray-300 cursor-pointer bg-[#f5f5f5] rounded-lg  h-24 p-2'>
                            <div className='w-10 h-10 resize-contain '>
                              <img src={img} alt="" className='' />
                            </div>
                            <span className='font-custom text-center text-xs pt-3 w-[5rem]'>{title}</span>
                          </div>
                        ))
                      ) : (
                        <div>
                          <span>No search result found</span>
                        </div>
                      )
                    )}


                  </div>

                ) : (
                  <div className='p-2 h-[460px] overflow-y-scroll'>
                    {
                      searchQuery === '' ? (

                        symbolsData.map(data => (
                          <div className='font-custom  flex p-2 mt-3 bg-[#f5f5f5] rounded-lg flex-row items-center  hover:transition-all  cursor-pointer'>
                            <div className='flex items-center
                             justify-center resize-contain
                              bg-white p-1 rounded-lg 
                               h-16 w-16 shadow-2xl hover:border-2 border-gray-400 hover:transition-all duration-100'>
                              <Symbol key={data.id} img={data.img} />
                            </div>
                            <div className='flex flex-col items-start pl-4'>
                              <span className='text-sm text-gray-500'>{data.title}</span>
                              <span className='w-48 text-[0.7rem]'>{data.info}</span>
                            </div>
                          </div>
                        ))

                      ) : (

                        filteredItems.map(data => (
                          <div className='font-custom  flex p-2 mt-3 bg-[#f5f5f5] rounded-lg flex-row items-center  hover:transition-all  cursor-pointer'>
                            <div className='flex items-center
                             justify-center resize-contain
                              bg-white p-1 rounded-lg 
                               h-16 w-16 shadow-2xl hover:border-2 border-gray-400 hover:transition-all duration-100'>
                              <img src={data.img} alt="" className='w-10 h-10  ' />
                            </div>
                            <div className='flex flex-col items-start pl-4'>
                              <span className='text-sm text-gray-500'>{data.title}</span>
                              <span className='w-48 text-[0.7rem]'>{data.info}</span>
                            </div>
                          </div>
                        ))

                      ) 
                    }
                  </div>
                )
              }
            </div>
          ) : (
            <div className="bg-[#E6E7EB]">
              <div>
                <Stole setSelectedStoleId={setSelectedStoleId} selectedStoleId={selectedStoleId} />




              </div>

            </div>

          )}




        </div>
      </div>
    </div>
  );
}

export default CustomizePage;