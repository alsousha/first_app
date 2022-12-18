import Book from '../book/Book';
import Data from '../../data/books.json';
import State from '../state/State';
//import books2 from '../../data/books2'

function Main(){
    function tmp(num ){
        //send referens to State
        console.log('In tmp' + num );
    }

    return (
    <div className="main">
            {/* 16.12 */}
            <State age = "35" name="SF" fun = {tmp}></State>




        <div className="container">
            <h2 className='tac mt10'>Our books</h2>

            <div className="books_wrapper d-flex jcsb wrap mt5 mb5">
              
                {Data.map((book) => {
                    return <Book bookItem={book} color="green"/>
                })}
                
            </div>
        </div>
    </div>
    )
}
export default Main;