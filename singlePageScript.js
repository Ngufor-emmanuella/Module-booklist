const booklistLink = document.querySelector('#showlistBtn');
const formLink = document.querySelector('#newbookBtn');
const contactinfoLink = document.querySelector('#showcontactBtn');
const booklistSection = document.querySelector('.container');
const formSection = document.querySelector('#form');
const contactinfoSection = document.querySelector('#contact-info');
booklistLink.addEventListener('click', () => {
  booklistSection.style.display = 'flex';
  formSection.style.display = 'none';
  contactinfoSection.style.display = 'none';
  booklistLink.classList.add('active');
  formLink.classList.remove('active');
  contactinfoLink.classList.remove('active');
});
formLink.addEventListener('click', () => {
  booklistSection.style.display = 'none';
  formSection.style.display = 'flex';
  contactinfoSection.style.display = 'none';
  formLink.classList.add('active');
  booklistLink.classList.remove('active');
  contactinfoLink.classList.remove('active');
});
contactinfoLink.addEventListener('click', () => {
  booklistSection.style.display = 'none';
  formSection.style.display = 'none';
  contactinfoSection.style.display = 'block';
  contactinfoLink.classList.add('active');
  formLink.classList.remove('active');
  booklistLink.classList.remove('active');
});
