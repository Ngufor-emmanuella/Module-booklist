// Add Data to local storage
export default class store {
  static getBooks = () => {
    let books;
    if (localStorage.getItem('books') === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('books'));
    }
    return books;
  }

  static addBook= (book) => {
    const books = store.getBooks();
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
  }

  static removeBook = (id) => {
    const books = store.getBooks();
    books.forEach((book, index) => {
      if (book.id.toString() === id) {
        books.splice(index, 1);
      }
    });
    localStorage.setItem('books', JSON.stringify(books));
  }
}