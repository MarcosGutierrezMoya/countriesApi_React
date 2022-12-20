import {useEffect, useState} from "react";
import { Link } from "react-router-dom";

function CountryDetails({url,country}) {
    const [countryShowed,setCountryShowed] = useState([]);
    const [newCountryShowed,setNewCountryShowed] = useState([]);

    const [countryShowedBorder,setCountryShowedBorder] = useState([]);
    
    if (country.length !== 0 && country !== countryShowed) {
        setCountryShowed(country);
        setNewCountryShowed([]);
    }
    useEffect(()=>{
        fetching();
        async function fetching() {
            setCountryShowedBorder(await fetch(url).then((response) => response.json()));
        }
    },[]);

    function showNewCountry(newCountry) {
        setNewCountryShowed(newCountry);
    }

    if (newCountryShowed.length !== 0) {
        return(
            <div id="info">
                <img src={`https://flagpedia.net/data/flags/icon/72x54/${newCountryShowed.alpha2Code.toLowerCase()}.png`}/>
                <h3>{newCountryShowed.name.common}</h3>
                <div className="datos">
                    <p>Capital</p>
                    <p>{newCountryShowed.capital[0]}</p>
                </div>
                <div className="separador"></div>
                <div className="datos">
                    <p>Area</p>
                    <p>{newCountryShowed.area} Km</p>
                </div>
                <div className="separador"></div>
                <div className="datos">
                    <p>Borders</p>
                    <section id="borders">
                        {newCountryShowed.borders.map(country => countryShowedBorder.map(countryBorder=>{
                            if (countryBorder.alpha3Code===country) {
                                return(
                                    <Link onClick={()=>showNewCountry(countryBorder)}>{countryBorder.name.common}</Link>
                                )
                            }
                        }))}
                    </section>
                </div>
                <div className="separador"></div>
            </div>
        )
    }
    else if(countryShowed.length !== 0){
        return(
            <div id="info">
                <img src={`https://flagpedia.net/data/flags/icon/72x54/${countryShowed.alpha2Code.toLowerCase()}.png`}/>
                <h3>{countryShowed.name.common}</h3>
                <div className="datos">
                    <p>Capital</p>
                    <p>{countryShowed.capital[0]}</p>
                </div>
                <div className="separador"></div>
                <div className="datos">
                    <p>Area</p>
                    <p>{countryShowed.area} Km</p>
                </div>
                <div className="separador"></div>
                <div className="datos">
                    <p>Borders</p>
                    <section id="borders">
                        {countryShowed.borders.map((country,i) => countryShowedBorder.map(countryBorder=>{
                            if (countryBorder.alpha3Code===country) {
                                return(
                                    <Link key={i} onClick={()=>showNewCountry(countryBorder)}>{countryBorder.name.common}</Link>
                                )
                            }
                        }))}
                    </section>
                </div>
                <div className="separador"></div>
            </div>
        )
    }
}

export default CountryDetails;