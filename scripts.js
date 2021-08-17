//Father Div
const container = document.querySelector('#container');

//input number
let numberOfColumns = prompt("How many columns?");

//set min & max
if (Number(numberOfColumns) > 100 || Number(numberOfColumns) < 0) {
  alert("Please enter a number from 1 to 100");
  numberOfColumns = 0;
};

//computate columns & set them into css
const autos = 'auto '.repeat(numberOfColumns);
const newI = numberOfColumns * numberOfColumns;

container.setAttribute('style', `grid-template-columns: ${autos};`);

//make the divs
for (let i = 1; i <= newI; i++) {
  const content = document.createElement('div');
  content.classList.add('content');
  content.setAttribute('style', 'background-color: lightgrey; height: auto; width: auto');
  //content.textContent = i.toString();
  //content.setAttribute('onmouseover','turnBlack()');
  content.addEventListener("mouseover",func,false);
  container.appendChild(content);
  content.setAttribute('name', i.toString())
  function func() {
    content.setAttribute("style", "background-color: black;");
  };
};