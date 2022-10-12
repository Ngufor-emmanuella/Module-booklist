/* eslint-disable max-classes-per-file */
const submitBtn = document.querySelector('#add');
const showmessage = document.querySelector('.errormsg');

class Book {
  constructor(title, author, id) {
    this.title = title;
    this.author = author;
    this.id = id;
  }
}

// Add Data to local storage
class store {
  static getBooks() {
    let books;
    if (localStorage.getItem('books') === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('books'));
    }
    return books;
  }

  static addBook(book) {
    const books = store.getBooks();
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
  }

  static removeBook(id) {
    const books = store.getBooks();
    books.forEach((book, index) => {
      if (book.id.toString() === id) {
        books.splice(index, 1);
      }
    });
    localStorage.setItem('books', JSON.stringify(books));
  }
}

// Add Elements to UI
class UI {
  static displayBooks() {
    const books = store.getBooks();
    books.forEach((book) => UI.addBookToList(book));
  }

  static addBookToList(book) {
    const listSection = document.querySelector('#section');
    listSection.style.border = '2px solid black';
    const item = document.createElement('ul');
    item.classList.add('ulList');
    item.innerHTML = `
<li>${book.title} <strong>by</strong> ${book.author}</li>
<li style='display:none;'>${book.id}</li>
<li><button href="#" class="effacer delete">Remove</button></li>
`;
    listSection.appendChild(item);
  }

  static deleteBook(el) {
    if (el.classList.contains('delete')) {
      el.parentElement.parentElement.remove();
    }
  }

  static clearFields() {
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
  }
};
renderBooks();
addBooks();