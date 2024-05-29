import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Pagination from "./components/Pagination";
import Logo from "./assets/img/rick_and_morty.png";
import CustomSelect from "./components/CustomSelect";
import Characters from "./components/Characters";

function App() {
  const [location, setLocation] = useState({});
  const [typeLocation, setTypeLocation] = useState("");
  const [locationOptions, setLocationOptions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentCards, setCurrentCards] = useState([]);

  useEffect(() => {
    const randomId = Math.floor(Math.random() * 125) + 1;
    axios
      .get(`https://rickandmortyapi.com/api/location/${randomId}`)
      .then((res) => setLocation(res.data));

    axios.get(`https://rickandmortyapi.com/api/location`).then((res) => {
      setLocationOptions(res.data.results.map((loc) => loc.name));
    });
  }, []);

  useEffect(() => {
    if (typeLocation) {
      setIsLoading(true);
      axios
        .get(
          `https://rickandmortyapi.com/api/location?name=${typeLocation.value}`
        )
        .then((res) => {
          if (res.data.results.length > 0) {
            setLocation(res.data.results[0]);
          } else {
            setLocation({});
          }
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [typeLocation]);

  const totalCards = location.residents?.length || 0;
  const cardsPerPage = 8;
  const totalPages = Math.ceil(totalCards / cardsPerPage);

  useEffect(() => {
    // para Cargar las tarjetas para la página actual aquí
    const startIndex = (currentPage - 1) * cardsPerPage;
    const endIndex = startIndex + cardsPerPage;
    const cardsForCurrentPage = location.residents?.slice(startIndex, endIndex) || [];
    setCurrentCards(cardsForCurrentPage);
  }, [currentPage, location.residents, cardsPerPage]);

  return (
    <div className="ContainerBackground bg-background min-h-screen">
      <div className="grid justify-items-center">
        <div className="Img mx-auto mb-8 w-full h-[82px] sm:w-[640px] sm:h-[165px] md:w-[768px] md:h-[198px] lg:w-[1024px] lg:h-[265px] xl:w-[1280px] xl:h-[331px] 2xl:w-[1440px] 2xl:h-[372px]">
          <img src={Logo} alt="Rick and Morty Logo" className="w-full h-full" />
        </div>
        <div className="grid justify-items-center">
          <div className="mx-auto py-3 lg:py-0 w-[290px] h-max sm:w-[437px] lg:w-[740px] lg:h-[126px] xl:w-[890px] flex flex-col items-center lg:flex-row lg:text-left lg:justify-around bg-card">
            <div className="self-center text-white">
              <p className="mt-2 lg:mt-0 lg:my-2 text-base sm:text-2xl text-center lg:text-left font-semibold">Name:</p>
              <div className="w-full text-sm sm:text-lg lg:font-medium">
                <CustomSelect
                  options={locationOptions.map((option) => ({
                    value: option,
                    label: option,
                  }))}
                  value={typeLocation}
                  onChange={(selectedOption) => setTypeLocation(selectedOption)}
                />
              </div>
            </div>
            <div className="self-center text-center lg:text-left text-white">
              <p className="mb-2 lg:mb-0 lg:my-2 text-base sm:text-2xl font-semibold ">Type:</p>
              <p className="text-sm sm:text-lg  lg:font-medium">{location.type}</p>
            </div>
            <div className="self-center text-center lg:text-left text-white">
              <p className="my-2 text-base sm:text-2xl font-semibold">Dimension:</p>
              <p className="text-sm sm:text-lg  lg:font-medium">{location.dimension}</p>
            </div>
            <div className="self-center text-center lg:text-left text-white">
              <p className="my-2 text-base sm:text-2xl text-center font-semibold">Residents:</p>
              <p className="text-sm sm:text-lg lg:font-medium">
                {location.residents?.length}
              </p>
            </div>
          </div>
          <div className="CardContainer mx-auto my-12 flex justify-center">
            <ul className="grid grid-cols-1 xl:grid-cols-2 gap-4">
              {currentCards?.map((location) => (
                <Characters location={location} url={location} key={location} />
              ))}
            </ul>
          </div>

          <div className="PaginationButtons flex justify-center my-4">
            {locationOptions.length > 0 && (
              <div className="pagination grid place-items-center py-24">
                <Pagination
                  page={currentPage} 
                  setPage={setCurrentPage} 
                  totalPages={totalPages}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
