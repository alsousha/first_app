import css from "../button.counter.css";
function Btn(props) {
  function go() {
    props.fun();
  }
  return (
    <button className={css.button} onClick={go}>
      {props.text}
    </button>
  );
}

export default Btn;
