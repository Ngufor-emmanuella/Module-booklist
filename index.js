import Book from './modules/Book.js';
import UI from './modules/UI.js';
import store from './modules/store.js';
import setTime from './modules/date.js';
/* eslint-disable no-unused-vars */
setTime();
const submitBtn = document.querySelector('#add');
const showmessage = document.querySelector('.errormsg');
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
