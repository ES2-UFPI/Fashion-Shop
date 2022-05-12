import './styles.css';

function Input(props) {
  return (
    <input className='input-generic' onChange={props.onChange} type={props.type} id={props.id} name={props.name} placeholder={props.placeholder} />
  );
}

export default Input;
