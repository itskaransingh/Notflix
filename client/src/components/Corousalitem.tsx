import React from "react";
import hero from "../assets/images/road-trip-with-raj-o4c2zoVhjSw-unsplash.jpg";

const Corousalitem = ({ t }) => {
  return (
    <div className="h-full w-screen relative ">
      <div className="h-full w-full bottom-0 left-0 right-0 top-0 relative">
        <img
          className="h-full  object-cover w-full object-top"
          src={t.poster}
          alt=""
        />
      </div>
      <div className="absolute top-[45%] z-10  w-[60%] left-32 flex flex-col">
        <div className="text-white  font-extrabold text-4xl">{t.title}</div>
        <div className="flex justify-start  my-4 gap-5">
          <div className=" px-5 text-white py-1 border-4 font-bold md:cursor-pointer hover:text-black hover:bg-white hover:border-[#fff]">
            Play
          </div>
          <div className=" px-5 text-white py-1 border-4 font-bold md:cursor-pointer hover:text-black hover:bg-white hover:border-[#fff]">
            Watch Later
          </div>
        </div>
        <div className="text-white mb-3">Released-26/06/2006</div>
        <div className="text-white font-semibold text-lg ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa laborum
          quisquam fuga! Itaque temporibus corporis, repudiandae a omnis
          voluptate commodi. Id, totam impedit? Omnis nemo illum voluptatum
          doloremque expedita, incidunt illo similique voluptates suscipit
          corporis a culpa eveniet quidem vero eligendi vitae sequi eaque
          quisquam quas, veritatis, corrupti nam praesentium!
        </div>
      </div>
    </div>
  );
};

export default Corousalitem;
