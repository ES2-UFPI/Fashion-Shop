import './styles.css';

function Button(props) {
  return (
    <button className='button-generic'>{props.children}</button>
  );
}

export default Button;
