const Country = ({selectedCountry})=>{

    return(
        <div className="bord"> 
     
         <div className="countryNameStyle">{selectedCountry.name.common}</div>
            <img className="bord"src={selectedCountry.flags.png} style={{width:"20vw", height:"20vh"}} /> 
            <div className="words">
               <div>
                   <div className="ug">Official Name:</div>
        <div className="ug">Capital:</div>
        <div className="ug">Region:</div>
        <div className="ug">Population:</div>
        <div className="ug">Area:</div>
        <div className="ug">TimeZone:</div> 
        <div className="ug">Borders:</div>
        <div className="ug">Driving Side:</div>
        <div className="ug">Top-Level Domain:</div>
        <div className="ug">Start of Week:</div>
            </div>
          <div className="words2">
                 <div className="cName"> {selectedCountry.name.official}</div>
           <div className="capital"> {selectedCountry.capital}</div>
            <div className="region"> {selectedCountry.region}</div>
          <div className="region"> {selectedCountry.population}</div>
          <div className="region"> {selectedCountry.area}km²</div>
       <div className="region"> {selectedCountry.timezones}</div>
       <div className="region"> {selectedCountry.car.side}</div>
       <div className="region"> {selectedCountry.tld}</div>
       <div className="region"> {selectedCountry.startOfWeek}</div>  
          </div>
       
            </div>
           
       <div className="listStyle">
        <div className="ug">Maps:</div>
        <div className="maps"></div>
        <div className="map">{selectedCountry.maps.googleMaps}</div>
        <div className="map">{selectedCountry.maps.openStreetMaps}</div>
        <div>
            <div className="ug">Coat of Arms</div>
            <div className="maps"></div>
            <img src={selectedCountry.coatOfArms.png} style={{ paddingLeft:"20px", width:"10vw", height:"15vh"}}/>
        </div>
       </div>

        </div>
    )
}
export default Country