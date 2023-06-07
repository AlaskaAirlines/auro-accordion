export function expandedExample() {
  const expandedExampleElem = document.querySelector('#auroaccordionExpandedExample');

  document.querySelector('#auroaccordionExpandedExampleBtnTrue').addEventListener('click', () => {
    expandedExampleElem.expanded = true;
  })

  document.querySelector('#auroaccordionExpandedExampleBtnFalse').addEventListener('click', () => {
    expandedExampleElem.expanded = false;
  })
}
