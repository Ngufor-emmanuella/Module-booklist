export const section = document.getElementById('section');

export const addButton = document.getElementById('add');

export const inputTitle = document.getElementById('title');

export const inputAuthor = document.getElementById('author');

export const errorMsg = document.getElementsByClassName('errormsg');

export const form = document.querySelector('form');

export const box = JSON.parse(localStorage.getItem('box')) || [];

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
  export content;
  
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
export removeBooks;

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
export addBooks;
renderBooks();
addBooks();
           
