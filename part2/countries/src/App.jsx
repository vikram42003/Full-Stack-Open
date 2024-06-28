import { useState, useEffect } from "react";

import countriesService from "./services/countriesService";

import Searchbar from "./Components/Searchbar";
import List from "./Components/List";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [countriesList, setCountiresList] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState(null);

  useEffect(() => {
    countriesService
      .getAll()
      .then((result) => {
        setCountiresList(result);
      })
      .catch((error) => {
        console.log("Could not load all countires list\n", error);
      });
  }, []);

  const list = countriesList
    ? countriesList.filter((c) =>
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
