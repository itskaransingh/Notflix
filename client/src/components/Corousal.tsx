import React from "react";
import Corousalitem from "./Corousalitem";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import {Ncontext} from '../context/Contextapi'

const Corousal = () => {
  const {content} = Ncontext()
  const [cindex, setCindex] = useState(0);
  const [c, setC] = useState([1, 2, 3, 4]);

  useEffect(() => {
    const interval = setInterval(() => {  
      setCindex((x)=>((x+1) % 4))
  // console.log((cindex+1) % 4) 
    }, 5000)
    return () => clearInterval(interval)
  }, [cindex]);


  return (
    <div>
      <div className="relative hero overflow-hidden ">
        <div
          style={{ transform: `translateX(${cindex%4 * -100}%)` }}
          className={`flex min-w-full  duration-300 ease-in h-full `}
        >
          {content?.map((ci, i) => (
            <div id={`${i}`} className="duration-1000   w-full ease-in">
              <Corousalitem t={ci} />
            </div>
          ))}
        </div>

        <div className="absolute top-0 bottom-0  left-0 right-0 h-full w-full justify-end flex flex-col ">
          {/* <div
            className={`flex justify-between h-full text-white  text-5xl px-3 items-center`}
          >
            <div
              className="md:cursor-pointer hover:text-slate-400"
              onClick={() => (cindex > 0 ? setCindex((x) => x - 1) : null)}
            >
              <IoIosArrowBack />
            </div>

            <div
              className="md:cursor-pointer   hover:text-slate-400"
              onClick={() => (cindex < 3 ? setCindex((x) => x + 1) : null)}
            >
              <IoIosArrowForward />
            </div>
          </div> */}
          <div className="flex justify-center my-2 gap-2">
            {content?.map((c, i) => (
              <div
                onClick={() => setCindex(i)}
                className={`w-10 py-2 md:cursor-pointer  border-b-4 ${
                  cindex == i ? "border-black" : "border-white"
                }`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Corousal;
