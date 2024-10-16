export function createElementWithProps(tag, props) {
  const element = document.createElement(tag);
  Object.assign(element, props);
  return element;
}
