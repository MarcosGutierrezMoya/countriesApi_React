import { Link } from "react-router-dom";
import React from "react"
import CountryDetails from './CountryDetails';

function Countries({url}) {
    const [api,setApi] = React.useState([]);
    const [info,setInfo] = React.useState([]);
    
    React.useEffect(()=>{
        fetching();
        async function fetching() {
            setApi(await fetch(url).then((response) => response.json()));
        }
    },[])

    function showInfo(country) {
        setInfo(country);
    }

    return(
        <div>
            <div id="countries">
                {api?.map((country,i)=>{
                    return(
                        <div key={i} id='main'>
                            <Link className="country" to={"/"} onClick={()=>showInfo(country)}>
                                <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}/>
                                <p>{country.name.common}</p>
                            </Link>
                        </div>
                    )
                })}
            </div>
            <CountryDetails url={url} country={info}/>
        </div>
    )
}


export default Countries;