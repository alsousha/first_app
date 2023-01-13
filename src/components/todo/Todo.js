import { Component } from "react";
import Button from "../btns/btn/Btn";
import uuid from "react-uuid";
class Todo extends Component {
  state = {
    messageList: [],
    msg: "",
  };

  addTaskToList = () => {
    this.setState((prevState) => ({
      messageList: [...prevState.messageList, prevState.msg],
      msg: "",
    }));
  };

  render() {
    return (
      <section>
        <div className="container">
          <h2 className="tac mt10">Random text</h2>
          <div className="d-flex jcc f-col aic mt1">
            <input
              className="button message"
              type="text"
              value={this.msg}
              placeholder="enter task"
              onChange={(e) => this.setState({ msg: e.target.value })}
            />
            <Button text="Show text" step="1" fun={this.addTaskToList} />

            <ul className="d-flex jcc f-col aic mt1">
              {this.state.messageList.map((el) => (
                <li key={uuid()}>{el}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    );
  }
}
export default Todo;
