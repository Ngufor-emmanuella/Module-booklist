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
}

// Event: Display books
document.addEventListener('DOMContentLoaded', UI.displayBooks);
// Event: Add to book list
submitBtn.addEventListener('click', () => {
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  const id = Math.random();
  if (title === '' || author === '') {
    showmessage.innerHTML = '<h3 style=\'color:red;\' class=\'alert\'>Please fill in all values</h3>';
    setTimeout(() => {
      document.querySelector('.alert').remove();
    }, 3000);
  } else {
  // Instatiate book because book class is not static
    const book = new Book(title, author, id);
    UI.addBookToList(book);
    store.addBook(book);
    UI.clearFields();
  }
});

// Remove from Book List

document.querySelector('#section').addEventListener('click', (e) => {
  UI.deleteBook(e.target);
  store.removeBook(e.target.parentElement.previousElementSibling.textContent);
});
