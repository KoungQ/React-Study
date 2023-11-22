import './Card.css';

function Card(props) {
  const classes = 'card ' + props.className;

  return <ul className={classes}>{props.children}</ul>;
}

export default Card;
