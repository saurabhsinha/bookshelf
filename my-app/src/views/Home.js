import React, {Component} from "react";
import Bookshelf from "../components/Bookshelf";
import {getAll } from "../books/booksAPI.js"

export default class Home extends Component {
    async componentDidMount() {
        try{
            var books = await getAll()
            this.props.addBooks(books.books)
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
                <Bookshelf title="currently reading" bookss={this.props.currentlyReading} moveBook={this.props.moveBook}/>
                <Bookshelf title="want to read" bookss={this.props.wantToRead} moveBook={this.props.moveBook}/>
                <Bookshelf title="read" bookss={this.props.read} moveBook={this.props.moveBook}/>
            </div>
            <div className="open-search">
                <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
            </div>
        </div>)
    }
}
