import { useEffect, useRef, useState } from "react";
import useFetch from "./hooks/useFetch";
import LocationCard from "./components/LocationCard";
import ResidentCard from "./components/ResidentCard";
import "./App.css";

function App() {
  const randomId = Math.floor(Math.random() * 126) + 1;
  const [inputValue, setInputValue] = useState(randomId);
  const [location, getLocation, isLoading, hasError] = useFetch();

  useEffect(() => {
    const url = `https://rickandmortyapi.com/api/location/${inputValue}`;
    getLocation(url);
  }, [inputValue]);

  const textInput = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    setInputValue(textInput.current.value.trim().toLowerCase());
    textInput.current.value = "";
  };

  console.log(inputValue);

  return (
    <div className="app">
      {isLoading ? (
        <div className="loader">
          <div data-glitch="Loading..." className="glitch">
            Loading...
          </div>
        </div>
      ) : (
        <>
        <div className="app_banner">
        </div>
          <form className="app_form" onSubmit={handleSubmit}>
            <input className="app_form-input" ref={textInput} type="number" />
            <button className="app_form-btn">Search</button>
          </form>
          {hasError || !+inputValue ? (
            <h2>❌HEY! you must provide an id from 1 to 126😥</h2>
          ) : (
            <>
              <LocationCard info={location} />
              <div className="app_container">
                {location?.residents?.map((characterUrl) => (
                  <ResidentCard key={characterUrl} url={characterUrl} />
                ))}
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
}

export default App;
