import Data from "../../data/books.json";
import Book from "../book/Book";

function Books() {
  return (
    <div className="container">
      <h2 className="tac mt10">Our books</h2>
      <div className="books_wrapper d-flex jcsb wrap mt5 mb5">
        {Data.map((book) => {
          return <Book bookItem={book} color="green" />;
        })}
      </div>
    </div>
  );
}
export default Books;
