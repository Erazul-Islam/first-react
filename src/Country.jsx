import { useState } from "react";

const Country = ({country, handlevisitedCountries,handleFlags}) => {
    const {name,flags,population,area,cca3} = country;
    const [visited,setVisited] = useState(false);
    const handleVisited = () => {
        setVisited(!visited)
    }
    const passParams = () => handlevisitedCountries(country)
    console.log(handlevisitedCountries)
    return (
        <div className='country'>
            <h3 style={{backgroundColor: visited ? 'purple' : "wheat"}}>Name: {name?.common} </h3>
            <img src={flags.png} alt="" />
            <p>Population: {population}</p>
            <p>Area {area}</p>
            <p>Code: {cca3}</p>
            <button onClick={() => handlevisitedCountries(country)}>Mark visited</button><br />
            <button onClick={handleVisited}>Visited</button>
            <button onClick={()=> handleFlags(country.flags.png)}>add flags</button>
            {visited ? 'I have visited this country' : 'I want to visit'}
        </div>
    );
};

export default Country;