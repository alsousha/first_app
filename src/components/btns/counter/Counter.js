import { Component } from "react";
import Button from "./Button";

class Counter extends Component {
  state = {
    count_start_val: 0,
  };
  changeCount = (step) => {
    this.setState((prevState) => ({
      count_start_val: prevState.count_start_val + step,
    }));
  };

  resetCount = () => {
    this.setState((prevState) => ({
      count_start_val: 0,
    }));
  };
  //need!
  render() {
    const { count_start_val } = this.state;
    return (
      <section>
        <div className="container">
          <h2 className="tac mt10">Counter</h2>
          <div className="d-flex jcc f-col aic mt1">
            <div className="f2">
              <p>{count_start_val}</p>
            </div>
            <div className="d-flex jcc g1">
              <Button text="+" step="1" fun={this.changeCount} />
              <Button text="-" step="-1" fun={this.changeCount} />
              <Button text="Clear" step="0" fun={this.resetCount} />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Counter;
