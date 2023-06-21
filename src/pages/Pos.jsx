import { Col, Row } from "react-bootstrap";
import { Flavors } from "../components/pos/Flavors";
import { Filters } from "../components/pos/Filters";
import { Cart } from "../components/pos/Cart";
import { SeriesFilterProvider } from "../context/SeriesFilterContext.jsx";
import { SizeFilterProvider } from "../context/SizeFilterContext";

export function Pos(){
    return (
    <SeriesFilterProvider>
    <SizeFilterProvider>


    <Row md={3} className="g-3">
        <Col ><Flavors/></Col>
        <Col ><Filters/></Col>
        <Col><Cart/></Col>
    </Row>
    </SizeFilterProvider>
    </SeriesFilterProvider>)
    
}