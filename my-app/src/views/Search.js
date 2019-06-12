import React, {Component} from "react";
import {Link} from "react-router-dom";
import {search} from "../books/booksAPI";
import Book from "../components/Books";

export default class Search extends Component {
    constructor(props) {
        super(props)
        this.state = {
            query : "",
            books: []
        }
    }
    handleChange = async e => {
        try {
            const query = e.target.value;
            this.setState({query})
            if (query.trim()) {
                const searchResult = await search(query)
                this.setState({books: searchResult})
            } else {
                this.setState({books:[]})
            }
        } catch (err) {
            console.log (err)
        }
    }
    render() {
        return ( <div className="search-books">
            <div className="search-books-bar">
                <Link className="close-search" to={"/"}>Close</Link>
                <div className="search-books-input-wrapper">
                    <input type="text" placeholder="Search by title or author" onChange={this.handleChange} value={this.state.query}/>
                </div>
            </div>
            <div className="search-books-results">
                <ol className="books-grid">
                    {this.state.books.length > 0 &&
                        this.state.books.map(book =>{
                            const foundBook = this.props.books.find(
                                searchBook => searchBook.id === book.id
                            );
                            if (foundBook) {
                                book.shelf = foundBook.shelf;
                            } else {
                                book.shelf = "none"
                            }
                            return(<Book key={book.id} {...book} moveBook={this.props.moveBook}/>)
                        })
                    }
                </ol>
            </div>
        </div>)
    }
}
