function shcl(elementId) {
  const element = document.getElementById(elementId);

  if (element.style.display === 'none') {
    // элемент скрыт, показать его
    element.style.display = 'flex';
  } else {
    // элемент виден, скрыть его
    element.style.display = 'none';
  }
}
