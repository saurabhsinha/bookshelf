import React, {Component} from "react";
import Bookshelf from "../components/Bookshelf";
import {getAll } from "../books/booksAPI.js"

export default class Home extends Component {
    async componentDidMount() {
        const books = await getAll();
        console.log(books)
    }
    render() {
        return ( <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <Bookshelf title="currently reading"/>
                <Bookshelf title="want to read"/>
                <Bookshelf title="read"/>
            </div>
            <div className="open-search">
                <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
            </div>
        </div>)
    }
}
