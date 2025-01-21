export function nestedButtonExample() {
  const button = document.getElementById('nestedButton');

  button.addEventListener('click', (event) => {
    event.stopImmediatePropagation();
    event.stopPropagation();
    console.log('Button clicked');
  });
}  
