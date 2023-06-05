export function expandedExample() {
  const expandedExampleElem = document.querySelector('#auroAccordianExpandedExample');

  document.querySelector('#auroAccordianExpandedExampleBtnTrue').addEventListener('click', () => {
    expandedExampleElem.expanded = true;
  })

  document.querySelector('#auroAccordianExpandedExampleBtnFalse').addEventListener('click', () => {
    expandedExampleElem.expanded = false;
  })
}
