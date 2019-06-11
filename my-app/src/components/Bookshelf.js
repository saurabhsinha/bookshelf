import React, {Component} from "react";
import Book from "./Books.js"

export default class Bookshelf extends Component {
    render() {
        return (<div className="bookshelf">
            <h2 className="bookshelf-title">{this.props.title}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {this.props.bookss && this.props.bookss.map(book => <Book {...book}/>)}
                </ol>
            </div>
        </div>)
    }
}