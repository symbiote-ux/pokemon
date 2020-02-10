const giveImage = function(content) {
  const image = content.childNodes[1].childNodes[3].src;
  const element = document.getElementById('01');
  element.innerHTML = `<img src="${image}">`;
  element.onmouseleave = function() {
    element.innerHTML = '';
  };
};
