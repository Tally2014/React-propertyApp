import Clicker from "./Clicker";

export default function Property({name, price, rating}) {
  return (
    <li>
        <h2>{name}</h2>
        <h3>R{price} a night</h3>
        <h4>{rating}⭐️</h4>
        <Clicker name={name} buttonText={price}/>
    </li>
  )
}
