import React, { use, useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";


const Countries = ({ countriesPromise }) => {
  const [visitedCountries, setVisitedCountries] = useState([]);
  const countries = use(countriesPromise);
  // console.log(countries);
  const [visitedFlag, setVisitedFlag]=useState([]);


  const handleVisitedFlag=(flag)=>{
    // console.log('flag clicked');
    const newVisitedFlag=[...visitedFlag,flag];
    setVisitedFlag(newVisitedFlag);
  }

  const handleVisitedCountries = (country) => {
    const newVisitedCountries = [...visitedCountries, country];
    setVisitedCountries(newVisitedCountries);
    // console.log('visited countries:',country);

  };
  return (
    <div>
      <h1>Traveling countries : {countries.length}</h1>
        <h3>Travels so fer:{visitedCountries.length }</h3>
        <div>
          {
            visitedFlag.map((flag,index)=><img key={index} src={flag} alt="" />)
          }
        </div>
        <ol>
            {
                visitedCountries.map(country=><li key={country.cca3}>{country.name.common}</li>)
            }
        </ol>
      <div className="countries">
        {countries.map((country) => (
          <Country
           key={country.cca3}
          handleVisitedCountries={handleVisitedCountries}
          handleVisitedFlag={handleVisitedFlag}
          country={country}></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
