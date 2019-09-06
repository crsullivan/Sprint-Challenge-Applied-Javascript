// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component



// const headerInsert = document.querySelector('header');
const mainHeader = document.querySelector('.header-container');

function Header(day, text, temperature) {

//elements

const header = document.createElement('div');
const date = document.createElement('span');
const h1 = document.createElement('h1');
const temp = document.createElement('span');

//appends

header.appendChild(date);
header.classList.add('header');
date.classList.add('date');
header.textContent = `September 6th, 2019`;

header.appendChild(h1);
h1.textContent = `Lambda Times`;

header.appendChild(temp);
temp.classList.add('temp');
temp.textContent = `98°`

// headerInsert.appendChild(Header());
mainHeader.appendChild(header);

    return header;

}
console.log(Header());