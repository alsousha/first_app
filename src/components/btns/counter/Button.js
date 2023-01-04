import css from "../button.counter.css";
function Button(props) {
  function go() {
    props.fun(Number(props.step));
  }
  return (
    <button className={css.button} onClick={go}>
      {props.text}
    </button>
  );
}

export default Button;
