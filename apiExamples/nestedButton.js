export function nestedButtonExample() {
  // console.warn('nestedButtonExample');
  const button = document.getElementById('nestedButton');
  // console.warn('button', button);

  // button.addEventListener('mouseover', (event) => {
  //   console.warn('mouseover', event);
  // });

  button.addEventListener('click', (event) => {
    // console.warn('test', event);
    // event.stopImmediatePropagation();
    event.stopPropagation();
    console.log('Button clicked');
  });
}  
