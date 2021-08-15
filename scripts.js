//Father Div
const container = document.querySelector('#container');

// create div, append to father div(loop this 256 times)

function turnBlack() {
  console.log(this);
};

window.addEventListener('hover', function(e) {
  console.log(e);
});

for (let i = 1; i <= 256; i++) {
  const content = document.createElement('div');
  content.classList.add('content');
  content.setAttribute('style', 'background-color: lightgrey; height: 55px; width: 55px');
  content.textContent = i.toString();
  //content.setAttribute('onmouseover','turnBlack()');
  content.addEventListener("mouseover",func,false);
  container.appendChild(content);
  content.setAttribute('name', i.toString())
  function func() {
    content.setAttribute("style", "background-color: black;");
  };
};

/*
Basics:
if div is hovered over
turn class i background color black
*/


//Use JS30 tutorial to relearn