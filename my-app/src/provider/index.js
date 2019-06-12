import React, {Component} from "react";
export const MyContext = React.createContext();
export default class Index extends Component {
    constructor() {
        super();
        this.state= {
            books: [],
            currentlyReading:[],
            wantToRead:[],
            read:[],
            addBooks : books => {
                const currentlyReading = books.filter(book => book.shelf==="currentlyReading");
                const read = books.filter(book => book.shelf==="read");
                const wantToRead = books.filter(book => book.shelf==="wantToRead");
                this.setState({books,currentlyReading,wantToRead,read});
            },
            moveBook: (book,shelf, newShelfs) => {
                const newBooks = this.state.books.map(allBooks => {
                    const foundId = newShelfs.find(
                        bookId => bookId == allBooks.id
                    );
                    if(foundId) {
                        allBooks.shelf = newShelfs;
                    }
                    return allBooks;
                });
                this.state.addBooks(newBooks)
            }
        }
    }
    render() {
        return (<MyContext.Provider value={{...this.state}}>
            {this.props.children}
        </MyContext.Provider>)
    }
}
