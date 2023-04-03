function stories(elementId) {
  const element = document.getElementById(elementId);

  if (element.style.display === 'none') {
    // элемент скрыт, показать его
    element.style.display = 'flex';
    setTimeout(() => {
  element.style.display = 'none'; // скрыть элемент
}, 15000);
  } else {
    // элемент виден, скрыть его
    element.style.display = 'none';
  }
}
