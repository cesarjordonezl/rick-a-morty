import React, { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";

const Characters = ({ url }) => {
  const [location, setLocation] = useState({});

  useEffect(() => {
    axios.get(url).then((res) => setLocation(res.data));
  }, []);

  // para saber si el personaje está vivo, muerto o sin información
  let statusText;
  let statusColor;

  switch (location.status) {
    case "Alive":
      statusText = "Alive";
      statusColor = "bg-circleGreen";
      break;
    case "Dead":
      statusText = "Dead";
      statusColor = "bg-circleRed";
      break;
    default:
      statusText = "Unknown";
      statusColor = "bg-circleGray";
  }

  return (
    <div className="Card mb-5 w-[290px] sm:w-[437px] h-max bg-card">
      <div className="w-full h-[255px] sm:h-[402px] relative">
        <img src={location.image} alt="" className="w-full h-full z-0" />
        <div
          className={`w-[120px] sm:w-[180px] h-[32px] sm:h-[42px] absolute top-8 sm:top-12 left-0 rounded-r-xl text-white font-bold flex items-center justify-start bg-card`}
        >
          <div
            className={`ml-2 mr-2 sm:ml-3 sm:mr-4 w-[12px] h-[12px] sm:w-[19px] sm:h-[19px] rounded-full ${statusColor}`}
          ></div>
          <p className="text-base sm:text-lg">{statusText}</p>
        </div>
      </div>
      <div className="m-2">
        <div className="sm:mt-4 capitalize text-2xl sm:text-3xl text-white border-b border-gray">
          <h1 className="mx-4 my-3">{location.name}</h1>
        </div>
        <div className="mx-4 my-3">
          <p className="sm:text-lg text-gray">SPECIE</p>
          <p className="text-lg sm:text-2xl capitalize text-white">{location.species}</p>
        </div>
        <div className="mx-4">
          <p className="sm:text-lg text-gray">ORIGIN</p>
          <p className="text-lg sm:text-2xl capitalize text-white">
            {location.origin?.name}
          </p>
        </div>
        <div className="mx-4 my-3">
          <p className="sm:text-lg text-gray">APPEARANCE IN EPISODES</p>
          <p className="text-lg sm:text-2xl capitalize text-white">
            {location.episode?.length}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Characters;
