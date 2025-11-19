export function toggleExample() {
  const expandedExampleElem = document.querySelector(
    "#accordionToggleExample",
  );

  document
    .querySelector("#accordionToggleExampleBtn")
    .addEventListener("click", () => {
      expandedExampleElem.toggle();
    });
}
