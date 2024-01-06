export default function Clicker(props) {
    function AlertMe(){
        alert(`Purchased ${props.name}`);
    }
  return (
    <button onClick={AlertMe}>Buy for {props.buttonText}</button>
  )
}
