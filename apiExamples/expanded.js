export function expandedExample() {
  const expandedExampleElem = document.querySelector(
    "#accordionExpandedExample",
  );

  document
    .querySelector("#accordionExpandedExampleBtnTrue")
    .addEventListener("click", () => {
      expandedExampleElem.expanded = true;
    });

  document
    .querySelector("#accordionExpandedExampleBtnFalse")
    .addEventListener("click", () => {
      expandedExampleElem.expanded = false;
    });
}
