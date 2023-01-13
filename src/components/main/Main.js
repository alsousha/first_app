import Books from "../book/Books";
import Counter from "../btns/counter/Counter";
import Login from "../btns/LoginForm/login";
import Comments from "../comments/Comments";
import Todo from "../todo/Todo";

function Main() {
  function getLoginStatus(status) {
    //send referens to State
    console.log("login status of user is" + status);
  }

  return (
    <div className="main">
      <Todo />
      <Comments />
      <Counter />
      <Login status={getLoginStatus} />
      <Books />
    </div>
  );
}
export default Main;
