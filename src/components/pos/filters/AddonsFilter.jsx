import addonsItems from '../../../data/addons.json'
import { Card, Row, Col, Form } from 'react-bootstrap'

export function AddonsFilter() {
    const half = Math.ceil(addonsItems.length / 2)
    return (<>

        <Card className='p-2 mb-1'>
            <Row>
                <Col>
                    {addonsItems.slice(0, half).map(addon => {
                        return <Form.Check
                            key={`addons-radio-${addon}`}
                            id={`addons-radio-${addon}`}
                            htmlFor={`addons-radio-${addon}`}
                            name="addons"
                            label={addon}
                            value={addon}
                        />
                    })}
                </Col>
                <Col>
                    {addonsItems.slice(half).map(addon => {
                        return <Form.Check
                            key={`addons-radio-${addon}`}
                            id={`addons-radio-${addon}`}
                            htmlFor={`addons-radio-${addon}`}
                            name="addons"
                            label={addon}
                            value={addon}
                        />
                    })}
                </Col>
            </Row>
        </Card>
    </>)
}