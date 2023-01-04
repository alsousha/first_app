import styles from "./book.module.css";
import { Component } from "react";
//export default function Book(props){} -> тоже самое

export default class Book extends Component {
  render() {
    const { title, author, desc } = this.props.bookItem;
    const logo = require("../../data/img/" + this.props.bookItem.fileName);
    return (
      //{this.props.obj.title}
      <div className="book_inner col3">
        <h3 className="tac">{title}</h3>
        <h5 className="tac">{author}</h5>
        <div className="bookImg">
          <img src={logo} alt="" />
        </div>
        <p className={styles.fromModule}>style from inner css</p>

        <p>{desc}</p>
      </div>
    );
  }
}
// function Book(props){

//     //destructuring. Чтоб не писать props.bookItem, props.color
// const {color, bookItem} = props;
// console.log(color);

//     const logo = require('../../data/img/'+props.bookItem.fileName);
//     return(
// <div className="book_inner col3">
//     <h3 className="tac">{bookItem.title}</h3>
//     <h5 className="tac">{bookItem.author}</h5>
//     <div className="bookImg">
//     <img src={logo} alt="" />

//     </div>
//     <p className={styles.fromModule}>style from inner css</p>

//     <p>{props.bookItem.desc}</p>
// </div>
//     )

// }
//export default Book;
