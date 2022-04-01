import './styles.css';

function Link(props) {
  return (
    <a href={props}>{props.children}</a>
  );
}

export default Link;
