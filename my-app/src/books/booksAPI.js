var books = require("../books/allbooks")
console.log(books)
export const getAll =()=> {
    return new Promise((resolve, reject) => {
        resolve(books);
    });
}
export const update = (book, shelf) => {
    return new Promise( (resolve, reject) => {
        var booksArray = books.books;
        booksArray = booksArray.map(obj => {
            if (obj.id == book.id) {
                obj.shelf = shelf
            }
            return obj;
        })
        resolve(booksArray)
    })
}
