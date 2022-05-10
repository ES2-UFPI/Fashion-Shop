import './styles.css';

function Button(props) {
  return (
    <button onClick={props.onClick} className='button-generic'>{props.children}</button>
  );
}

export default Button;
