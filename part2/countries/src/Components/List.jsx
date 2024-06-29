import CountryData from "./CountryData";

const List = ({ list, selectedCountry, setSelectedCountry, weatherData }) => {
  if (!list) return null;
  return (
    <div>
      {list.map((l) => {
        if (selectedCountry && l.name.common === selectedCountry.name.common) {
          return <CountryData key={l.name.common} country={selectedCountry} weatherData={weatherData}/>;
        } else {
          return (
            <div key={l.name.common}>
              {l.name.common} &nbsp;
              <button type="button" onClick={() => setSelectedCountry(l)}>
                show
              </button>
            </div>
          );
        }
      })}
    </div>
  );
};

export default List;
