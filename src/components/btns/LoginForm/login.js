import { Component } from "react";
class Login extends Component {
  state = {
    login: "abc",
    pass: 123,
    userName: "guest",
    btnText: "login",
    status: true,
  };
  logIn = () => {
    //send to main referens(status)!!!!!
    this.props.status(!this.state.status);
    //short version
    this.setState((prevState) => ({
      userName: prevState.userName === "guest" ? "Alsu" : "guest",
      btnText: prevState.btnText === "logOut" ? "login" : "logOut",
      status: !prevState.status,
    }));
    console.log(this.state);
  };

  //need!
  render() {
    //let text = 'Hello world'

    const { userName, btnText } = this.state; //now we can use {text2} (old -> {this.state.text2})
    return (
      //return jsx
      <section>
        <div className="container">
          <h2 className="tac mt10">Registration form</h2>
          <div className="d-flex jcc g1 mt1">
            <p>Hello, {userName}</p>

            <button onClick={this.logIn}>{btnText}</button>
          </div>
          {/* 
          <form action="" className="login_form">
            <input type="text" name="name" placeholder="Enter login" />
            <input type="password" placeholder="Enter password" />
            <button onClick={this.logIn}>{btnTextLogin}</button>
          </form>
		  */}
        </div>
      </section>
    );
  }
}

export default Login;
