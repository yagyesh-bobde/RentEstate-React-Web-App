import { createContext, useState } from "react";

export const RentContext = createContext();


const RentState = (props) => {
    const [properties, setproperties] = useState([]);
    const [paging, setpaging] = useState(null);
    // TODO: GET RENT PROPERTIES

    const getProperties = async ( page=1 ,sortby=1, Min=0, Max=999999, type=3 ) => {
      
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
                'X-RapidAPI-Host': process.env.REACT_APP_RAPID_API_HOST
            }
        };
        let prop = 'Rent';
        if (type === 2) {
            prop = 'Price'
        }

        let url = `https://realty-in-ca1.p.rapidapi.com/properties/list-residential?LatitudeMax=81.14747595814636&LatitudeMin=-22.26872153207163&LongitudeMax=-10.267941690981388&LongitudeMin=-136.83037765324116&CurrentPage=${page}&RecordsPerPage=15&SortOrder=A&SortBy=${sortby}&CultureId=1&NumberOfDays=0&${prop}Min=${Min}&${prop}Max=${Max}&TransactionTypeId=${type}`
        const response = await fetch( url, options);
        const json = await response.json();
        setproperties(json.Results)
        setpaging(json.Paging)
    }



  return (
      <RentContext.Provider value={{ getProperties, properties, paging, setproperties }}>
        {props.children}
    </RentContext.Provider>
  )
}

export default RentState
