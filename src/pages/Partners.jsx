import React from "react";
import { FaCaretDown } from "react-icons/fa";
import ballogo from '../images/ballogo.png'
import trdlogo from '../images/trdlogo.png'
import arsenal from '../images/arsenal.png'
import psg from '../images/psg.png'
function Partners() {
  const partners = [
    {
      id:1,
      name:"Arsenal ",
      

    }
  ]
  return (
    <>
      <div>
        <h1 className=" flex text-2xl font-bold">
          Our Partners
          <span className=" pt-2">
            <FaCaretDown size={24} />
          </span>
        </h1>
      </div>
      <div>
        <h1 className=" text-center">
          Visit Rwanda is proud to partner with some of the world’s biggest
          brands to share the beauty of the country with millions around the
          globe.
        </h1>

        <div className="flex justify-between w-1/3 mx-auto">
            <img src={ballogo} alt="no internet connection" width={70}/>
            <img src={trdlogo} alt="no internet connection" width={70}/>
            <img src={arsenal} alt="no internet connection" width={70}/>
            <img src={psg} alt="no internet connection" width={70}/>
        </div>

        <div>
          <div>

          </div>
        </div>
      </div>
    </>
  );
}

export default Partners;
