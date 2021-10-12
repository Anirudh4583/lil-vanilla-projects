const form = document.querySelector('.form');
const btn = document.getElementById('btn');
const em = document.querySelector('.em');
const pass = document.querySelector('.pass');
const emInput = document.forms['form']['emailInput'];
const passInput = document.forms['form']['passInput'];

btn.addEventListener('click', (e) => {
  if (emInput.value === '') {
    e.preventDefault();
    em.classList.add('empty');
    alert('invalid input');
  }
  if (passInput.value === '') {
    e.preventDefault();
    pass.classList.add('empty');
    alert('invalid input');
  }
});

emInput.addEventListener('focus', () => {
  em.classList.remove('empty');
});

passInput.addEventListener('focus', () => {
  pass.classList.remove('empty');
});
