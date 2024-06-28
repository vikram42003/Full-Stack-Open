const CountryData = ({ country }) => {  
  if (!country) return <div>Loading...</div>

  const languages = [];
  for (const key in country.languages) {
    languages.push(<li key={country.languages[key]}>{country.languages[key]}</li>);
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
      <img height="200px" src={country.flags.svg} alt={country.flags.alt}/>
    </div>
  )
}

export default CountryData;