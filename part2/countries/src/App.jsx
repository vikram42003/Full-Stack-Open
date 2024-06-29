import { useState, useEffect } from "react";

import countriesService from "./services/countriesService";

import Searchbar from "./Components/Searchbar";
import List from "./Components/List";

/*  FUTURE IMPORVEMENTS
  - Currently the app fetches all countires data and then displays it, it does that because the website
    from which i have to fetch data only gives all the data or the data of a specific country
    There might be a more efficient way of doing this but i dont want to spend too much time on an
    exercise which was marked as optional in the course and it might be more efficient to come back to 
    this one after learning more about full stack development so if you come back to this one, then optimize this app
*/

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [countriesList, setCountiresList] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    countriesService
      .getAll()
      .then(result => {
        setCountiresList(result);
      })
      .catch(error => {
        console.log("Could not load all countires list\n", error);
      });
  }, []);

  useEffect(() => {
    if (selectedCountry !== null) {
      countriesService.getWeather(selectedCountry).then(result => {
        setWeatherData(result.data);
      }).catch(error => {
        console.log("Could not load weather data\n", error);
      })
    }
  }, [selectedCountry]);

  const list = countriesList
    ? countriesList.filter(c =>
        c.name.common.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : null;

  let componentToRender;
  if (list === null) {
    componentToRender = <div>Loading...</div>;
  } else if (list.length === 0) {
    componentToRender = <div>No country found</div>;
  } else if (list.length === 1) {
    if (selectedCountry?.name.common !== list[0].name.common)
      setSelectedCountry(list[0]);
    componentToRender = (
      <List
        list={list}
        selectedCountry={selectedCountry}
        setSelectedCountry={setSelectedCountry}
        weatherData={weatherData}
      />
    );
  } else if (list.length === countriesList.length) {
    componentToRender = <div>Enter the name of a country</div>;
  } else if (list.length > 10) {
    componentToRender = <div>Too many matches, specify another filter</div>;
  } else {
    componentToRender = (
      <List
        list={list}
        selectedCountry={selectedCountry}
        setSelectedCountry={setSelectedCountry}
        weatherData={weatherData}
      />
    );
  }

  return (
    <div>
      <Searchbar
        text={"Find countries"}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      {componentToRender}
    </div>
  );
}

export default App;
