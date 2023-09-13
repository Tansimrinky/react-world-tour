import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";
const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [visitedCountries, setVisitedCountries] = useState([]);
  const [visitedFlags, setVisitedFlags] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);
  const handleVIsitedCountries = (country) => {
    console.log('Add this to your visited countries.')
    const newVisitedCountries = [...visitedCountries, country]
    setVisitedCountries(newVisitedCountries);
  };
  const handleVisitedFlags = flags => {
    console.log('add this flag to your country.');
    const newvisitedFlags = [...visitedFlags, flags]
    setVisitedFlags(newvisitedFlags)
    console.log(flags)


  }
   return (
    <div>
      <h3>Countries: {countries.length} </h3>
      <div>
        <h5>Visited countries: {visitedCountries.length} </h5>
        {
            visitedCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)
        }
      </div>
      <div>
        <h5>Visited Flags: {visitedFlags.length} </h5>
        <div className="flag-container">
        {
            visitedFlags.map((flags, idx) => <img key={idx} src={flags} alt="" /> )
        }
        </div>
      </div>
      <div className="country-container">
        {countries.map((country) => (
          <Country 
          handleVisitedFlags = {handleVisitedFlags}
          handleVIsitedCountries={handleVIsitedCountries}
          key={country.cca3} 
          country={country}></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
