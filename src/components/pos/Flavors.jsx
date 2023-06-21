    import milkteaFlavors from "../../../public/data/milkteaFlavors.json"
    import { Col, Row } from "react-bootstrap";
    import { Flavor } from "./flavor";

    export function Flavors(){

        return (<>
            <h3>Flavors</h3>
        
        <Row md={1}>
            <Col className="pb-3" style={{height: "min(80vh,80svh)", overflowY: "scroll"}}>
            {milkteaFlavors.map(flavor => (
                <Col key={flavor.id}>
                    <Flavor {...flavor}
                    />
                </Col>
                ))}
            </Col>
        </Row>
        </>)
    }