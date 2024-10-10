import { Navigation } from "../Navigation/Navigation"
import { Filters } from "./Filters/Filters"
import { Truck } from "./Truck/Truck"
import { Location } from "./Location/Location"

export const Catalog = () => {
    return <>
        <Navigation/>
        <Location/>
        <Filters/>
        <Truck/>
</>
}