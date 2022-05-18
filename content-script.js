const countWords = () => {
  const textareas = document.querySelectorAll('.geS5n textarea.KHxj8b, .geS5n input.whsOnd');
  let counts = document.querySelectorAll('.geS5n .word-counter');
  if (counts[0]) {
    for (let i = 0; i < textareas.length; i++) {
      counts[i].innerHTML = ` ${textareas[i].value.replace(/\s/g, '').length}文字`;
    }
  } else {
    for (let i = 0; i < textareas.length; i++) {
      const countDisplaySpaces = document.querySelectorAll('.geS5n .G4EHhc');
      const count = document.createElement('span');
      count.className = 'word-counter';
      count.style.color = '#00f';
      count.innerHTML = ` ${textareas[i].value.replace(/\s/g, '').length}文字`;
      countDisplaySpaces[i].appendChild(count);
    }
  }
};

window.addEventListener('load', () => countWords(), false);
window.addEventListener('input', () => countWords());
