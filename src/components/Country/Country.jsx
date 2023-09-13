import { useState } from 'react';
import './Country.css'
const Country = ({country, handleVIsitedCountries, handleVisitedFlags}) => {
    const {name, flags, population, area, cca3} = country;
    const [visited, setVisited] = useState(false);
    const handleVisited = () => {
        setVisited(!visited);
    }
    return (
        <div className={`country ${visited ? 'visited' : 'non-visited'}`}>
            <h3>name: {name?.common}</h3>
            <img src={flags.png} alt="" />
            <p>Population: {population}</p>
            <p>Area: {area} </p>
            <p><small>Code: {cca3}</small></p>
            <button onClick={() => handleVisitedFlags(country.flags.png)} >Visited Flags</button>
            <button onClick={() => handleVIsitedCountries(country)} >Mark Visited</button>
            <button onClick={handleVisited} className='btn'>{ visited ? 'visited' : 'going'}</button>
           {
                visited ? 'I have visited this country.' : 'I want to visit.'
            }
          
        </div>
    );
};

export default Country;