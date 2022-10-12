// Add Elements to UI
export default class UI {
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
