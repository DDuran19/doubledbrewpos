import { Form, Row, Col, Card } from "react-bootstrap";
import seriesItems from "../../../data/series.json";
import { useSeriesFilter } from "../../../context/SeriesFilterContext";
import { useSizeFilter } from "../../../context/SizeFilterContext";


export function SeriesFilter(){
    const series = Object.values(seriesItems);
    const half = Math.ceil(series.length/2);
    const {selectedSeries, setSelectedSeries, setAvailableSizes} = useSeriesFilter()
    const {setSelectedSize} = useSizeFilter()
    const handleSeriesChange = (seriesItem) => {
        setSelectedSeries(seriesItem[0]);
        setAvailableSizes(seriesItem[1]);
        setSelectedSize("")
    }
  return(<>
  <Card className="p-2 mb-1">
  <Row>
    <Col>
      {series.slice(0, half).map((value, key) => (
        <Form.Check
          type="radio"
          key={key}
          id={`series-radio-${key}`}
          htmlFor={`series-radio-${key}`}
          name="series"
          label={value[0]}
          value={value[0]}
          checked={selectedSeries === value[0]}
          onChange={() => handleSeriesChange(value)}

        />
      ))}
    </Col>
    <Col>
      {series.slice(half).map((value, key) => (
        <Form.Check
          type="radio"
          key={key + half + 1}
          id={`series-radio-${key + half + 1}`}
          htmlFor={`series-radio-${key + half + 1}`}
          name="series"
          label={value[0]}
          value={value[0]}
          checked={selectedSeries === value[0]}
          onChange={() => handleSeriesChange(value)}
        />
      ))}
    </Col>
  </Row>
</Card>
  </>)
}