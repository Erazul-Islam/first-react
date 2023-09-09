import { useEffect } from "react";
import { useState } from "react";
import Country from "./Country";
const Countries = () => {
    const [countries,setCountries] = useState([]);
    const [visitedCountries,setVisitedCountries] = useState([])
    const [visitedFlags,setvisitedFlags] = useState([])

    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    },[])

    const handlevisitedCountries = country =>{
        // console.log('add to visited country')
        // console.log(country)
    }

    const handleFlags = flags =>{
        const newFlags = [...visitedFlags,flags];
        setvisitedFlags(newFlags)
    }

    return (
        
        <div className="country-container">
            <h3>Countries: {countries.length}</h3>
            <div>
                <h5>Visited Countries</h5>
                <ul></ul>
            </div>
            <div>
                {
                    visitedFlags.map(flag => <img src={flag}></img>)
                }
            </div>
            {
                countries.map(country =><Country key={country.cca3}
                    handlevisitedCountries = {handlevisitedCountries}
                    handleFlags={handleFlags}
                     country={country}></Country>)
            }
        </div>
    );
};

export default Countries;