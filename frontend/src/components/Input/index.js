import './styles.css';

function Input(props) {
  return (
    <input type={props.type} id={props.id} name={props.name} placeholder={props.placeholder} />
  );
}

export default Input;
