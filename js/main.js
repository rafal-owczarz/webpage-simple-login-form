const inputs = document.querySelectorAll('.form__input');

function focusing() {
  let parent = this.parentNode.parentNode;
  parent.classList.add('focus');
}

function bluring() {
  let parent = this.parentNode.parentNode;
  if (this.value == '') {
    parent.classList.remove('focus');
  }
}

inputs.forEach(input => {
  input.addEventListener('focus', focusing);
  input.addEventListener('blur', bluring);
});