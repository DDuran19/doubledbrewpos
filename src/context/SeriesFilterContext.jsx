import PropTypes from 'prop-types';
import { createContext, useContext, useState } from "react";

const SeriesFilterContext = createContext({});

export function useSeriesFilter() {
    return useContext(SeriesFilterContext)
}


export function SeriesFilterProvider({children}){
    const [selectedSeries, setSelectedSeries] = useState('Milktea')
    const [availableSizes, setAvailableSizes] = useState({"Solo":1,"Double":1,"Triple":1,"B1T1":1})
    return(
    <SeriesFilterContext.Provider value={{
                                        selectedSeries,
                                        setSelectedSeries,
                                        availableSizes,
                                        setAvailableSizes}}>
        {children}
    </SeriesFilterContext.Provider>)
}

SeriesFilterProvider.propTypes = {
    children: PropTypes.node.isRequired
  };