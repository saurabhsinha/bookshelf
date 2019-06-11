import React, {Component} from "react";
import Bookshelf from "../components/Bookshelf";
import {getAll } from "../books/booksAPI.js"
const books = require("../books/allbooks")
export default class Home extends Component {
    async componentDidMount() {
        try{
            console.log(books)
            var booksArray = books.books
            this.props.addBooks(booksArray)
        } catch (err) {
            console.log(err)
        }
    }
    render() {
        return ( <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <Bookshelf title="currently reading" bookss={this.props.currentlyReading}/>
                <Bookshelf title="want to read" bookss={this.props.wantToRead}/>
                <Bookshelf title="read" bookss={this.props.read}/>
            </div>
            <div className="open-search">
                <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
            </div>
        </div>)
    }
}
