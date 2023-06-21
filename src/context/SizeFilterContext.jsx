import PropTypes from 'prop-types';
import { createContext, useContext, useState } from "react";

const SizeFilterContext = createContext({});

// eslint-disable-next-line react-refresh/only-export-components
export function useSizeFilter() {
    return useContext(SizeFilterContext)
}


export function SizeFilterProvider({children}){
    const [selectedSize, setSelectedSize] = useState('Solo')
    const [selectedPrice, setSelectedPrice] = useState(0)
    const [selectedFlavor, setSelectedFlavor] = useState()

    return(
    <SizeFilterContext.Provider value={{
                                        selectedSize,
                                        setSelectedSize,
                                        selectedPrice,
                                        setSelectedPrice,
                                        selectedFlavor,
                                        setSelectedFlavor
                                        }}>
        {children}
    </SizeFilterContext.Provider>)
}

SizeFilterProvider.propTypes = {
    children: PropTypes.node.isRequired
  };