import { Card, Form, Row, Col } from "react-bootstrap";
import sizeItems from "../../../../public/data/sizes.json"
import { useSizeFilter } from "../../../context/SizeFilterContext";
import { useSeriesFilter } from "../../../context/SeriesFilterContext";

export function SizesFilter(){
    const {selectedSize, setSelectedSize} = useSizeFilter()
    const {availableSizes} = useSeriesFilter()
    const half = Math.ceil(sizeItems.length/2)

    return(<>
        <Card className="p-2 mb-1">
            <Row>
                <Col>
                {sizeItems.slice(0, half).map(size => {
                    if (availableSizes[size]===0){return null}
                    return <Form.Check
                    type="radio"
                    key={`sizes-radio-${size}`}
                    id={`sizes-radio-${size}`}
                    htmlFor={`sizes-radio-${size}`}
                    name={"sizes"}
                    label={size}
                    value={size}
                    checked={selectedSize===size}
                    onChange={()=>{setSelectedSize(size)}}
                    />
                })}
                </Col>
                <Col>
                {sizeItems.slice(half).map(size => {
                    if (availableSizes[size]===0){return null}
                    return <Form.Check
                    type="radio"
                    key={`sizes-radio-${size}`}
                    id={`sizes-radio-${size}`}
                    htmlFor={`sizes-radio-${size}`}
                    name={"sizes"}
                    label={size}
                    value={size}
                    checked={selectedSize===size}
                    onChange={()=>{setSelectedSize(size)}}
                    />
                })}
                </Col>
            </Row>
        </Card>
    </>)
}