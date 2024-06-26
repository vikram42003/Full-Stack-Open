const CountryData = ({ country, weatherData }) => {
  if (!country) return <div>Loading...</div>;

  const languages = [];
  for (const key in country.languages) {
    languages.push(
      <li key={country.languages[key]}>{country.languages[key]}</li>
    );
  }

  return (
    <div>
      <h2>{country.name.common}</h2>
      <div>Capital - {country.capital[0]}</div>
      <div>Area - {country.area}</div>
      <ul>
        <b>Languages:</b>
        {languages}
      </ul>
      <img height="200px" src={country.flags.svg} alt={country.flags.alt} />
      {!weatherData ? (
        <div>Loading weather Data...</div>
      ) : (
        <div>
          <h3>Weather in {country.capital[0]}</h3>
          <div>
            Temperature - {(weatherData.main.temp - 273.15).toFixed(2)} Celsuis
          </div>
          <img
            src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
            alt={`${weatherData.weather[0].main} weather icon`}
          />
          <div>Weather - {weatherData.weather[0].main}</div>
          <div>Wind - {weatherData.wind.speed} m/s</div>
        </div>
      )}
    </div>
  );
};

export default CountryData;
