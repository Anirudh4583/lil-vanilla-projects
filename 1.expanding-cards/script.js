const varPanels = document.querySelectorAll('.panel');

varPanels.forEach((panel) => {
  panel.addEventListener('click', () => {
    console.log('clicked');
    removeActiveClass();
    panel.classList.add('active');
    console.log('added active class');
  });
});

function removeActiveClass() {
  varPanels.forEach((panel) => {
    console.log('removed all active classes');
    panel.classList.remove('active');
  });
}
