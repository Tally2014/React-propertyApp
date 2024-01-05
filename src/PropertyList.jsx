import Property from "./Property";
import "./PropertyList.css";

export default function PropertyList({props}) {
  return (
    <ul className="propertyList">
        {
            props.map((i) =>(<Property
                key={i.id}
                name={i.name}
                price={i.price}
                rating={i.rating}
            />))
        }
    </ul>
  )
}
