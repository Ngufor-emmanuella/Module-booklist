// import book from './module/modulebook.js';
import * as dateTime from './module/moduleclock.js';

const section = document.getElementById('section');
const addButton = document.getElementById('add');
const inputTitle = document.getElementById('title');
const inputAuthor = document.getElementById('author');
const errorMsg = document.getElementsByClassName('errormsg');
const form = document.querySelector('form');
const box = JSON.parse(localStorage.getItem('box')) || [];

const date = document.querySelector('.clock');
date.innerHTML = `${dateTime.date} ${dateTime.hour}:${dateTime.min}:${dateTime.sec} ${dateTime.week}`;

// const b = new book(inputTitle.value, inputAuthor.value, Math.random());
const renderBooks = () => {
  let content = '';
  box.forEach((element, index) => {
    content += `<div index=${index}>
    <ul class="list-of-books">
      <li>${element.titleMsg}</li>
      <li>${element.autorMsg}</li>
    </ul>
    <button class="romebtn" type="button" id=${index}>Remove</button>
    <hr>
  </div>`;
  });
  section.innerHTML = content;

  const removeBooks = () => {
    const removebtn = [...document.getElementsByClassName('romebtn')];
    removebtn.forEach((item) => {
      item.addEventListener('click', (elem) => {
        box.splice(elem.target.id, 1);
        localStorage.setItem('box', JSON.stringify(box));
        renderBooks();
      });
    });
  };
  removeBooks();
};

const addBooks = () => {
  addButton.addEventListener('click', () => {
    const titleMsg = inputTitle.value;
    const autorMsg = inputAuthor.value;
    if (titleMsg && autorMsg) {
      const book = {
        titleMsg,
        autorMsg,
      };
      box.push(book);
      localStorage.setItem('box', JSON.stringify(box));
      renderBooks();
      form.reset();
    } else {
      errorMsg.innerHTML = 'input title and author';
    }
  });
};
renderBooks();
addBooks();