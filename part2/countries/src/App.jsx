import { useState, useEffect } from "react";

import countriesService from "./services/countriesService";

import Searchbar from "./Components/Searchbar";
import List from "./Components/List";
import CountryData from "./Components/CountryData";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [countriesList, setCountiresList] = useState(null);

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

  const list = countriesList ? countriesList.filter((c) =>
    c.name.common.toLowerCase().includes(searchQuery.toLowerCase())
  ) : null;

  let componentToRender;
  if (list === null) {
    componentToRender = <div>Loading...</div>;
  } else if (list.length === 0) {
    componentToRender = <div>No country found</div>;
  } else if (list.length === 1) {
    componentToRender = <CountryData country={list[0]} />;
  } else {
    componentToRender = <List list={list} />
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
