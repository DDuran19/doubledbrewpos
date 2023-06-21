import { Button } from "react-bootstrap";
import { AddonsFilter } from "./filters/AddonsFilter";
import { SeriesFilter } from "./filters/SeriesFilter";
import { SizesFilter } from "./filters/SizesFilter";


export function Filters() {

    return (
        <>
            <h3>Filters</h3>
            <SeriesFilter />
            <SizesFilter />
            <AddonsFilter />
            <div className="d-grid gap-2">
                <Button variant="secondary" size="lg">
                    Reset
                </Button>
                <Button variant="primary" size="lg">
                    Add to Cart
                </Button>
            </div>
        </>
    );
}
