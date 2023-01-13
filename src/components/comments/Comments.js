import { Component } from "react";
import Button from "../btns/btn/Btn";

class Comments extends Component {
  state = {
    comments: [
      {
        text: "10Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, incidunt.",
      },
      {
        text: "20Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, incidunt.",
      },
      {
        text: "30Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, incidunt.",
      },
      {
        text: "40Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, incidunt.",
      },
    ],
    randomComment: "",
  };

  getRandomText = () => {
    let random = Math.floor(Math.random() * this.state.comments.length);

    this.setState(() => ({
      randomComment: this.state.comments[random].text,
    }));
  };
  render() {
    return (
      <section>
        <div className="container">
          <h2 className="tac mt10">Random text</h2>
          <div className="d-flex jcc f-col aic mt1">
            <Button text="Show text" step="1" fun={this.getRandomText} />
            <div>{this.state.randomComment}</div>
          </div>
        </div>
      </section>
    );
  }
}
export default Comments;
