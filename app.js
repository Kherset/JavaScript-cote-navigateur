// function onButtonClick(event) {
//   console.log('button click')
//   event.preventDefault();
//   event.stopPropagation();
// }

// document.querySelectorAll('button, a').forEach(button => {
// button.addEventListener('click', onButtonClick)
// });

// document.querySelector('div').addEventListener('click', () =>
//   console.log('click div')
// )

// Exercice :

document.querySelectorAll('.spoiler').forEach(spoiler =>
  spoiler.addEventListener('click', e => {
    spoiler.style.backgroundColor = 'white'
  })
);
