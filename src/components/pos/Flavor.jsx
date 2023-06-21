import { Card } from "react-bootstrap";
import PropTypes from "prop-types";
import seriesItems from "../../data/series.json"
import { useSeriesFilter } from "../../context/SeriesFilterContext";
import { useSizeFilter } from "../../context/SizeFilterContext";

function lookUpSeries(seriesId) {
    return seriesItems[seriesId][0]
}

export function Flavor({Flavor, seriesId, Solo, Double, Triple, B1T1, inStock}) {
    
    const {selectedSize,
            setSelectedSize,
            setSelectedPrice,
            selectedFlavor,
            setSelectedFlavor } = useSizeFilter()
    const series = lookUpSeries(seriesId)
    const {selectedSeries} = useSeriesFilter()

    const handleSelectedItem = (Size, Price) =>{
        setSelectedSize(Size)
        setSelectedPrice(Price)
    }
    
    if (selectedSeries != series){
        return null
    }
    

    return (
        <>
            <Card
                className={`h-100 px-2 mb-1 ${selectedFlavor===Flavor ? "selected" : ""}`}
                onClick={()=>{setSelectedFlavor(Flavor)}}
            >
                <Card.Title className="fs-6 " style={{ overflow: "hidden" }}>
                    <div style={inStock ? { display: "inline-block", width: "1.5rem" } : { display: "inline-block", width: "1.5rem", color: "red" }}>
                        {inStock}
                    </div>
                    <span>{Flavor}</span>
                </Card.Title>
                <div className="series-item" >
                    {series}
                </div>
                <Card.Body className="fs-8 d-flex">
                    {Solo === null ? null :
                        <div className={`sizes-container ${selectedSize === "Solo" ? "selected-size" : ""}`}
                            onClick={()=>handleSelectedItem("Solo", Solo)}>S: {Solo} </div>}

                    <div className={`sizes-container ${selectedSize === "Double" ? "selected-size" : ""}`}
                        onClick={()=>handleSelectedItem("Double", Double)}>D: {Double}</div>

                    <div className={`sizes-container ${selectedSize === "Triple" ? "selected-size" : ""}`}
                        onClick={()=>handleSelectedItem("Triple", Triple)}>T: {Triple}</div>

                    {B1T1 === null ? null :
                        <div className={`sizes-container ${selectedSize === "B1T1" ? "selected-size" : ""}`}
                            onClick={()=>handleSelectedItem("B1T1", B1T1)}>BT: {B1T1}</div>}
                </Card.Body>
            </Card>
        </>);

}

Flavor.propTypes = {
    Flavor: PropTypes.string.isRequired,
    seriesId: PropTypes.number.isRequired,
    Solo: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
    Double: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
    Triple: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
    B1T1: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
    inStock: PropTypes.oneOfType([PropTypes.number, PropTypes.object])
}
